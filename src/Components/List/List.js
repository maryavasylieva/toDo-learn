import React from 'react';
import 'antd/dist/antd.css';
import { List, Icon, Select, Modal, notification } from 'antd';
import style from '../TodoList/TodoList.module.css';
import { useSelector, useDispatch } from 'react-redux';
// import * as todoActions from '../../Redux/todo/todoActions';
import { deleteTodo, editTodo } from '../../Redux/todo/todoOperations';

const icons = ['delete', 'edit', 'like-o'];
const { Option, OptGroup } = Select;
const { confirm } = Modal;

const Lists = ({ handleEditForm }) => {
  const tasks = useSelector(state => state.todo.tasks);
  const dispatch = useDispatch();

  function showDeleteConfirm(id) {
    confirm({
      title: 'Are you sure delete this task?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        dispatch(deleteTodo(id));
        openNotification();
      },
    });
  }

  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'Task has been successfully deleted!',
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
    });
  };

  const deleteFunc = id => {
    showDeleteConfirm(id);
  };

  const editFunc = id => {
    const task = tasks.find(el => el._id === id);
    handleEditForm(task);
  };

  const likeFunc = id => console.log('likeId', id);

  const handlePriorityChange = priority => {
    console.log('priority:', priority);
    dispatch(editTodo(priority));
  };

  const typeListener = (type, id) => {
    switch (type) {
      case 'edit':
        return editFunc(id);

      case 'delete':
        return deleteFunc(id);

      case 'like-o':
        return likeFunc(id);

      default:
        return () => null;
    }
  };

  const renderIcons = id => {
    return icons.map(icon => (
      <IconText
        onClick={() => typeListener(icon, id)}
        id={tasks._id}
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
        pageSize: 3,
      }}
      dataSource={tasks}
      renderItem={task => (
        <>
          <List.Item
            key={task.title}
            actions={renderIcons(task._id)}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta title={task.title} description={task.description} />
            {task.content}
          </List.Item>
          <List.Item>
            <label>
              Priority:
              <Select
                name="priority"
                defaultValue={task.priority}
                onChange={priority =>
                  handlePriorityChange({ priority, id: task._id })
                }
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
