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
            id:2,
            question:"Which question is this?",
            answers:[
              {
                text:"1",
                correct:false
              },
              {
                text:"2",
                correct:true
              },
              {
                text:"3",
                correct:false
              },
              {
                text:"4",
                correct:false
              }]},
          {
            id:3,
            question:"Which question is this?",
            answers:[
              {
                text:"4",
                correct:false
              },
              {
                text:"3",
                correct:true
              },
              {
                text:"8",
                correct:false
              },
              {
                text:"6",
                correct:false
              }]},
          {
            id:4,
            question:"Which question is this?",
            answers:[
              {
                text:"6",
                correct:false
              },
              {
                text:"4",
                correct:true
              },
              {
                text:"7",
                correct:false
              },
              {
                text:"9",
                correct:false
              }]},
          {
            id:5,
            question:"Which question is this?",
            answers:[
              {
                text:"3",
                correct:false
              },
              {
                text:"5",
                correct:true
              },
              {
                text:"4",
                correct:false
              },
              {
                text:"7",
                correct:false
              }]},
          {
            id:6,
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




