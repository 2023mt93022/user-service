const axios = require('axios');

async function getBooks() {
    try {
        const response = await axios.get('http://localhost:3001/books');
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error.message);
        throw error;
    }
}

module.exports = { getBooks };
