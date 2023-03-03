//Вивести на сторінку в один рядок через кому числа від 10 до 20.

let y = [];

for (let i = 10; i <= 20; i++) {
    y.push([i]); 
}

alert(y)



//Вивести квадрати чисел від 10 до 20.

let square = function(n) {
    return n * n;
  }

  let y = [];

for (n = 10; n <= 20; n++) {
    y.push(square([n])); 
}

alert(y)



//Вивести таблицю множення на 7.

let res = '';
let y = 7;
let n = [];
function multiply() {
	for (var i = 1; i < 11; i++) {
			res  += (y*i) + " ";  
               n.push(i + " x " + y + " = " + res);
               res = '';  
	}  
    alert(n.join('\n'));
}	
multiply();



//Знайти суму всіх цілих чисел від 1 до 15.

function calculateTotal(number) {
    let sum = 0;

for (let i = 1; i <= number; i++) {
    sum += i 
}

return sum;
}

alert(calculateTotal(15));



//Знайти добуток усіх цілих чисел від 15 до 35.

    let mult = 1;
    
    for (let i = 15; i <= 35; i++) {
        mult = mult * i 
    }
    
    alert(mult);



//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let n = 500;
let s = 0;
for (let i = 1; i <= n; i++) {
  s = s + i;
}
s = s / n;
console.log('Циклом:', s);
console.log('Формулой:', (n + 1) / 2);



//Вивести суму лише парних чисел в діапазоні від 30 до 80.

function calculateTotal(number) {
        let sum = 0;
    
    for (let i = 30; i <= number; i++) {

        if (i % 2 == 0) {
            sum += i 
        }
    }
    
    return sum;
    }
    
    alert(calculateTotal(80));



//Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let y = [];

for (let i = 100; i <= 200; i++) {

    if (i % 3 == 0) {
        y.push([i]); 
    }
}

alert(y.join(' '));



//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let naturalNum = +prompt('Введіть будь-яке натуральне число', '...');
document.write(`Ви ввели число: ${naturalNum} <br /> <hr/>`);
let count = 0,
  summ = 0;
for (let i = 2; i * 2 <= naturalNum; i++) {
  if (naturalNum % i == 0) {
    document.write(`Дільник цього числа: ${i} <br /><br />`);

    if (i % 2 === 0) {
      count++;
      summ += i;
    }
  }
}

document.write(`<hr/> Кількість парних дільників: ${count} <br /><br />`);
document.write(`Сума парних дільників: ${summ} <br /><br />`);



//Надрукувати повну таблицю множення від 1 до 10. 

document.write("<h1>Таблицю множення</h1>"); 
 
for (let j = 1; j <= 10; j++){  
document.write("<div style='float: left; width: 70px;'>"); 
for (let i = 1; i <=10; i++)  
{ 
document.write(i + "*" + j + "=" +(i*j) + "<br>"); 
 
}  
document.write ("</div>"); 
 
} 