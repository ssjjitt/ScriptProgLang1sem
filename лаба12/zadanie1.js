/*  
Map - коллекция ключ-значение
обычный объект имеет множество служебных свойств, которые содержат важную информацию и функции. Если эти функции случайно перезапишут, то программа может просто сломаться.
С Map такое не пройдет. Все свойства записывающиеся через set попадают в такую область, где ничего нельзя сломать. 
Другими словами, Map полезен тогда, когда нет контроля над свойствами, то есть когда они могут динамически заполняться пользовательскими данными.
*/

/*
коллекния Map() используется для создания и работы с ассоциативными массивам. 
Ассоциативный массив - массив, в котором обращение к значению осуществляется по ключу. В качестве ключа используется некоторая строка, которую можно установить самому
*/ 

let forKey = +prompt("ключ: ");

let map = new Map();                            // конструктор создаёт пустую коллекцию
map.set(1, "375(29)1111111")                    // метод, записывает по ключу key значение value
map.set(2, "375(29)2222222");
map.set(3, "375(29)3333333");
map.set(4, "375(29)4444444");
map.set(5, "375(29)5555555");

alert(map.get(forKey));                          // метод, озвращает значение по ключу или undefined, если ключ key отсутствует.

