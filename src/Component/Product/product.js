import React,{useState} from 'react'
import AddProduct from './addProduct'
import EditProduct from './editProduct'
 const Product=()=>{   
    //1.Create Call Back Function in parent Component
    //2.Pass the callback function in the parent as a prop to the child component.
    //3.The child component calls the parent callback function using props.

   const [initialState,updateState]=useState({_id:'', productname:'', dateofmfg:'',dateofexpiry:'',category:{_id:'',categoryname:''},productstatus:'',isAddClicked:true, isEditClicked:false})
   const HandleCallback = (childData) =>{
      updateState(childData);
    }  
    return (
    <div>
   {initialState.isAddClicked?<AddProduct parentCallback = {HandleCallback}/>:""}
   {initialState.isEditClicked?<EditProduct userChoice={initialState}/>:""} 
    </div>
    )
}
export default Product