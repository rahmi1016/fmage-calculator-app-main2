let resultYears = document.getElementById("result-years");
let resultMonths = document.getElementById("result-months");
let resultDays = document.getElementById("result-days");
function warningStyle() {
  document.getElementById("day-text").style.color = "hsl(0, 100%, 67%)";
  document.getElementById("month-text").style.color = "hsl(0, 100%, 67%)";
  document.getElementById("year-text").style.color = "hsl(0, 100%, 67%)";
  document.getElementById("day").style.border = "0.5px solid hsl(0, 100%, 67%)";
  document.getElementById("month").style.border = "0.5px solid hsl(0, 100%, 67%)";
  document.getElementById("year").style.border = "0.5px solid hsl(0, 100%, 67%)";
}
function restartStyle() {
  document.getElementById("day-text").style.color = "hsl(0, 1%, 44%)";
  document.getElementById("month-text").style.color = "hsl(0, 1%, 44%)";
  document.getElementById("year-text").style.color = "hsl(0, 1%, 44%)";
  document.getElementById("day").style.border = "0.5px solid hsl(0, 1%, 44%)";
  document.getElementById("month").style.border = "0.5px solid hsl(0, 1%, 44%)";
  document.getElementById("year").style.border = "0.5px solid hsl(0, 1%, 44%)";
}
function restartResult() {
  resultDays.innerText = "--";
  resultMonths.innerText = "--";
  resultYears.innerText = "--";
}
function dayValidate() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let dayWarning = document.getElementById("day-warning");
  let monthWarning = document.getElementById("month-warning");
  let yearWarning = document.getElementById("year-warning");
  let daysInMonth = new Date(year, month, 0).getDate();
  if (day !== "" && month == "" && year == "") {
    warningStyle();
    restartResult();
    monthWarning.innerText = "This field is required";
    yearWarning.innerText = "This field is required";
    if (day <= 0 || day > 31) {
      warningStyle();
      dayWarning.innerText = "Must be a valid date";
      monthWarning.innerText = "";
      yearWarning.innerText = "";
    } else {
      dayWarning.innerText = "";
      monthWarning.innerText = "";
      yearWarning.innerText = "";
    }
  } else if (day !== "" && month !== "" && year == "") {
    if (day <= 0 || day > 31) {
      warningStyle();
      dayWarning.innerText = "Must be a valid date";
      monthWarning.innerText = "";
      yearWarning.innerText = "This field is required";
    } else {
      warningStyle();
      dayWarning.innerText = "";
      monthWarning.innerText = "";
      yearWarning.innerText = "This field is required";
    }
  } else if (day !== "" && month == "" && year !== "") {
    if (day <= 0 || day > 31) {
      warningStyle();
      dayWarning.innerText = "Must be a valid date";
      monthWarning.innerText = "This field is required";
      yearWarning.innerText = "";
    } else {
      warningStyle();
      dayWarning.innerText = "";
      monthWarning.innerText = "This field is required";
      yearWarning.innerText = "";
    }
  } else if (month !== "" && year !== "" && day !== "") {
    if (day > daysInMonth || day <= 0 || day > 31) {
      warningStyle();
      dayWarning.innerText = "Must be a valid date";
      monthWarning.innerText = "";
      yearWarning.innerText = "";
    } else {
      restartStyle();
      dayWarning.innerText = "";
      monthWarning.innerText = "";
      yearWarning.innerText = "";
    }
  }
}

function monthValidate() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let dayWarning = document.getElementById("day-warning");
  let monthWarning = document.getElementById("month-warning");
  let yearWarning = document.getElementById("year-warning");
  let daysInMonth = new Date(year, month, 0).getDate();

  if (day == "" && month !== "" && year == "") {
    warningStyle();
    restartResult();
    if (month < 0 || month > 12) {
      dayWarning.innerText = "This field is required";
      yearWarning.innerText = "This field is required";
      monthWarning.innerText = "Must be a valid month";
    } else {
      dayWarning.innerText = "This field is required";
      yearWarning.innerText = "This field is required";
      monthWarning.innerText = "";
    }
  } else if (day !== "" && month !== "" && year == "") {
    restartResult();
    if (day > daysInMonth || day <= 0 || day > 31) {
      warningStyle();
      dayWarning.innerText = "Must be a valid date";
      monthWarning.innerText = "";
      yearWarning.innerText = "";
    } else if (month < 0 || month > 12) {
      dayWarning.innerText = "";
      yearWarning.innerText = "This field is required";
      monthWarning.innerText = "Must be a valid month";
    } else {
      dayWarning.innerText = "";
      yearWarning.innerText = "This field is required";
      month;
    }
  } else if (day == "" && month !== "" && year !== "") {
    if (month < 0 || month > 12) {
      warningStyle();
      dayWarning.innerText = "";
      monthWarning.innerText = "Must be a valid month";
      yearWarning.innerText = "";
    } else {
      restartStyle();
      dayWarning.innerText = "";
      monthWarning.innerText = "";
      yearWarning.innerText = "";
    }
  } else if (day !== "" && month !== "" && year !== "") {
    if (day > daysInMonth || day <= 0 || day > 31) {
      warningStyle();
      dayWarning.innerText = "Must be a valid date";
      monthWarning.innerText = "";
      yearWarning.innerText = "";
    } else if (month < 0 || month > 12) {
      warningStyle();
      dayWarning.innerText = "";
      monthWarning.innerText = "Must be a valid month";
      yearWarning.innerText = "";
    } else {
      restartStyle();
      dayWarning.innerText = "";
      monthWarning.innerText = "";
      yearWarning.innerText = "";
    }
  }
}

