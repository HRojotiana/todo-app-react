import React from 'react';
import styled from 'styled-components';

const TodoList = ({ todos, onDeleteTodo, onUpdateToDo }) => {
    const handleDelete = (id) => {
        onDeleteTodo(id);
    }

    const handleUpdate = (id) => {
        onUpdateToDo(id);
    }
    return (
        <Table>
            <thead>
                <tr>
                    <Th>Todo</Th>
                    <Th>Actions</Th>
                    <Th>Status</Th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo => (
                    <tr key={todo.id}>
                        <Td>{todo.text}</Td>
                        <Td><Button id='updateBtn' onClick={() => handleUpdate(todo.id)}>Update</Button>
                            <Button  onClick={() => handleDelete(todo.id)}>Delete</Button></Td>
                        <Td>{todo.status}</Td>
                    </tr>
                )))}
            </tbody>
        </Table>
    );
};



const Table = styled.table`
border: 1px solid black;
border-collapse: collapse;
width: 80vw;
margin-left: 10vw;
font-family: cursive;
box-shadow: 1px 1px 1px 1px gray;
`;

const Th = styled.th`
border: 1px solid black;
padding-top: 1vh;
padding-bottom: 1vh;
`;

const Td = styled.td`
border: 1px solid black;
border-collapse: collapse;
text-align: center;
padding-top: 1vh;
padding-bottom: 1vh;
`;

const Button = styled.button`
border: none;
border-radius: 5px;
height: 4vh;
background-color: rgb(32, 95, 95);
cursor: pointer;
color: #fff;
margin-right: 2vw;
`;

export default TodoList;