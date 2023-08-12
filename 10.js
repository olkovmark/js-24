console.log("Завдання: 10 ==============================");

function task10() {
  const promise1 = new Promise((res) => setTimeout(res, 500, "Promise 1"));
  const promise2 = new Promise((res) => setTimeout(res, 200, "Promise 2"));
  const promise3 = new Promise((res) => setTimeout(res, 300, "Promise 3"));

  Promise.any([promise1, promise2, promise3])
    .then((value) => {
      console.log(value);
    })
    .catch((value) => {
      console.log(value);
    });
}

// Викликаємо функцію task10
task10();
