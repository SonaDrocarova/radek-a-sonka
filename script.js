document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const attending = document.getElementById('attending').value;
    const notes = document.getElementById('notes').value;

    alert(`Děkujeme za vaši odpověď, ${name}!`);
    // Here you can add code to send this data to a server if needed
    
});

// Countdown timer
const countdownElement = document.getElementById('countdown');
const weddingDate = new Date('2025-03-01T15:00:00'); // Set your wedding date and time here

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
