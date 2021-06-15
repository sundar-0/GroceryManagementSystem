const istate={
    categoryName:"",
    categoryStatus:"",
    message:'',
    categoryList:[{_id:"",category_name:"",category_status:""}]
}
export const categoryReducer=(state=istate,action)=>{
switch(action.type){
    case "UPDATE_INPUT":
        return{
            ...state,[action.name]:action.value
        }
    case "ADD_CATEGORY":
        return({...state,message:action.msg,categoryList:[...state.categoryList,action.payload]})
    case "FETCH_CATEGORY":
        return({...state,categoryList:action.payload})
    case "DELETE_CATEGORY":
        const data=state.categoryList.filter(item=>{
            return item._id!==action.payload._id;
        })
        return{
            ...state,message:action.msg,categoryList:data
        }
    case "UPDATE_CATEGORY":
        return({...state,message:action.msg,categoryList:[...state.categoryList,action.payload]})
    default:
        return state
}
}