document.addEventListener('DOMContentLoaded', function () {
  const myform = document.querySelector("#form");

  myform.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = Number(document.getElementById("age").value);

    if (!name || isNaN(age) || age <= 0) {
      alert("Please enter valid details.");
      return;
    }

    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    })
      .then(alert)
      .catch(alert);
  });
});
