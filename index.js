// Задача №1.
/*
let first_Number = prompt('Введите первое число!');
let second_Number = prompt('Введите второе число!');
first_Number = +first_Number;
second_Number = +second_Number;
function comparing_Numbers(first_Number, second_Number) {
    if (first_Number > second_Number) {
        return 1;
    }
    else if (first_Number < second_Number) {
        return -1;
    }
    else { return 0; }
}

alert(comparing_Numbers(first_Number, second_Number));
*/
//--------------------------------------------------------------------------

// Задача №2.
/*
let user_Number = prompt('Введите число!');
let rezult = 1;
function calculating_The_Factorial(user_Number) {
    for (let i = 1; i <= user_Number; i++) {
        rezult = i * rezult;
    }
    return rezult;
}

alert(calculating_The_Factorial(user_Number));
*/
//---------------------------------------------------------------------

// Задача №3.
/*
let first_Number = prompt('Введите первое число!');
let second_Number = prompt('Введите второе число!');
let third_Number = prompt('Введите второе число!');

function new_Number(first_Number, second_Number, third_Number) {
    let rezult = first_Number + second_Number + third_Number;
    return rezult;
}

alert(new_Number(first_Number, second_Number, third_Number));
*/
//------------------------------------------------------------------------

// Задача №4.
/*
let rectangle_Length = prompt('Введите длину прямоугольника!');
let rectangle_Width = prompt('Введите ширину прямоугольника!');

if (rectangle_Length && rectangle_Width) {
    function rectangle_Area(rectangle_Length, rectangle_Width) {
      let rezult = rectangle_Length * rectangle_Width;
      return rezult;
    }
}
else if (rectangle_Length || rectangle_Width) {
    function rectangle_Area(rectangle_Length, rectangle_Width) {
        let rezult = rectangle_Length * rectangle_Length + rectangle_Width * rectangle_Width;
        return rezult;
    }
}

alert(`S = ${rectangle_Area(rectangle_Length, rectangle_Width)}`);
*/
//--------------------------------------------------------------------------

// Задача №5.
/*
let user_Number_1 = prompt('Введите число', '');
user_Number_1 = +user_Number_1;
let summa = 0;
function the_Perfect_Number(user_Number_1) {
    for (let i = 1; i < user_Number_1; i++) {
        if (user_Number_1 % i === 0) {
            summa = summa + i;
            //console.log(i);       
        }
    }
    return summa;
}

the_Perfect_Number(user_Number_1);

if (summa === user_Number_1) {
    alert(`число : ${user_Number_1}, является совершенным!`);
}
else {
    alert(`число : ${user_Number_1}, не является совершенным!`);
}
*/
//-------------------------------------------------------------------------------------

// Задача №6.
/*
let first_Number_1 = prompt('Введите минимальное число диапазона', '');
let second_Number_2 = prompt('Введите максимальное число диапазона', '');
first_Number_1 = +first_Number_1;
second_Number_2 = +second_Number_2;
let summa_2 = 0;

for (first_Number_1; first_Number_1 <= second_Number_2; first_Number_1++) {
    function the_Perfect_Number(first_Number_1) {
        for (let i = 1; i < first_Number_1; i++) {
            if (first_Number_1 % i === 0) {
                summa_2 = summa_2 + i;
            }
        }
        return summa_2;
    }

    the_Perfect_Number(first_Number_1);

    if (summa_2 === first_Number_1) {
        console.log(first_Number_1);
    }

    summa_2 = 0;
}
*/
//---------------------------------------------------------------------------------------

// Задача №7.
/*
let user_Watch = prompt('Введите часы!', '');
let user_Minutes = prompt('Введите минуты!', '');
let user_Seconds = prompt('Введите секунды!', '');

function time_Output(user_Watch) {
    if (user_Watch === '') {
        user_Watch = '00';
        console.log(user_Watch);
    }
    else if (user_Watch != '' && user_Watch < 10) {
        user_Watch = '0' + user_Watch;
        console.log(user_Watch);
    }
    else {user_Watch;}
    console.log(user_Watch);
    return user_Watch;  
}

function time_Output(user_Minutes) {
    if (user_Minutes === '') {
        user_Minutes = '00';
        console.log(user_Minutes);
    }
    else if (user_Minutes != '' && user_Minutes < 10) {
        user_Minutes = '0' + user_Minutes;
        console.log(user_Watch);
    }
    else {user_Minutes;}
    console.log(user_Minutes);
    return user_Minutes;  
}

function time_Output(user_Seconds) {
    if (user_Seconds === '') {
        user_Seconds = '00';
        console.log(user_Seconds);
    }
    else if (user_Seconds != '' && user_Seconds < 10) {
        user_Seconds = '0' + user_Seconds;
        console.log(user_Seconds);
    }
    else {user_Seconds;}
    console.log(user_Seconds);
    return user_Seconds;  
}

alert(`${time_Output(user_Watch)} : ${time_Output(user_Minutes)} : ${time_Output(user_Seconds)}`);
*/
//--------------------------------------------------------------------------------------------------

// Задача №8.
/*
let user_Watch = prompt('Введите часы!', '');
let user_Minutes = prompt('Введите минуты!', '');
let user_Seconds = +prompt('Введите секунды!', '');

function jast_Seconds(user_Watch, user_Minutes, user_Seconds) {
    let user_Watch_Seconds = user_Watch * 3600;
    let user_Minutes_Seconds = user_Minutes * 60;
    let all_Seconds = user_Watch_Seconds + user_Minutes_Seconds + user_Seconds;
    return all_Seconds;
}

alert(jast_Seconds(user_Watch, user_Minutes, user_Seconds));
*/
//------------------------------------------------------------------------------------------------------------

// Задача №9. 
/*
let number_Of_Seconds = prompt('Введите общее количество секунд');

function converting_To_Hours(number_Of_Seconds) {
    let watch = Math.floor(number_Of_Seconds / 3600);
    console.log(watch);
    if (watch === 0) {
        watch = '00';
    }
    else if (watch < 10) {
        watch = '0' + watch;
    }
    else { watch; }
    let value = number_Of_Seconds % 3600;
    console.log(value);
    let minutes = Math.floor(value / 60);
    console.log(minutes);
    if (minutes === 0) {
        minutes = '00';
    }
    else if (minutes < 10) {
        minutes = '0' + minutes;
    }
    else { minutes; }
    let seconds = value % 60;
    console.log(seconds);
    if (seconds === 0) {
        seconds = '00';
    }
    else if (seconds < 10) {
        seconds = '0' + seconds;
    }
    else { seconds; }

    let time = `${watch} : ${minutes} : ${seconds}`;
    console.log(time);
    return time;
}

converting_To_Hours(number_Of_Seconds);

alert(converting_To_Hours(number_Of_Seconds));
*/