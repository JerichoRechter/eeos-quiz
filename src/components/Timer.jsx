import React from "react";


export default function Timer(  {sethalt,questionNO}) {
    const [counter, setCounter] = React.useState(20);

    React.useEffect(() => {
        if (counter===0){
            sethalt(true)
        }
        const timer =
     counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
   }, [counter,sethalt]);

      React.useEffect(()=>{
        setCounter(45);
      },[questionNO]);
      return counter

    
      
    }
    
    
  

