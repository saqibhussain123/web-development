var html =[
    {
        question:"what does html stand for",
        Option1:"Hyper text Markup language",
        Option2:"Hyper text  language",
        Option3:"Hyper text",
        correctOption:"Hyper text Markup language"
    },
    {
        question:"what does html stand for",
        Option1:"Hyper text Markup language",
        Option2:"Hyper text  language",
        Option3:"Hyper text",
        correctOption:"Hyper text Markup language"
    },
    {
        question:"what does html stand for",
        Option1:"Hyper text Markup language",
        Option2:"Hyper text  language",
        Option3:"Hyper text",
        correctOption:"Hyper text Markup language"
    },
    {
        question:"what does html stand for",
        Option1:"Hyper text Markup language",
        Option2:"Hyper text  language",
        Option3:"Hyper text",
        correctOption:"Hyper text Markup language"
    },
    {
        question:"what does html stand for",
        Option1:"Hyper text Markup language",
        Option2:"Hyper text  language",
        Option3:"Hyper text",
        correctOption:"Hyper text Markup language"
    },
    {
        question:"what does html stand for",
        Option1:"Hyper text Markup language",
        Option2:"Hyper text  language",
        Option3:"Hyper text",
        correctOption:"Hyper text Markup language"
    },
    {
        question:"what does html stand for",
        Option1:"Hyper text Markup language",
        Option2:"Hyper text  language",
        Option3:"Hyper text",
        correctOption:"Hyper text Markup language"
    },
    {
        question:"what does html stand for",
        Option1:"Hyper text Markup language",
        Option2:"Hyper text  language",
        Option3:"Hyper text",
        correctOption:"Hyper text Markup language"
    },
    {
        question:"what does html stand for",
        Option1:"Hyper text Markup language",
        Option2:"Hyper text  language",
        Option3:"love",
        correctOption:"Hyper text Markup language"
    },
]

var ques =document.getElementById('ques')
var opt1 =document.getElementById('opt1')
var opt2 =document.getElementById('opt2')
var opt3 =document.getElementById('opt3')

var index=0;
var btn =document.getElementById('btn')

function nextquestion(){

  var getoption=document.getElementsByName('options')
  for(var i=0;i<getoption.length;i++){
// console.log(getoption[i].value)

var selectedvalue =getoption[i].value
var selectque =  question[index-1]
console.log(selectque)
    getoption[i].checked =false
    // console.log(getoption[i])
  }
  btn.disabled =true
    if(index >html.length -1){
        console.log("question empty")
    }else{
    ques.innerText=html[index].question
    opt1.innerText=html[index].Option1
    opt2.innerText=html[index].Option2
    opt3.innerText=html[index].Option3
    index++
}}
nextquestion();


function clicked(){
  
    btn.disabled=false
}