import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProduct} from '../../ActionCreater/productaction'
import {updateInput,addPricing} from '../../ActionCreater/pricingaction'
import FetchPricing from './fetchPricing'
import Select from 'react-select'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const AddPricing=(props)=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        console.log('use effect is called')
        dispatch(fetchProduct());
     },[dispatch]
     )
   const state=useSelector(state=>state)
   let options=[]
   options=state.product.productList.map((item,i)=>{
   return {value:item['productname'],label:item['productname']}
  })
  const handleSubmit=(e)=>{
    e.preventDefault();
    var data = new URLSearchParams();
        for(const pair of new FormData(e.target)){
          data.append(pair[0],pair[1])
        }
    dispatch(addPricing(data))
  }
    return (
        <div>
            <form onSubmit={handleSubmit}>
           <label>Product Name</label>
           <div className="form-group">
           <Select options={options} name="productName" value={state.productName}  className="basic-multi-select" classNamePrefix="select" />
           </div> 
           <label>Buying Price</label>
           <div className="form-group">
            <input type="text" className="form-control" value={state.buyingPrice}  name="buyingPrice" onChange={(e)=>dispatch(updateInput(e))} />
           </div>
           <label>Profit Margin</label>
           <div className="form-group">
            <input type="text" className="form-control" value={state.profitMargin}  name="profitMargin" onChange={(e)=>dispatch(updateInput(e))} />
           </div>
           <label>Discount</label>
           <div className="form-group">
            <input type="text" className="form-control" value={state.Discount}  name="Discount" onChange={(e)=>dispatch(updateInput(e))} />
           </div>
            <input type="submit" value="Add Pricing" className="btn btn-primary"/>
            </form>
            <br/>
            {state.pricing.message?<div className="alert alert-primary">
            {state.pricing.message}
            </div>:""}  
            <table className="table table-responsive-sm table-striped table-hover">
            <thead>
            <tr>
            <th scope="col">Product Name</th>
            <th scope="col"> Buying Price</th>
            <th scope="col">Profit Margin</th>
            <th scope="col">Discount</th>
            <th scope="col">Final Sp</th>
            <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
           <FetchPricing parentCallback={props.parentCallback}/>
            </tbody>
            </table>          
        </div>
    )
}
export default AddPricing