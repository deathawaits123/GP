function calculate() {
    // جمع درجات المواد
    var totalGrade = 0;
    for (var i = 1; i <= 9; i++) {
      totalGrade += document.getElementById("grade" + i).value * document.getElementById("hours" + i).value;
    }
  
    // اختبار درجات المواد
    for (var i = 1; i <= 9; i++) {
      if (document.getElementById("grade" + i).value < 0 || document.getElementById("grade" + i).value > 100) {
        alert("درجة المادة " + document.getElementById("subject" + i).value + " غير صحيحة.");
        return;
      }
    }
  
    // اختبار عدد ساعات المواد
    for (var i = 1; i <= 9; i++) {
      if (document.getElementById("hours" + i).value < 0) {
        alert("عدد ساعات المادة " + document.getElementById("subject" + i).value + " غير صحيحة.");
        return;
      }
    }
  
    // اختبار عدد ساعات المواد
    for (var i = 1; i <= 9; i++) {
      if (document.getElementById("hours" + i).value == 0) {
        alert("عدد ساعات المادة " + document.getElementById("subject" + i).value + " يجب أن يكون أكبر من صفر.");
        return;
      }
    }
  
    // حساب النسبة
    var percentage = totalGrade / 26;
  
    // عرض النسبة
    document.getElementById("percentage").innerHTML = percentage + "%";
  }
  
  // عند الضغط على زر الحساب
  document.getElementById("submit").addEventListener("click", calculate);
  
