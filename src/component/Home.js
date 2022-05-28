import React, { Component } from 'react';
import { Route } from "react-router-dom";


function cards(product) {
    return products.map((product) => (
        <div class="col-md-4 card-columns d-flex justify-content-center">
            <div className="card text-center" style={{ width: "250px" }}>
                <img className="card-img-top" style={{ height: "350px", width: "230px" }} src={product.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.code}</p>
                    <p className="card-text price">
                        {product.price} vnđ&nbsp;

                    </p>
                    <a href={"/detail/" + product.id} className="btn btn-warning">
                        Đặt mua
                    </a>
                </div>
            </div>
        </div>
    ));
}
class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h2>SHOP THỜI TRANG</h2>
                    <hr />
                    <div class="name">{cards()}</div>
                </div>
            </div>
        );
    }
}

export default Home;
