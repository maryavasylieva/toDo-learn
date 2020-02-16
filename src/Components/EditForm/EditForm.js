import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { editTodo } from '../../Redux/todo/todoOperations';

const EditFormComponent = Form.create({ name: 'edit_form' })(
  class extends Component {
    state = {
      title: this.props.task.title,
      description: this.props.task.description,
      content: this.props.task.content,
      formLayout: 'horizontal',
    };

    render() {
      const { title, description, content, formLayout } = this.state;
      const { onChange, onSubmit, onClick } = this.props;
      console.log(this.props);
      const { getFieldDecorator } = this.props.form;
      const formItemLayout =
        formLayout === 'horizontal'
          ? {
              labelCol: { span: 4 },
              wrapperCol: { span: 14 },
            }
          : null;

      const buttonItemLayout =
        formLayout === 'horizontal'
          ? {
              wrapperCol: { span: 14, offset: 4 },
            }
          : null;
      return (
        <div>
          <Form layout={formLayout} onSubmit={onSubmit}>
            <Form.Item label="Title" {...formItemLayout}>
              {getFieldDecorator('title', {
                initialValue: title,
              })(
                <Input
                  name="title"
                  placeholder="input placeholder"
                  onChange={onChange}
                />,
              )}
            </Form.Item>
            <Form.Item label="Description" {...formItemLayout}>
              {getFieldDecorator('description', {
                initialValue: description,
              })(
                <Input
                  name="description"
                  placeholder="input placeholder"
                  onChange={onChange}
                />,
              )}
            </Form.Item>
            <Form.Item label="Content" {...formItemLayout}>
              {getFieldDecorator('content', {
                initialValue: content,
              })(
                <Input
                  name="content"
                  placeholder="input placeholder"
                  onChange={onChange}
                />,
              )}
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

            <Form.Item {...buttonItemLayout}>
              <Button type="primary" htmlType="submit" onClick={onClick}>
                Close
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
  },
);
class EditForm extends Component {
  state = {
    title: this.props.task.title,
    description: this.props.task.description,
    content: this.props.task.content,
  };

  handleChange = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onUpdate({ id: this.props.task.id, ...this.state });
    this.props.handleCloseEdit();
  };

  render() {
    const { handleCloseEdit } = this.props;

    return (
      <EditFormComponent
        task={this.props.task}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onClick={handleCloseEdit}
      />
    );
  }
}

const mDTP = {
  onUpdate: editTodo,
};

export default connect(null, mDTP)(EditForm);
