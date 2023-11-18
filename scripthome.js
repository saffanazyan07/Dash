
//##########UEINFO
const apiUrl = 'http:// 140.118.121.85:5000/ue/info';

// Fetch data from the API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Handle the retrieved data
        console.log(data);

        // Call a function to display the data
        displayData(data);
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to display data in the HTML
function displayData(data) {
    // Access data properties and update HTML elements
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = `<p>${data.propertyName}</p>`;
    // Add more HTML manipulation as needed based on the data structure
