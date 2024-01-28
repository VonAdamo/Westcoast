import { addNewStudent, getStudents } from "./http.js";

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector("#login-button");
    const addStudentButton = document.querySelector("#addStudentButton");
    const studentForm = document.querySelector("#addStudent");

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
        console.log("logging in");
        const students = await getStudents();

        const loginEmail = document.getElementById("login-email").value;
        console.log("Email Input:", loginEmail);

        const found = students.find(
            student => student.email === loginEmail);

        if (found) {
            console.log("Email exists");
            showWarningMessage("Email already exists. Please log in.", true);
            // Clear any existing warning messages
            clearWarningMessages();
            // Proceed with login logic here (if needed)
            } else {
            console.log("Email not found");
            // Display a warning message
            showWarningMessage("Email not registered. Please sign up.", true);
        }
    };

    const clearWarningMessages = () => {
        // Remove any existing warning messages
        const warningElement = document.getElementById('warning-message');
        if (warningElement) {
           warningElement.remove();
        }
     };
     
     const showWarningMessage = (message, isError) => {
        // Create a new div element for the warning message
        const warningElement = document.createElement('div');
        warningElement.id = 'warning-message';
        warningElement.classList.add('warning');
     
        // Set the warning message content and style based on isError
        warningElement.textContent = message;
        if (isError) {
           warningElement.classList.add('error');
        }
     
        // Append the warning element to the form
        document.querySelector('form').appendChild(warningElement);
     
        // Clear the warning message after 3 seconds
        setTimeout(() => {
           clearWarningMessages();
        }, 3000);
     };

    addStudentButton.addEventListener("click", addNewStudentHandler);
    loginButton.addEventListener("click",loginHandler);
});

