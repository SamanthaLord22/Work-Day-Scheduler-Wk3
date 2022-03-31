//global variables
let button = $(".btn")
let time9 = $("#9am")
let time10 = $("#10am")
let time11 = $("#11am")
let time12 = $("#12pm")
let time1 = $("#1pm")
let time2 = $("#2pm")
let time3 = $("#3pm")
let time4 = $("#4pm")
let time5 = $("#5pm")
let newInput = $("#text-new")
let times = moment().hours();
let newText;
let input;

//today's date
let day = moment();
$("#today").text(day.format("MMM Do, YYYY, h:mm:ss a"));

//save text to page
$(".btn").click(function() {
    let input = $(this).siblings($("input")).val()
    let hour = $(this).siblings($("input")).attr("id")
    localStorage.setItem(input, hour);

    let dayPlanner = $('input').val();
    newInput.append('<li>' + dayPlanner + '</li>');   
});

//change color depending on past, present, future
$(".form-control").each(function() {
    let schedule = parseInt($(this).attr("id"));
    if (schedule !== times) {
        $(this).addClass("past")
        $(this).removeClass("present")
        $(this).removeClass("future")
    }
    if (schedule === times) {
        $(this).removeClass("past")
        $(this).addClass("present")
        $(this).removeClass("future")
    } else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
    }
})

