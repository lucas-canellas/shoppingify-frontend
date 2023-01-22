import React, { useState, useEffect, useContext } from 'react';
import { api } from '../../api/api';
import { Form, Input, TextArea } from './styles';
import CreatableSelect from 'react-select/creatable';
import { Button } from '../Button';
import { MyContext } from '../Context';


export const AddItem = () => {
    const [categories, setCategories] = useState([]);
    const { items, setItems } = useContext(MyContext);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        api.get('/categories').then(response => {
            setCategories(response.data);
        })
    },[])

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const item = {
            name: formData.get('name'),
            note: formData.get('note'),
            image: formData.get('image'),
            category: {
                id: selectedOption.value
            }
        }
        console.log(event.target);
        api.post('/items', item).then(response => {
            setItems([...items, response.data]);
        }).catch(error => {
            alert(error.response.data.userMessage);
        })
    };

    const createCategory = (name) => {
        const category = {
            name: name
        }
        api.post('/categories', category).then(response => {
            setCategories([...categories, response.data]);
        }).catch(error => {
            alert(error.response.data.userMessage);
        })
    }

    const categoryOptions = categories.map(category => ({
        value: category.id,
        label: category.name        
    }));

    const customStyles = {
        container: (base, state) => ({
          ...base,
          width: '100%',
          background: '#fafafe',
          border: state.isFocused ? '2px solid #F9A109' : '2px solid #BDBDBD',
          boxSizing: 'border-box',
          borderRadius: '12px',
          marginBottom: '20px',   
          padding: '8.5px 0',
                 
        }),
        input: (base) => ({
            ...base,
            background: "bottom",
            padding: "0",
        }),
        control: (base, state) => ({
            ...base,
            background: "bottom",
            borderColor: state.isFocused ? "#fafafe" : "#fafafe",
            boxShadow: "#fafafe",
            "&:hover": {
                borderColor: "#fafafe"
            }
        })
      };

    return (
        <>
            <Form onSubmit={onSubmit}>
                <h1>Adicionar um novo item</h1>
                <label htmlFor="name">Nome</label>
                <Input autoComplete='false' type="text" name="name" />
                <label htmlFor="note">Anotação(Opcional)</label>
                <TextArea type="text" name="note" />
                <label htmlFor="image">Imagem(Opcional)</label>
                <Input autoComplete='false' type="text" name="image" />
                <label htmlFor="category">Categoria</label>
                <CreatableSelect styles={customStyles} isClearable options={categoryOptions} onChange={handleChange} onCreateOption={createCategory} />
                <div style={{textAlign: "center", marginTop: "auto", marginBottom: "35px"}}>
                    <Button transparent={true}>
                        Cancelar
                    </Button>
                    <Button type="submit" color="#F9A109" transparent={false}>
                        Cadastrar
                    </Button>
                </div>
                
            </Form>
        </>
    )
}