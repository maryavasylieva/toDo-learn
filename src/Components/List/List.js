import React from "react";
// import { List, Card, Button } from 'antd';
// import Tasks from '../Tasks/Tasks';
import "antd/dist/antd.css";
import { List, Icon, Select } from "antd";
import style from "../TodoList/TodoList.module.css";

const icons = ["delete", "edit", "like-o"];
const { Option, OptGroup } = Select;

const Lists = ({
  tasks,
  handleDeleteTask,
  handleEditForm,
  handlePriorityChange
}) => {
  const deleteFunc = id => {
    handleDeleteTask(id);
  };
  const editFunc = id => {
    handleEditForm(id);
  };
  const likeFunc = id => console.log("likeId", id);
  // const bla = () => console.log("kek");

  const typeListener = (type, id) => {
    switch (type) {
      case "edit":
        return editFunc(id);

      case "delete":
        return deleteFunc(id);

      case "like-o":
        return likeFunc(id);

      default:
        return () => null;
    }
  };

  const renderIcons = id => {
    return icons.map(icon => (
      <IconText
        onClick={() => typeListener(icon, id)}
        id={tasks.id}
        type={icon}
        key="list-vertical-delete"
      />
    ));
  };

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={tasks}
      renderItem={task => (
        <>
          <List.Item
            key={task.title}
            actions={renderIcons(task.id)}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              // avatar={<Avatar src={i.avatar} />}
              title={task.title}
              description={task.description}
            />
            {task.content}
          </List.Item>
          <List.Item>
            <label>
              Priority:
              <Select
                name="priority"
                value={task.priority}
                onChange={e => handlePriorityChange(task.id)}
              >
                <OptGroup label="Priority">
                  <Option value="Low">Low</Option>
                  <Option value="Medium">Medium</Option>
                  <Option value="High">High</Option>
                </OptGroup>
              </Select>
            </label>
          </List.Item>
        </>
      )}
    />
  );
};

const IconText = ({ onClick, type, text, id }) => {
  return (
    <button onClick={e => onClick(id)} className={style.buttonActions}>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </button>
  );
};

// const Lists = ({ tasks, handleDeleteTask }) => {
//   console.log(tasks);
//   return (
//     <List
//       className={style.list}
//       grid={{ gutter: 16, column: 4 }}
//       dataSource={tasks}
//       renderItem={tasks => (
//         <List.Item>
//           <Card title={tasks.title}>{tasks.description}</Card>
//           <Button className={style.button} type='primary'>
//             edit
//           </Button>
//           <Button
//             className={style.button}
//             type='primary'
//             onClick={() => handleDeleteTask(tasks.id)}
//           >
//             delete
//           </Button>
//         </List.Item>
//       )}
//     />
//   );
// };

export default Lists;
