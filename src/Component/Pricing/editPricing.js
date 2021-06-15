import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updatePricing} from '../../ActionCreater/pricingaction'
const EditPricing=(props)=> {
    const[userInput,setuserInput]=useState(props.userChoice)
    const dispatch = useDispatch()
    const state=useSelector(state=>state)
    const handleSubmit=e=>{
        e.preventDefault()
        var data = new URLSearchParams();
        for(const pair of new FormData(e.target)){
          data.append(pair[0],pair[1])
        }
        dispatch(updatePricing(data))
    }
    const handleEditInput=e=>{
        setuserInput({...userInput,[e.target.name]:e.target.value})
    }
    return (
        <div className="container ml-0">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <input  className="form-control" type="hidden" name="_id" onChange={handleEditInput} value={userInput._id}></input>
        </div>
        <label>Product Name</label>
        <div className="form-group">
        <input  className="form-control" type="text" name="product_name" onChange={handleEditInput} value={userInput.product_name}></input>
        </div>
        <label>Buying Price</label>
        <div className="form-group">
        <input  className="form-control" type="text" name="buying_price" onChange={handleEditInput} value={userInput.buying_price}></input>
        </div>
        <label>Profit Margin</label>
        <div className="form-group">
        <input  className="form-control" type="text" name="profit_margin" onChange={handleEditInput} value={userInput.profit_margin}></input>
        </div>
        <label>Discount</label>
        <div className="form-group">
        <input  className="form-control" type="text" name="discount" onChange={handleEditInput} value={userInput.discount}></input>
        </div>

        <input type="submit" className="btn btn-primary" value="update"/>
        </form>
        <br></br>
        {state.pricing.message?<div className="alert alert-primary">
            {state.pricing.message}
            </div>:""}
        </div>
    )
}
export default EditPricing;
