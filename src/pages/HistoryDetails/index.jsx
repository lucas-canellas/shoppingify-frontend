import { useEffect, useState, memo } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api/api";
import moment from "moment/moment";
import 'moment/locale/pt-br';
import { DateHistory } from "../History/styles";
import { Layout } from "../Layout";
import { BackIcon } from "../../components/ItemDetails/styles";
import { Back, CategoryTitle, HistoryDetailsTitle, IconHistory2, ItemCart } from "./styles";
import { MyContext } from "../../context/Context";

export const HistoryDetails = memo(() => {

    const { id } = useParams()
    const [cart, setCart] = useState({});
    const [itemsCart, setItemsCart] = useState([]);
    const [groupByCategory, setGroupByCategory] = useState({});

    useEffect(() => {
        api.get(`/carts/${id}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(response => {
            setCart(response.data);
            setItemsCart(response.data.items);
        })
    }, [])

    useEffect(() => {
        if (itemsCart?.length > 0) {
            const groupedItems = itemsCart.reduce((acc, item) => {
                const { category } = item.item;
                if (!acc[category.name]) {
                    acc[category.name] = { title: category.name, items: [] };
                }
                acc[category.name].items.push(item.item);
                acc[category.name].items[acc[category.name].items.length - 1].quantity = item.quantity;
                return acc;
            }, {});

            setGroupByCategory(groupedItems);

        }

    }, [itemsCart])

    const formatDate = (date) => {
        return moment(date).locale('pt-br').format('ddd DD/MM/YYYY');
    }

    return (
        <Layout>
            <Link to="/history">
                <div style={{ display: "flex", alignItems: "center",  cursor: "pointer", marginBottom: "10px" }}>
                    <BackIcon />
                    <Back>back</Back>
                </div>
            </Link>
            <HistoryDetailsTitle>{cart.name}</HistoryDetailsTitle>
            <div style={{display: "flex", alignItems: "center"}}>
                <IconHistory2 />
                <DateHistory>{formatDate(cart.created_at)}</DateHistory>
            </div>

            {Object.keys(groupByCategory).map((key, index) => {
                return (
                    <div key={index}>
                        <CategoryTitle>{groupByCategory[key].title}</CategoryTitle>
                        <div style={{display: "flex", gap: "20px"}}>
                            {groupByCategory[key].items.map((item, index) => {
                                return (
                                    <ItemCart key={index}>
                                        <p>{item.name}</p>
                                        <span><b>{item.quantity}</b> un</span>
                                    </ItemCart>
                                )
                            })}
                        </div>
                    </div>
                )
            })}

        </Layout>
    )
});