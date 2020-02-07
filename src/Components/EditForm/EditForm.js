import React, { Component } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";

class EditForm extends Component {
  state = {
    title: this.props.title,
    description: this.props.description,
    content: this.props.content,
    formLayout: "horizontal"
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleEditTask(this.props.id, { ...this.state });
  };

  render() {
    const { title, description, content, formLayout } = this.state;
    const { getFieldDecorator } = this.props.form;
    console.log(this.state);
    const formItemLayout =
      formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : null;

    const buttonItemLayout =
      formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : null;
    return (
      <div>
        <Form layout={formLayout} onSubmit={this.handleSubmit}>
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

          <Form.Item label="Title" {...formItemLayout}>
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Description" {...formItemLayout}>
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Content" {...formItemLayout}>
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default EditForm;
