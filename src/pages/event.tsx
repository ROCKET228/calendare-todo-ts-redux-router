import React, {FC} from 'react';
import EventCalendar from "../components/EventCalendar";

const Event:FC = () => {
    return (
        <div>
            <EventCalendar events={[]}/>
        </div>
    );
};

export default Event;