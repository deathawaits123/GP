function calculateCertificate() {
    var subjects = document.querySelectorAll("#gradesTable tr:not(:first-child)");
    var totalScore = 0;
    var totalHours = 0;
  
    subjects.forEach(function (subject) {
      var hours = parseInt(subject.querySelector(".hours").value);
      var grade = parseInt(subject.querySelector(".grade").value);
  
      if (!isNaN(hours) && !isNaN(grade)) {
        totalScore += grade * hours;
        totalHours += hours;
      }
    });
  
    var certificateScore = (totalScore / totalHours).toFixed(2);
  
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Your Semester GPA is: " + certificateScore;
  }
  
  function addSubjectRow() {
    var table = document.getElementById("gradesTable");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var subjectCell = row.insertCell(0);
    var hoursCell = row.insertCell(1);
    var gradeCell = row.insertCell(2);
  
    subjectCell.innerHTML = '<input type="text" class="subject" placeholder="Subject ' + rowCount + '">';
    hoursCell.innerHTML = '<input type="number" class="hours" placeholder="Hours">';
    gradeCell.innerHTML = '<input type="number" class="grade" placeholder="Grade">';
  }

  alert("يرجى ملاحظة أن هذا العمل هو جهد فردي من قبل طالب ولا يتبع أي مؤسسة، وقد يحتوي على أخطاء غير مقصودة.  ")