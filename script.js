document.addEventListener("DOMContentLoaded", () => {
    const loading = document.getElementById("loading");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
        loading.style.display = "none";
        mainContent.style.display = "block";
    }, 3000); // Show main content after 3 seconds

    const currentDateElement = document.getElementById("current-date");
    const daysTogetherElement = document.getElementById("days-together");

    const startDate = new Date("2024-05-12");
    const currentDate = new Date();

    currentDateElement.textContent = currentDate.toLocaleDateString();
    
    const timeDifference = currentDate - startDate;
    const daysTogether = Math.floor(timeDifference / (1000 * 3600 * 24));

    daysTogetherElement.textContent = daysTogether;
});
