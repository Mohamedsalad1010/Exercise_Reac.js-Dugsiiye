import { useReducer } from "react"

const initialState = {
  countA: 0,
  countB: 0
}

const reducer = (state , action) => {
  switch(action.type){
    case 'increamentA' :
      return { ... state , countA : state.countA + 1}
      case 'decreamentA' :
        return { ...state , countA : state.countA > 0 ? state.countA - 1 : 0}
        case 'increamentB':
          return { ...state , countB : state.countB + 1}
         case 'decreamentB':
          return { ...state , countB : state.countB > 0 ?  state.countB - 1 : 0}
          case 'resetAll':
            return  initialState
          default: 
          return state;
  }
}

function App() {

const [state , dispatch] = useReducer(reducer , initialState)
  return (
   <>
<div>
  <h2>CountA: {state.countA}</h2>
  <button onClick={()=> dispatch({type: "increamentA"})}>+A</button>
  <button onClick={()=> dispatch({type: "decreamentA"})}>-A</button>

  <h3>CountB: {state.countB}</h3>
   <button onClick={()=> dispatch({type: "increamentB"})}>+B</button>
  <button onClick={()=> dispatch({type: "decreamentB"})}>-B</button>
  <br/>
  <br/>
   <button onClick={()=> dispatch({type: "resetAll"})}>Rese All</button>
</div>
   </>
  )
}

export default App
