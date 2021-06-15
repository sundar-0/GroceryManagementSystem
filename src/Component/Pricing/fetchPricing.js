import React,{ useEffect} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useSelector,useDispatch} from 'react-redux'
import { fetchPricing,deletePricing} from '../../ActionCreater/pricingaction'

const FetchPricing=(props)=>{
    const passDataToParent=(data)=>
    {
        console.log(props.parentCallback)
        data['isEditClicked']=true
        data['isAddClicked']=false
       console.log(data)
       props.parentCallback(data)
       
    }
    const dispatch=useDispatch();
    useEffect(()=>{
        console.log('use effect is called')
        dispatch(fetchPricing());
     },[dispatch]
     )
    const state = useSelector(state => state)
    var List=[];
         if(state.pricing.pricingList!==undefined){
             List=state.pricing.pricingList.map(item=>{
                 return(            
                      <tr key={item._id}>
                      <td defaultValue={item.product_name}>{item.product_name}</td>
                      <td defaultValue={item.buying_price}>Rs.{item.buying_price}</td>
                      <td defaultValue={item.profit_margin}>{item.profit_margin}%</td>
                      <td defaultValue={item.discount}>{item.discount}%</td>
                      <td defaultValue={item.final_sp}>Rs.{item.final_sp}</td> 
                      <td>
                     <button type="button" className="btn btn-warning mr-3" onClick={()=>passDataToParent(item)}>Edit</button>
                     <button className="btn btn-danger mr-3" onClick={()=>{dispatch(deletePricing(item._id))}}>Delete</button>  
                      </td>
                      </tr>
                  );
                 })
             }
      
    return (
        <React.Fragment>
        {List} 
        </React.Fragment>
    )
}
export default FetchPricing
