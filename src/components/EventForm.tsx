import React, {FC} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";

const EventForm:FC = () => {
    return (
        <Form>
            <Form.Item
                label="Event description"
                name="description"
                rules={[rules.required()]}
            >
                <Input />
            </Form.Item>
            <Form.Item label="Event date"
                       name="date"
                       rules={[rules.required()]}
            >
                <DatePicker  />
            </Form.Item>
            <Form.Item label="Users"
                       name="date"
                       rules={[rules.required()]}
            >
                <Select
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                />
            </Form.Item>
            <Row justify="end">
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Make
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;