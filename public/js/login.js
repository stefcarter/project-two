const signupHandler = async (event) => {
    event.preventDefault();
    console.log('inside signup handler')
    // const name = document.querySelector('#signupName').value.trim();
    const email = document.querySelector('#loginemail').value.trim();
    const password = document.querySelector('#loginpassword').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/newuser/', {
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
    const email = document.querySelector('#loginemail').value.trim();
    const password = document.querySelector('#loginpassword').value.trim();

    if (password && email) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ password, email }),
            headers: { 'Content-Type': 'application/json '}
        });

        if (response.ok) {
            document.location.replace('/user')
        }
        else {
            alert(response.statusText)
        }
    }
};

document
.querySelector('#login-form') // will prob have the change this
.addEventListener('click', loginHandler)

document
.querySelector('#signup-form') // will prob have to change this
.addEventListener('click', signupHandler)
