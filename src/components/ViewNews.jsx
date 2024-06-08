import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewNews = () => {
    const[data,changeData]=useState(
        {"articles":[]}
    )
    const fetchData=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (















        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row">
                            {data.articles.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <div className="card">
                                        <img src={value.urlToImage} class="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">{value.title}</h5>
                                                <p className="card-text">{value.price}</p>
                                                
                                            </div>
                                    </div>
                                </div>
                                }
                            )}
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewNews