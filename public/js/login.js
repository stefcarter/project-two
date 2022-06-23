const signupHandler = async (event) => {
    event.preventDefault();
    console.log('inside signup handler')
    
  
    const email = document.querySelector('#signupemail');
    const password = document.querySelector('#signuppassword');

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
