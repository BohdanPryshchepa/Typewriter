// const autoText = document.querySelector('.js-auto-text')


// const skills = [
//     'Use',
//     'Learn',
//     'Copy'
// ]


// let skillIndex = 0
// let characterIndex = 0


// const addText = () =>{
//     let interval = setInterval(()=> {
//         characterIndex++;

//         autoText.textContent = `${skills[skillIndex].slice(0,characterIndex)}`

//         if(characterIndex=== skills[skillIndex].length){
//             clearInterval(interval)
//             removeText()
//         }



        
//     //     if(characterIndex=== skills[skillIndex].length){
//     //         setTimeout(() => {
//     //             skillIndex++;
//     //             characterIndex = 0
                   
                
//     //         if(skillIndex === skillIndex.length){
//     //         skillIndex = 0;
//     //         }
//     //         }, 1000);
//     //     }
//     // },400)
// }, 400)}

// addText()

// const removeText = () =>{
//         let interval = setInterval(()=> {
//             if( autoText.textContent.length){
//                 characterIndex--;
//                 autoText.textContent = `${skills[skillIndex].slice(0,characterIndex)}`
//             } else{
//                 clearInterval(interval)
//                 skillIndex++
//                 if(skillIndex === skills.length){
//                     skillIndex = 0
//                 }
//                 addText();
//             }
//     },300)
// }
const autoText = document.querySelector('.js-auto-text');

const skills = ['Use', 'Learn', 'Copy'];
let skillIndex = 0;
let characterIndex = 0;
let isAdding = true;

const addText = () => {
    let interval = setInterval(() => {
        if (isAdding) {
            characterIndex++;
            autoText.textContent = `${skills[skillIndex].slice(0, characterIndex)}`;
            if (characterIndex === skills[skillIndex].length) {
                isAdding = false;
                clearInterval(interval);
                setTimeout(removeText, 1000); // Подождите 1 секунду перед удалением текста
            }
        } else {
            removeText();
            clearInterval(interval);
        }
    }, 400);
}

const removeText = () => {
    let interval = setInterval(() => {
        if (autoText.textContent.length) {
            characterIndex--;
            autoText.textContent = `${skills[skillIndex].slice(0, characterIndex)}`
        } else {
            clearInterval(interval);
            skillIndex++;
            if (skillIndex === skills.length) {
                skillIndex = 0;
            }
            isAdding = true;
            setTimeout(addText, 500); // Подождите 0,5 секунды перед добавлением следующего текста
        }
    }, 300);
}

// Начать анимацию
addText();

// Обработчик события для кнопки
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const text = document.getElementById('text');

    toggleButton.addEventListener('click', function() {
        if (text.classList.contains('opacity')) {
            text.classList.remove('opacity');
            toggleButton.textContent = 'Show';
        } else {
            text.classList.add('opacity');
            toggleButton.textContent = 'Hide';
        }
    });
});
