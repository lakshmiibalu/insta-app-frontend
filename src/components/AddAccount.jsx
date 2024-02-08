import React, { useState } from 'react'
import InstaNav from './InstaNav'
import axios from 'axios'

const AddAccount = () => {
    const [input,setInput] = new useState(
        {
            
            "name": "",
            "username": "",
            "password": "",
            "profilepic": "",
            "caption": ""
            
        }
    )
    const inputHandler = (event)=>{
        setInput(
            {...input,[event.target.name]:event.target.value}
        )
    }
    const readValues = ()=>{
        console.log(input)

        axios.post("http://localhost:3003/api/insta/add",input).then(

            (response)=>{
                console.log(response.data)

                if (response.data.status == "success") {

                    alert("Successfully added")
                    setInput({
                        "name": "",
                        "username": "",
                        "password": "",
                        "profilepic": "",
                        "caption": ""
                    })
                    
                } else {
                    alert("Something went wrong")
                }
            }
        )
    }
  return (
    <div>
        
        <InstaNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">User Name</label>
                        <input type="text" className="form-control" name="username" value={input.username} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={input.password} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Profile Picture</label>
                        <input type="text" className="form-control" name="profilepic" value={input.profilepic} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Caption</label>
                        <input type="text" className="form-control" name="caption" value={input.caption} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-info" onClick={readValues}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddAccount