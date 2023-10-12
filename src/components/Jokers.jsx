import React, { useState } from 'react'

///This where you put jokers to. Do try to rely on simple logic like the examples given.


export default function Jokers({data,questionNO}) {
  
    var x=questionNO
    const [correct,setCorrect]=useState(null);
    const [showedJ1, setShowedJ1] = useState(false);
    const [correct2,setCorrect2]=useState(null);
    const [showedJ2, setShowedJ2] = useState(false);
    const [correct3,setCorrect3]=useState(null);
    const [showedJ3, setShowedJ3] = useState(false);
    
    const handleCorrection=(corrected)=>{
        setCorrect(corrected)};
    const handleCorrection2=(corrected)=>{
        setCorrect2(corrected)};
    const handleCorrection3=(corrected)=>{
         setCorrect3(corrected)};
    const handleJoker1=(Q)=>{
        [data[Q]?.answers[1]].filter(answers => answers?.correct === true).map(filteredPerson => (
            setCorrect( "The phone suggests that the answer is:" + filteredPerson.text),
            setTimeout(function(){
              setCorrect("")
            },4000)))};
            const handleJoker2=(Q)=>{
              [data[Q]?.answers[1]].filter(answers => answers?.correct === true).map(filteredPerson => (
                  setCorrect2( "The answer to the next question is:" + filteredPerson.text),
                  setTimeout(function(){
                    setCorrect2("")
                  },4000)))};
                  const handleJoker3=(Q)=>{
                    [data[Q]?.answers[1]].filter(answers => answers?.correct === true).map(filteredPerson => (
                        setCorrect3( "Choose this answer:" + filteredPerson.text),
                        setTimeout(function(){
                          setCorrect3("")
                        },4000)))};
  
          
  return (
    <div>
    
    
    <h1 className="JokerInfo" > {correct}</h1>
    <div style={showedJ1 ? { display: "none" } : { display: "flex" }} className="joker1"  onClick={()=> {handleJoker1(x-1);setShowedJ1(true)}}>../</div>
    <h1 className="JokerInfo2" > {correct2}</h1>
    <div style={showedJ2 ? { display: "none" } : { display: "flex" }} className="joker2"  onClick={()=> {handleJoker2(x);setShowedJ2(true)}}>(O)</div>
    <h1 className="Joker3" > {correct3}</h1>
    <div style={showedJ3 ? { display: "none" } : { display: "flex" }} className="joker3"  onClick={()=> {handleJoker3(x-1);setShowedJ3(true)}}>{">>"}</div>
    </div>
  )
}
