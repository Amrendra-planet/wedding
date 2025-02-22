 

// Modal Gallery
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


function submitRSVP(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        guests: document.getElementById("guests").value,
        role: document.getElementById("role").value,
        room: document.getElementById("room").value
    };

    // Replace with your Google Form's entry IDs
    // https://docs.google.com/forms/d/e/1FAIpQLSdIThbj6Opx3WcUiJKl7pn8WgsvOkbN4cKH08CBtsINRVlU0g/viewform?usp=pp_url&entry.1088334299=Amrendra&entry.545143636=9169100123&entry.1231216061=2&entry.865025705=Bride&entry.1884059398=0
    let googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSdIThbj6Opx3WcUiJKl7pn8WgsvOkbN4cKH08CBtsINRVlU0g/formResponse";
    
    const formDataEncoded = new URLSearchParams({
        "entry.1088334299": formData.name,
        "entry.545143636": formData.number,
        "entry.1231216061": formData.guests,
        "entry.865025705": formData.role,
        "entry.1884059398": formData.room
    });

    fetch(googleFormURL, {
        method: "POST",
        body: formDataEncoded,
        mode: "no-cors"
    }).then(() => {
        alert("RSVP Submitted Successfully!");
        window.location.href = "thank-you.html"; // Redirect after submission
    });
    
}


// Countdown Timer
const weddingDate = new Date("May 06, 2025 20:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = "It's Wedding Time!";
    }
}, 1000);
