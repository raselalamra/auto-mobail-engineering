import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
            <br />
            <Link to="/"><button className="btn btn-primary">Back to Home</button>
            </Link>
        </div>
    );
};

export default Booking;