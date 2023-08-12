console.log("Завдання: 3 ==============================");

// Створюємо функцію task3, в якій буде виконуватися завдання
function task3() {
  function promise1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Проміс 1 виконано"), 1000);
    });
  }
  function promise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject("Проміс 2 відхилено"), 2000);
    });
  }

  Promise.allSettled([promise1(), promise2()])
    .then((data) =>
      data.forEach((prom, i) => console.log(`Проміс ${i}: ${prom.status}`))
    )
    .finally(() => console.log("Завдання 3 завершено"));

  // Для кожного результату виводимо статус проміса
  // Функція finally викликається після того, як проміс вирішено або відхилено
  // Вона використовується для виконання дій, які повинні виконуватися незалежно від того, чи було проміс вирішено чи відхилено
  // В нашому випадку ми просто виводимо повідомлення, "Завдання 3 завершено"
}

// Викликаємо функцію task3
task3();
