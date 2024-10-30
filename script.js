document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const teacherName = document.getElementById('teacherName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    const confirmationMessage = `
        Appointment Booked!
        Student: ${studentName}
        Teacher: ${teacherName}
        Date: ${appointmentDate}
        Time: ${appointmentTime}
    `;

    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.textContent = confirmationMessage;
    confirmationDiv.classList.remove('hidden');

    // Optionally reset the form
    document.getElementById('bookingForm').reset();
});
