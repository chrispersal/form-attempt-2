const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // make a FormData
  const data = new FormData(form);
  // and turn it to a normal object
  const myObject = Object.fromEntries(data);
  console.log(myObject);
});

// send a POST request
fetch("http://localhost:8080/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(myObject),
});
