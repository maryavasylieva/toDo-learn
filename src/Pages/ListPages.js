import React, { useEffect } from 'react';
import TodoList from '../Components/TodoList/TodoList';
import styled from 'styled-components';
import style from '../Components/TodoList/TodoList.module.css';
import { useDispatch } from 'react-redux';
import { getTodos } from '../Redux/todo/todoOperations';

const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

const ListPages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <Container>
      <h2 className={style.titleList}>List</h2>
      <TodoList />
    </Container>
  );
};

export default ListPages;
