import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import  {Dayjs} from 'dayjs';
import {formatDate} from "../utils/date";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface EventFormProps{
    guests: IUser[]
    submit: (event: IEvent) => void,
}

const EventForm:FC<EventFormProps> = (props) => {
    const [event,setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
    } as IEvent);

    const selectDate = (date: Dayjs | null) => {
        if (date) {
            setEvent({...event, date: formatDate(date.toDate())})
        }
    }

    const {user} = useTypedSelector(state => state.auth)

    const submitForm = () => {
        props.submit({...event, author: user.username})
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Event description"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    onChange={e => setEvent({...event, description: e.target.value})}
                    value={event.description}
                />
            </Form.Item>
            <Form.Item label="Event date"
                       name="date"
                       rules={[rules.required()]}
            >
                <DatePicker
                    onChange={(date) => selectDate(date)}
                />
            </Form.Item>
            <Form.Item label="Users"
                       name="guest"
                       rules={[rules.required()]}
            >
                <Select onChange={(guest: string) => setEvent({...event, guest})}>
                    {props.guests.map(guest =>
                        <option key={guest.username} value={guest.username}>{guest.username}</option>
                    )}
                </Select>
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