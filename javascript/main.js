$(document).ready(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyBKg36itckY7eYN-buUd-9KptxxTGMQx3c",
        authDomain: "employee-tracker-timesheet.firebaseapp.com",
        databaseURL: "https://employee-tracker-timesheet.firebaseio.com",
        projectId: "employee-tracker-timesheet",
        storageBucket: "",
        messagingSenderId: "935927474871",
        appId: "1:935927474871:web:4b5749021977a5e6"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      var database = firebase.database();
      $("#form-submit").on("click", function(event){
        event.preventDefault();
  
        var employeeName = $("#empNumberInput").val().trim();
        var empRole = $("#empRole").val().trim();
        var startDate = $("#startDate").val().trim();
        var monthlyRate = $("#monthlyRate").val().trim();

        database.ref().push({
            name: employeeName,
            role: empRole,
            startDate: startDate,
            rate: monthlyRate
          })

      })

})