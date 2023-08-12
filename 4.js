console.log("Завдання: 4 ==============================");

// Функція task4, яка буде використовувати проміси
function task4() {
  const promise1 = new Promise((res, rej) =>
    setTimeout(res, 1000, "Проміс 1 виконано")
  );
  const promise2 = new Promise((res, rej) =>
    setTimeout(res, 1000, "Проміс 2 виконано")
  );

  Promise.all([promise1, promise2])
    .then((data) => console.log(data))
    .finally(() => console.log("Всі операції завершено"));
}

// Викликаємо функцію task4
task4();
