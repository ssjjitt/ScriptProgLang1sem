// Метод includes()определяет, содержит ли массив определенное значение среди своих записей, возвращая true или false при необходимости
// Метод indexOf()возвращает первый индекс, по которому данный элемент может быть найден в массиве, или -1, если он отсутствует.


let userNumber = +prompt("введите число: ");

let array = [1, 3, 5, 7, 9, 11, 13];

document.write("<br>присутствует ли элемент в массиве: " +array.includes(userNumber));
document.write("<br>индекс элемента: " +array.indexOf(userNumber));