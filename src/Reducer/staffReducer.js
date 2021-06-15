const istate={
    userName:"",
    userEmail:"",
    userPassword:"",
    userCpassword:"",
    userStatus:"",
    message:"",
    staffList:[{_id:"",username:"",email:"",password:"",status:"",date_joined:""}]
}
export const staffReducer=(state=istate,action)=>{
    switch(action.type){
        case "UPDATE_INPUT":
            return{
                ...state,[action.name]:action.value
            }
        case "ADD_STAFF":
            return({...state,message:action.msg,staffList:[...state.staffList,action.payload]})
        case "FETCH_STAFF":
            return({...state,staffList:action.payload})

        case "DELETE_STAFF":
            const data=state.staffList.filter(item=>{
                return item._id!==action.payload._id;
            })
            return{
                ...state,message:action.msg,staffList:data
            }
        case "UPDATE_STAFF":
            return({...state,message:action.msg,staffList:[...state.staffList,action.payload]})
        
        default:
            return state
    }
}