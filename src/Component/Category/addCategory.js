import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {updateInput,addCategory} from '../../ActionCreater/categoryaction'
import FetchCategory from './fetchCategory'
const AddCategory=(props)=>{
const dispatch = useDispatch()
const state = useSelector(state => state)
const handleSubmit=(e)=>{
    e.preventDefault();
    var data = new URLSearchParams();
    for(const pair of new FormData(e.target)){
      data.append(pair[0],pair[1])
    }
    dispatch(addCategory(data))
}
return (
    <div className="container ml-0">
        <form onSubmit={handleSubmit}>
        <label>Category Name</label>
        <div className="form-group">
        <input  className="form-control" type="text" name="categoryName" value={state.categoryName} onChange={(e)=>dispatch(updateInput(e))}></input>
        </div>
        <label>Status</label>
        <div className="form-group">
        <select  className="form-control" name="categoryStatus" value={state.categoryStatus} onChange={(e)=>dispatch(updateInput(e))}>
         <option value="Active">Active</option>
         <option value="Inactive">InActive</option>
        </select>
        </div>
        <button className="btn btn-primary" type="submit">Add</button>
        </form> <br/>
        {state.category.message?
       <div className="alert alert-primary">
        {state.category.message}
       </div> :""}
        <table className="table table-responsive-sm table-striped table-hover">
        <thead>
        <tr>
        <th scope="col">Category Name</th>
        <th scope="col">Category Status</th>
        <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        <FetchCategory parentCallback={props.parentCallback}/>
        </tbody>
        </table>       
    </div>
)
}
export default AddCategory