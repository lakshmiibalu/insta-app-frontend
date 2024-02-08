import React, { useEffect, useState } from 'react'
import InstaNav from './InstaNav'
import axios from 'axios'


const ViewAccounts = () => {
    const [data,setData] = new useState([])
    const getData = ()=>{
        axios.get("http://localhost:3003/api/insta/view").then(
            (response)=>setData(response.data)
        )
    }
    useEffect(()=>{getData()},[])
  return (
    <div>

        <InstaNav/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                       
                       {
                            data.map(
                                (value,index)=>{
                                    return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                    <div class="card" >
                                    <img 
                                    height={"300 px"}
                                    src={value.profilepic} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title"> {value.name}</h5>
                                        <p class="card-text">{value.caption}</p>
                                        <a href="#" class="btn btn-primary">Follow</a>
                                    </div>
                                    </div>
                                    </div>
                                }
                            )
                       }

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAccounts