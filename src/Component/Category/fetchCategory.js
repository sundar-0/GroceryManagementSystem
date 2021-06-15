import React,{ useEffect} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useSelector,useDispatch} from 'react-redux'
import {fetchCategory,deleteCategory} from '../../ActionCreater/categoryaction'
const FetchCategory=(props)=>{
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
        dispatch(fetchCategory());
     },[dispatch]
     )
    const state = useSelector(state => state)
    var List=[]
    if(state.category.categoryList!==undefined){
        List=state.category.categoryList.map((item,id)=>{
            return(            
                <tr key={id}>
                 <td defaultValue={item.categoryname}>{item.categoryname}</td>
                 <td defaultValue={item.category_status}>{item.category_status}</td>
                 <td>
                 <button type="button" className="btn btn-warning mr-3" onClick={()=>passDataToParent(item)}>Edit</button>
                <button className="btn btn-danger mr-3" onClick={()=>{dispatch(deleteCategory(item._id))}}>Delete</button>  
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
export default FetchCategory
