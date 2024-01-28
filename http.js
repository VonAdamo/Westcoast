export {addNewStudent, getStudents};

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
        console.log("Failed")
    }
    } catch (error) {
    console.log(error)
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