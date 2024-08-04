function openPopup(elementId) {
    var popup = document.getElementById(elementId + '-popup');
    popup.style.display = 'flex'; // Show the popup
}

function closePopup() {
    var popups = document.querySelectorAll('.dd-popup');
    popups.forEach(function(popup) {
        popup.style.display = 'none'; // Hide all popups
    });
}

var targets = document.querySelectorAll('.popup-target');
targets.forEach(function(target) {
    target.addEventListener('click', function() {
        var elementId = target.getAttribute('data-poup-id');
        openPopup(elementId);
    });
});

var closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        closePopup();
    });
});

window.addEventListener('click', function(event) {
    var popups = document.querySelectorAll('.dd-popup');
    popups.forEach(function(popup) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
