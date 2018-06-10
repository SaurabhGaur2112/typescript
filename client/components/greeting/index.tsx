// import * as React from 'react';
// import {Link} from 'react-router-dom';

// export interface Props {
//   greeting : string;
//   updateGreeting : (greeting : string) => void;
// };

// export default class Greeting extends React.Component < Props, {} > {
//   public refs: {
//     greetingInputRef: HTMLInputElement;
//   };

//   constructor() {
//     super();
//     this.updateGreetingAction = this
//       .updateGreetingAction
//       .bind(this);
//   }

//   updateGreetingAction() {
//     this
//       .props
//       .updateGreeting(this.refs.greetingInputRef.value);
//   }

//   public render() {
//     return (
//       <div id='greeting'>
//         <ul>
//           <li>
//             <Link to="/greeting">Greeting</Link>
//           </li>
//           <li>
//             <Link to="/increment">Increment</Link>
//           </li>
//         </ul>
//         <h1 id='greeting-text'>{this.props.greeting}</h1>
//         <input id='greeting-input' ref='greetingInputRef' type='text'></input>
//         <button id='greeting-button' onClick={this.updateGreetingAction}>Update Greeting</button>
//       </div>
//     );
//   }
// }
