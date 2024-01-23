const addStudentButton = document.querySelector("#addCourseButton");
const studentForm = document.querySelector("#addStudent"); // Hämtar in datan #addStudent           ##
                                                        // formuläret och sparar i "studentForm"    ##

const initApp = async() => {
    console.log("App startat");
};

const addNewStudentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(studentForm); // Hämtar datan "studentForm" och kör den genom FormData för att ska key/value pairs
    const data = Object.fromEntries(formData.entries()); // Hämtar alla entries (key/value pairs) från "formData" och gör om dom till object
                                                        // och sparar som data
    console.log(data);

    const addedStudent = await addNewStudent(data);
    console.log(addedStudent);
    await addNewStudent(students);
};

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

document.addEventListener("DOMContentLoaded", initApp);