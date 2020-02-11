import React from "react";
import TodoList from "../Components/TodoList/TodoList";
import styled from "styled-components";
import style from "../Components/TodoList/TodoList.module.css";

const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

const ListPages = () => (
  <Container>
    <h2 className={style.titleList}>List</h2>
    <TodoList />
  </Container>
);

export default ListPages;
