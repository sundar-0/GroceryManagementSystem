import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {productReducer} from '../Reducer/productReducer'
import {categoryReducer} from '../Reducer/categoryReducer'
import {staffReducer} from '../Reducer/staffReducer'
import {loginReducer} from '../Reducer/loginReducer'
import {pricingReducer} from '../Reducer/pricingReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const masterReducer=combineReducers(
    {
        product:productReducer,
        category:categoryReducer,
        staff:staffReducer,
        login:loginReducer,
        pricing:pricingReducer
    }
    )
export const store=createStore(masterReducer,composeEnhancers(applyMiddleware(thunk)))