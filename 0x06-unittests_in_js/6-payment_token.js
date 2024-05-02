const getPaymentTokenFromAPI = (success, retryCount = 0) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else if (retryCount < 3) {
      setTimeout(() => {
        resolve(getPaymentTokenFromAPI(true, retryCount + 1));
      }, 1000);
    } else {
      reject(new Error('Failed to retrieve payment token'));
    }
  });
}

module.exports = getPaymentTokenFromAPI;
