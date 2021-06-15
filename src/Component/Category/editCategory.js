import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { fetchCategory,updateCategory} from '../../ActionCreater/categoryaction'
const EditCategory=(props)=> {
    const[userInput,setuserInput]=useState(props.userChoice)
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const handleEditInput=e=>{
        setuserInput({...userInput,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        dispatch(fetchCategory());
     },[dispatch]
     )
     const handleSubmit=e=>{
        e.preventDefault()
        var data = new URLSearchParams();
        for(const pair of new FormData(e.target)){
          data.append(pair[0],pair[1])
        }
        dispatch(updateCategory(data))
    }
    return (
        <div className="container ml-0">
            <form onSubmit={handleSubmit}>
            <div className="form-group">
            <input  className="form-control" type="hidden" name="_id" onChange={handleEditInput} value={userInput._id}></input>
            </div>
            <label>Category Name</label>
            <div className="form-group">
            <input  className="form-control" type="text" name="categoryname" onChange={handleEditInput} value={userInput.categoryname}></input>
            </div>
            <label>Category Status</label>
            <div className="form-group">   
            <select  className="form-control" name="category_status" defaultValue={userInput.category_status} onChange={handleEditInput}>       
            <option value="Active">Active</option>
            <option value="InActive">InActive</option>
             </select>
            </div>
            <input type="submit" className="btn btn-primary" value="update"/>
            </form> 
            <br/>
            {state.category.message?<div className="alert alert-primary">
            {state.category.message}
            </div>:""}
        </div>
    )
}
export default EditCategory;
