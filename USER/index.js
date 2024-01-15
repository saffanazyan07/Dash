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
/*imsiinput*/
async function imsi() {
    const imsiInput = document.getElementById('imsiInput');
    const imsi = imsiInput.value.trim();

    if (!imsi) {
        // You might want to display this error on the page instead of an alert
        alert('Please enter your imsi.');
        return;
    }

    const baseUrl = 'http://192.168.1.213:5001';
    const endpoint = '/user/subscriber/detail';

    const requestBody = {
        s_imsi: imsi,
    };

    try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('imsi response:', data);

        if (data.message === 'User found' || data.status_code === 200) {
            displayData(data);
        } else {
            console.error('Not found', data.message);
            // You might want to display this error on the page instead of an alert
            alert('imsi not found.');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        // You might want to display this error on the page instead of an alert
        alert('An error occurred. Please try again later.');
    }
}

document.getElementById('subscriberForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevents the default form submission
    await imsi(); // Use 'await' to make sure the imsi function completes before moving on
});

/*imsi*/
async function imsi() {
    const imsiInput = document.getElementById('searchimsi');
    const imsi = imsiInput.value.trim();

    if (!imsi) {
        alert('Please enter your imsi.');
        return;
    }

    const baseUrl = 'http://192.168.1.213:5001';
    const endpoint = '/user/subscriber/detail';

    const requestBody = {
        s_imsi: imsi,
    };

    try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('imsi response:', data);

        if (data.message === 'User found' || data.status_code === 200) {
            displayData(data); // Call function to display data
        } else {
            console.error('not found', data.message);
            alert('imsi not found.');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('An error occurred. Please try again later.');
    }
}

function displayData(data) {
    // Update the content of the HTML elements with the fetched data
    document.getElementById('plmnID').textContent = data.s_plmn  || '-';
    document.getElementById('imsi').textContent = data.s_imsi || '-';
    document.getElementById('Auth').textContent = data.s_authmethod || '-';
    document.getElementById('opct').textContent = data.s_opctype || '-';
    document.getElementById('opc').textContent = data.s_opc || '-';
    document.getElementById('sqn').textContent = data.s_sqn || '-';
    document.getElementById('sst').textContent = data.s_sst || '-';
    document.getElementById('sd').textContent = data.s_sd || '-';
    document.getElementById('dnn').textContent = data.s_dnn   || '-';
    document.getElementById('k').textContent = data.s_k  || '-';
    document.getElementById('msisdn').textContent = data.s_msisdn || '-';
}

document.getElementById('searchimsi').addEventListener('click', submitimsi);

/*end*/
/*deleteimsi*/
async function deleteimsi() {
    const imsi = document.getElementById('deleteimsi').value;

    // Validate username and password (add additional validation if needed)
    if (!imsi) {
        alert('Please enter your imsi.');
        return;
    }

    const requestBody = {
        s_imsi: imsi,
    };

    try {
        const response = await fetch('http://192.168.1.213:5001/user/subscriber/delete ', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
//response login-mainpage 
        const data = await response.json();
        console.log('imsi response:', data);

        if (data.message === "User found" || data.status_code === 200) {
            console.log('Get detail', data.message);
        } else {
            console.error('not found', data.message);
            alert('imsi not found.');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('An error occurred. Please try again later.');
    }
}
document.getElementById('deleteimsi').addEventListener('click', deleteimsi);
/*end*/

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});
document.getElementById('logoutButton').addEventListener('click', function() {
    logout();
});
/*logout function*/
 const apiUrl = 'http://192.168.1.213:5001/user/editing';

        function getUserData() {
            const email = document.getElementById('email').value;

            fetch(`${apiUrl}?s_email=${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                console.log('GET Response:', data);
            })
            .catch(error => console.error('Error:', error));
        }

        function editUserData() {
            const email = document.getElementById('email').value;
            const name = document.getElementById('name').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const phone = document.getElementById('phone').value;

            fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    s_email: email,
                    s_name: name,
                    s_password: password,
                    s_password_confirm: confirmPassword,
                    s_phone: phone
                })
            })
            .then(response => {
                if (response.ok) {
                    console.log('PUT Success');
                } else {
                    throw new Error(`PUT Request Failed with status: ${response.status}`);
                }
            })
            .catch(error => console.error('Error:', error));
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

