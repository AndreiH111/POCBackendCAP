// require('dotenv').config();
// const axios = require('axios');
// const cds = require('@sap/cds');

// const CARDS_CLIENT_ID = process.env.CARDS_CLIENT_ID;
// const CARDS_CLIENT_SECRET = process.env.CARDS_CLIENT_SECRET;
// const CARDS_TOKEN_URL = process.env.CARDS_TOKEN_URL;
// const CARDS_URL = process.env.CARDS_URL;

// // Function to get the token​
// async function getToken() {
// const params = new URLSearchParams({
//   grant_type: 'client_credentials',
//   client_id: CARDS_CLIENT_ID,
//   client_secret: CARDS_CLIENT_SECRET
// });

// try {
//   const response = await axios.post(CARDS_TOKEN_URL, params, {
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//   });

//   if (!response.data?.access_token) {
//     throw new Error('No access_token in response');
//   }
//     return response.data.access_token;

// } catch (error) {
//   console.error('Error fetching token:', error.message);
//   throw error;
// }
// }

// async function testService() {​
//    try {
//        const token = await getToken();
//        const response = await axios.get(`${CARDS_URL}/odata/v4/catalog/Projects`, {​
//            headers: {
//                'Authorization': `Bearer ${token}`,
//                'Content-Type': 'application/json'
//            }
//        });
//        console.log('Response from CAP service:', response.data);​

//    } catch (error) {
//        console.error('Error during service call:', error.message);​
//    }
// }

// testService();