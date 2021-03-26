function toggleAnswer(button) {
    button.addEventListener('click', () => {
        const answer = button.parentNode.querySelector('.card__answer')
        answer.classList.toggle('hidden');
        buttonText(button,answer)
        button.innerText = answer.classList.contains('hidden') ? 'Show answer' : 'Hide answer';
    })
}

export { toggleAnswer }

