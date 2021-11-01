const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const para = document.querySelector('.para');
const edge = document.querySelector('.grow');
form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    //Checking answers
    //index is initially 0 (default and auto-increments itself)
    userAnswers.forEach((answers, index) => {
        if(answers === correctAnswers[index]){
            score += 25; 
        }
        console.log(answers);
    });

    //Show result on page
    // result.classList.remove('d-none');
    // result.style.display = 'block';
    // para.textContent = `${score}%`;
    // console.log(result.style);

    //Or
    scrollTo(0, 0);
    result.classList.remove('d-none');
    console.log(edge);
    edge.style.borderTopStyle = 'red';
    edge.style.borderTopWidth = '10px';
    edge.style.borderTopColor = 'red';
    edge.style.height = '5px';
    edge.textContent = ` `;
    edge.style.display = 'block';
    alert('Confirming answer submission?');

    let i = 0;
    const timer = setInterval(() => {
        console.log('hello');
        result.querySelector('span').textContent = `${i}%`;
        edge.style.width = `${i}%`;
        if(i === score){
            clearInterval(timer);
        } else{        
            i++;
        }
    }, 50);

}); 