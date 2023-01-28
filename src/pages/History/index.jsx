import moment from "moment/moment";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Layout } from "../Layout";
import 'moment/locale/pt-br';
import { CardHistory, DateHistory, IconArrow, IconHistory, ListName, StatusHistory, WrapperCardHistory, WrapperHistory } from "./styles";

export const History = () => {

    const token = localStorage.getItem("token")
    const [groupByMonthYearState, setGroupByMonthYearState] = useState({});

    useEffect(() => {
        api.get("/carts", {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then((response) => {            
            setGroupByMonthYearState(groupByMonthYear(response.data));
        })
    },[])

    const groupByMonthYear = (data) => {
        moment.locale('pt-br');
        let result = {};
        data.forEach(item => {          
          const monthYear = moment(item.created_at).format('MMM YYYY');
          if(!result[monthYear]) {
            result[monthYear] = [];
          }
          result[monthYear].push(item);
        });
        return result;
    }

    const formatDate = (date) => {
        return moment(date).locale('pt-br').format('ddd DD/MM/YYYY');
    }


    return (
        <Layout>
            <WrapperHistory>
            <h1>Histórico de compras</h1>
            {Object.keys(groupByMonthYearState).map((monthYear) => {
                return (
                    <div>
                        <h2>{monthYear}</h2>
                        <WrapperCardHistory>
                            {groupByMonthYearState[monthYear].map((cart) => {
                                return (
                                    <CardHistory>
                                        <ListName>{cart.name}</ListName>
                                        <IconHistory />
                                        <DateHistory>{formatDate(cart.created_at)}</DateHistory>   
                                        <StatusHistory status={cart.status}>{cart.status}</StatusHistory>
                                        <IconArrow />                                     
                                    </CardHistory>
                                )
                            })}
                        </WrapperCardHistory>
                    </div>
                )
            })}
            </WrapperHistory>
        </Layout>
    );
}