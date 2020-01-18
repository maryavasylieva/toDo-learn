import React from 'react';
import { List, Card, Button } from 'antd';
// import Tasks from '../Tasks/Tasks';
import 'antd/dist/antd.css';

const Lists = ({ tasks }) => {
  console.log(tasks);
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={tasks}
      renderItem={tasks => (
        <List.Item>
          <Card title={tasks.title}>{tasks.body}</Card>
          <Button type='primary'>edit</Button>
          <Button type='dashed'>delete</Button>
        </List.Item>
      )}
    />
  );
};

export default Lists;
