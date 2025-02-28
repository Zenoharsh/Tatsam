document.addEventListener("DOMContentLoaded", function () {
  const joinForm = document.getElementById("joinForm");

  joinForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const department = document.getElementById("department").value;

    if (name && email && department) {
      alert(
        `Thank you, ${name}! Your application for the ${department} department has been submitted.`
      );
      joinForm.reset();
    } else {
      alert("Please fill out all the fields.");
    }
  });
});
