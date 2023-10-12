import React from "react";
import { useState } from "react";

export default function QuestionList({loadQuestions }){
  ////You must use the below question format for this to work. The ID of the question is nth questiion it will be
  ////Do not replace the 13th question, it is required for the game to be end-able

    const questionList= 
        [
          {
            id:1,
            question:"Balodan ayrılırken camdan bir ayakkabı bırakan Disney karakteri kimdir?",
            answers:[
              {
                text:"Pocahontas",
                correct:false
              },
              {
                text:"Cindirella1",
                correct:true
              },
              {
                text:"Pamuk Prenses",
                correct:false
              },
              {
                text:"Mulan",
                correct:false
              }]},
              {
                id:13,
                question:"Pick One",
                answers:[
                  {
                    text:"1",
                    correct:false
                  },
                  {
                    text:"2",
                    correct:false
                  },
                  {
                    text:"3",
                    correct:false
                  },
                  {
                    text:"4",
                    correct:false
                  }]},
              
                  
              
            ]
    
    
    return (
    <div onClick={()=>{loadQuestions(questionList)}}>Reload Questions</div>
    )
    }




