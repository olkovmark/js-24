console.log("Завдання: 7 ==============================");

// Створюємо функцію task7, яка використовує setInterval та проміси.
function task7() {
  new Promise((res, rej) => {
    const interval = setInterval(() => {
      const seconds = new Date().getSeconds();
      console.log(`поточні секунди:` + seconds);
      if (seconds % 3 === 0) {
        clearInterval(interval);
        rej("Поточні секунди кратні 3!");
      }
      if (seconds % 10 === 0) {
        clearInterval(interval);
        res("Поточні секунди кратні 10!");
      }
    }, 1000);
  })
    .then((value) => console.log(`Проміс зарезолвився з значенням: ${value}`))
    .catch((error) => console.log(`Проміс відхилився з помилкою: ${error}`))
    .finally(() => console.log("Проміс завершено"));
}

// Викликаємо функцію task7
task7();
