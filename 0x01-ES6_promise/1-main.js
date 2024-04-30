import getFullResponseFromAPI from './1-promise';

getFullResponseFromAPI(true)
  .then((response) => {
	      console.log(response);
	    })
  .catch((error) => {
	      console.error(error.message); // Log only the error message
	    });

getFullResponseFromAPI(false)
  .then((response) => {
	      console.log(response);
	    })
  .catch((error) => {
	      console.error(error.message); // Log only the error message
	    });
