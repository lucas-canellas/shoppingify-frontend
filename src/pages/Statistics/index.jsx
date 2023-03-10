import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { api } from "../../api/api"
import { Statistic } from "../../components/Statistic"
import { MyContext } from "../../context/Context"
import { Layout } from "../Layout"

export const Statistics = () => {

    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const { setRightMenu } = useContext(MyContext);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        if (mediaQuery.matches) {
            setRightMenu("none");
        }
    }, []);

    useEffect(() => {
        api.get("/items/top-items", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => setItems(res.data))
    }, [])

    useEffect(() => {
        api.get("/categories/top-categories", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => setCategories(res.data))
    }, [])

    return (
        <Layout>
            <WrapperStatistic>
                {items.length == 0 ? <p>Não há dados para exibir</p> : (
                    <>
                        <Statistic title="Top itens" data={items} color="#F9A109" />
                        <Statistic title="Top categorias" data={categories} color="#56CCF2" />
                    </>
                )}
            </WrapperStatistic>
        </Layout>
    )
}

const WrapperStatistic = styled.div`
    display: flex;
    flex-direction: column;
    gap: 65px;
    padding-right: 15px;
`