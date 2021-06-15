import axios from 'axios'
export function updateInput(e){
    return{
        type:"UPDATE_INPUT",
        name:e.target.name,
        value:e.target.value
    }

}
export function addCategory(category){
    return function(dispatch){
        var options={
            url:"http://localhost:5000/api/category/addcategory",
            method:"post",
            headers:{     
                "content-type":"application/json"      
            },
            data:{
                categoryName:category.get('categoryName'),
                categoryStatus:category.get('categoryStatus')   
            }
        }
       axios(options)
       .then(res=>{
           dispatch({
               type:"ADD_CATEGORY",
               payload:res.data.result,
               msg:res.data.message
           })
        })
    
    }
}

export function fetchCategory(){
    return function(dispatch){
    var options={
        url:"http://localhost:5000/api/category/fetchallcategory",
        method:"get",
        headers:{  
            "content-type":"application/json"  
        }
    }
    axios(options)
    .then(res=>{
        dispatch({
            type:"FETCH_CATEGORY",
            payload:res.data.result
        })
    })
}
}
export function deleteCategory(id){
    console.log(id)
    return function(dispatch){
        var options={
            url:'http://localhost:5000/api/category/deletecategory/'+id,
            method:'delete',
            headers:{ 
                "content-type":"application/json"  
            }
        }
        axios(options)
        .then(res=>{
            dispatch({
                type:"DELETE_CATEGORY",
                payload:res.data.result,
                msg:res.data.message
            })
        })
    }

}
export function updateCategory(category)
{
    return function(dispatch){
        var options={
            url:'http://localhost:5000/api/category/updatecategory',
            method:'post',
            headers:{
               
                "content-type":"application/json"   
            },
            data:{
                _id:category.get('_id'),
                categoryname:category.get('categoryname'),
                category_status:category.get('category_status')
                
            }   
        }
        axios(options)
        .then(res=>{
            dispatch(
                {
                    type:'UPDATE_CATEGORY',
                    payload:res.data.result,
                    msg:res.data.message
                }
            )
            window.location.reload()
        })
    }
}