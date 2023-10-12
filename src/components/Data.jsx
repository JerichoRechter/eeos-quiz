import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import next from "../resources/next.mp3";
import correct from "../resources/correct.mp3";
import wrong from "../resources/wrong.mp3";


export default function Data({data,setQuestionNO,sethalt,questionNO} ){
  
    const [question,setQuestion]=useState(null);
    const [selectedAnswer,setSelectedAnswer]=useState(null);
    const [classname,setclassname]=useState("questionA");
    const [gameOclock]=useSound(next);
    const [correctA]=useSound(correct);
    const [wrongA]=useSound(wrong);
    
    const delay=(time,response)=>{
      setTimeout(()=>{
        response(); 
      },time);

    }

    const handleClick=(answer)=>{
      setSelectedAnswer(answer);
      setclassname("questionA active");
      delay(1200,()=>{gameOclock();})
      delay(2000,()=>{setTimeout(()=>{setclassname(answer.correct ? "questionA correct":"questionA wrong")})});
      delay(5000,()=>{
        if (answer.correct){
          correctA();
          setQuestionNO((prev)=>prev + 1);
          
          setSelectedAnswer(null)
        } else{sethalt(true);wrongA()};
        
        
        setTimeout(()=>{setclassname(answer.correct ? "questionA correct":"questionA wrong")})})

      
     }
     

    useEffect(()=>{
      setQuestion(data[questionNO - 1]);
    },[data,questionNO]);
    
    return( 
        <div className="question">
          <div className="questionQ">{question?.question}</div>
          <div className="questionAS" >
          {question?.answers.map((answer) => (<div className={selectedAnswer === answer ? classname:"questionA"} onClick={()=> handleClick(answer)}>{answer.text}</div>))}
          
           

          </div>

        </div>
    )
};