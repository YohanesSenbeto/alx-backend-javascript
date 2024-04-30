// task_5/js/main.ts

// Define interface MajorCredits
interface MajorCredits {
    credits: number;
        brand: string; // Unique identifier
	  }
	    
	    // Define interface MinorCredits
	      interface MinorCredits {
	          credits: number;
		      brand: string; // Unique identifier
		        }
			  
			  // Function to sum major credits
			    function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
			        return {
				      credits: subject1.credits + subject2.credits,
				            brand: "MajorCredits" // Unique identifier
					        };
						  }
						    
						    // Function to sum minor credits
						      function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
						          return {
							        credits: subject1.credits + subject2.credits,
								      brand: "MinorCredits" // Unique identifier
								          };
									    }
