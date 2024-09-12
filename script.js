// Function to show the respective popup
function showPopup(userType) {
    if (userType === 'admin') {
        document.getElementById('adminPopup').style.display = 'flex';
    } else if (userType === 'institution') {
        document.getElementById('institutionPopup').style.display = 'flex';
    }
}

// Function to close the popup
function closePopup(userType) {
    if (userType === 'admin') {
        document.getElementById('adminPopup').style.display = 'none';
    } else if (userType === 'institution') {
        document.getElementById('institutionPopup').style.display = 'none';
    }
}

// Login function (simple example)
function login(userType) {
    if (userType === 'admin') {
        let adminId = document.getElementById('adminId').value;
        let adminPassword = document.getElementById('adminPassword').value;
        alert(`Admin Login: ID=${adminId}, Password=${adminPassword}`);
    } else if (userType === 'institution') {
        let institutionId = document.getElementById('institutionId').value;
        let institutionPassword = document.getElementById('institutionPassword').value;
        alert(`Institution Login: ID=${institutionId}, Password=${institutionPassword}`);
    }
    // Close the popup after login
    closePopup(userType);
}
