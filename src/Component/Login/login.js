import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Dashboard from '../Dashboard/Dashboard'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {updateInput,loginUser} from '../../ActionCreater/loginaction'
const Login=()=> {  
    // // console.log(localStorage.jwttoken)
    // const passDataToParent=(data)=>{
    //     props.parentCallback(data)
    // }
    // useEffect(()=>passDataToParent(localStorage.jwttoken))
    const dispatch=useDispatch();
    const state = useSelector(state => state)
    const handleSubmit=e=>{
        e.preventDefault();
        var data = new URLSearchParams();
        for(const pair of new FormData(e.target)){
          data.append(pair[0],pair[1])
        }
        dispatch(loginUser(data)) 
    }
   
  
    return (
        <React.Fragment>
        {
     state.login.isLoggedin===true?    
        <Dashboard/>:
        <div className="container mt-5 border border-additive bg-light w-50">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            
            <div className="form-group">  
            <label>Username</label> 
            <input  className="form-control" name="userName"  value={state.userName} onChange={(e)=>dispatch(updateInput(e))} type="text"></input>
            </div>
            
            <div className="form-group">
            <label>Password</label>
            <input  className="form-control" name="userPassword" value={state.userPassword} onChange={(e)=>dispatch(updateInput(e))}  type="password"></input>
            </div> 
            <button type="submit" className="btn btn-primary mr-3">Login</button>
            <br/><br/>
            {state.login.msg?
            <div className="alert alert-primary alert-dismissible" role="alert">
                 <strong>{state.login.msg}</strong>
            <button  type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>:""}
        </form>          
        </div>
        }
       </React.Fragment>
    )
}
export default Login
