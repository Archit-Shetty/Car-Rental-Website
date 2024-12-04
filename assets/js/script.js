// Simple interaction for the rent button (can be expanded as needed)
document.querySelectorAll('.rent-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('You have successfully rented this car!');
  });
});

// Toggle the hamburger menu and the active class
document.getElementById("hamburger").addEventListener("click", function() {
  this.classList.toggle("active"); // Toggle 'active' class to the hamburger
  const menu = document.getElementById("menu"); // Access the menu container
  if (menu) {
    // Toggle visibility of the menu
    if (menu.style.display === "block") {
      menu.style.display = "none"; // Hide the menu
    } else {
      menu.style.display = "block"; // Show the menu
    }
  }
});
