# Лабораторная работа №1 
## Выполнил студент группы НАТ - 183 Скоробогатов Святослав 
[modal](https://getbootstrap.com/docs/4.0/components/modal/)

В .js файле вы можете встретить два варианта, для более сложных моделей и для данной модели решения этой задачи 

> ### Варианты решения задачи 
>> Решение задачи через функцию Modal(). 
>>> Даёт операции показа/скрытия модального окна и оверлея более независимой от слушателей и кликов. Потому что возможно, что помимо этого действия на эти кнопки могут повешать разные собыитя (Например: на кнопку "отменить" администраторы могут попросить повешать счётчик, для того, чтобы получать статистику, и тогда для этой кнопки, нужен доп. операции и в этой ситуации, нужна наша функция)
 
>> Решение, которое работает сейчас.
>>> Минус превидущего метода, что в глобольной области видимости появляються дополнительные функции, которая в данный момент не имеет никакой актуальности и являеться лишней тратой ресурсов памяти для хранения лишних ссылок функции, которую используют один раз. Поэтому с целью уменьшить количество потреблямой памяти, данная функция была убрана.  


