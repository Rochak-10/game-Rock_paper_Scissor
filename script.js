const Btn_Rules = document.querySelector('.rule_btn');
const Btn_close = document.querySelector('.close');
const Rule_box = document.querySelector('.rules-box');


Btn_Rules.addEventListener('click',() =>{
    Rule_box.classList.toggle('show-rules_box')
})
Btn_close.addEventListener('click',() =>{
    Rule_box.classList.toggle('show-rules_box')
})