function yearValidate() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let dayWarning = document.getElementById("day-warning");
  let monthWarning = document.getElementById("month-warning");
  let yearWarning = document.getElementById("year-warning");
  let today = new Date();
  let currentYear = today.getFullYear();
  let daysInMonth = new Date(year, month, 0).getDate();

  if (day == "" && month == "" && year !== "") {
    warningStyle();
    restartResult();
    if (year > currentYear) {
      dayWarning.innerText = "This field is required";
      monthWarning.innerText = "This field is required";
      yearWarning.innerText = "Must be in the past";
    } else if (year <= 0) {
      dayWarning.innerText = "This field is required";
      monthWarning.innerText = "This field is required";
      yearWarning.innerText = "Must be a valid year";
    } else {
      dayWarning.innerText = "This field is required";
      monthWarning.innerText = "This field is required";
      yearWarning.innerText = "";
    }
  } else if (day == "" && month !== "" && year !== "") {
    if (month < 0 || month > 12) {
      dayWarning.innerText = "This field is required";
      monthWarning.innerText = "Must be a valid month";
      yearWarning.innerText = "";
    } else {
      dayWarning.innerText = "This field is required";
      monthWarning.innerText = "";
      yearWarning.innerText = "";
    }
  } else if (day !== "" && month !== "" && year !== "") {
    if (day > daysInMonth || day <= 0 || day > 31) {
      warningStyle();
      dayWarning.innerText = "Must be a valid date";
      monthWarning.innerText = "";
      yearWarning.innerText = "";
    } else if (year > currentYear) {
      dayWarning.innerText = "";
      monthWarning.innerText = "";
      yearWarning.innerText = "Must be in the past";
    } else if (month < 0 || month > 12) {
      dayWarning.innerText = "";
      monthWarning.innerText = "Must be a valid month";
      yearWarning.innerText = "";
    } else {
      restartStyle();
      dayWarning.innerText = "";
      monthWarning.innerText = "";
      yearWarning.innerText = "";
    }
  }
}

function getCalculate() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  let today = new Date();
  let compareDate = new Date(year, month, day);
  let currentDay = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();
  let daysInMonth = new Date(year, month, 0).getDate();
  let dayWarning = document.getElementById("day-warning");
  let monthWarning = document.getElementById("month-warning");
  let yearWarning = document.getElementById("year-warning");
  let resultYears = document.getElementById("result-years");
  let resultMonths = document.getElementById("result-months");
  let resultDays = document.getElementById("result-days");
  let restYear, restMonth, restDay;
  restYear = currentYear - year;
  if (dayWarning.innerText !== "" || monthWarning.innerText !== "" || yearWarning.innerText !== "") {
    warningStyle();
    resultDays.innerText = "--";
    resultMonths.innerText = "--";
    resultYears.innerText = "--";
  } else {
    if (day == "" && month == "" && year == "") {
      warningStyle();
      dayWarning.innerText = "This field is required";
      monthWarning.innerText = "This field is required";
      yearWarning.innerText = "This field is required";
      resultDays.innerText = "--";
      resultMonths.innerText = "--";
      resultYears.innerText = "--";
    } else {
      if (today < compareDate) {
        warningStyle();
        resultDays.innerText = "--";
        resultMonths.innerText = "--";
        resultYears.innerText = "--";
        dayWarning.innerText = "Date must be in the past";
        monthWarning.innerText = "Date must be in the past";
        yearWarning.innerText = "Date must be in the past";
      } else {
        if (currentMonth >= month) {
          restMonth = currentMonth - month;
          resultDays.innerText = restDay;
          resultMonths.innerText = restMonth;
          restYear = currentYear - year;
          resultYears.innerText = restYear;
        } else {
          restYear - 1;
          restMonth = 12 + currentMonth - month;
          resultDays.innerText = restDay;
          resultMonths.innerText = restMonth;
          restYear = currentYear - year;
          resultYears.innerText = restYear;
        }
        if (currentDay >= day) {
          restDay = currentDay - day;
          resultDays.innerText = restDay;
          resultMonths.innerText = restMonth;
          resultYears.innerText = restYear;
        } else {
          restMonth - 1;
          restDay = daysInMonth + currentDay - day;
          resultDays.innerText = restDay;
          resultMonths.innerText = restMonth;
          resultYears.innerText = restYear;
        }
        if (currentMonth < 0) {
          restMonth = 11;
          restYear - 1;
          resultDays.innerText = restDay;
          resultMonths.innerText = restMonth;
          resultYears.innerText = restYear;
        }
      }
    }
  }
}
