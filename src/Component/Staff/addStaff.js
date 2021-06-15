import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {updateInput,addStaff} from '../../ActionCreater/staffaction'
import FetchStaff from './fetchStaff'
const AddStaff=(props)=> {
    const state=useSelector(state=>state)
    const dispatch=useDispatch()
    const handleSubmit=e=>{
        e.preventDefault();
        var data = new URLSearchParams();
        for(const pair of new FormData(e.target)){
          data.append(pair[0],pair[1])
        }
        dispatch(addStaff(data))
    }
    return (
        <div className="container  ml-0 p-2">
        <form onSubmit={handleSubmit}>

        <label>Staff Name</label>
        <div className="form-group">   
        <input  className="form-control" required name="userName"  value={state.userName} onChange={(e)=>dispatch(updateInput(e))} type="text"></input>
        </div>

        <label>Staff Email</label>
        <div className="form-group">   
        <input  className="form-control" required name="userEmail"  value={state.userEmail} onChange={(e)=>dispatch(updateInput(e))} type="email"></input>
        </div>

        <label>Staff Password</label>
        <div className="form-group">
        <input  className="form-control" required name="userPassword" value={state.userPassword} onChange={(e)=>dispatch(updateInput(e))}  type="password"></input>
        </div>

        <label>Confirm Staff Password</label>
        <div className="form-group">
        <input  className="form-control" required name="userCpassword" value={state.userCpassword} onChange={(e)=>dispatch(updateInput(e))}  type="password"></input>
        </div>

        <label>Staff Status</label>
        <div className="form-group">
        <select  className="form-control" required name="userStatus" value={state.userStatus} onChange={(e)=>dispatch(updateInput(e))}>       
            <option value="Active">Active</option>
            <option value="InActive">InActive</option>
        </select>
        </div>  

        <button type="submit" className="btn btn-primary mr-3">Add</button>
        <br/><br/>

        </form>  

        {state.staff.message?<div className="alert alert-primary">
        {state.staff.message}
        </div>:""}   

        <table className="table table-responsive-sm table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">Staff Name</th>
                <th scope="col">Staff Email</th>
                <th scope="col">Staff Status</th>
                <th scope="col">Date Joined</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
       
        <tbody>
             <FetchStaff parentCallback={props.parentCallback}/>
        </tbody>

        </table>          
    </div>
    )
}
export default AddStaff;