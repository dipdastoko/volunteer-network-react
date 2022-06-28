import { useEffect, useState } from "react";

const useAllEvents = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [events]);
    return events;
}
export default useAllEvents;