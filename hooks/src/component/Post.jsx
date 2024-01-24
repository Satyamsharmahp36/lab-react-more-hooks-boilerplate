// import React from 'react'

// function Post(props) {
//   return (
//     <div>
//         <div key={props.data.id}>
//             <h2>{props.data.toggle?props.data.inputs:"This Content is hidden"}</h2>
//             <button onClick={()=>props.dispatched({
//                 type : "toggle",
//                 payload : props.data.id
//             })}>Toggle</button>
//           </div>
//     </div>
//   )
// }

// export default Post

import React from 'react';

function Post(props) {
  return (
    <div>
      <div>
        <h2>{props.data.toggle ? props.data.inputs : "This Content is hidden"}</h2>
        <button onClick={() => props.dispatched({
          type: "toggle",
          payload: { id: props.data.id }
        })}>Toggle</button>
      </div>
    </div>
  );
}

export default Post;
