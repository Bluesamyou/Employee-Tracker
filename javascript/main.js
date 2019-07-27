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
          });

      });
    
      database.ref().on("child_added", function(snapshot){
        console.log(snapshot.val());
        console.log(snapshot.val().name);
        console.log(snapshot.val().role);
        console.log(snapshot.val().startDate);
        console.log(snapshot.val().rate);
        
        var appendTr = $("<tr>");
        var nameTd = $("<td>").text(snapshot.val().name);
        var roleTd = $("<td>").text(snapshot.val().role);
        var startTd = $("<td>").text(snapshot.val().startDate);
        var rateTd = $("<td>").text(snapshot.val().rate);
        
        var addRow = appendTr.append([nameTd, roleTd, startTd, rateTd]);
        $("tbody").append(addRow);
        
      });


})