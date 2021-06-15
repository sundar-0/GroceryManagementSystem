const istate={
    productName:"",
    buyingPrice:"",
    profitMargin:"",
    Discount:"",
    message:"",
    pricingList:[{_id:"",product_name:"",buying_price:"",profit_margin:"",discount:"",final_sp:""}]
}
export const pricingReducer=(state=istate,action)=>{
    switch(action.type){
        case "UPDATE_INPUT":
            return{
                ...state,[action.name]:action.value
            }
        case "ADD_PRICING":
            return({...state,message:action.msg,pricingList:[...state.pricingList,action.payload]})
        case "FETCH_PRICING":
            return({...state,pricingList:action.payload})
        case "DELETE_PRICING":
            const data=state.pricingList.filter(item=>{
                return item._id!==action.payload._id;
            })
            return{
                ...state,message:action.msg,pricingList:data
            }
        case "UPDATE_PRICING":
                return({...state,message:action.msg,pricingList:[...state.pricingList,action.payload]})
        default:
            return state
        }
    }