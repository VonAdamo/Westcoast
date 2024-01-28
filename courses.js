import { getStudents } from "./http.js";

document.addEventListener('DOMContentLoaded', () => {
    const courseList = document.querySelector("#courses");
    const searchForm = document.querySelector("#search-field")
    const searchInput = document.querySelector("#search-bar");
    const studentlist = document.querySelector("#students");

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
        const students = await getStudents();
        students.forEach(students => {
            console.log(students);
            studentlist.innerHTML += `
            <div>
            <h4>${students.title}</h4>
            <span>${students.firstName}</span>
            <span>${students.lastName}</span>
            </div>
            `;
        });
    }
    
    async function searchStudent(e) {
        e.preventDefault(); // Prevent form submission
        const students = await getStudents();

        const searchTerm = searchInput.value.toLowerCase();

        // Clear existing students
        studentlist.innerHTML = "";

        // Filter students based on the search term
        const filteredStudents = students.filter(students =>
            students.title.toLowerCase().includes(searchTerm)
        );

        // Display filtered students
        filteredStudents.forEach(students => {
            studentlist.innerHTML += `
            <div>
            <h4>${students.title}</h4>
            <span>${students.firstName}</span>
            <span>${students.lastName}</span>
            </div>
            `;
        });
    };
    listCourses()
    listStudents()

    searchForm.addEventListener("submit", searchStudent);
    searchInput.addEventListener("input", searchStudent);
    
});
