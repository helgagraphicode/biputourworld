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

document.addEventListener("DOMContentLoaded", () => {
    const loading = document.getElementById("loading");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
        loading.style.display = "none";
        mainContent.style.display = "block";
        updateDateAndDaysTogether();
        checkAnniversary();
    }, 3000); // Show main content after 3 seconds
});

function updateDateAndDaysTogether() {
    const startDate = new Date("2024-05-12");
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - startDate.getTime();
    const daysTogether = Math.floor(timeDifference / (1000 * 3600 * 24));

    document.getElementById('current-date').textContent = currentDate.toLocaleDateString();
    document.getElementById('days-together').textContent = daysTogether;
}

function checkAnniversary() {
    const today = new Date();
    const day = today.getDate();
    if (day === 12) {
        document.getElementById('anniversaryPopup').style.display = 'flex';
    }
}

function goToAnniversaryPage() {
    window.location.href = 'anniversary.html';
}

function closePopup() {
    document.getElementById('anniversaryPopup').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
    const loading = document.getElementById("loading");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
        loading.style.display = "none";
        mainContent.style.display = "block";
        updateDateAndDaysTogether();
        checkAnniversary();
    }, 3000); // Show main content after 3 seconds

    initSlider();
});

function initSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider img");
    const totalSlides = slides.length;
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    function updateSlider() {
        const slider = document.querySelector(".slider");
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

function updateDateAndDaysTogether() {
    const startDate = new Date("2024-05-12");
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - startDate.getTime();
    const daysTogether = Math.floor(timeDifference / (1000 * 3600 * 24));

    document.getElementById('current-date').textContent = currentDate.toLocaleDateString();
    document.getElementById('days-together').textContent = daysTogether;
}

function checkAnniversary() {
    const today = new Date();
    const day = today.getDate();
    if (day === 12) {
        document.getElementById('anniversaryPopup').classList.add('active');
    }
}

function goToAnniversaryPage() {
    window.location.href = 'anniversary.html';
}

function closePopup() {
    document.getElementById('anniversaryPopup').classList.remove('active');
}

function showLoveAnimation() {
    const loveContainer = document.querySelector('.falling-loves');
    for (let i = 0; i < 20; i++) {
        const love = document.createElement('div');
        love.classList.add('falling-love');
        love.textContent = '❤️';
        love.style.left = `${Math.random() * 100}%`;
        love.style.animationDuration = `${Math.random() * 5 + 5}s`;
        love.style.fontSize = `${Math.random() * 20 + 10}px`;
        loveContainer.appendChild(love);

        setTimeout(() => {
            love.remove();
        }, 10000);
    }
}
