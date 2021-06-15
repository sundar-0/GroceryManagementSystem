import axios from 'axios'
export function updateInput(e){
    return{
        type:"UPDATE_INPUT",
        name:e.target.name,
        value:e.target.value
    }

}
export function addProduct(product){
    return function(dispatch){
        var options={
            url:"http://localhost:5000/api/product/addproduct",
            method:"post",
            headers:{ 
               
                "content-type":"application/json"      
            },
            data:{
                productName:product.get('productName'),
                dateMfg:product.get('dateMfg'),
                dateExpiry:product.get('dateExpiry'),
                catName:product.get('catName'),
                productStatus:product.get('productStatus')
            }
           
        }
       axios(options)
       .then(res=>{
           dispatch({
               type:"ADD_PRODUCT",
               payload:res.data.result,
               msg:res.data.message
           })
           dispatch(fetchProduct())
        })
    
    }
}
export function fetchProduct(){
    return function(dispatch){
    var options={
        url:"http://localhost:5000/api/product/fetchproduct",
        method:"get",
        headers:{
            
            "content-type":"application/json"  
        }
    }
    axios(options)
    .then(res=>{
        dispatch({
            type:"FETCH_PRODUCT",
            payload:res.data.result
        })
    })
}
}
export function deleteProduct(id){
    console.log(id)
    return function(dispatch){
        var options={
            url:'http://localhost:5000/api/product/deleteproduct/'+id,
            method:'delete',
            headers:{
               
                "content-type":"application/json"  
            }
        }
        axios(options)
        .then(res=>{
            dispatch({
                type:"DELETE_PRODUCT",
                payload:res.data.result,
                msg:res.data.message
            })
        })
    }
}
export function fetchCatList(){
    return function(dispatch){
        var options={
            url:'http://localhost:5000/api/category/fetchcategory',
            method:'get',
            headers:{
               
                "content-type":"application/json"   
            }
        }
        axios(options)
        .then(res=>{
            dispatch(
                {
                    type:'FETCH_CATEGORY',
                    payload:res.data.result
                }
            )
        })
  
    }
}
export function updateProduct(product)
{
    return function(dispatch){
        var options={
            url:'http://localhost:5000/api/product/updateproduct',
            method:'post',
            headers:{
               
                "content-type":"application/json"   
            },
            data:{
                _id:product.get('_id'),
                productname:product.get('productname'),
                dateofmfg:product.get('dateofmfg'),
                dateofexpiry:product.get('dateofexpiry'),
                category:product.get('category'),
                productstatus:product.get('productstatus')
            }   
        }
        axios(options)
        .then(res=>{
            dispatch(
                {
                    type:'UPDATE_PRODUCT',
                    payload:res.data.result,
                    msg:res.data.message
                }
            )
            window.location.reload()
        })
    }
}