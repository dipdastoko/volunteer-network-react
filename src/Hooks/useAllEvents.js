import { useEffect, useState } from "react";

const useAllEvents = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://blooming-dawn-19951.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, []);
    return events;
}
export default useAllEvents;