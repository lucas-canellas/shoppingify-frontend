import 'moment/locale/pt-br';
import moment from "moment/moment";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import { MyContext } from "../../context/Context";
import { Layout } from "../Layout";
import { CardHistory, DateHistory, HistoryTitle, IconArrow, IconHistory, ListName, StatusHistory, WrapperCardHistory, WrapperHistory } from "./styles";




export const History = () => {

    const token = localStorage.getItem("token")
    const [groupByMonthYearState, setGroupByMonthYearState] = useState({});
    const [loading, setLoading] = useState(false);
    const { fetchCartsHistory, setFetchCartsHistory, cart, setCart, setRightMenu } = useContext(MyContext);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        if (mediaQuery.matches) {
            setRightMenu("none");
        }
    }, []);

    useEffect(() => {
        if(fetchCartsHistory) {
            api.get("/carts", {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then((response) => {
                setCart(response.data);
                setFetchCartsHistory(false);
            })
        }
        
    }, [fetchCartsHistory, cart])

    useEffect(() => {        
        if(cart.length > 0) {
            setLoading(false);
            const groupByMonthYear = (data) => {
                moment.locale('pt-br');
                let result = {};
                data.forEach(item => {
                    const monthYear = moment(item.created_at).format('MMM YYYY');
                    if (!result[monthYear]) {
                        result[monthYear] = [];
                    }
                    result[monthYear].push(item);
                });
                return result;
            }
            setGroupByMonthYearState(groupByMonthYear(cart));
            setLoading(false);
        }
    }, [cart])

    const formatDate = (date) => {
        return moment(date).locale('pt-br').format('ddd DD/MM/YYYY');
    }


    return (
        <Layout>
            <WrapperHistory>
                <HistoryTitle>Histórico de compras</HistoryTitle>
                <p>{cart.length == 0 && "Não existe nenhuma lista salva"}</p>
                {loading ? "Carregando..." : (
                    Object.keys(groupByMonthYearState).map((monthYear, index) => {
                        return (
                            <div key={index}>
                                <h2>{monthYear}</h2>
                                <WrapperCardHistory>
                                    {groupByMonthYearState[monthYear].map((cart, index) => {
                                        return (
                                            <Link to={`/history/${cart.id}`} key={index}>
                                                <CardHistory>
                                                    <ListName>{cart.name}</ListName>
                                                    <IconHistory />
                                                    <DateHistory>{formatDate(cart.created_at)}</DateHistory>
                                                    <StatusHistory status={cart.status}>{cart.status}</StatusHistory>
                                                    <IconArrow />
                                                </CardHistory>
                                            </Link>
    
                                        )
                                    })}
                                </WrapperCardHistory>
                            </div>
                        )
                    })
                )}
            </WrapperHistory>
        </Layout>
    );
};