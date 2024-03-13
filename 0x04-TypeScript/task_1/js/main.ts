// task_1/js/main.ts
interface Teacher {
    readonly firstName: string;
        readonly lastName: string;
	    fullTimeEmployee: boolean;
	        yearsOfExperience?: number;
		    readonly location: string;
		        [key: string]: any;
			  }
			    
			   
			    interface Directors extends Teacher {
			        numberOfReports: number;
				  }

				    interface PrintTeacherFunction {
				        (firstName: string, lastName: string): string;
					  }
					    

					    interface StudentClassInterface {
					        new (firstName: string, lastName: string): StudentClass;
						  }
						    

						    class StudentClass {
						        constructor(private firstName: string, private lastName: string) {}
							  
							    workOnHomework(): string {
							          return "Currently working";
								      }
								        
								          displayName(): string {
									        return this.firstName;
										    }
										      }
										        

										        const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
											    return `${firstName.charAt(0)}. ${lastName}`;
											      };

											        const teacher3: Teacher = {
												    firstName: 'John',
												        fullTimeEmployee: false,
													    lastName: 'Doe',
													        location: 'London',
														    contract: false,
														      };
														        
														        console.log(teacher3);
															  
															  const director1: Directors = {
															      firstName: 'John',
															          lastName: 'Doe',
																      location: 'London',
																          fullTimeEmployee: true,
																	      numberOfReports: 17,
																	        };
																		  console.log(director1);
																		    
																		    console.log(printTeacher("John", "Doe"));
																		      
																		      const student = new StudentClass("Alice", "Smith");
																		        console.log(student.workOnHomework());
																			  console.log(student.displayName());
																			    
																			    export { Teacher, Directors, PrintTeacherFunction, StudentClassInterface };
																			      
