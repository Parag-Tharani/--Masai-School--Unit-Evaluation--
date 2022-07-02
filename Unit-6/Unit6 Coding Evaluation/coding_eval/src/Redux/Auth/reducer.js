import { Login } from "./action";

export const AuthReducer = (store={logedIn:false},action) => {
    switch(action.type){
        case Login:{
            return{
                logedIn: action.payload
            }
        }
        default:{
            return store
        }
    }
}