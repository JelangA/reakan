const btn = document.querySelectorAll('.container button');
const clear = document.querySelector('.clear');
const input = document.getElementsByName('number')[0];
btn.forEach(button => {
    button.addEventListener('click',function() {
        input.value += button.textContent;
    });
});
clear.addEventListener('click',function() {
    input.value = '';
});