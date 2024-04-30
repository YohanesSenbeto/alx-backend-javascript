const fs = require("fs");

function countStudents(filePath) {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        const lines = data.split("\n");
        const students = lines.filter((line) => line.trim() !== "");
        const studentCount = students.length;
        console.log(`Number of students: ${studentCount}`);

        const csStudents = [];
        const sweStudents = [];

        students.forEach((line) => {
            const [firstName, lastName] = line.split(",");
            if (lastName.startsWith("S")) {
                sweStudents.push(firstName);
            } else {
                csStudents.push(firstName);
            }
        });

        console.log(
            `Number of students in CS: ${
                csStudents.length
            }. List: ${csStudents.join(", ")}`
        );
        console.log(
            `Number of students in SWE: ${
                sweStudents.length
            }. List: ${sweStudents.join(", ")}`
        );
    } catch (err) {
        throw new Error("Cannot load the database");
    }
}

module.exports = countStudents;
