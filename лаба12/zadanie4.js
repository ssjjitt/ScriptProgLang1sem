/*
Параметры по умолчанию позволяют задавать формальным параметрам функции значения по умолчанию в случае,
если функция вызвана без аргументов, или если параметру явным образом передано значение undefined.

В Javascript параметры по умолчанию вычисляются в момент вызова функции


*/

function UserName(name = "Аноним"){              // передаем параметр по умолчанию
    document.write("Привет, ", name);
    }

document.write("<p>значение передано: ")
UserName("Дарья</p>");

document.write("<p>значение не передано: ")
UserName();
document.write("</p>")


