// Example user database (temporary; replace later with backend)
const users = [
  { username: "student1", password: "1234", role: "student" },
  { username: "professor1", password: "1234", role: "professor" },
  { username: "vicedean1", password: "1234", role: "viceDean" },
  { username: "dean1", password: "1234", role: "dean" },
  { username: "deanship1", password: "1234", role: "deanship" },
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    alert("تم تسجيل الدخول بنجاح!");
    localStorage.setItem("loggedUser", JSON.stringify(user));

    switch (user.role) {
      case "student":
        window.location.href = "dashboards/student_dashboard.html";
        break;
      case "professor":
        window.location.href = "dashboards/professor_dashboard.html";
        break;
      case "viceDean":
        window.location.href = "dashboards/vice_dean_dashboard.html";
        break;
      case "dean":
        window.location.href = "dashboards/dean_dashboard.html";
        break;
      case "deanship":
        window.location.href = "dashboards/deanship_dashboard.html";
        break;
      default:
        alert("دور المستخدم غير معروف!");
    }
  } else {
    alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
  }
});
