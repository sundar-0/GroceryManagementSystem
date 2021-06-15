import axios from 'axios'
import setAuth from '../ActionCreater/setAuth'
import jwt from 'jsonwebtoken'
export function updateInput(e){
    return{
        type:"UPDATE_INPUT",
        name:e.target.name,
        value:e.target.value
    }

}
export function loginUser(user){
    const username=user.get('userName')
    const password=user.get('userPassword')
    console.log(username,password)
    return function(dispatch){
        var OPTIONS={
            url:"http://localhost:5000/api/user/login",
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            data:{
                userName:username,
                userPassword:password
            }
            
          
        }
       axios(OPTIONS)
       .then(res=>{ 
           const message=res.data.message
           if(message==="user found")
           {
            const token=res.data.token
            localStorage.setItem("jwttoken",token)
            setAuth(token)
            dispatch(setCurrentUser(jwt.decode(token)))
            // console.log(jwt.decode(token))
            dispatch({
                type:"LOGIN_USER",
                payload:message,
                isLoggedin:true
            })
           }
           else{
            dispatch({
                type:"LOGIN_USER",
                payload:message,
                isLoggedin:false
            })
           }


       })
      
    
    }
}
export const setCurrentUser=(user)=>{
    return{
        type:'SET_CURRENT_USER',
        payload:user
    }
}
export const logoutUser=()=>{
    return function(dispatch){
        localStorage.removeItem('jwttoken')
        setAuth(false)
        dispatch(setCurrentUser({}))
        dispatch({
            type:'LOGOUT_USER',
            payload:"Logout Successfully!!!",
            isLoggedin:false
        })
    }
}