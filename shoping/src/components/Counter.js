import {  useState } from "react";

function Counter (){

// state={
//     count:0,
// };
// incrementCount=()=>{
//     this.setState({
//         count: this.state.count + 1,
//     });
// }
  const [count, setCount] = useState(3);
  const ccc = ()=>{
    setCount(9);
  }
ccc()
  console.log(count)

    return (
        <div>
            <p>you clicked {count } </p>
           
        </div>
      
    )
}
export default Counter;