document.addEventListener('DOMContentLoaded', function () {
    // Example: Handle form submission
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Form submitted');
            // Handle form submission logic
        });
    });
});

    // Handle logout
    const logoutLink = document.querySelector('.nav-link[href="login.html"]');
    if (logoutLink) {
        logoutLink.addEventListener('click', function () {
            // Logic to log out user
            window.location.href = 'index.html';
        });
    }


    function openPopup(popupId) {
        document.getElementById(popupId).style.display = 'flex';
    }
    
    function closePopup(popupId) {
        document.getElementById(popupId).style.display = 'none';
    }
    