const express = require("express");
const app = express();

let students = [
    { name: "Johann", program: "CS" },
    { name: "Arielle", program: "CS" },
    { name: "Jonathan", program: "CS" },
    { name: "Emmanuel", program: "CS" },
    { name: "Guillaume", program: "CS" },
    { name: "Katie", program: "CS" },
    { name: "Guillaume", program: "SWE" },
    { name: "Joseph", program: "SWE" },
    { name: "Paul", program: "SWE" },
    { name: "Tommy", program: "SWE" },
];

app.get("/students", (req, res) => {
    let csStudents = students.filter((student) => student.program === "CS");
    let sweStudents = students.filter((student) => student.program === "SWE");

    let response = `
This is the list of our students
Number of students: ${students.length}
Number of students in CS: ${csStudents.length}. List: ${csStudents
        .map((student) => student.name)
        .join(", ")}
Number of students in SWE: ${sweStudents.length}. List: ${sweStudents
        .map((student) => student.name)
        .join(", ")}
`;

    res.send(response);
});

app.listen(1245, () => {
    console.log("Server listening on port 1245");
});
