import React, { Component } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";

const EditFormComponent = Form.create({ name: "edit_form" })(
  class extends Component {
    state = {
      title: this.props.title,
      description: this.props.description,
      content: this.props.content,
      formLayout: "horizontal"
    };

    render() {
      const {
        title,
        description,
        content,
        formLayout,
        onChange,
        onSubmit
      } = this.state;
      console.log("this.state edit:", this.state);
      const { getFieldDecorator } = this.props.form;
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
          <Form layout={formLayout} onSubmit={onSubmit}>
            <Form.Item label="Title" {...formItemLayout}>
              {getFieldDecorator("title", {
                setFieldsValue: title
              })(<Input placeholder="input placeholder" onChange={onChange} />)}
            </Form.Item>
            <Form.Item label="Description" {...formItemLayout}>
              {getFieldDecorator("description", {
                setFieldsValue: description
              })(<Input placeholder="input placeholder" onChange={onChange} />)}
            </Form.Item>
            <Form.Item label="Content" {...formItemLayout}>
              {getFieldDecorator("content", {
                setFieldsValue: content
              })(<Input placeholder="input placeholder" onChange={onChange} />)}
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
  }
);
class EditForm extends Component {
  state = {
    title: this.props.title,
    description: this.props.description,
    content: this.props.content
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleEditTask(this.props.id, { ...this.state });
  };

  render() {
    return (
      <EditFormComponent
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default EditForm;
