import { Form, InputGroup, Button } from 'react-bootstrap';
import './Body.css';
import Events from './Events';
import useAuth from '../../../Hooks/useAuth';

const Body = () => {
    const { events } = useAuth();
    return (
        <>
            <h2>I Grow By Helping People In Need.</h2>
            <div className='searchbox'>
                <InputGroup className="my-3">
                    <Form.Control
                        placeholder="Search..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            </div>
            <div className='eventGrid ms-5 mt-5'>
                {
                    events.map(event => <Events key={event._id} event={event}></Events>)
                }
            </div>
        </>
    );
};

export default Body;

