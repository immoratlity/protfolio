// const NumberOfSeries = +prompt ( 'Сколько сериалов видели?')

// const seriasDB = {
//     count:NumberOfSeries,
//     serias: {},
//     actors: [],
//     genres: [],
//     private: true,
// }

// function logger () {
//     for(let i = 0; i < 2; i++){
//         const a = prompt( 'Последний сериал, который ты смотрел?');
//         const b = +prompt ( 'Оцените сериал от 1-10?');
//         if (a !== "" && b !== "" && a !== null && b !== ""){
//         seriasDB.serias[a] = b
//         }else{
//             i--
//         }
//     }
// }

// logger()

// function logger2() {
//     if(NumberOfSeries < 5){
//         console.log('Вы не посмотрели несколько серий');
//     }else if(NumberOfSeries > 5 && NumberOfSeries < 10){
//         console.log('Вы классический зритель');
//     }else if(NumberOfSeries > 10)
//         console.log('Вы звезда сериалов');
// }

// logger2()

// function showDb () {
//     if(seriasDB.private == false) {
//         console.log(seriasDB);
//     }
// }

// showDb()








// // function decloration
// function decloration (a,b) {
//     // console.log(a);
//     return a - b
// }
// console.log(decloration(10,5));

// // decloration()

// // function expression
// const expression = function () {
//     console.log(2);
// }

// expression()

// // arrow function
// const arrow = () =>{
//     console.log(3);
// }

// arrow()


// const person = {
//     name:'timur',
//     age:22,
//     sayHello:function () {
//         console.log('Hello');
//     }
// }

// person.sayHello()

const num1 = prompt ('first number')
const num2 = prompt ('second number')
const operator = prompt ('operator + - * /')

if(operator == '+'){
    alert(+num1 + +num2)
    console.log(+num1 + +num2);
}else if(operator == '-'){
    alert(num1 - num2)
    console.log(num1 - num2);
}else if(operator == '*'){
    alert(num1 * num2)
    console.log(num1 * num2);
}else if(operator == '/'){
    alert(num1 / num2)
    console.log(num1 / num2);
}