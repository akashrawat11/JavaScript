const ques_ans = [
    {
        'ques': "How to Write an FAQ Section for Your Website?",
        'ans': "Learn how to write a FAQ section for your website."
    },
    {
        'ques': "What Is a Landing Page? [FAQs]",
        'ans': "Get the low-down on exactly what a landing page is and some tips for using them for your business."
    },
    {
        'ques': "Why Your Website Needs an FAQ Page?",
        'ans': "FAQ can be incredibly useful for saving the user's time and the customer service team as well. If a customer can find an answer to their problem with ease, they will not have to pick up a phone, send an email, or engage with you live chat."
    },
    {
        'ques': "Why makes Owls FAQ page a good example?",
        'ans': "Many FAQs are purely functional, using bare-bones and matter-of-fact copy. Thats why Owl choosing to inject levity and silliness into their FAQ makes their voice more visible than elsewhere. Its a calculated risk and it isnt necessarily a good fit for all businesses, but can pay off when executed well."
    }
]

const container = document.querySelector('.container');

let id = 0;
ques_ans.forEach(element => {
    const faqs = document.createElement('div');
    const questContainer = document.createElement('div');
    const answerContainer = document.createElement('div');
    const quest = document.createElement('p');
    const answer = document.createElement('p');
    const button = document.createElement('button');
    faqs.classList.add('faqs');
    questContainer.classList.add('question-container');
    quest.classList.add('question');
    answerContainer.classList.add('answer-container');
    answerContainer.classList.add('hide');
    answer.classList.add('answer');
    button.classList.add('expand');
    button.id = id;
    id += 1;

    questContainer.appendChild(quest);
    questContainer.appendChild(button);
    answerContainer.appendChild(answer);
    faqs.appendChild(questContainer);
    faqs.appendChild(answerContainer);

    quest.innerHTML = element.ques;
    answer.innerHTML = element.ans;
    button.innerHTML = '+';
    container.appendChild(faqs);
});

const buttons = document.querySelectorAll('button');
const answers = document.querySelectorAll('.answer-container');

buttons.forEach((element,id)=>{
    element.addEventListener('click',()=>{
        answers[id].classList.toggle('hide');
    })
})


