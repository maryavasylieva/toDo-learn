import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

class EditForm extends Component {
  state = {
    title: this.props.title,
    description: this.props.description,
    content: this.props.content,
    formLayout: 'horizontal',
  };

  handleChange = e =>
    this.setState(
      { [e.target.name]: e.target.value },
      { formLayout: 'horizontal' }
    );

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleEditTask(this.props.id, { ...this.state });
  };

  render() {
    const { title, description, content, formLayout } = this.state;
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
        <Form layout={formLayout} handleSubmit={this.handleSubmit}>
          <Form.Item label='Title' {...formItemLayout}>
            <Input
              placeholder='input placeholder'
              onChange={this.handleChange}
            />
            {title}
          </Form.Item>
          <Form.Item label='Description' {...formItemLayout}>
            <Input
              placeholder='input placeholder'
              onChange={this.handleChange}
            />
            {description}
          </Form.Item>
          <Form.Item label='Content' {...formItemLayout}>
            <Input
              placeholder='input placeholder'
              onChange={this.handleChange}
            />
            {content}
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type='primary'>Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default EditForm;
