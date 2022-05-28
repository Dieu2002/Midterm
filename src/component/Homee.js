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
            <div className='Container'>
                {news.map((newss) => (
                    <div className='content'>
                        <div className='p-img'>
                            <img src={newss.image} with={200} height={200} />
                        </div>
                        <div className='text'>
                            <div className='p-name'>
                                <p>{newss.content}</p>
                            </div>
                        </div>
                        <p>Ngày đăng bài: {newss.date}</p>
                    </div>))
                }
            </div>
        </div>
    )
}



export default News;