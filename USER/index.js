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
/*imsi*/
async function imsi() {
    const imsi = document.getElementById('s_imsi').value;

    // Validate username and password (add additional validation if needed)
    if (!imsi) {
        alert('Please enter your imsi.');
        return;
    }

    const requestBody = {
        s_imsi: imsi,
    };

    try {
        const response = await fetch('http://192.168.1.213:5001/user/subscriber/detail ', {
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
document.getElementById('imsi').addEventListener('click', imsi);
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

