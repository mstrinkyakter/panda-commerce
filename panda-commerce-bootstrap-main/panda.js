// step1 
const h2 = document.querySelectorAll('h2');
for(const allH2 of h2){
    // console.log(allH2.innerText);
    allH2.style.color = 'lightBlue';
}

// step2 
const changeBackground = document.getElementById('backpack');
changeBackground.style.backgroundColor = 'tomato';

// step3 
document.getElementById('exampleInputEmail1').addEventListener('keyup',function(event){
   const text = event.target.value ;
  const submit = document.getElementById('submit-btn');
   
   if(text === "email"){
    submit.removeAttribute('disabled');
   }
   else{
    submit.setAttribute('disabled',true);
   }
})

// step4 
const card = document.querySelectorAll('.card');
for (const cards of card){
    // console.log(cards.innerHTML);
    cards.style.borderRadius  = '30px';
}

// step6 
// document.getElementsByClassName('btn ').addEventListener('click', function(){
//     console.log('clicked');
// })
// const button = document.querySelectorAll('.btn');
