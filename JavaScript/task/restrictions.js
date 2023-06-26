// Ограничения
function restrictionsTriangle(abc = []) {
  if (
    // Стороны треугольника не меньше или равны нулю
    abc[0] <= 0 ||
    abc[1] <= 0 ||
    abc[2] <= 0 ||
    // Две стороны больше третьей
    abc[0] + abc[1] <= abc[2] ||
    abc[0] + abc[2] <= abc[1] ||
    abc[1] + abc[2] <= abc[0]
  ) {
    // Треугольник не существует
    return false;
  } else {
    // Треугольник существует
    return true;
  }
}
// Экспорт тестируемого кода на тест
module.exports = restrictionsTriangle;
