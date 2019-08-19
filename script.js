// Submit form with id function.
function submit_by_id() {
  var name = document.getElementById("name").value;
  var bday = document.getElementById("date").value;
  var gender = document.getElementById("gender").value;
  var akan;
  var bdayArray;
  var days;
  var currentTime;
  var currentDay;
  var currentDayName;

  if (validation()) // Calling validation function
  {
    document.getElementById("form_id").submit(); //form submission
    bdayArray = bday.split('-');
    if(bdayArray.length !== 3){
      alert("invalid date");
    }else{
      if (!bdayArray[0].match(/^\d\d\d\d$/) ||  !bdayArray[1].match(/^\d\d$/) || !bdayArray[2].match(/^\d\d$/)) {
        alert("invalid Date");
      } else {
          days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];
          currentTime = new Date(
              parseInt(bdayArray[0]),
              parseInt(bdayArray[1]) - 1, //month starts from 0
              parseInt(bdayArray[2])
          );
          currentDay = currentTime.getDay();
          currentDayName = days[currentDay];
          //alert("You were born on" + currentDayName);
          if (gender === 'Male') {
             if (currentDayName == 'Sunday') {
                akan = "Kwasi";
             } else if(currentDayName == 'Monday') {
                akan = "Kwadwo";
             }else if(currentDayName == 'Tuesday'){
               akan = "Kwabena";
             }else if (currentDayName == 'Wednesday') {
               akan = "Kwaku";
             } else if (currentDayName == 'Thursday') {
              akan = "Yaw";
             } else if (currentDayName == 'Friday') {
                akan = "Kofi";
             }else if (currentDayName == 'Saturday') {
                akan = "Kwame";
             }else {
               alert("invalid");
             }
            alert("Name: " + name + "Gender" + gender + "Born on " + currentDayName + "Akan" + akan);

          } else if(gender === 'Female') {

            if (currentDayName == 'Sunday') {
               akan = "Akosua";
            } else if(currentDayName == 'Monday') {
               akan = "Adwoa";
            }else if(currentDayName == 'Tuesday'){
              akan = "Abenaa";
            }else if (currentDayName == 'Wednesday') {
              akan = "Akua";
            } else if (currentDayName == 'Thursday') {
             akan = "Yaa";
            } else if (currentDayName == 'Friday') {
               akan = "Afua";
            }else if (currentDayName == 'Saturday') {
               akan = "Ama";
            }else {
              alert("invalid");
            }
           alert("Name: " + name + "Gender" + gender + "Born on " + currentDayName + "Akan" + akan);


          }else {
            alert("invalid gender");
          }

      }
    }

  }
}

  // Name and date validation Function.
  function validation() {
    var name = document.getElementById("name").value;
    var bday = document.getElementById("date").value;
    var gender = document.getElementById("gender").value;
    if (name === '' || bday === '' || gender === '') {
      alert("Please fill all fields...!!!!!!");
    return false;
    } else {
      return true;
    }
  }
