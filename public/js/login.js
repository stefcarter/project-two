const signupHandler = async (event) => {
    event.preventDefault();
<<<<<<< HEAD
=======

    console.log('inside signup handler');
    // const name = document.querySelector('#signupName').value.trim();
    const email = document.querySelector('#signupemail').value.trim();
    const password = document.querySelector('#signuppassword').value.trim();
    // const username = document.querySelector('#signupUsername').value.trim();

>>>>>>> de8f3d68c070c95274e8952996dab3aa0d3417ee
    console.log('inside signup handler')
    
  
    const email = document.querySelector('#signupemail');
    const password = document.querySelector('#signuppassword');
<<<<<<< HEAD
=======

>>>>>>> de8f3d68c070c95274e8952996dab3aa0d3417ee

    if (email && password) {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            document.location.replace('/user')
        }
        else {
            alert(response.statusText)
        }
    };
}



const loginHandler = async (event) => {
    event.preventDefault();
    console.log('inside login handler')
    const email = document.querySelector('#loginemail');
    const password = document.querySelector('#loginpassword');
<<<<<<< HEAD
=======

    // const email = document.querySelector('#loginemail').value.trim();
    // const password = document.querySelector('#loginpassword').value.trim();


>>>>>>> de8f3d68c070c95274e8952996dab3aa0d3417ee
    if (password && email) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ password, email }),
            headers: { 'Content-Type': 'application/json '}
        });
        console.log(response)

        if (response.ok) {
            document.location.replace('/user')
        }
        else {
            alert(response.statusText)
        }
    }
};

document
.querySelector('.loginbutton')
.addEventListener('click', loginHandler)

document
.querySelector('.signupbutton') 
.addEventListener('click', signupHandler)
