import React from 'react';

import { Link } from "react-router-dom";
import './index.scss'

const CharacterCard = (props) => {
    const { data } = props;

    const { id, name, thumbnail } = data;

    return (
        <div className="characterCard">
            <Link to={"/detail/" + id}>
                <figure className="imgWrapper ">
                    <img src={thumbnail.path + "/portrait_xlarge.jpg"} alt='' />
                </figure>
                <div className="cardBody">
                    {name}
                </div>


            </Link>
        </div>

    );
};
export default CharacterCard;