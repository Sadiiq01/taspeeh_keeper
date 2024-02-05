// nav bar responsivity

let burger = document.querySelector('.burger')
let navigationBars = document.querySelector('.navigation-bars')

burger.addEventListener('click' , function(){
    navigationBars.classList.toggle('active')
})

// selecting navbars

let homeBtn= document.querySelector('#Home')
let contactUsBtn= document.querySelector('#Contact-Us')
let aboutAsBtn = document.querySelector('#About-Us')
let startOneBtn= document.querySelector('#startOne')

// home-page selecting 

let homeConatainer = document.querySelector('.home-page-container')
let taspeehStartOne = document.querySelector('.taspeeh-start-one')
let taspeehStartTwo = document.querySelector('.taspeeh-start-two')
let taspeehStartThree = document.querySelector('.taspeeh-start-three')



//about selecting 
let aboutContainer= document.querySelector('.about-page-container')

// contact us 

let contactContainer = document.querySelector(".contact-us-container")
let submitContact = document.querySelector('.submit-contact')

// start container

let startContainer = document.querySelector('.container-of-taspeehes')
let btnTaspeehOne = document.querySelector('.btn-taspeeh-one')
let btnTaspeehTwo= document.querySelector('.btn-taspeeh-two')
let btnTaspeehThree = document.querySelector('.btn-taspeeh-three')

// taspeeh 100 container selecting 

let taspeeh100Container= document.querySelector('.taspeeh-100-container')
let pressOne = document.querySelector('.pressOne')
let restOne = document.querySelector('.restOne')
let returnONe = document.querySelector('.returnOne')
let inp100Container = document.querySelector('.container-taspeeh input')
let span100Container= document.querySelector('#span100Container')

// taspee 2000 container selecting

let taspeeh2000container = document.querySelector('.taspeeh-2000-container')
let pressTwo = document.querySelector('.pressTwo')
let restTwo = document.querySelector('.restTwo')
let returnTwo = document.querySelector('.returnTwo')
let inp2000container = document.querySelector('.container-taspeeh2 input')

//  tasppeh costum face one 
let inpCostumFaceOne = document.querySelector('.taspeeh-costum-face-one input ')
let next = document.querySelector('.next')
let returnThree = document.querySelector('.returnThree')

// taspeeh costum container face two 

let taspeehCostumContainer =document.querySelector('.taspeeh-costum-container')
let pressThree = document.querySelector('.pressThree')
let restThree = document.querySelector('.restThree')
let returnFour = document.querySelector('.returnFOur')
let inpCostumContainer=document.querySelector('.taspeeh-costum-face-two input')
let inpTaspeehCostumFaceOne= document.querySelector('.taspeeh-costum-face-one input')

// function of styling

homeBtn.addEventListener('click', function(){
    window.location.reload()
})

aboutAsBtn.addEventListener('click' , function(){
    aboutContainer.classList.remove('de-active')
    homeConatainer.classList.add('de-active')
    contactContainer.classList.add('de-active')
    startContainer.classList.add('de-active')
    taspeeh100Container.classList.add('de-active')
    taspeeh2000container.classList.add('de-active')
    taspeehCostumContainer.classList.add('de-active')
})

contactUsBtn.addEventListener('click' , function(){
    aboutContainer.classList.add('de-active')
    homeConatainer.classList.add('de-active')
    contactContainer.classList.remove('de-active')
    startContainer.classList.add('de-active')
    taspeeh100Container.classList.add('de-active')
    taspeeh2000container.classList.add('de-active')
    taspeehCostumContainer.classList.add('de-active')
})

startOneBtn.addEventListener('click' , function(){
    aboutContainer.classList.add('de-active')
    homeConatainer.classList.add('de-active')
    contactContainer.classList.add('de-active')
    startContainer.classList.remove('de-active')
    taspeeh100Container.classList.add('de-active')
    taspeeh2000container.classList.add('de-active')
    taspeehCostumContainer.classList.add('de-active')
})

taspeehStartOne.addEventListener('click' , function(){
    aboutContainer.classList.add('de-active')
    homeConatainer.classList.add('de-active')
    contactContainer.classList.add('de-active')
    startContainer.classList.add('de-active')
    taspeeh100Container.classList.remove('de-active')
    taspeeh2000container.classList.add('de-active')
    taspeehCostumContainer.classList.add('de-active')
})
btnTaspeehOne.addEventListener('click' , function(){
    aboutContainer.classList.add('de-active')
    homeConatainer.classList.add('de-active')
    contactContainer.classList.add('de-active')
    startContainer.classList.add('de-active')
    taspeeh100Container.classList.remove('de-active')
    taspeeh2000container.classList.add('de-active')
    taspeehCostumContainer.classList.add('de-active')
})

