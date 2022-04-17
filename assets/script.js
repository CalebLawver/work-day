$(document).ready(function() {
    $("currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    let description = $(".description");
    let saveButton = $(".saveBtn");
    let currentHour = moment().hour();

    console.log(currentHour);
    console.log(typeof currentHour);

    description.each(function () {
        let timeBlock = parseInt($(this).attr("id"));

        if (timeBlock < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (timeBlock === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
});
