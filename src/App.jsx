import React, { useEffect, useState } from "react";
import "./app.css"
import  Data from "./components/Data.jsx"
import Timer from "./components/Timer.jsx"
import Questions from "./components/Questions.jsx"
import Jokers from "./components/Jokers.jsx";

/////Made by Jericho Rechter, for a quality time.


/////Type: npx npm start
/////That should start the application and open a browser tab.
/////The sounds are loud! Turn down volume beforehand!

function App() {
  const [questionNO,setQuestionNO]=useState(1);
  const [questionList,setQuestionList]=useState("");
  const [halt,sethalt]=useState(false);
  const [titleFinal,setTitleFinal]=useState("Tourist");
  /////Since this quiz game is made to test knowledge on specific topics, you get awarded titles. 
  /////But feel free to change them however you wish.
  const tierPyramid=[
    {id:1,title:'Tourist'},
    {id:2,title:'Beginner'},
    {id:3,title:'Normie'},
    {id:4,title:'Interested'},
    {id:5,title:'Fan'},
    {id:6,title:'Follower'},
    {id:7,title:'Hobbyist'},
    {id:8,title:'Dedicated'},
    {id:9,title:'Die-hard'},
    {id:10,title:'Obsessed'},
    {id:11,title:'Addicted'},
    {id:12,title:'Freak'},
    ].reverse(); 
    useEffect(()=>{
      questionNO>1&& setTitleFinal(tierPyramid.find(m=> m.id===questionNO-1).title)

    },[tierPyramid,questionNO]);
    function loadQuestions(qst){
      setQuestionList(qst)

    }
    const data=questionList
  return (
    <div className="app">
      <div className="main">
      <Questions loadQuestions={loadQuestions}/>
      {halt? (<h1 className="FinalText">Your final ranking is {titleFinal}</h1>):(
        <>
        <div className="top">
          <div className="timer">
          <Timer sethalt={sethalt} questionNO={questionNO} /></div>
        </div>
        <div className="bottom">
        

        <Data data={data} sethalt={sethalt} setQuestionNO={setQuestionNO} questionNO={questionNO} />
        
        </div>
        </>
        
      )}
      
      </div>
       

      <div className="wall">
      <Jokers data={data}  questionNO={questionNO} />
      


      
      
      
      
      </div>
      <ul className="tierList">
       {tierPyramid.map((item)=><li className={questionNO===item.id ? "tierListItem active" : "tierListItem"}>
        <span className="tierListItemNumber">{item.id}</span>
        <span className="tierListItemTitle">{item.title}</span>  
        </li>)}

        


  
      </ul>

    </div>
  );
}

export default App;



