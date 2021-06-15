import axios from 'axios'
export function updateInput(e){
    return{
        type:"UPDATE_INPUT",
        name:e.target.name,
        value:e.target.value
    }

}
export function addStaff(staff){
    return function(dispatch){
        var options={
            url:"http://localhost:5000/api/user/adduser",
            method:"post",
            headers:{ 
               
                "content-type":"application/json"      
            },
            data:{
                userName:staff.get('userName'),
                userEmail:staff.get('userEmail'),
                userPassword:staff.get('userPassword'),
                userCpassword:staff.get('userCpassword'),
                userStatus:staff.get('userStatus')
            }
        }
       axios(options)
       .then(res=>{
           dispatch({
               type:"ADD_STAFF",
               payload:res.data.result,
               msg:res.data.message
           })
        })
    
    }
}
export function fetchStaff(){
    return function(dispatch){
    var options={
        url:"http://localhost:5000/api/user/fetchuser",
        method:"get",
        headers:{     
            "content-type":"application/json"  
        }
    }
    axios(options)
    .then(res=>{
        dispatch({
            type:"FETCH_STAFF",
            payload:res.data.result
        })
    })
}
}

export function deleteStaff(id){
    return function(dispatch){
        var options={
            url:'http://localhost:5000/api/user/deleteuser/'+id,
            method:'delete',
            headers:{
               
                "content-type":"application/json"  
            }
        }
        axios(options)
        .then(res=>{
            dispatch({
                type:"DELETE_STAFF",
                payload:res.data.result,
                msg:res.data.message
            })
        })
    }
}

export function updateStaff(staff)
{
    return function(dispatch){
        var options={
            url:'http://localhost:5000/api/user/updateuser',
            method:'post',
            headers:{  
                "content-type":"application/json"   
            },
            data:{
                _id:staff.get('_id'),
                username:staff.get('username'),
                email:staff.get('email'),
                status:staff.get('status')
            }   
        }
        axios(options)
        .then(res=>{
            dispatch(
                {
                    type:'UPDATE_STAFF',
                    payload:res.data.result,
                    msg:res.data.message
                }
            )
            window.location.reload()
        })
    }
}