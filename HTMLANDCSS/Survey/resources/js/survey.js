const form = document.querySelector('#survey-form');
const nameN = document.querySelector('.name_check');
const emailE = document.querySelector('.email_check');
const namesCheck = document.querySelector('#name');
const emailCheck = document.querySelector('#email');
const ageCheck = document.querySelector('#age');
const navigationList = document.querySelector('.navigationList');
const lane = document.querySelector('#land');
const body = document.querySelector('body');
const subMit = document.querySelector('#submit');
const namePattern = /^[a-zA-Z]{4,12}$/;
const emailPattern = /^[a-zA-Z@a-z.a-z]{14,25}$/;
const emailPattern1 = /^[a-zA-Z0-9@a-z.a-z]{14,25}$/;
const names = form.name.value;

//Name validation
form.name.addEventListener('keyup', e => {
    if (namePattern.test(e.target.value)){
        console.log('yoo');
        nameN.style.display = 'none';
        namesCheck.setAttribute('class', 'success');

        form.email.addEventListener('click', e => {
            console.log('clicked me');
            namesCheck.setAttribute('class', 'empty');
        });

    } else {
        console.log('woo');
        // name1.innerHTML += `<p>Username should be atleast 4 letters long.</p>`;
        nameN.style.display = 'block';
        nameN.style.fontSize = '85%';
        namesCheck.setAttribute('class', 'error');
    }
    });


    

//Email validation
form.email.addEventListener('keyup', e => {
    if (emailPattern.test(e.target.value) || emailPattern1.test(e.target.value)){
        console.log('yoo');
        emailE.style.display = 'none';
        emailCheck.setAttribute('class', 'success');
        
        form.age.addEventListener('click', e => {
            console.log('clicked me');
            emailCheck.setAttribute('class', 'empty');
        });

    } else {
        console.log('woo');
        // name1.innerHTML += `<p>Username should be atleast 4 letters long.</p>`;
        emailE.style.display = 'block';
        emailE.style.fontSize = '85%';
        emailCheck.setAttribute('class', 'error');
    }
});


