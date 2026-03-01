const studentsContainer = document.getElementById("students");
const umb = "UMass Boston"
const uma = "UMass Amherst"

const students = [
    {
        name: "Alexander Vatousios",
        school: umb,
        major: "Physics"
    },
    {
        name: "Amanda Sherman",
        school: uma,
        major: "Computer Science"
    },
    {
        name: "Bridgette Bennett",
        school: umb,
        major: "Chemistry"
    },
    {
        name: "Colleen Lombard",
        school: umb,
        major: "Mathematics"
    },
    {
        name: "Ivan Vergizov",
        school: umb,
        major: "Engineering"
    },
    {
        name: "Jazlynn Bailey",
        school: uma,
        major: "Biology"
    },
    {
        name: "Mahri Hayden",
        school: uma,
        major: "Chemistry"
    },
    {
        name: "Ouma Bally",
        school: uma,
        major: "Engineering"
    },
    {
        name: "Sawyer Bowerman",
        school: umb,
        major: "Computer Science"
    },
    {
        name: "Scarlet Taveras Guzman",
        school: umb,
        major: "Biology"
    },
    {
        name: "Sejla Kuldija",
        school: uma,
        major: "Physics"
    },
    {
        name: "Sage Arias Hambleton",
        school: uma,
        major: "Physics"
    },
    {
        name: "Kristlyn Lara",
        school: umb,
        major: "Chemistry"
    }
]

const exts = ["jpg", "jpeg", "png", "PNG"];
async function findImage(pathName) {
  for (const ext of exts) {
    const url = `img/${pathName}.${ext}`;

    try {
      const res = await fetch(url, { method: "HEAD" });
      if (res.ok) return url;
    } catch (_) { }
  }

  return null;
}

students.map(async (student) => {
    if (!student.major && !student.name && !student.school) return
    const pathName = student.name.replaceAll(" ", "_");
    

    // Divider
    const newStudentDiv = document.createElement("div");
    newStudentDiv.className = "student";

    // Image
    const newStudentImg = document.createElement("img");
    newStudentImg.className = "student-img"
    const foundImg = await findImage(pathName);
    if (foundImg) {
        newStudentImg.src = foundImg;
    } else {
        newStudentImg.src = "img/default.png"; // optional fallback
    }
    newStudentDiv.appendChild(newStudentImg);

    const infoDiv = document.createElement("div");
    infoDiv.className = "student-info"

    // Name
    const newStudentName = document.createElement("h1")
    newStudentName.className = "student-name"
    newStudentName.textContent = student.name;
    infoDiv.appendChild(newStudentName);

    // School
    const newStudentSchool = document.createElement("h3");
    newStudentSchool.className = "student-school";
    newStudentSchool.textContent = student.school;
    infoDiv.appendChild(newStudentSchool);

    // Major
    const newStudentMajor = document.createElement("p");
    newStudentMajor.className = "student-major";
    newStudentMajor.textContent = student.major;
    infoDiv.appendChild(newStudentMajor);

    newStudentDiv.appendChild(infoDiv);
    studentsContainer.appendChild(newStudentDiv);
})