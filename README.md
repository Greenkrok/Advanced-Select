<a href="https://greenkrok.github.io/Advanced-Select/"> Demo </a>

Задание - сверстать макет по ссылке https://www.figma.com/file/3FSYu8zOYKeC5H48ne7y4W/OZiTAG-Frontend-Test-Task?node-id=1380%3A121545

На основе стандартной HTML-разметки с применением тега "select", необходимо
реализовать компонент, какой будет позволять выбирать данные пользователю, какие
имеют древовидную структуру.

В HTML коде должен быть только один тег "select" и вложенные в него "option",
остальное добавляется на JS.

Пример данных:
- Раздел 1
  - Раздел 1.1
  - Раздел 1.2
  - Раздел 1.3
    - Раздел 1.3.1
- Раздел 2
- Раздел 3

По нажатию на компонент или на кнопку “Показать выбранное” должно открываться окно
на весь экран с возможностью выбора значений.

Выполнение задания на упрощенном уровне: если древовидная структура кажется сложной, то допускается сделать линейную.

Нюансы:
- Должна быть возможность предзадать выбранные значения по-умолчанию, через
selected атрибут у тега "option";
- Должна быть возможность навесить на "select" обработчик события change;
например select.addEventListener(“change”, e => alert(e.target.value)).
- Должна быть возможность создать на странице 2 и более селекта, какие будут
работать независимо друг от друга.

Технологии:
- Разрешено использовать JavaScript вместе с TypeScript;
- Использование React / Vue / Angular не допускается.

Результат:
- Ссылка на GitHub с решением, в README должно лежать описание, как запустить;
- Ссылка на Demo.
  
