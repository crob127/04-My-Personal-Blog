
const usernameEl = document.querySelector("#username")
const titleEl = document.querySelector("#title")
const contentEl = document.querySelector("#content")
const submitEl = document.querySelector("#submit")
const responseEl = document.querySelector('#response')

document.addEventListener('DOMContentLoaded', function() {
    let auditSubmission = function (event) {
        event.preventDefault()
        if (usernameEl.value !== "" && titleEl.value !== "" && contentEl.value !== "") {
            localStorage.setItem('username', usernameEl.value);
            localStorage.setItem('title', titleEl.value);
            localStorage.setItem('content', contentEl.value);
            window.location.href = "posts.html"; 
    } else { 
        responseEl.textContent = "Please fill out all sections before submitting"
        return
    }
    };

    if (submitEl) {
        submitEl.addEventListener('click', auditSubmission);
    } else {
        console.error('something is wrong with the submitEl var, we do not know what, but it still seems to be completing the task');
    }

    console.log();
});


const themeToggle = document.querySelector('#theme-toggle');
const container = document.querySelector('.container')

let mode = 'light'

themeToggle.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark')
    } else {
        mode = 'light';
        container.setAttribute('class', 'light')
    }
});


 

    // -step 1 build structure of landing page in HTML
    // -step 2 create inputs for username, title, content, and a submit button
    // -step 3 make the inputs submitable, if all 3 inputs are not filled out then return an error message
    // -step 4 save the post information to local storage
// step 5 display local storage information with a JSON array of all blog post inputs
// step 6 create a second page that shows all blog posts, pulled from local storage
    // -step 7 provide navigation back to the main page
    // -step 8 provide a light mode/dark mode toggle on the header of the second page
    // -step 9 include a link to my portfolio in the footer
