const istate={
    productName:"",
    dateMfg:"",
    dateExpiry:"",
    catName:"",
    productStatus:"",
    catList:[{_id:"",categoryname:""}],
    message:'',
    productList:[{_id:"",productname:"",dateofmfg:"",dateofexpiry:"",category:{_id:"",categoryname:""},productstatus:""}]
}
export const productReducer=(state=istate,action)=>{
    switch(action.type){
        case "UPDATE_INPUT":
            return({
                ...state,[action.name]:action.value
            })
        case "ADD_PRODUCT":
            return({...state,message:action.msg,productList:[...state.productList,action.payload]})
        case "FETCH_PRODUCT":
            return({...state,productList:action.payload})
        case "DELETE_PRODUCT":
            const data=state.productList.filter(item=>{
                return item._id!==action.payload._id;
            })
            return{
                ...state,message:action.msg,productList:data
            }
        case "FETCH_CATEGORY":  
            return ({...state,catList:action.payload})
        case "UPDATE_PRODUCT":
            return({...state,message:action.msg,productList:[...state.productList,action.payload]})
        default:
            return state
    }

}