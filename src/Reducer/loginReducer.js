const istate={userName:"",userPassword:"",msg:"",isLoggedin:"false",userDetails:{}}
export const loginReducer=(state=istate,action)=>{
    switch(action.type)
    {
        case "UPDATE_INPUT":
            return({
                ...state,[action.name]:action.value
            })
        case "LOGIN_USER":
            return{
                ...state,
                msg:action.payload,
                isLoggedin:action.isLoggedin
            }
         
        case "SET_CURRENT_USER":
            return{
                ...state,
                userDetails:action.payload,
                isLoggedin:true
            }
        case "LOGOUT_USER":
            return{
                ...state,
                msg:action.payload,
                isLoggedin:action.isLoggedin
            }
        default:
            return state
    
    }

}