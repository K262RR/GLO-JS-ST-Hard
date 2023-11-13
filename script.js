num = 266219;

const numArray = num.toString().split('');
console.log(numArray);

let sum = 1;

numArray.forEach(element => {
    sum *= parseInt(element)
    console.log('Сумма сейчас: ' + sum)
});

sum = sum ** 3;
console.log(sum);
sum = sum.toString();
let res = sum.substring(-1, 2);


console.log(res);