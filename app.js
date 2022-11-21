
const preguntas = document.querySelectorAll('.pregunta');

preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        pregunta.classList.toggle('open');
        
        const img = pregunta.querySelector('.pregunta__info img');
        if(img.className === 'arrow'){
            img.className = 'arrow__active';
        } else {
            img.className = 'arrow';
        }

        const h4 = pregunta.querySelector('.pregunta__info h4');
        if(h4.className === 'pregunta__h4'){
            h4.className = 'pregunta__h4--active';
        } else {
            h4.className = 'pregunta__h4';
        }

    });
});