document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    fetch(event.target.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Děkujeme za vaši odpověď!');
            event.target.reset();
        } else {
            alert('Došlo k chybě. Zkuste to prosím znovu.');
        }
    }).catch(error => {
        alert('Došlo k chybě. Zkuste to prosím znovu.');
    });
});


// Countdown timer
const countdownElement = document.getElementById('countdown');
const weddingDate = new Date('2025-06-07T15:00:00'); // Set your wedding date and time here

function updateCountdown() {
    const now = new Date();
    const timeDifference = weddingDate - now;

    if (timeDifference <= 0) {
        countdownElement.textContent = 'Dnes je náš svatební den!';
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.textContent = `Zbývá ${days} dní, ${hours} hodin, ${minutes} minut, ${seconds} sekund`;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Slideshow functionality
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     const slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 4000); // Change image every 4 seconds
// }
function toggleQRCode(id) {
    var qrCodes = document.getElementById(id);
    if (qrCodes.style.display === "none") {
        qrCodes.style.display = "flex";
    } else {
        qrCodes.style.display = "none";
    }
}
function toggleDetails(element) {
    element.classList.toggle('active');
    if (element.classList.contains('active')) {
        element.style.cursor = 'default'; /* Change cursor to default when item is expanded */
    } else {
        element.style.cursor = 'pointer'; /* Change cursor back to pointer when item is collapsed */
    }
}

//toggle menu for mobile device
function toggleSideNav() {
    const sideNav = document.getElementById('side-nav');
    const body = document.body;

    if (sideNav.classList.contains('open')) {
        sideNav.classList.remove('open');
        body.classList.remove('content-pushed');
    } else {
        sideNav.classList.add('open');
        body.classList.add('content-pushed');
    }
}
document.getElementById("menu-icon").addEventListener("click", function() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
});


