import { quizData } from "./data.js";

const root = document.querySelector("div")

root.style.display = "flex"
root.style.flexDirection = 'column'
root.style.justifyContent = 'center'
root.style.alignItems = 'center'
root.style.border = "2px black solid"
root.style.padding = "15px"
root.style.boxSizing = "border-box"
root.style.marginTop = "40px"
root.style.width = "300px";



const content = document.createElement('div');

content.style.marginBottom = 30;

const but = document.createElement('button');

but.style.backgroundColor = 'purple'
but.style.padding = "5px 30px";
but.style.color = "white";
but.style.fontSize = "medium"
but.style.border = "none"
but.style.borderRadius = "20px"
root.style.backgroundColor = "white"


let currentIndex = 0;
let marks = 0;

root.appendChild(content);
root.appendChild(but);


const questionShow = (n) => {
  content.innerHTML = ""
  but.innerHTML = "Submit"
  const que = document.createElement("h4");
  que.innerHTML = quizData[n].question;

  que.style.fontSize = "large";

  content.appendChild(que);

  ['a','b','c','d'].forEach(opt => {
    const div = document.createElement('div')
    const input = document.createElement('input');
    input.type = "radio";
    input.name = "quiz";
    input.value = opt;
    input.id = opt;

    const label = document.createElement('label');
    label.setAttribute('for', opt);
    label.id = opt;
    label.innerHTML = quizData[n][opt]

    label.style.paddingLeft = 10;

    div.appendChild(input);
    div.appendChild(label);
    content.appendChild(div);
  })
}

function result(){
  content.innerHTML = "";
  const h4 = document.createElement('h4');
  h4.innerHTML = `You answerd ${marks}/${quizData.length} correctly`
  content.appendChild(h4);
  but.innerHTML = 'Reload';
}

function restart(){
  currentIndex = 0;
  marks = 0;
  questionShow(0);
}

but.addEventListener("click", () => {
  if(but.innerHTML == "Reload"){
      restart();
      return;
    }
  if(currentIndex >= quizData.length - 1){
    result();
    return;
  }

  

  const input = document.querySelector('input[name="quiz"]:checked')
  if(!input){
    alert("Fill the option");
    return;
  }
  if(input.value ==quizData[currentIndex].correct){
    marks++;
  }
  currentIndex++;
  questionShow(currentIndex);
})

questionShow(0);