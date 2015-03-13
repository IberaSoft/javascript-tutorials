$(document).ready(function () {
    $("input").datepicker({
        minDate: -20,
        defaultDate: "+1w",
        maxDate: "+1M +5D",
        numberOfMonths: 3,
        showWeek: true,
    });
});
