import React from 'react';
import { Link } from 'react-router-dom';
import './BodyHeader.css';
const BodyHeader = () => {
    return (
        <div className="navBody">
            <ul>
                <li>
                    <Link to="/breakfast">
                        Breakfast
                    </Link>
                </li>
                <li>
                    <Link to="/lunch">
                        Lunch
                    </Link>
                </li>
                <li>
                    <Link to="/dinner">
                        Dinner
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default BodyHeader;