taspeehStartTwo.addEventListener('click' , function(){
    aboutContainer.classList.add('de-active')
    homeConatainer.classList.add('de-active')
    contactContainer.classList.add('de-active')
    startContainer.classList.add('de-active')
    taspeeh100Container.classList.add('de-active')
    taspeeh2000container.classList.remove('de-active')
    taspeehCostumContainer.classList.add('de-active')
})

btnTaspeehTwo.addEventListener('click' , function(){
    aboutContainer.classList.add('de-active')
    homeConatainer.classList.add('de-active')
    contactContainer.classList.add('de-active')
    startContainer.classList.add('de-active')
    taspeeh100Container.classList.add('de-active')
    taspeeh2000container.classList.remove('de-active')
    taspeehCostumContainer.classList.add('de-active')
})
taspeehStartThree.addEventListener('click' , function(){
    aboutContainer.classList.add('de-active')
    homeConatainer.classList.add('de-active')
    contactContainer.classList.add('de-active')
    startContainer.classList.add('de-active')
    taspeeh100Container.classList.add('de-active')
    taspeeh2000container.classList.add('de-active')
    taspeehCostumContainer.classList.remove('de-active')
})

btnTaspeehThree.addEventListener('click' , function(){
    aboutContainer.classList.add('de-active')
    homeConatainer.classList.add('de-active')
    contactContainer.classList.add('de-active')
    startContainer.classList.add('de-active')
    taspeeh100Container.classList.add('de-active')
    taspeeh2000container.classList.add('de-active')
    taspeehCostumContainer.classList.remove('de-active')
})

// counting 
let count = 0 
let score= 0
span100Container.innerHTML= score

pressOne.addEventListener('click' , function (){
   count+=1
   inp100Container.value=count
   if(count==100){
    alert("Congratulation!")
    score+= 1
    span100Container.innerHTML= score
    count=0
    inp100Container.value= count
    if(score==4){
        alert('جَزَاكَ ٱللَّٰهُ')
        score= 0
    } 
   }
})

restOne.addEventListener('click' , function(){
    count= 0 
    inp100Container.value= count
})

returnONe.addEventListener('click' , function(){
    aboutContainer.classList.add('de-active')
    homeConatainer.classList.add('de-active')
    contactContainer.classList.add('de-active')
    startContainer.classList.remove('de-active')
    taspeeh100Container.classList.add('de-active')
    taspeeh2000container.classList.add('de-active')
    taspeehCostumContainer.classList.add('de-active')
})


pressTwo.addEventListener('click' , function (){
   count+=1
   inp2000container.value= count
   if(count==2000){
    alert("Congratulation!")
    count=0
    inp2000container.value= count
   }
})

restTwo.addEventListener('click' , function(){
    count= 0 
    inp2000container.value= count
})

returnTwo.addEventListener('click' , function(){
    aboutContainer.classList.add('de-active')
    homeConatainer.classList.add('de-active')
    contactContainer.classList.add('de-active')
    startContainer.classList.remove('de-active')
    taspeeh100Container.classList.add('de-active')
    taspeeh2000container.classList.add('de-active')
    taspeehCostumContainer.classList.add('de-active')
})



pressThree.addEventListener('click' , function(){
   if(inpCostumFaceOne.value=='' || inpCostumFaceOne.value==0 ){
    return alert ('Please Enter The First Face min  Number is 1 ')
   } else {
    count+=1
    inpCostumContainer.value= count
    if(inpCostumContainer.value===inpCostumFaceOne.value){
        alert('congratulation')
    }
   }
})

restThree.addEventListener('click' , function(){
    count=0
    inpCostumContainer.value = count
})

returnThree.addEventListener('click' , function(){
    aboutContainer.classList.add('de-active')
    homeConatainer.classList.add('de-active')
    contactContainer.classList.add('de-active')
    startContainer.classList.remove('de-active')
    taspeeh100Container.classList.add('de-active')
    taspeeh2000container.classList.add('de-active')
    taspeehCostumContainer.classList.add('de-active')
})

returnFour.addEventListener('click' , function(){
    aboutContainer.classList.add('de-active')
    homeConatainer.classList.add('de-active')
    contactContainer.classList.add('de-active')
    startContainer.classList.remove('de-active')
    taspeeh100Container.classList.add('de-active')
    taspeeh2000container.classList.add('de-active')
    taspeehCostumContainer.classList.add('de-active')
})

let logo= document.querySelector('.header-container img')

logo.addEventListener('click' , function(){
    window.location.reload()
})
