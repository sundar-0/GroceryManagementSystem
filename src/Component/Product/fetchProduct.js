import React,{ useEffect} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useSelector,useDispatch} from 'react-redux'
import {fetchProduct,deleteProduct} from '../../ActionCreater/productaction'

const FetchProduct=(props)=>{
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
        dispatch(fetchProduct());
     },[dispatch]
     )
    const state = useSelector(state => state)
    var List=[];
         if(state.product.productList!==undefined){
             List=state.product.productList.map(item=>{
                 return(            
                      <tr key={item._id}>
                      <td defaultValue={item.productname}>{item.productname}</td>
                      <td defaultValue={item.dateofmfg}>{item.dateofmfg}</td>
                      <td defaultValue={item.dateofexpiry}>{item.dateofexpiry}</td>
                      <td defaultValue={item.category['categoryname']}>{item.category['categoryname']}</td>
                      <td defaultValue={item.productstatus}>{item.productstatus}</td>
                      <td>
                     <button type="button" className="btn btn-warning mr-3" onClick={()=>passDataToParent(item)}>Edit</button>
                     <button className="btn btn-danger mr-3" onClick={()=>{dispatch(deleteProduct(item._id))}}>Delete</button>  
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
export default FetchProduct
