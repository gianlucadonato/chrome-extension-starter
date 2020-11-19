import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import './options.scss';

export default function Options() {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    chrome.storage.sync.get(data => {
      setFields(data.options);
    });
  }, []);

  const onFinish = () => {
    chrome.storage.sync.set({ options: fields }, () => {
      console.log('Options saved.');
    });
  };

  return (
    <div className="options">
      <OptionsForm fields={fields} onFinish={onFinish} onFieldsChange={newFields => setFields(newFields)} />
    </div>
  );
}

function OptionsForm({
  fields,
  onFinish,
  onFieldsChange,
}: {
  fields: any;
  onFieldsChange: (data: any) => void;
  onFinish: () => void;
}) {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      fields={fields}
      onFieldsChange={(changedFields, allFields) => onFieldsChange(allFields)}
    >
      <Form.Item name="name" label="Name" required tooltip="This is a required field">
        <Input type="text" placeholder="Name" />
      </Form.Item>

      <Form.Item name="color" label="Color" required tooltip="This is a required field">
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

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}
