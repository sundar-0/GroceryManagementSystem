import axios from 'axios'
export function updateInput(e){
    return{
        type:"UPDATE_INPUT",
        name:e.target.name,
        value:e.target.value
    }

}
export function addPricing(data){
    return function(dispatch){
        var options={
            url:"http://localhost:5000/api/pricing/addpricing",
            method:"post",
            headers:{     
                "content-type":"application/json"      
            },
            data:{
               productName:data.get('productName'),
               buyingPrice:data.get('buyingPrice'),
               profitMargin:data.get('profitMargin'),
               Discount:data.get('Discount')
            }
        }
       axios(options)
       .then(res=>{
           dispatch({
               type:"ADD_PRICING",
               payload:res.data.result,
               msg:res.data.message
           })
        })
    
    }
}

export function fetchPricing(){
    return function(dispatch){
    var options={
        url:"http://localhost:5000/api/pricing/fetchpricing",
        method:"get",
        headers:{  
            "content-type":"application/json"  
        }
    }
    axios(options)
    .then(res=>{
        dispatch({
            type:"FETCH_PRICING",
            payload:res.data.result
        })
    })
}
}

export function deletePricing(id){
    console.log(id)
    return function(dispatch){
        var options={
            url:'http://localhost:5000/api/pricing/deletepricing/'+id,
            method:'delete',
            headers:{ 
                "content-type":"application/json"  
            }
        }
        axios(options)
        .then(res=>{
            dispatch({
                type:"DELETE_PRICING",
                payload:res.data.result,
                msg:res.data.message
            })
        })
    }

}
export function updatePricing(data)
{
    return function(dispatch){
        var options={
            url:'http://localhost:5000/api/pricing/updatepricing',
            method:'post',
            headers:{
               
                "content-type":"application/json"   
            },
            data:{
                _id:data.get('_id'),
                product_name:data.get('product_name'),
               buying_price:data.get('buying_price'),
               profit_margin:data.get('profit_margin'),
               discount:data.get('discount')
            }   
        }
        axios(options)
        .then(res=>{
            dispatch(
                {
                    type:'UPDATE_PRICING',
                    payload:res.data.result,
                    msg:res.data.message
                }
            )
            window.location.reload()
        })
    }
}