// 0-promise.js
 export default function getResponseFromAPI() {
     return new Promise((resolve, reject) => {
             setTimeout(() => {
                         resolve("Response from API");
                                 }, 1000); // Simulating a 1-second delay
                                    });
                                     }
                                     
