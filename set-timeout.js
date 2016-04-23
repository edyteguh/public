$(document).ready(function() {

    setTimeout(function getDate() {

        $get('someUrl', function(date) {

            setTimeout(getDate, 5000);

        });
    }, 5000);
});