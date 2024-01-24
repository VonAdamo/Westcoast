const addCourseButton = document.querySelector("#addCourseButton");
const courseForm = document.querySelector("#addCourse"); // Hämtar in datan #addStudent           ##
                                                        // formuläret och sparar i "studentForm"    ##

const initApp = async() => {
    console.log("App startat");
};

const addNewCourseHandler = async (e) => {
    e.preventDefault();

    const formInfo = new FormData(courseForm); // Hämtar datan "studentForm" och kör den genom FormData för att ska key/value pairs
    const info = Object.fromEntries(formInfo.entries()); // Hämtar alla entries (key/value pairs) från "formData" och gör om dom till object
                                                        // och sparar som data
    console.log(info);

    const addedCourse = await addNewCourse(info);
    console.log(addedCourse);
    //await addNewCourse(courses);
};

// Lätt till en ny användare...
const addNewCourse = async(courses) => {
    // Lagra url till endpoint users...
    const url = "http://localhost:3000/courses"

    try {
        // använda fetch api för att lagra "POST" en ny user
    const response = await fetch(url,{
        method: "POST", // Vilket HTTP Verb ska vi använda
        headers: {
            'Content-Type': "application/json" // Talar om vilken typ av data vi skickar
        },
        body: JSON.stringify(courses), // Data som vi skickar och konverteras från JS till JSON med stringify
    });
    if (response.ok) {
        const newCourse = await response.json();
        return newCourse;
      }else{
        console.log("Det gick inge vidare!!!")
      }
    } catch (error) {
      console.log(error)
    }
};

addCourseButton.addEventListener("click", addNewCourseHandler);

document.addEventListener("DOMContentLoaded", initApp);