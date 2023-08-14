const h2 = document.querySelectorAll('h2');
for(const allH2 of h2){
    // console.log(allH2.innerText);
    allH2.style.color = 'lightBlue';
}


// const changeBackground = document.getElementById('backpack');
// for(const section of changeBackground){
//   console.log(section.innerText);
// }


document.getElementById('exampleInputEmail1').addEventListener('keyup',function(event){
   const text = event.target.value ;
  const submit = document.getElementById('submit-btn');
   if(text === "email"){
    submit.removeAttribute = ('disabled');
   }
   else{
    submit.setAttribute = ('disabled',true);
   }
})