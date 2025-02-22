

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


document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSdIThbj6Opx3WcUiJKl7pn8WgsvOkbN4cKH08CBtsINRVlU0g/formResponse";

    // Creating FormData object
    let formData = new FormData();
    formData.append("entry.1088334299", document.getElementById("name").value);
    formData.append("entry.545143636", document.getElementById("number").value);
    formData.append("entry.1231216061", document.getElementById("guests").value);
    formData.append("entry.865025705", document.getElementById("role").value);
    formData.append("entry.1884059398", document.getElementById("room").value);

    // Using Axios to submit the form data
    axios.post(googleFormURL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        mode: "no-cors"
    })
    .then(() => {
        alert("🎉 RSVP Submitted Successfully!");
        window.location.href = "thank-you.html"; // Redirect after submission
    })
    .catch(error => {
        console.error("❌ Submission failed:", error);
        alert("⚠️ Submission failed. Please try again.");
    });
});


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
