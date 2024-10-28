$(document).ready(function() {
    // Show the popup when the page loads
    $('#popup-form').fadeIn();

    // Close the popup when the 'x' is clicked
    $('.close').click(function() {
        $('#popup-form').fadeOut();
    });

    // Close the popup when clicking outside the popup content
    $(window).click(function(event) {
        if ($(event.target).is('#popup-form')) {
            $('#popup-form').fadeOut();
        }
    });

    // Handle form submission
    $('#contact-form').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        $.ajax({
            url: 'process.php', // URL to the PHP file that processes the form
            type: 'POST',
            data: $(this).serialize(), // Serialize form data
            success: function(response) {
                // Show the response message
                $('#response-message').html(response);
                // Optionally close the popup after a few seconds
                setTimeout(function() {
                    $('#popup-form').fadeOut();
                    $('#response-message').html(''); // Clear the message
                }, 3000);
            },
            error: function() {
                $('#response-message').html('There was an error processing your request.');
            }
        });
    });
});
