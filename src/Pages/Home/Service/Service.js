import React from 'react';
import { Link } from 'react-router-dom';
import '../Service/Service.css';

const Service = ({service}) => {
    const {id, name, price, description, img} = service
    
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <p className="px-5">{description}</p>
            <Link to={`/booking/${id}`}>
            <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;