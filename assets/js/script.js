const usernameEl = document.querySelector("#username")
const titleEl = document.querySelector("#title")
const contentEl = document.querySelector("#content")
const submitEl = document.querySelector("#submit")
const responseEl = document.querySelector('#response')
const libraryEl = document.querySelector('#library');
const blogPost = document.createElement('div')

document.addEventListener('DOMContentLoaded', function() { //needed to ensure the inputs are loaded before the function is run.
    let auditSubmission = function (event) {
        event.preventDefault()
        if (usernameEl.value !== "" && titleEl.value !== "" && contentEl.value !== "") {
            let submissions = JSON.parse(localStorage.getItem('submissions')) || [];
            let newSubmission = {
                username: usernameEl.value,
                title: titleEl.value,
                content: contentEl.value
            };
            submissions.push(newSubmission);
            localStorage.setItem('submissions', JSON.stringify(submissions));

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


let submissions = JSON.parse(localStorage.getItem('submissions')) || [];
for (let i = 0; i < submissions.length; i++) {
    // Create a new div element
    const divElement = document.createElement('div');
    divElement.classList.add('blog-post');


    
    libraryEl.appendChild(divElement);
    //divElement.textContent = submissions[i].username
    
    const h3Element = document.createElement('h3');
    h3Element.classList.add('blog-title');
    divElement.appendChild(h3Element);
    h3Element.textContent = submissions[i].title

    const contentElement = document.createElement('p');
    contentElement.classList.add('blog-content');
    divElement.appendChild(contentElement);
    contentElement.textContent = submissions[i].content
    
    const authorElement = document.createElement('h5');
    authorElement.classList.add('blog-author');
    divElement.appendChild(authorElement);
    authorElement.textContent = submissions[i].username
}

blogPost.className = 'blog-post';


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



//use document.createElement for showing blog posts
 

    // -step 1 build structure of landing page in HTML
    // -step 2 create inputs for username, title, content, and a submit button
    // -step 3 make the inputs submitable, if all 3 inputs are not filled out then return an error message
    // -step 4 save the post information to local storage
    // -step 5 display local storage information with a JSON array of all blog post inputs
// step 6 create a second page that shows all blog posts, pulled from local storage
    // -step 7 provide navigation back to the main page
    // -step 8 provide a light mode/dark mode toggle on the header of the second page
    // -step 9 include a link to my portfolio in the footer
