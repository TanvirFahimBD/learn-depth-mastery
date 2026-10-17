function showSuccessToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        backgroundColor: '#28a745'
    }).showToast();
}

function showErrorToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        backgroundColor: '#dc3545'
    }).showToast();
}