const signupHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#signupName').value.trim();
    const email = document.querySelector('signupEmail').value.trim();
    const password = document.querySelector('#signupPW').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/newuser', {
            method: 'POST',
            body: JSON.stringify({name, email, password}),
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
.querySelector('.login-form') // will prob have the change this
.addEventListener('submit', loginHandler)

document
.querySelector('.signup-form') // will prob have to change this
.addEventListener('submit', signupHandler)
