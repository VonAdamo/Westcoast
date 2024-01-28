const courseList = document.querySelector("#courses");
const searchButton = document.querySelector("#searchButton");
const studentlist = document.querySelector("#students");

function initPage (){
    listCourses()
    listStudents()
}

async function listCourses(){
    const course = await fetchCourses();
    course.forEach(course => {
        console.log(course);
        courseList.innerHTML += `
        <div>
        <div><img src="${course.courseImg}" alt="" width="700px"></div>
        <h4>${course.title}</h4>
        <span>${course.courseId}</span>
        <span>${course.duration}</span>
        <span>${course.studyStructure}</span>
        <span>${course.startDate}</span>
        <button><a href="html/add-student.html">Sign up</a></button>
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

async function listStudents(){
    const students = await fetchStudents();
    students.forEach(students => {
        console.log(students);
        studentlist.innerHTML += `
        <span>
        <h4>${students.title}</h4>
        <span>${students.firstName}</span>
        <span>${students.lastName}</span>
        </span>
        `;
    });
}

async function fetchStudents(){
    try {
        const response = await fetch("http://localhost:3000/students");

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

document.addEventListener("DOMContentLoaded", searchButton);
document.addEventListener("DOMContentLoaded", initPage);
