# Асинхронность и Data. Промисы | goit-js-hw-09
## Критерии приема
- Создан репозиторий `goit-js-hw-09`.
- При сдаче домашней работы есть две ссылки для каждого проекта: на исходные файлы и рабочую страницу на `GitHub Pages`.
- При посещении живой страницы задания, в консоли нету ошибок и предупреждений.
- Проект собран с помощью [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- Код отформатирован `Prettier`.

## Стартовые файлы
[Скачай](https://downgit.github.io/#/home?url=https:%2F%2Fgithub.com%2Fgoitacademy%2Fjavascript-homework%2Ftree%2Fmain%2Fv2%2F09%2Fsrc) стартовые файлы с готовой разметкой, стилями и подключенными файлами скриптов для каждого задания. Скопируй их себе в проект, полностью заменив папку `src` в [parcel-project-template](https://github.com/goitacademy/parcel-project-template).

### Задание 1 - переключатель цветов
Выполняй это задание в файлах `01-color-switcher.html` и `01-color-switcher.js`. Посмотри демо видео работы переключателя.

В HTML есть кнопки «Start» и «Stop».
```
<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>
```
Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона `<body>` на случайное значение используя инлайн стиль. При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.

>:warning: **ВНИМАНИЕ!** </br>Учти, на кнопку «Start» можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).

Для генерации случайного цвета используй функцию `getRandomHexColor`.
```
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
```
### Задание 2 - таймер обратного отсчета
Выполняй это задание в файлах `02-timer.html` и `02-timer.js`. Напиши скрипт таймера, который ведёт обратный отсчет до определенной даты. Такой таймер может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д. Посмотри демо видео работы таймера.

#### Элементы интефрейса
В HTML есть готовая разметка таймера, поля выбора конечной даты и кнопки, при клике по которой таймер должен запускаться. Добавь минимальное оформление элементов интерфейса.
```
<input type="text" id="datetime-picker" />
<button type="button" data-start>Start</button>

<div class="timer">
  <div class="field">
    <span class="value" data-days>00</span>
    <span class="label">Days</span>
  </div>
  <div class="field">
    <span class="value" data-hours>00</span>
    <span class="label">Hours</span>
  </div>
  <div class="field">
    <span class="value" data-minutes>00</span>
    <span class="label">Minutes</span>
  </div>
  <div class="field">
    <span class="value" data-seconds>00</span>
    <span class="label">Seconds</span>
  </div>
</div>
```
#### Библиотека `flatpickr`
Используй библиотеку [flatpickr](https://flatpickr.js.org/) для того чтобы позволить пользователю кроссбраузерно выбрать конечную дату и время в одном элементе интерфейса. Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.
```
// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
```
Библиотека ожидает что её инициализируют на элементе `input[type="text"]`, поэтому мы добавили в HTML документ поле `input#datetime-picker`.
```
<input type="text" id="datetime-picker" />
```
Вторым аргументом функции `flatpickr(selector, options)` можно передать необязательный объект параметров. Мы подготовили для тебя объект который нужен для выполнения задания. Разберись за что отвечает каждое свойство в документации «Options» и используй его в своем коде.
```
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
```
#### Выбор даты
Метод `onClose()` из обьекта параметров вызывается каждый раз при закрытии элемента интерфейса который создает `flatpickr`. Именно в нём стоит обрабатывать дату выбранную пользователем. Параметр `selectedDates` это массив выбранных дат, поэтому мы берем первый элемент.

- Если пользователь выбрал дату в прошлом, покажи `window.alert()` с текстом `"Please choose a date in the future"`.
- Если пользователь выбрал валидную дату (в будущем), кнопка «Start» становится активной.
- Кнопка «Start» должа быть не активна до тех пор, пока пользователь не выбрал дату в будущем.
- При нажатии на кнопку «Start» начинается отсчет времени до выбранной даты с момента нажатия.
#### Отсчет времени
При нажатии на кнопку «Start» скрипт должен вычислять раз в секунду сколько времени осталось до указанной даты и обновлять интерфейс таймера, показывая четыре цифры: дни, часы, минуты и секунды в формате `xx:xx:xx:xx`.

- Количество дней может состоять из более чем двух цифр.
- Таймер должен останавливаться когда дошел до конечной даты, то есть `00:00:00:00`.

>:exclamation: **НЕ БУДЕМ УСЛОЖНЯТЬ** </br> Если таймер запущен, для того чтобы выбрать новую дату и перезапустить его - необходимо перезагрузить страницу.

Для подсчета значений используй готовую функцию `convertMs`, где `ms` - разница между конечной и текущей датой в миллисекундах.
```
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
```
#### Форматирование времени
Функция `convertMs()` возвращает объект с рассчитанным оставшимся временем до конечной даты. Обрати внимание, что она не форматирует результат. То есть, если осталось 4 минуты или любой другой составляющей времени, то функция вернет `4`, а не `04`. В интерфейсе таймера необходимо добавлять `0` если в числе меньше двух символов. Напиши функцию `addLeadingZero(value)`, которая использует метод метод `padStart()` и перед отрисовкой интефрейса форматируй значение.

#### Библиотека уведомлений
>:warning: **ВНИМАНИЕ** </br>Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

Для отображения уведомлений пользователю вместо `window.alert()` используй библиотеку [notiflix](https://github.com/notiflix/Notiflix#readme).

### Задание 3 - генератор промисов
Выполняй это задание в файлах `03-promises.html` и `03-promises.js`. Посмотри демо видео работы генератора промисов.

В HTML есть разметка формы, в поля которой пользователь будет вводить первую задержку в миллисекундах, шаг увеличения задержки для каждого промиса после первого и количество промисов которое необходимо создать.
```
<form class="form">
  <label>
    First delay (ms)
    <input type="number" name="delay" required />
  </label>
  <label>
    Delay step (ms)
    <input type="number" name="step" required />
  </label>
  <label>
    Amount
    <input type="number" name="amount" required />
  </label>
  <button type="submit">Create promises</button>
</form>
```
Напиши скрипт, который при сабмите формы вызывает функцию `createPromise(position, delay)` столько раз, сколько ввели в поле `amount`. При каждом вызове передай ей номер создаваемого промиса `(position)` и задержку учитывая введенную пользователем первую задержку `(delay)` и шаг `(step)`.
```
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
```
Дополни код функции `createPromise` так, чтобы она возвращала **один промис**, который выполянется или отклоняется через `delay` времени. Значением промиса должен быть объект, в котором будут свойства `position` и `delay` со значениями одноименных параметров. Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.
```
createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
```
#### Библиотека уведомлений
>:warning: **ВНИМАНИЕ** </br>Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

Для отображения уведомлений пользователю вместо `console.log()` используй библиотеку [notiflix](https://github.com/notiflix/Notiflix#readme).
