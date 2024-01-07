import { useState } from "react";
import { testData } from "./../Data/productData";

const About = () => {
    const [count,setCount] = useState()
    const handleCount = (item)=>{
        console.log(item)
    }
  return (
    <div>
      {testData.map((item, i) => (
        <div key={i}>
          <h2>{item.title}</h2>
          <button onClick={()=> handleCount(item)}>incriment</button>
          <p>{count}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
