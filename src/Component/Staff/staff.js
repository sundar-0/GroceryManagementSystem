import React,{useState} from 'react'
import AddStaff from './addStaff'
import EditStaff from './editStaff'
 const Staff=()=>{   
    //1.Create Call Back Function in parent Component
    //2.Pass the callback function in the parent as a prop to the child component.
    //3.The child component calls the parent callback function using props.
   const [initialState,updateState]=useState({_id:'', username:'', email:'',password:'',status:'',date_joined:'',isAddClicked:true, isEditClicked:false})
   const HandleCallback = (childData) =>{
      updateState(childData);
    }  
    return (
    <div>
   {initialState.isAddClicked?<AddStaff parentCallback = {HandleCallback}/>:""}
   {initialState.isEditClicked?<EditStaff userChoice={initialState}/>:""} 
    </div>
    )
}
export default Staff