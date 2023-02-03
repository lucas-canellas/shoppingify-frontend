import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api"
import { ButtonLogin, ButtonLoginImage, CartImageStyled, Form, WrapperBanner, WrapperForm, WrapperPage } from "./styles"

export const SignUp = () => {

    const [changeForm, setChangeForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
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
                setChangeForm(false);
            };
            
        }).catch(error => {
            alert("Erro ao criar conta");
        })
        
    }

    const handleSignIn = async (event) => {
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
            alert("Usuário ou senha inválidos");
        })
    }
    return (
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
                        <ButtonLogin type="submit">{loading ? "Entrando..." : "Entrar"}</ButtonLogin>
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
        </WrapperPage>
    )
}
