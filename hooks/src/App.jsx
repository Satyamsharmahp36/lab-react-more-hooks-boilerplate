// import { useReducer, useState} from 'react'
// import './App.css'
// import Post from './component/Post'






// function App() {


// function newPost(input){
//   return {
//     id: Date.now(),
//     inputs : input,
//     toggle : true
//   }
// }

//   function reducer(state,action){
//     switch(action.type){
//       case "addPost" :
//        return [...state,newPost(action.payload.ourState)]
//       case "toggle" :
//         return state.map((el)=>{
//           if(el.id==action.payload.id){
//             return {...el,toggle:!el.toggle}
//           }
//           else{
//             return state;
//           }
      
//         }
//         )
//         default :
//           return state
//     }
//   }


 

//   const handleSubmit=()=>{
//     dispatch({
//       type : "addPost",
//       payload:{
//       ourState : state
//     }})
//   }
  
//   const handleChange=(e)=>{
//      setState(e.target.value)
//   }

//   const[current,dispatch]= useReducer(reducer,[])
//   const[state , setState]= useState("")
    
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" onChange={(e)=>handleChange(e)} value={state}/>
//         <button type='submit'>Add</button>
//       </form>
//       {current.map((el)=>{
//           <Post  key={el.id} data={el} dispatched={dispatch}/>
//         })}

//    </div>
//   )
// }

// export default App

import { useReducer, useRef, useState } from 'react';
import './App.css';
import Post from './component/Post';



function App() {
  function newPost(input) {
    return {
      id: Date.now(),
      inputs: input,
      toggle: true
    };
  }

  const useReference = useRef();

  function focus(){
    useReference.current.focus()
  }

  function reducer(state, action) {
    switch (action.type) {
      case "addPost":
        return [...state, newPost(action.payload.ourState)];
      case "toggle":
        return state.map((el) => {
          if (el.id === action.payload.id) {
            return { ...el, toggle: !el.toggle };
          } else {
            return el;
          }
        });
      default:
        return state;
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "addPost",
      payload: {
        ourState: state
      }
    });
    setState("");
  };

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const [current, dispatch] = useReducer(reducer, []);
  const [state, setState] = useState("");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={useReference} type="text" onChange={(e) => handleChange(e)} value={state} />
        <button type='submit'>Add</button>
      </form>
      {current.map((el) => (
        <Post key={el.id} data={el} dispatched={dispatch} />
      ))}

      <button onClick={focus}>Start Writting</button>
        
    </div>
  );
}

export default App;

