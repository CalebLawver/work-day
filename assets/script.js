$(document).ready(function() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    let description = $(".description");
    let saveButton = $(".saveBtn");
    let currentHour = moment().hour();

    console.log(currentHour);
    console.log(typeof currentHour);

    description.each(function () {
        let timeBlock = parseInt($(this).parent().attr("id"));
        console.log(typeof timeBlock);

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
    
    $(saveButton).on("click", function() {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(value);
        localStorage.setItem(time, value);
    });

    $("#8hour .description").val(localStorage.getItem("8hour"));
    $("#9hour .description").val(localStorage.getItem("9hour"));
    $("#10hour .description").val(localStorage.getItem("10hour"));
    $("#11hour .description").val(localStorage.getItem("11hour"));
    $("#12hour .description").val(localStorage.getItem("12hour"));
    $("#1hour .description").val(localStorage.getItem("1hour"));
    $("#2hour .description").val(localStorage.getItem("2hour"));
    $("#3hour .description").val(localStorage.getItem("3hour"));
    $("#4hour .description").val(localStorage.getItem("4hour"));
    $("#5hour .description").val(localStorage.getItem("5hour"));
    $("#6hour .description").val(localStorage.getItem("6hour"));

});
