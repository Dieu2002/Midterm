import axios from 'axios';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';
const News = () => {
    const [news, setNews] = useState([])
    const getData = () => {
        axios.get('https://6257ea29e4e0b73142830b72.mockapi.io/News').then(res => {
            setNews(res.data);
        })
    }
    useEffect(() => { getData() }, [])
    return (
        <div>
            {/* <div className='Container'>
                {news.map((newss) => (
                    <div className='content'>
                        <div className='img'>
                            <img src={newss.image} />
                        </div>
                        <div className='text'>
                            <div className='name'>
                                <p>{newss.content}</p>
                            </div>
                        </div>
                        <p>Ngày đăng bài: {newss.date}</p>
                    </div>))
                }
            </div> */}
            <div className=''>    
                <div className="row">
                <div className="col-md-8">
                <div className="pb-3">
                <h1>THẾ GIỚI</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <img className="card-img-top" src={"images/images.jpg"} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Mở cửa ô tô gây tai nạn chết người</h5>
                        <div className="row">
                            <div className="col-6">
                                2022-05-27T11:43:40.840Z  
                            </div>
                            <div className="col-6">
                                L.V.T
                            </div>
                        </div>
                        <h8 className="card-title">Tài xế xe con bất ngờ mở bung cửa xe khiến một người điều khiển xe máy bị ngã ra đường. Đúng lúc đó, chiếc ô tô tải đi từ phía sau trờ tới cán chết người đi xe máy.</h8>
                        </div>
                        </div>
                    
                        { news.map((newss) =>(
                    <div className="col-md-6">
                    <img className="card-img-top" src={"./"+news.image} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">{news.title}</h5>
                        <div className="row">
                            <div className="col-6">
                                {
                                news.date
                                }
                            </div>
                            <div className="col-6">
                                {
                                news.author
                                }
                            </div>
                        </div>
                        <h8 className="card-title">{news.content}</h8>
                        </div>
                    </div>
            
            
                ))};
                
                </div>
                </div>
                <div className="col-md-4">.col-md-4</div>
                    </div>
                    </div>
                </div>
            
    )
}



export default News;