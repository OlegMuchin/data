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
// Площадь треугольника
function squareTriangle(abc = []) {
  // Вычисление полу-периметра
  let p = (abc[0] + abc[1] + abc[2]) / 2;
  // Вычисление площади треугольника
  let S = (p * (p - abc[0]) * (p - abc[1]) * (p - abc[2])) ** 0.5;
  return Math.round(S);
}
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
// Основная функция
function mainOutput(abc = []) {
  let restrictions = restrictionsTriangle(abc);
  if (restrictions) {
    let square = squareTriangle(abc);
    let kind = kindTriangle(abc);
    return { restrictions, square, kind };
  }
  return { restrictions };
}

module.exports = mainOutput;
