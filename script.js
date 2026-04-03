const confirmationList = document.getElementById("confirmationList");

// Function to render appointment status
function renderConfirmation() {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    // Only show the latest booking by this patient (or all for demo)
    confirmationList.innerHTML = bookings.map(b => `
        <div style="
            background:#222; 
            padding:12px; 
            margin-bottom:10px; 
            border-radius:10px; 
            box-shadow:0 0 5px #0ff;">
            <strong>${b.name}</strong> - ${b.department} on ${b.date}: 
            <strong>${b.status}</strong>
        </div>
    `).join('');
}

// Auto-refresh every 2 seconds to simulate live updates from receptionist
setInterval(renderConfirmation, 2000);

// Initial render
renderConfirmation();
