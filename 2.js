console.log("Завдання: 2 ==============================");

// Створюємо функцію task2
function task2() {
  function promise1() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Проміс 1 виконано"), 2000);
    });
  }

  function promise2() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Проміс 2 виконано"), 5000);
    });
  }

  Promise.race([promise1(), promise2()])
    .then((res) => console.log(res))
    .catch((er) => console.log(console.log(er)))
    .finally(() => console.log("Завдання 2 завершено"));
}

// Викликаємо функцію task2
task2();
