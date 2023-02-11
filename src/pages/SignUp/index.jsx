import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from "../../api/api";
import { ButtonLogin, ButtonLoginImage, CartImageStyled, Form, Loader, Modal, ModalTransition, WrapperBanner, WrapperForm, WrapperPage } from "./styles";

export const SignUp = () => {

    const [changeForm, setChangeForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [messageModal, setMessageModal] = useState("");

    const notify = (message) => toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const handleSignUp = async (event) => {
        setMessageModal("Criando conta...")
        setLoading(true);
        event.preventDefault()
        const form = event.target;
        const data = new FormData(form);
        const user = {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password")
        }

        await api.post("/api/v1/auth/register", user).then(response => {
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                api.defaults.headers.authorization = `Bearer ${response.data.token}`;
            };
            setChangeForm(false);
        }).catch(error => {
            notify("Erro ao criar conta");
        }).finally(() => {
            setLoading(false);
        })

    }

    const handleSignIn = async (event) => {
        setMessageModal("Entrando...")
        event.preventDefault()
        setLoading(true);
        const form = event.target;
        const data = new FormData(form);
        const user = {
            email: data.get("email"),
            password: data.get("password")
        }

        await api.post("/api/v1/auth/authenticate", user).then(response => {
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                api.defaults.headers.authorization = `Bearer ${response.data.token}`;
                navigate("/home");
            }
        }).catch(error => {
            notify("Usuario ou senha incorretos");
        }).finally(() => {
            setLoading(false);
        })
    }
    return (
        <>
            <WrapperPage>
                <WrapperForm>
                    {changeForm ? (
                        <Form onSubmit={handleSignUp}>
                            <h1><span>Shoppingify</span> - crie a sua conta</h1>
                            <h2>Crie sua conta e comece a planejar suas compras de forma eficiente agora mesmo</h2>
                            <label>
                                <input type="text" name="name" placeholder="Nome" />
                            </label>
                            <label>
                                <input type="text" name="email" placeholder="Email" />
                            </label>
                            <label>
                                <input type="password" name="password" placeholder="Senha" />
                            </label>
                            <ButtonLogin type="submit">Criar conta</ButtonLogin>
                            <p onClick={() => setChangeForm(false)}>Já possui uma conta?</p>
                        </Form>
                    ) : (
                        <Form onSubmit={handleSignIn}>
                            <h1><span>Bem-vindo de volta ao Shoppingify 🥙</span></h1>
                            <h2>Faça login para acessar sua lista de compras e planejar suas compras com facilidade</h2>
                            <label>
                                <input type="text" name="email" placeholder="Email" />
                            </label>
                            <label>
                                <input type="password" name="password" placeholder="Senha" />
                            </label>
                            <ButtonLogin type="submit">Entrar</ButtonLogin>
                            <p onClick={() => setChangeForm(true)}>Ainda não possui uma conta ?</p>
                        </Form>
                    )}

                </WrapperForm>
                <WrapperBanner>
                    {changeForm ? (
                        <ButtonLoginImage onClick={() => setChangeForm(false)}>
                            Entrar
                        </ButtonLoginImage>
                    ) : (

                        <ButtonLoginImage onClick={() => setChangeForm(true)}>
                            Cadastrar
                        </ButtonLoginImage>
                    )}

                    <CartImageStyled />
                </WrapperBanner>
                {loading && (
                    <ModalTransition>
                        <Modal>
                            {messageModal}
                            <Loader />
                        </Modal>
                    </ModalTransition>
                )}

            </WrapperPage>
            <ToastContainer />

        </>
    )
}
