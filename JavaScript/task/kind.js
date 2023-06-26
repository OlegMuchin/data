// Вид треугольника
function kindTriangle(abc = []) {
  if (
    abc[0] ** 2 + abc[1] ** 2 == abc[2] ** 2 ||
    abc[0] ** 2 + abc[2] ** 2 == abc[1] ** 2 ||
    abc[1] ** 2 + abc[2] ** 2 == abc[0] ** 2
  ) {
    return "Прямоугольный треугольник";
  } else if (
    abc[0] ** 2 + abc[1] ** 2 < abc[2] ** 2 ||
    abc[0] ** 2 + abc[2] ** 2 < abc[1] ** 2 ||
    abc[1] ** 2 + abc[2] ** 2 < abc[0] ** 2
  ) {
    return "Тупоугольный треугольник";
  } else {
    return "Остроугольный треугольник";
  }
}
// Экспорт тестируемого кода на тест
module.exports = kindTriangle;
