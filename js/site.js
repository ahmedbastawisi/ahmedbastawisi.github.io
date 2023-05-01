let links = document.querySelectorAll('nav a');

let load = (event) => {

    event.preventDefault();
    localStorage.setItem('nav-lnk', event.target.pathname);

    links.forEach((item) => {
        item.classList.remove("background-color-body-medium");
    });

    fetch(event.target.href).then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
        // This is the HTML from our response as a text string
        document.querySelector('main').innerHTML = html;
        event.target.classList.add("background-color-body-medium");

    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}
let lnk = localStorage.getItem('nav-lnk');

links.forEach((item) => {
    item.addEventListener('click', load)
});

document.querySelector(`nav a[href="${lnk || '/overview.html'}"]`).click();