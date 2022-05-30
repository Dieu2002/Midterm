import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemLeft from "../Left/ItemLeft";

const Left = () => {
    const [listProduct, setListProduct] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    console.log("re-render");

    useEffect(() => {
        const getData = () => {
            axios
                .get("https://6257ea29e4e0b73142830b72.mockapi.io/News")
                .then((res) => {
                    setListProduct(res.data);
                    setIsLoaded(true);
                });
        };

        if (!isLoaded) getData();
    }, [isLoaded]);
    const Last = () => {
        const result = listProduct.filter(
            (news) => news.type === "trong nuoc"
        );

        return (
            <div className="card mt-5" >
                <img src={result[result.length - 1].image} className="card-img-top" alt="img" />
                <div className="card-body">
                    <p className="card-text">
                        {result[result.length - 1].title}
                    </p>
                    <p>Ngày đăng bài: {result[result.length - 1].date}</p>

                </div>
            </div>
        );
    };
    const Last2 = () => {
        console.log("list products", listProduct);
        const result = listProduct.filter(
            (news) => news.type === "ngoai nuoc"
        );
        return (
            <div className="card mt-5" >
                <img src={result[result.length - 1].image} className="card-img-top" alt="img" />
                <div className="card-body">
                    <p className="card-text">
                        {result[result.length - 1].title}
                    </p>
                    <p>Ngày đăng bài: {result[result.length - 1].date}</p>
                </div>
            </div>
        );
    };

    if (isLoaded)
        return (
            <div className="col-lg-10 col-sm-10 col-md-10">
                <div className="row">

                    <h2 className="new"> Tin trong nước</h2>

                    <div className="col col-lg-6 col-sm-6 col-md-6"> <Last /> </div>
                    <div className="col col-lg-6 col-sm-6 col-md-6">
                        {listProduct
                            .filter((news) => news.type === "trong nuoc")
                            .map((news) => {
                                console.log(news.id);
                                return (
                                    <ItemLeft
                                        image={news.image}
                                        content={news.content}
                                        key={news.id}
                                    />
                                );
                            })}
                    </div>
                </div>
                <br />
                <div className="row">
                    <h2 className="new"> Tin ngoài nước</h2>
                    <div className="col col-lg-6 col-sm-6 col-md-6">
                        <Last2 />
                    </div>
                    <div className="col col-lg-6 col-sm-6 col-md-6">
                        {listProduct
                            .filter((news) => news.type === "ngoai nuoc")
                            .map((news) => {
                                console.log(news.id);
                                return (
                                    <ItemLeft
                                        image={news.image}
                                        content={news.content}
                                        key={news.id}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        );
    else {
        return <div>Loading...</div>;
    }
};
export default Left;
