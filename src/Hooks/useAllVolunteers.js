import { useEffect, useState } from "react";

const useAllVolunteers = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('https://blooming-dawn-19951.herokuapp.com/allvolunteers')
            .then(res => res.json())
            .then(data => setVolunteers(data));
    }, []);
    return volunteers;

}

export default useAllVolunteers;