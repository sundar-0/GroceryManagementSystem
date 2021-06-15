import React,{ useEffect} from 'react'
import { fetchStaff,deleteStaff} from '../../ActionCreater/staffaction'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useSelector,useDispatch} from 'react-redux'
const FetchStaff=(props)=> {
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
        dispatch(fetchStaff());
     },[dispatch]
     )
    const state = useSelector(state => state)
    var List=[];
         if(state.staff.staffList!==undefined){
             List=state.staff.staffList.map((item,id)=>{
                 return(            
                      <tr key={id}>
                      <td defaultValue={item.username}>{item.username}</td>
                      <td defaultValue={item.email}>{item.email}</td>
                      <td defaultValue={item.status}>{item.status}</td>
                      <td defaultValue={item.date_joined}>{new Date(item.date_joined).toLocaleString()}</td>
                      <td>
                     <button type="button" className="btn btn-warning mr-3" onClick={()=>passDataToParent(item)}>Edit</button>
                     <button className="btn btn-danger mr-3" onClick={()=>{dispatch(deleteStaff(item._id))}}>Delete</button>  
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
export default FetchStaff;