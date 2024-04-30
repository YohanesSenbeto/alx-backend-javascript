function updateStudentGradeByCity(students, city, newGrades) {
	    const filteredStudents = students.filter(
		            (student) => student.location === city
		        );
	    const updatedStudents = filteredStudents.map((student) => {
		            const gradeObj = newGrades.find(
				                (grade) => grade.studentId === student.id
				            );
		            if (gradeObj) {
				                return {
							                ...student,
							                grade: gradeObj.grade,
							            };
				            } else {
						                return {
									                ...student,
									                grade: "N/A",
									            };
						            }
		        });

	    return updatedStudents;
}

export default updateStudentGradeByCity;
