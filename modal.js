//есть два варианта решения, через функцию, что загрезняет глобальную область видимости, но при разных слушателей ивента помогает оптимизироват. 
//второй вариант по затратам памяти более оптимальный в решении именнно этой задачи. 

document.querySelectorAll('[data-modal-toggle]').forEach((element) =>
    element.addEventListener('click', ()=> {
        //Modal() 
        document.querySelector('.modal').classList.toggle("modal-on");
        document.querySelector('.wrapper').classList.toggle("wrapper-on")
    })
)



/*
function Modal(){
document.querySelector('.modal').classList.toggle("modal-on");
document.querySelector('.wrapper').classList.toggle("wrapper-on")
}
*/