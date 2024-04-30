interface Student {
    firstName: string;
        lastName: string;
	    age: number;
	        location: string;
		  }
		    
		    const student1: Student = {
		        firstName: 'John',
			    lastName: 'Senbeto',
			        age: 28,
				    location: 'Addis Ababa'
				      };
				        
				        const student2: Student = {
					    firstName: 'Eyob ',
					        lastName: 'Assefa',
						    age: 25,
						        location: 'Adama'
							  };
							    
							    const studentsList: Student[] = [student1, student2];

							      function renderTable() {
							          const table = document.createElement('table');
								      const tbody = document.createElement('tbody');

								          studentsList.forEach(student => {
									        const row = tbody.insertRow();
										      const firstNameCell = row.insertCell();
										            const locationCell = row.insertCell();
											      
											          firstNameCell.textContent = student.firstName;
												        locationCell.textContent = student.location;
													    });
													      
													        table.appendChild(tbody);
														    document.body.appendChild(table);
														      }
														        
														        renderTable();
															  
