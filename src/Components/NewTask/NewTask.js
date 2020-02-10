import React, { Component } from "react";
import "antd/dist/antd.css";
import { Button, Modal, Form, Input, Select } from "antd";
import {
  addTaskSuccess,
  modalNewTaskOpen,
  modalNewTaskClose
} from "../../Redux/todo/todoActions";
import { connect } from "react-redux";
// import style from "../TodoList/TodoList.module.css";
import styled from "styled-components";

const AddBTN = styled(Button)`
  background-color: rgb(80, 56, 138);
  border: none;
  &:hover {
    background-color: rgb(158, 134, 214);
  }
`;

const { Option, OptGroup } = Select;

export const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends Component {
    state = {
      priority: "low"
    };
    // onChange = e => {
    //   const { name, value } = e.target;

    //   this.setState({ [name]: value });
    // };
    onChange = value => {
      console.log("radio checked", value);
      this.setState({
        value: value
      });
    };
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const { priority } = this.state;
      return (
        <Modal
          visible={visible}
          title="Create a new task"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Title">
              {getFieldDecorator("title", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title of your task!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Content">
              {getFieldDecorator("content")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator("priority", {
                initialValue: priority
              })(
                <Select name="priority" onChange={this.onChange}>
                  <OptGroup label="Priority">
                    <Option value="Low">Low</Option>
                    <Option value="Medium">Medium</Option>
                    <Option value="High">High</Option>
                  </OptGroup>
                </Select>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class NewTask extends Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.props.addTask(values);
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <AddBTN type="primary" onClick={this.showModal}>
          Add Task
        </AddBTN>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

const mDTP = dispatch => ({
  addTask: task => dispatch(addTaskSuccess(task))
});

export default connect(null, mDTP)(NewTask);
// export default NewTask;
