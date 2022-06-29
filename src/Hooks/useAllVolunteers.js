import { useEffect, useState } from "react";

const useAllVolunteers = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allvolunteers')
            .then(res => res.json())
            .then(data => setVolunteers(data));
    }, []);
    return volunteers;

}

export default useAllVolunteers;