/*
Задание 2. Создать список чисел разной длины. Добавить в начало и
в конец любое число с помощью padStart() и padEnd() так, чтобы
выровнять границы списка. Суммарное количество цифр в каждой
строчке – 15. Вывести на экран список до и после выравнивания
*/

let numberList = [
    1, 
    22, 
    123, 
    1234, 
    12345, 
    123456];
document.write("<br>первоачальный список: " + numberList);

numberList = numberList.map(num=>num.toString().padStart(7, '1'));      // с помощью метода map() создаем новый массив с результатом вызова стрелочной функции в скобках
document.write("<br>список после добавления чисел в начало: " + numberList); // функция вызывается для каждого элемента массива

numberList = numberList.map(num=>num.toString().padEnd(15, '2'));           
document.write("<br>список после добавления чисел в конец: " + numberList);