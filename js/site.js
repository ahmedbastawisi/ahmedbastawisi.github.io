let color = localStorage.getItem('nav-theme');

const page = document.querySelector('html').classList.add(color || "theme-light");

let links = document.querySelectorAll('nav a');

let load = (event) => {

    event.preventDefault();
    localStorage.setItem('nav-lnk', event.target.pathname);

    links.forEach((item) => {
        item.classList.remove("background-color-body-medium");
    });

    fetch(event.target.pathname).then(function (response) {
        return response.text();
    }).then(function (html) {
        document.querySelector('main').innerHTML = html;
        event.target.classList.add("background-color-body-medium");
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
    });
}

let lnk = localStorage.getItem('nav-lnk');

links.forEach((item) => {
    item.addEventListener('click', load)
});

document.querySelector(`nav a[href="${lnk || '/overview.html'}"]`).click();

let theme = (event) => {

    const page = document.querySelector('html');

    if (page.classList.contains("theme-light")) {

        page.classList.remove("theme-light");
        page.classList.add("theme-dark");
        localStorage.setItem('nav-theme', "theme-dark");

    } else if (page.classList.contains("theme-dark")) {

        page.classList.add("theme-high-contrast");
        page.classList.remove("theme-dark");
        localStorage.setItem('nav-theme', "theme-high-contrast");

    } else {
        page.classList.add("theme-light");
        page.classList.remove("theme-high-contrast");
        localStorage.setItem('nav-theme', "theme-light");
    }
}

document.querySelector('#theme').addEventListener('click', theme);

const share = {
    title: "Ahmed El-bastawisi Portfolio",
    text: "Ahmed El-bastawisi Portfolio",
    url: "https://ahmedbastawisi.github.io",
};

document.querySelector('#share').addEventListener("click", async () => {
    try {
        await navigator.share(share);
    } catch (err) {
        console.warn('Something went wrong.', err);
    }
});
