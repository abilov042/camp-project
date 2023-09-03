import { combineReducers } from "redux"
import cartReduser from "./reducers/cartReducer"


const  rootReducer = combineReducers({
    cart: cartReduser
})


export default rootReducer