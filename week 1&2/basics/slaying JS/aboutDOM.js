//DOM : document object model 
// console.log(window)//parent obj of browser

//single element selectors
// const form = document.getElementById('my-form');
// console.log(form)

// const container = document.querySelector('.container');
// console.log(container)

//multiple element selectors
// const items =document.querySelectorAll('.item')//returns a nodelist 
// console.log(items)

//EVENT LISTENER & from validation
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg. innerHTML = 'Please enter all fields';
        setTimeout(()=> msg.remove(),3000);//in
    } else {
        console. log('success');
        //clear fields 
        nameInput.value = ''
        emailInput.value = ''
    }
}
