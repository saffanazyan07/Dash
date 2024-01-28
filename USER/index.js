const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});
/*dropdown*/

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

let logTableVisible = false; // Variable to track the visibility status for log table
let warnlogTableVisible = false; // Variable to track the visibility status for warnlog table

async function log() {
  try {
    const response = await fetch('http://192.168.1.213:5001/nfs/log', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('API request failed with status: ' + response.status);
    }

    const data = await response.json();

    // Create a table element
    const table = document.createElement("table");

    // Create a header row
    const headerRow = table.createTHead().insertRow(0);
    for (const key of Object.keys(data[0])) {
      const th = document.createElement("th");
      th.textContent = key;
      headerRow.appendChild(th);
    }

    // Create a table body
    const body = table.createTBody();
    for (const item of data) {
      const row = body.insertRow();
      for (const key of Object.keys(item)) {
        const cell = row.insertCell();
        cell.textContent = item[key];
      }
    }

    // Append the table to the element with the ID 'log'
    const logElement = document.getElementById('log');
    logElement.innerHTML = ''; // Clear existing content
    logElement.appendChild(table);

    // Toggle the visibility status
    logTableVisible = !logTableVisible;

    // Show/hide the table based on the visibility status
    if (logTableVisible) {
      table.style.display = 'table';
    } else {
      table.style.display = 'none';
    }

  } catch (error) {
    console.error('Error fetching data:', error);
    // Display an error message to the user if desired
  }
}

async function warnlog() {
  try {
    const response = await fetch('http://192.168.1.213:5001/nfs/warnlogs', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('API request failed with status: ' + response.status);
    }

    const data = await response.json();

    // Create a table element
    const table = document.createElement("table");

    // Create a header row
    const headerRow = table.createTHead().insertRow(0);
    for (const key of Object.keys(data[0])) {
      const th = document.createElement("th");
      th.textContent = key;
      headerRow.appendChild(th);
    }

    // Create a table body
    const body = table.createTBody();
    for (const item of data) {
      const row = body.insertRow();
      for (const key of Object.keys(item)) {
        const cell = row.insertCell();
        cell.textContent = item[key];
      }
    }

    // Append the table to the element with the ID 'warnlog'
    const warnlogElement = document.getElementById('warnlog');
    warnlogElement.innerHTML = ''; // Clear existing content
    warnlogElement.appendChild(table);

    // Toggle the visibility status
    warnlogTableVisible = !warnlogTableVisible;

    // Show/hide the table based on the visibility status
    if (warnlogTableVisible) {
      table.style.display = 'table';
    } else {
      table.style.display = 'none';
    }

  } catch (error) {
    console.error('Error fetching data:', error);
    // Display an error message to the user if desired
  }
}

// Additional function Totallog
async function Totallog() {
  try {
    const response = await fetch('http://192.168.1.213:5001/nfs/totallogs', {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('API request failed with status: ' + response.status);
    }

    const data = await response.json();
    document.getElementById('info').textContent = JSON.stringify(data.info, null, 2);
    document.getElementById('warning').textContent = JSON.stringify(data.warning, null, 2);
    document.getElementById('error').textContent = JSON.stringify(data.error, null, 2);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Display an error message to the user if desired
  }
}


/*logout function*/
function logout() {
    fetch('http://140.118.121.85:5001/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // If the endpoint requires a request body, you can include it here
        // body: JSON.stringify({ key: 'value' }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // If the request was successful, you can redirect the user or perform other actions
        return response.json();
    })
    .then(data => {
        console.log('Logout response:', data);
        // Assuming the logout was successful, redirect the user to the specified page
        window.location.href = 'http://140.118.121.85:5001';
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('An error occurred. Please try again later.');
    });
}
document.getElementById('logoutButton').addEventListener('click', function() {
    logout();
});

