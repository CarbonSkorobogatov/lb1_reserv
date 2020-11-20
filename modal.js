document.querySelectorAll('[data-modal-toggle]').forEach((element) =>
    element.addEventListener('click', ()=> 
        Modal()
    )
)




function Modal(){
document.querySelector('.modal').classList.toggle("modal-on");
document.querySelector('.wrapper').classList.toggle("wrapper-on")
}
