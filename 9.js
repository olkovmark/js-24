console.log("Завдання: 9 ==============================");

function task9() {
  function fetchWithError() {
    const errorMessage = "Помилка при з'єднанні з сервером";
    return Promise.reject(Error(errorMessage));
  }

  fetchWithError()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task10
task9();
