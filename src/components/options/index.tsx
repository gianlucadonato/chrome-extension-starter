import React from "react";
import { Form, Input, Button, Select, Checkbox } from "antd";
import "./options.scss";

export default function Options() {
  return (
    <div className="options">
      <Form layout="vertical">
        <Form.Item label="Favourite color" name="color">
          <Select>
            <Select.Option value="red">Red</Select.Option>
            <Select.Option value="green">Green</Select.Option>
            <Select.Option value="blue">Blue</Select.Option>
            <Select.Option value="yellow">Yellow</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="like" valuePropName="checked">
          <Checkbox>I like colors.</Checkbox>
        </Form.Item>

        <Form.Item label="Field" required tooltip="This is a required field">
          <Input placeholder="Input placeholder" />
        </Form.Item>

        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
