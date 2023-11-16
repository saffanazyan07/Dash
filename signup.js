document.querySelector('#signUp input[type="button"]').addEventListener('click', async function(e) {
    e.preventDefault();
  
    const name = document.getElementById('s_name').value;
    const email = document.getElementById('s_email').value;
    const password = document.getElementById('s_password').value;
    const passwordConfirm = document.getElementById('s_password confirm').value;
    const phone = document.getElementById('s_phone').value;
  
    if (!password || !passwordConfirm || password !== passwordConfirm) {
      alert('Passwords do not match.');
      return;
    }
  
    const termCon = document.getElementById('termCon').checked;
  
    if (!termCon) {
      alert('Please accept all terms and conditions.');
      return;
    }
  
    const user = {
      name,
      email,
      password,
      phone
    };
  
    swal({
      title: "Loading Now",
      timer: 2000,
      onOpen: () => {
        swal.showLoading();
      }
    });
  
    try {
      const response = await fetch('http://140.118.121.85:5000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      
      const data = await response.json();
      Signuprender(data);
      
    } catch (error) {
      console.error('An error occurred:', error);
    }
});


