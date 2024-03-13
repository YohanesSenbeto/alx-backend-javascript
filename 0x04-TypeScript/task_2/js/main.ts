// task_2/js/main.ts
// DirectorInterface interface
interface DirectorInterface {
  workFromHome(): string;
    getCoffeeBreak(): string;
      workDirectorTasks(): string;
      }

      // TeacherInterface interface
      interface TeacherInterface {
        workFromHome(): string;
	  getCoffeeBreak(): string;
	    workTeacherTasks(): string;
	    }

	    // Director class implementing DirectorInterface
	    class Director implements DirectorInterface {
	      workFromHome(): string {
	          return "Working from home";
		    }

		      getCoffeeBreak(): string {
		          return "Getting a coffee break";
			    }

			      workDirectorTasks(): string {
			          return "Getting to director tasks";
				    }
				    }

				    // Teacher class implementing TeacherInterface
				    class Teacher implements TeacherInterface {
				      workFromHome(): string {
				          return "Cannot work from home";
					    }

					      getCoffeeBreak(): string {
					          return "Cannot have a break";
						    }

						      workTeacherTasks(): string {
						          return "Getting to work";
							    }
							    }

							    // Function createEmployee
							    function createEmployee(salary: number | string): Director | Teacher {
							      if (typeof salary === "number" && salary < 500) {
							          return new Teacher();
								    } else {
								        return new Director();
									  }
									  }

									  // Function isDirector
									  function isDirector(employee: Director | Teacher): employee is Director {
									    return (employee as Director).workDirectorTasks !== undefined;
									    }

									    // Function executeWork
									    function executeWork(employee: Director | Teacher): string {
									      if (isDirector(employee)) {
									          return employee.workDirectorTasks();
										    } else {
										        return employee.workTeacherTasks();
											  }
											  }

											  // String literal type Subjects
											  type Subjects = "Math" | "History";

											  // Function teachClass
											  function teachClass(todayClass: Subjects): string {
											    if (todayClass === "Math") {
											        return "Teaching Math";
												  } else {
												      return "Teaching History";
												        }
													}

													// Test cases
													console.log(createEmployee(200)); // Teacher
													console.log(createEmployee(1000)); // Director
													console.log(createEmployee('$500')); // Director

													const employee1 = createEmployee(200);
													const employee2 = createEmployee(1000);

													console.log(executeWork(employee1)); // Getting to work
													console.log(executeWork(employee2)); // Getting to director tasks

													console.log(teachClass('Math')); // Teaching Math
													console.log(teachClass('History')); // Teaching History

