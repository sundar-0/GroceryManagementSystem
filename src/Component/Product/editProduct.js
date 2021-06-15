import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import moment from 'moment'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {updateProduct,fetchCatList} from '../../ActionCreater/productaction'
const EditProduct=(props)=> {
    var catOptions=[]
    const[userInput,setuserInput]=useState(props.userChoice)
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const handleSubmit=e=>{
        e.preventDefault()
        var data = new URLSearchParams();
        for(const pair of new FormData(e.target)){
          data.append(pair[0],pair[1])
        }
        dispatch(updateProduct(data))
    }
    const handleEditInput=e=>{
        setuserInput({...userInput,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        dispatch(fetchCatList());
     },[dispatch]
     )
     if(state.product.catList!==undefined){
        catOptions=state.product.catList.map((item,i)=>{
            return <option key={i} value={item['_id']}>{item['categoryname']}</option>
        })
    }
    return (
        <div className="container ml-0">
            <form onSubmit={handleSubmit}>
            <div className="form-group">
            <input  className="form-control" type="hidden" name="_id" onChange={handleEditInput} value={userInput._id}></input>
            </div>
            <label>Product Name</label>
            <div className="form-group">
           
            <input  className="form-control" type="text" name="productname" onChange={handleEditInput} value={userInput.productname}></input>
            </div>
            <label>Date of MFG</label>
            <div className="form-group">   
              
            <input  className="form-control" name="dateofmfg" onChange={handleEditInput} type="date" value={moment(new Date(userInput.dateofmfg)).format('YYYY-MM-DD')}></input>
            </div>
            <label>Date of Expiry</label>
    
            <div className="form-group">
            <input  className="form-control" name="dateofexpiry" onChange={handleEditInput} type="date" value={moment(new Date(userInput.dateofexpiry)).format('YYYY-MM-DD')}></input>
            </div>
            <label>Category</label>
            <div className="form-group">   
            <select  className="form-control" name="category" value={userInput.category['_id']} onChange={handleEditInput}>       
             {catOptions}
             </select>
            </div>
            <label>Product Status</label>
            <div className="form-group">   
            <select  className="form-control" name="productstatus" defaultValue={userInput.productstatus} onChange={handleEditInput}>       
            <option value="Active">Active</option>
            <option value="InActive">InActive</option>
             </select>
            </div>
            <input type="submit" className="btn btn-primary" value="update"/>
            </form>
            {state.product.message?<div className="alert alert-primary">
            {state.product.message}
            </div>:""}
        </div>
    )
}
export default EditProduct;
