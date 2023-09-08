const wordsForButtons = ['station','museum','hotel','university','building' ,'building2','stock','university2','mall', 'rescue tower',];
const buttons = document.querySelectorAll('button');
const picture = document.querySelector('.container');


picture.addEventListener('click', (e)=>{
    if(e.target.classList.contains('button')){
       e.target.classList.contains('open')? 
       e.target.textContent = ``:    
        wordsForButtons.forEach((word, i)=>{
           if (e.target.classList[2] == (i+1)){
            e.target.textContent = 
            `${word}`
            
            console.log(word);
           }
        })
        e.target.classList.toggle('open');
    }
});


        
    
// window.addEventListener('resize',() => {
//     const width= document.body.clientWidth,
//     one=document.querySelector('.one'),
//     two=document.querySelector('.two'),
//     three=document.querySelector('.three'),
//     four=document.querySelector('.four'),
//     five=document.querySelector('.five'),
//     six=document.querySelector('.six'),
//     seven=document.querySelector('.seven'),
//     eight=document.querySelector('.eight'),
//     nine=document.querySelector('.nine'),
//     ten=document.querySelector('.ten');


//     // const calculateLeft= (el, position) => {
//     //     const left=(position-((1920-width)/2));
//     //     left > width ? 
//     //     el.style.display=`none`:
//     //     el.style.display=`block`;
//     //     el.style.left=`${left}px`;
//     // }

//     const calculateLeft = function(el,position,differece){
//         const left = (position + ((1920 - width)/100)*differece);
//         left > width ? 
//             el.style.display=`none`:
//             el.style.display=`block`;
//             el.style.left=`${left}px`;
//     };
//  calculateLeft(one, 665, 35);
//  calculateLeft(two, 1160, 70);
//  calculateLeft(three, 1200, 65);
//  calculateLeft(four, 1300, 65);
//  calculateLeft(five, 500, 25);
//  calculateLeft(six, 1400, 72);
//  calculateLeft(seven, 1400, 72);
//  calculateLeft(eight, 1700, 90);
//  calculateLeft(nine, 1100, 60);
//  calculateLeft(ten, 425, 24);
  
// });


