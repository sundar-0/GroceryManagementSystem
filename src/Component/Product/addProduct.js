import React,{useEffect} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useSelector,useDispatch} from 'react-redux'
import {updateInput,addProduct, fetchCatList} from '../../ActionCreater/productaction'
import FetchProduct from './fetchProduct'
const AddProduct=(props)=> {
    var catOptions=[];
    const dispatch=useDispatch();
    const state = useSelector(state => state)
    const handleSubmit=e=>{
        e.preventDefault();
        var data = new URLSearchParams();
        for(const pair of new FormData(e.target)){
          data.append(pair[0],pair[1])
        }
        dispatch(addProduct(data))
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
      
            <div className="container  ml-0 p-2">
            <form onSubmit={handleSubmit}>
            <label>Product Name</label>
            <div className="form-group">   
            <input  className="form-control" name="productName"  value={state.productName} onChange={(e)=>dispatch(updateInput(e))} type="text"></input>
            </div>
            <label>Date of MFG</label>
            <div className="form-group">
           
            <input  className="form-control" name="dateMfg" value={state.dateMfg} onChange={(e)=>dispatch(updateInput(e))}  type="date"></input>
            </div>
            <label>Date of Expiry</label>
            <div className="form-group">
            
            <input  className="form-control" name="dateExpiry" value={state.dateExpiry} onChange={(e)=>dispatch(updateInput(e))}  type="date"></input>
            </div>
            <label>Category</label>
            <div className="form-group">
            <select  className="form-control" name="catName" value={state.catName} onChange={(e)=>dispatch(updateInput(e))}>       
            {catOptions}
            </select>
            </div>   

            <label>Product Status</label>
            <div className="form-group">   
            <select  className="form-control" name="productStatus" value={state.productStatus} onChange={(e)=>dispatch(updateInput(e))}>       
            <option value="Active">Active</option>
            <option value="InActive">InActive</option>
             </select>
            </div>
            <button type="submit" className="btn btn-primary mr-3">Add</button>
            <br/><br/>
            </form>  
            {state.product.message?<div className="alert alert-primary">
            {state.product.message}
            </div>:""}   
            <table className="table table-responsive-sm table-striped table-hover">
            <thead>
            <tr>
            <th scope="col">Product Name</th>
            <th scope="col"> Date MFG</th>
            <th scope="col">Date Expiry</th>
            <th scope="col">Category</th>
            <th scope="col">Product Status</th>
            <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
           <FetchProduct parentCallback={props.parentCallback}/>
            </tbody>
            </table>          
        </div>
      
    )
 
}
export default AddProduct;

