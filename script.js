const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnClose = document.querySelector('.close-modal')

const showModal = document.querySelectorAll('.show-modal')



const show = ()=>{ 

  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}



for(let i = 0; i < showModal.length ; i++ ){ //for each button we add the click event that remove the hidden class
 
  showModal[i].addEventListener('click' , show )

}


const closeModal = () =>{   //we created a function that onclick adds  the hidden class

   modal.classList.add('hidden')
   overlay.classList.add('hidden')

}

overlay.addEventListener('click' , closeModal)
btnClose.addEventListener('click', closeModal)


//ESC KEY EVENT
 // once we press the key ,it starts the function and we make the event as argument  
 
document.addEventListener('keydown' , (e)=>{ 
  
 if(e.key == 'Escape' && !modal.classList.contains('hidden') )closeModal()
 

})