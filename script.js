
const inputs = [
  {input: nameInput = document.getElementById('name-input'), error: document.getElementById('name-error')},
  {input: emailInput = document.getElementById('email-input'),error: document.getElementById('email-error')}
];
const email = inputs[1].input;
let step = 0;
let stepInput = document.getElementById('step-input');

//INFO CHANGES
const nameInfo = document.getElementById('name-info');
const emailInfo = document.getElementById('email-info');


// //ALL FORM FILLED
// var formFilled = false;

//DISPLAYS
const registerDisplay = document.getElementById('register');
const topicsDisplay = document.getElementById('topics');
const summaryDisplay = document.getElementById('summary');

let currentStep = 0;
//STEPPERS
const steppers = [
  {step: document.getElementById('step1')},
  {step: document.getElementById('step2')},
  {step: document.getElementById('step3')}
]

function updateStepper(currentStep){
  steppers.forEach(({step}, index)=>{
    if(index < currentStep){
      step.style.background = '#845EEE';
      step.style.boxShadow = 'none'
    }else if(index === currentStep){
      step.style.background = '#845EEE'
      step.style.boxShadow = '0px 0px 1px 5px #662cd189';
    }else{
      step.style.background = '#394150';
      step.style.boxShadow = 'none';
    }
  })
}
//'0px 0px 1px 5px #662cd189';
//VALIDATION EMAIL AND NAME

function validation(){
  inputs.forEach(({input,error})=>{
    if(input.value === ''){
      error.style.display = 'block';
      setTimeout(()=>{
      error.style.display = 'none';
      },3000)
      return false;

    }else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      inputs[1].error.style.display = 'block';
      setTimeout(()=>{
      inputs[1].error.style.display = 'none';
      },3000)
      return false;
    }
  continue1();
  nameInfo.innerHTML = inputs[0].input.value;
  emailInfo.innerHTML = email.value;
  return true;
  })
}
inputs.forEach((item=>{
  item.input.addEventListener('click', ()=>{
    item.input.style.border = '3px solid #845EEE';
    
  })
  item.input.addEventListener('blur', ()=>{
    item.input.style.border = '2px solid #4D5562';
  })
}))


function continue1(){
  registerDisplay.style.display = 'none';
  topicsDisplay.style.display = 'block';
  step++;
  stepInput.innerHTML = step;
  updateStepper(step - 1);

}

//TOPICS VALIDATION

const listContainer = document.getElementById('list-container');

const buttons = [
  {button: document.getElementById('btn1')},
  {button: document.getElementById('btn2')},
  {button: document.getElementById('btn3')}
]


function topicValidation(){
  buttonClicked = false;
  buttons.forEach(item =>{
  item.button.addEventListener('click', ()=>{
    
      item.button.classList.add('option');
      let li = document.createElement('li');
      li.innerHTML = item.button.value;
      listContainer.appendChild(li);
   
    return buttonClicked = true;
  });
});
}
topicValidation();

function continue2(){
  if(buttonClicked){
  topicsDisplay.style.display = 'none';
  summaryDisplay.style.display = 'block';
  step++;
  stepInput.innerHTML = step;

  updateStepper(step - 1);
  }
}

//SUMMARY VALIDATION

function summary(){
  alert('✅ Success');
  formFilled = true;
}
updateStepper(currentStep);

