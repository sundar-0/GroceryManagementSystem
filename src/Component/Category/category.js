import React,{useState} from 'react'
import AddCategory from './addCategory'
import EditCategory from './editCategory'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
 const Category=()=>{
    const [initialState,updateState]=useState({_id:'', categoryname:'',category_status:'',isAddClicked:true, isEditClicked:false})
    const HandleCallback = (childData) =>{
       updateState(childData);
     }  
     return (
     <div>
    {initialState.isAddClicked?<AddCategory parentCallback = {HandleCallback}/>:""}
    {initialState.isEditClicked?<EditCategory userChoice={initialState}/>:""} 
     </div>
    )
}
export default Category;