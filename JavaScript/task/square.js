// Площадь треугольника
function squareTriangle(abc = []) {
  // Вычисление полу-периметра
  let p = (abc[0] + abc[1] + abc[2]) / 2;
  // Вычисление площади треугольника
  let S = (p * (p - abc[0]) * (p - abc[1]) * (p - abc[2])) ** 0.5;
  return Math.round(S);
}
// Экспорт тестируемого кода на тест
module.exports = squareTriangle;
