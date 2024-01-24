const loginButton = document.querySelector("#login-button");
const addStudentButton = document.querySelector("#addStudentButton");
const studentForm = document.querySelector("#addStudent");

const initApp = async() => {
    console.log("App startat");
};

const addNewStudentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(studentForm);
    const data = Object.fromEntries(formData.entries());

    const addedStudent = await addNewStudent(data);
    console.log(addedStudent);
    await addNewStudent(students);
};

const loginHandler = async (e) => {
    e.preventDefault()
    console.log("loggar in");
    const students = await getStudents();
    console.log(students);

    const found = students.find(
        student => student.email === `${login-email}`);

        if(found){
            console.log("Email exists")
        } else {
            console.log("Email not found")
        }
};

const getStudents = async() => {
    try {
        const url = "http://localhost:3000/students"
        const response = await fetch(url)

        if(response.ok){
            const result = await response.json();
            return result;
        } else {
            console.log("Something went wrong");
        }
    } catch (error) {
        console.log(error);
    }
}

// Lätt till en ny användare...
const addNewStudent = async(students) => {
    // Lagra url till endpoint users...
    const url = "http://localhost:3000/students"

    try {
        // använda fetch api för att lagra "POST" en ny user
    const response = await fetch(url,{
        method: "POST", // Vilket HTTP Verb ska vi använda
        headers: {
            'Content-Type': "application/json" // Talar om vilken typ av data vi skickar
        },
        body: JSON.stringify(students), // Data som vi skickar och konverteras från JS till JSON med stringify
    });
    if (response.ok) {
        const newStudent = await response.json();
        return newStudent;
      }else{
        console.log("Det gick inge vidare!!!")
      }
    } catch (error) {
      console.log(error)
    }
};

addStudentButton.addEventListener("click", addNewStudentHandler);
loginButton.addEventListener("click",loginHandler);
document.addEventListener("DOMContentLoaded", initApp);