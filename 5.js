console.log("Завдання: 5 ==============================");

// Створюємо функцію task5, яка буде використовувати проміси.
function task5() {
  let counter = 0;
  const intervalPromise = new Promise((res) => {
    const interval = setInterval(() => {
      counter++;
      console.log(`Значення лічильника: ${counter}`);
      if (counter >= 5) {
        clearInterval(interval);
        res(counter);
      }
    }, 1000);
  });

  intervalPromise.then((data) => console.log(data));
}
// Викликаємо функцію task5
task5();
