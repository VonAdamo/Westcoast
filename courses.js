const courseList = document.querySelector("#courses");

function initPage (){
    listCourses()
}

async function listCourses(){
    const courses = await fetchCourses();
    courses.forEach(course => {
        console.log(course);
        courseList.innerHTML += `
        <div>
        <h4>${course.title}</h4>
        <h6>${course.startDate}</h6>
        </div>
        `;
    });
}

async function fetchCourses(){
    try {
        const response = await fetch("http://localhost:3000/courses");

        if(response.ok){
            const result = await response.json();
            return result
        } else {
            console.log(response.status)
        }
    } catch (error) {
        console.log(error)
    }
}

/* function saveHandler(e){
    e.preventDefault();
    console.log("Sparar");
    const name = inputName.value
    inputName.value = "Nisse";
    form.addEventListener("sumbit", saveHandler);
} */

document.addEventListener("DOMContentLoaded", initPage);
