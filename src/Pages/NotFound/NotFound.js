import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{width: "50%"}} src={notfound} alt="" />
            <br />
            <Link to="/"><button className="btn btn-primary">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;