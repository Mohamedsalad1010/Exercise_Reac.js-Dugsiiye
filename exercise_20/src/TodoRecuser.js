 import { useReducer , useTransition } from "react";

 export const initailState = []

 export const reducer = ( state , action)=>{
switch(action.type) {
    case 'add':
        return [... state , action.payload]
        case 'completed':
            return state.map((todo)=> todo.id === action.payload ? {... todo , completed: !todo.completed}: todo)
            case 'delete': 
            return state.filter((todo)=> todo.id !== action.payload)
           
}
 }