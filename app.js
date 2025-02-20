document.addEventListener("DOMContentLoaded", () => {
    // Form validation
    document.getElementById("joinForm").addEventListener("submit", function(event) {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        if (name.trim() === "" || email.trim() === "") {
            alert("Please fill out all fields.");
            event.preventDefault();
        }
    });

    // Expandable blog cards
    let readMoreButtons = document.querySelectorAll(".read-more");
    readMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("This feature is coming soon!");
        });
    });
});
