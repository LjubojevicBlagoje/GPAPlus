document.addEventListener("DOMContentLoaded", function () {
  const courseRows = document.getElementById("course-rows");
  const addCourseBtn = document.getElementById("add-course-btn");
  const calcBtn = document.getElementById("calculate-btn");
  const result = document.getElementById("gpa-result");

  function addCourseRow() {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td><input type="text" placeholder="Course name" /></td>
      <td><input type="number" min="1" max="7" placeholder="1-7" /></td>
      <td><button class="remove-btn">🗑</button></td>
    `;

    courseRows.appendChild(row);

    row.querySelector(".remove-btn").addEventListener("click", () => {
      row.remove();
    });
  }

  function calculateGPA() {
    const rows = courseRows.querySelectorAll("tr");
    let total = 0;
    let count = 0;

    rows.forEach((row) => {
      const gradeInput = row.querySelector("td:nth-child(2) input");
      const grade = parseFloat(gradeInput.value);

      if (!isNaN(grade) && grade >= 1 && grade <= 7) {
        total += grade;
        count++;
      }
    });

    if (count === 0) {
      result.textContent = "Please enter at least one valid grade.";
    } else {
      const gpa = (total / count).toFixed(2);
      result.textContent = `Your GPA is ${gpa}`;
    }
  }

  addCourseBtn.addEventListener("click", addCourseRow);
  calcBtn.addEventListener("click", calculateGPA);
});
