'use strict';

document.querySelectorAll('.show-modal').forEach(ele  => ele.addEventListener('click', remove));
document.querySelector('.close-modal').addEventListener('click', add);
window.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && !document.querySelector('.modal').classList.contains('hidden')) add();
})
document.querySelector('.modal').addEventListener('mouseout', () =>{
    document.querySelector('.overlay').addEventListener('click', add);
})
function remove(){
    document.querySelector('.modal.hidden').classList.remove('hidden');
    document.querySelector('.overlay.hidden').classList.remove('hidden');
}
function add(){
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
}
