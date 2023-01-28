import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { CardItem } from "../../components/CardItem";
import { MyContext } from "../../context/Context";

import { Layout } from "../Layout"
import { Title, WrapperCategories, WrapperItems } from "./styles";

export const Home = () => { 

    const { items, setItems, setItem,  setRightMenu, fetchItems, setFetchItems } = useContext(MyContext);
    const [groupByCategory, setGroupByCategory] = useState({});
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(()=>{        
        console.log(token);
        if(!token){
            navigate('/');
        }
    })

    useEffect(() => {
        if(fetchItems) {
            api.get('/items', {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then(response => {
                setItems(response.data);
                setFetchItems(false)
            })
        }
    },[items, fetchItems])

    useEffect(() => {
        if(items.length > 0) {
            const groupedItems = items.reduce((acc, item) => {
                const { category } = item;
                if (!acc[category.name]) {
                  acc[category.name] = { title: category.name, items: [] };
                }
                acc[category.name].items.push(item);
                return acc;
              }, {});

            setGroupByCategory(groupedItems);            
        }
    },[items])

    const handleClick = (id) => {
        api.get("/items/" + id, {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(response => {
            setItem(response.data);
            setRightMenu("ItemDetails");
        })
    }
    
    
    return (
        <Layout>
            <Title><span>Shoppingify</span> permite que você leve sua <br /> lista de compras aonde quer que você vá</Title>
            <WrapperCategories>
                {Object.keys(groupByCategory).map((title) => {
                    return (
                        <div key={title}>
                            <h2>{title}</h2>
                            <WrapperItems>
                            {groupByCategory[title].items.map(item => (
                                <div onClick={() => handleClick(item.id)}  key={item.id}>
                                    <CardItem name={item.name} />
                                </div>
                            ))}
                            </WrapperItems>
                        </div>
                    )
                })}
                
            </WrapperCategories>
        </Layout>
    );
};