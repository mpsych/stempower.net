const facultyContainer = document.getElementById("faculty");
const studentsContainer = document.getElementById("student");

const faculty = [
    "Brook Moyers",
    "David Degras-Valabregue",
    "Jeffrey Blanchard",
    "Jessica Boakye",
    "Joseph DuChene",
    "Michael Rahaim",
    "Niya Sa",
    "Pubali Datta",
    "Rafael Coelho Lopes de Sa",
    "Robin Young",
    "Sumientra Rampersad",
    "Tales Imbirba",
]

const students = [
    "Alexander Vatousios",
    "Amanda Sherman",
    "Bridgette Bennett",
    "Colleen Lombard",
    "Ivan Vergizov",
    "Jazlynn Bailey",
    "Mahri Hayden",
    "Ouma Bally",
    "Sawyer Bowerman",
    "Scarlet Taveras Guzman",
    "Sejla Kuldija",
    "Sage Arias Hambleton",
    "Kristyn Lara",
]

const exts = ["jpg", "jpeg", "png", "PNG", "jfif"];
async function findImage(pathName, type) {
    const typePath = type == "s" ? "student" : "faculty";
    for (const ext of exts) {
        const url = `img/${typePath}/${pathName}.${ext}`;

        try {
            const res = await fetch(url, { method: "HEAD" });
            if (res.ok) return url;
        } catch (_) { continue;}
    }

    return null;
}

faculty.map(async (faculty) => {
    if (!faculty) return;
    const pathName = faculty.replaceAll(" ", "_");

    // Divider
    const newFacultyDiv = document.createElement("div");
    newFacultyDiv.className = "faculty-div";

    // Image
    const newFacultyImg = document.createElement("img");
    newFacultyImg.className = "faculty-img"
    const foundImg = await findImage(pathName, "f");
    if (foundImg) {
        newFacultyImg.src = foundImg;
    } else {
        newFacultyImg.src = "img/default.png"; // optional fallback
    }
    newFacultyImg.title = faculty;
    newFacultyDiv.appendChild(newFacultyImg);

    facultyContainer.appendChild(newFacultyDiv);
})

students.map(async (student) => {
    if (!student) return;
    const pathName = student.replaceAll(" ", "_");

    // Divider
    const newStudentDiv = document.createElement("div");
    newStudentDiv.className = "student-div";

    // Image
    const newStudentImg = document.createElement("img");
    newStudentImg.className = "student-img"
    const foundImg = await findImage(pathName, "s");
    if (foundImg) {
        newStudentImg.src = foundImg;
    } else {
        newStudentImg.src = "img/default.png"; // optional fallback
    }
    newStudentImg.title = student;
    newStudentDiv.appendChild(newStudentImg);

    studentsContainer.appendChild(newStudentDiv);
})