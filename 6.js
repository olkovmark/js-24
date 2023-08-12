console.log("Завдання: 6 ==============================");

// Створюємо функцію task6, яка використовує setImmediate та проміси.
function task6() {
  new Promise((res, rej) =>
    Math.random() > 0.5 ? res("Число більше 0.5") : rej("Число меньше 0.5")
  )
    .then((value) => console.log(`Проміс зарезолвився з значенням: ${value}`))
    .catch((error) => console.log(`Проміс відхилився з помилкою: ${error}`))
    .finally(() => console.log("Проміс завершено"));
}

// Викликаємо функцію task6
task6();
