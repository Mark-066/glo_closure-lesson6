'use strict';

let compNumber = 53;
alert("Угадай число от 0 до 100");

function guessCompNumber (compNumber) {
    function userAnswer() {
        let userNumber = +prompt("Введите Ваш вариант: ");
        while (isNaN(userNumber) || userNumber === "") {
            userAnswer();
        //не понимаю, как остановить. Даже, если число угадано праивльно, функция запускается по новой. Break не помог    
        }

        if (userNumber == compNumber) {
            confirm("Вы угадали!");
        }else if (userNumber < compNumber) {
            confirm("Загаданное число больше");
            userAnswer();
        }else if (userNumber > compNumber) {
            confirm("Загаданное число меньше");
            userAnswer();
        }else if (userNumber === false){
        //не понимаю, как сделать проверку, если пользователь нажимает кнопку отмены. У меня циклится код, без остановки. Писал, как в теле IFов, так и отдельным, ничего не дало
            confirm("Игра окончена");
        }
    }
    userAnswer();
}
guessCompNumber();