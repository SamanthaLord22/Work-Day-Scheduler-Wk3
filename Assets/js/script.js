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

let timeArray = [time9, time10, time11, time12, time1, time2, time3, time4, time5]
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

