// Импорт кода для тестирования
const triangle = require("./task/triangle");
const restrictions = require("./task/restrictions");
const square = require("./task/square");
const kind = require("./task/kind");
// Набор тестов треугольника
describe("Tests triangle", () => {
  //  Массив объектов входных значений и ожидаемых результатов
  const testCases = [
    {
      inLine: [3, 4, 5],
      expected: {
        restrictions: true,
        square: 6,
        kind: "Прямоугольный треугольник",
      },
    },
    {
      inLine: [6, 8, 10],
      expected: {
        restrictions: true,
        square: 24,
        kind: "Прямоугольный треугольник",
      },
    },
    {
      inLine: [5, 4, 4],
      expected: {
        restrictions: true,
        square: 8,
        kind: "Остроугольный треугольник",
      },
    },
    {
      inLine: [8, 6, 11],
      expected: {
        restrictions: true,
        square: 23,
        kind: "Тупоугольный треугольник",
      },
    },
    {
      inLine: [0, 6, 11],
      expected: {
        restrictions: false,
      },
    },
  ];
  // Перебор массива testCases
  testCases.forEach((test) => {
    // Тест, его название
    it(`Test triangle: Стороны: ${test.inLine} => Существует: ${test.expected.restrictions}, Площадь: ${test.expected.square}, Вид: ${test.expected.kind}`, () => {
      // Результаты
      const res = triangle(test.inLine);
      // Сравнение ожидаемых и получившихся результатов
      expect(res).toEqual(test.expected);
    });
  });
});
// Набор тестов модуля "Существование треугольника"
describe("Tests modules restrictions", () => {
  //  Массив объектов входных значений и ожидаемых результатов
  const testCases = [
    {
      inLine: [3, 4, 5],
      restrictions: true,
    },
    {
      inLine: [6, 8, 10],
      restrictions: true,
    },
    {
      inLine: [0, 6, 11],
      restrictions: false,
    },
    {
      inLine: [100, 6, 11],
      restrictions: false,
    },
  ];
  // Перебор массива testCases
  testCases.forEach((test) => {
    // Тест, его название
    it(`Test restrictions: Стороны: ${test.inLine} => Существует: ${test.restrictions}`, () => {
      // Результаты
      const res = restrictions(test.inLine);
      // Сравнение ожидаемых и получившихся результатов
      expect(res).toBe(test.restrictions);
    });
  });
});
// Набор тестов модуля "Площадь треугольника"
describe("Tests modules squares", () => {
  //  Массив объектов входных значений и ожидаемых результатов
  const testCases = [
    {
      inLine: [3, 4, 5],
      square: 6,
    },
    {
      inLine: [6, 8, 10],
      square: 24,
    },
    {
      inLine: [5, 4, 4],
      square: 8,
    },
    {
      inLine: [8, 6, 11],
      square: 23,
    },
  ];
  // Перебор массива testCases
  testCases.forEach((test) => {
    // Тест, его название
    it(`Test square: Стороны: ${test.inLine} => Существует: ${test.square}`, () => {
      // Результаты
      const res = square(test.inLine);
      // Сравнение ожидаемых и получившихся результатов
      expect(res).toBe(test.square);
    });
  });
});
// Набор тестов модуля "вид треугольника"
describe("Tests modules kinds", () => {
  //  Массив объектов входных значений и ожидаемых результатов
  const testCases = [
    {
      inLine: [3, 4, 5],
      kind: "Прямоугольный треугольник",
    },
    {
      inLine: [5, 4, 4],
      kind: "Остроугольный треугольник",
    },
    {
      inLine: [8, 6, 11],
      kind: "Тупоугольный треугольник",
    },
  ];
  // Перебор массива testCases
  testCases.forEach((test) => {
    // Тест, его название
    it(`Test kind: Стороны: ${test.inLine} => Существует: ${test.kind}`, () => {
      // Результаты
      const res = kind(test.inLine);
      // Сравнение ожидаемых и получившихся результатов
      expect(res).toBe(test.kind);
    });
  });
});
