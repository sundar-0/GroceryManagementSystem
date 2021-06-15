import React,{useState}from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AddPricing from './addPricing'
import EditPricing from './editPricing'
const Pricing=()=>{
  const [initialState,updateState]=useState({_id:'',product_name:'',buying_price:'',profit_margin:'',discount:'',isAddClicked:true, isEditClicked:false})
  const HandleCallback = (childData) =>{
     updateState(childData);
   }  
   return (
   <div>
  {initialState.isAddClicked?<AddPricing parentCallback = {HandleCallback}/>:""}
  {initialState.isEditClicked?<EditPricing userChoice={initialState}/>:""} 
   </div>
   )
}
export default Pricing

