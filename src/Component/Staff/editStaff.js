import React,{useState} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'
import {updateStaff} from '../../ActionCreater/staffaction'
const EditStaff=(props)=>{
    const[userInput,setuserInput]=useState(props.userChoice)
    const dispatch = useDispatch()
    const state=useSelector(state=>state)
    const handleSubmit=e=>{
        e.preventDefault()
        var data = new URLSearchParams();
        for(const pair of new FormData(e.target)){
          data.append(pair[0],pair[1])
        }
        dispatch(updateStaff(data))
    }
    const updateEditInput=e=>{
        setuserInput({...userInput,[e.target.name]:e.target.value})
    }
    return (
        <div className="container  ml-0 p-2">
        <form onSubmit={handleSubmit}>

        <div className="form-group">
            <input  className="form-control" type="hidden" name="_id" onChange={updateEditInput} value={userInput._id}></input>
        </div>

        <label>Staff Name</label>
        <div className="form-group">   
        <input  className="form-control" name="username"  value={userInput.username} onChange={updateEditInput} type="text"></input>
        </div>

        <label>Staff Email</label>
        <div className="form-group">   
        <input  className="form-control" name="email"  value={userInput.email} onChange={updateEditInput} type="email"></input>
        </div>
        <label>Staff Status</label>
        <div className="form-group">
        <select  className="form-control" name="status" value={userInput.status} onChange={updateEditInput}>       
            <option value="Active">Active</option>
            <option value="InActive">InActive</option>
        </select>
        </div>  

        <label>Date Joined</label>
        <div className="form-group">

        <input  className="form-control" name="date_joined"  value={moment(new Date(userInput.date_joined)).format('YYYY-MM-DD')} onChange={updateEditInput} type="date" readOnly></input>
       
        </div>

        <button type="submit" className="btn btn-primary mr-3">Update</button>
        <br/><br/>

        </form>  

        {state.staff.message?<div className="alert alert-primary">
            {state.staff.message}
            </div>:""}

        </div>
    )
}
export default EditStaff



