import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useAction} from "../hooks/useAction";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Event:FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {fetchGuests} =useAction()
    const {guest} = useTypedSelector(state => state.event)
    useEffect(() => {
        fetchGuests()
    },[])

    return (
        <div>
            <EventCalendar events={[]}/>
            <Row justify='center'>
                <Button  onClick={() => setModalVisible(true)}>Add event</Button>
            </Row>
            <Modal
                title="Add event"
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm
                    guests={guest}
                />
            </Modal>
        </div>
    );
};

export default Event;