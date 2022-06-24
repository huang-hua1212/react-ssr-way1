import React, {Component} from "react";
import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div>
//       <div>Homepage</div>
//       <Link to="/users">To user page</Link>
//       <button onClick={() => console.log("click me")}>click me</button>
//     </div>
//   );
// };

// export default Home;
export class  Home extends Component {
   clickMe = ()=>{
    console.log("clickMe!!");
  }
  render() {
    return (
    <div>
      <div>Homepage</div>
      <Link to="/users">To user page</Link>
      {/* <button onClick={() => console.log("click me")}>click me</button> */}
      <button>click me</button>
    </div>
  );
  }
};

export default Home;
