import React, { Component }  from 'react';
const ItemLeft = ({ image, content }) => {
    return (
        <div className="row mt-5">
            <div className="col-lg-5 col-md-5">
                <img src={image} className="card-img-top" alt="img" />
            </div>
            <div className="col col-lg-7 col col-md-7">
                <p className="card-text">{content}</p>
            </div>
        </div>
    );
};
export default ItemLeft;