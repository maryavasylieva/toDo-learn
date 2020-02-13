import React from 'react';
import 'antd/dist/antd.css';
import { List, Icon, Select, Modal } from 'antd';
import style from '../TodoList/TodoList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as todoActions from '../../Redux/todo/todoActions';

const icons = ['delete', 'edit', 'like-o'];
const { Option, OptGroup } = Select;
const { confirm } = Modal;

const Lists = ({
  // tasks,
  handleEditForm,
  handlePriorityChange
}) => {
  const tasks = useSelector(state => state.todo.tasks);

  const dispatch = useDispatch();

  function showDeleteConfirm(id){
    console.log(id)
    confirm({
      title: 'Are you sure delete this task?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        dispatch(todoActions.deleteTaskSuccess(id))
      }
    });
  }


  const deleteFunc = id => {
    showDeleteConfirm(id);
  };

  const editFunc = id => {
    const task = tasks.find(el=> el.id === id)
    handleEditForm(task)
  };

  const likeFunc = id => console.log("likeId", id);


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
            {/* {task.date} */}
          </List.Item>
          <List.Item>
            <label>
              Priority:
              <Select
                name="priority"
                defaultValue=""
                onChange={handlePriorityChange}
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


export default Lists;
