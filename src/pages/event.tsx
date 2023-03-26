import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useAction} from "../hooks/useAction";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";

const Event:FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {fetchGuests, createEvent, fetchEvents} =useAction()
    const {guest,events} = useTypedSelector(state => state.event)
    const {user} = useTypedSelector(state => state.auth)

    
    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
    },[])

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
        createEvent(event)
    }

    return (
        <div>
            <EventCalendar events={events}/>
            <Row justify='center'>
                <Button  onClick={() => setModalVisible(true)}>Add event</Button>
            </Row>
            <Modal
                title="Add event"
                open={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm
                    guests={guest}
                    submit={addNewEvent}
                />
            </Modal>
        </div>
    );
};

export default Event;