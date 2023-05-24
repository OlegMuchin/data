from sys import path
# Импорт модуля calendar
import calendar
# Путь к библиотеки calendar
print(f"{path[3]}\calendar.py")
# Список атрибутов модуля
print(dir(calendar))
# Проверка 2027 года на високостность
if (calendar.isleap(2027)):
    print("Год високостный")
else:
    print("Год не високостный")
# Узнавание, каким днём недели является 25 июня 1995 года
print(calendar.weekday(1995, 5, 25))
# Календарь на 2023
country = calendar.LocaleTextCalendar(locale="ru")
country.pryear(2023)
