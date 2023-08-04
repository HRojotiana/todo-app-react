import React, { useState } from "react";
import styled from "styled-components";

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        addTodo(text);
        setText('');
    };

    return (
        <div>
            <H1>Todo list</H1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add todo..."
                />
            </Form>
        </div>
    );
};

const H1 = styled.h1`
margin-left: 45%;
font-family: cursive;`

const Form = styled.form`
width: 100%;
display: flex;
margin-bottom: 5vh;
`;

const Input = styled.input`
width: 35%;
margin-left: 35%;
height: 5vh;
background-color: #ccc;
border: solid 1px #fff;
border-radius: 12px;
text-align: center;
font-family: 'cursive';
font-size: large;
`;

export default TodoForm;