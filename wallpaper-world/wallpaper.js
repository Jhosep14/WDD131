const wallpapers = {
    "anime": `
        <figure class="item">
            <img src="../images/anime-d1.jpg">
        </figure>
        <figure class="item">
            <img src="../images/anime-p1.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/anime-p2.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/anime-p3.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/anime-d2.jpg">
        </figure>
        <figure class="item">
            <img src="../images/anime-p4.jpeg">
        </figure>
    `,
    "pokemon": `
        <figure class="item">
            <img src="../images/pokemon-d1.jpg">
        </figure>
        <figure class="item">
            <img src="../images/pokemon-p1.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/pokemon-p2.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/pokemon-p3.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/pokemon-d2.jpg">
        </figure>
        <figure class="item">
            <img src="../images/pokemon-p4.jpeg">
        </figure>
    `,

    "nature": `
        <figure class="item">
            <img src="../images/nature-d1.webp">
        </figure>
        <figure class="item">
            <img src="../images/nature-p1.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/nature-p2.webp">
        </figure>
        <figure class="item">
            <img src="../images/nature-p3.jpg">
        </figure>
        <figure class="item">
            <img src="../images/nature-d2.png">
        </figure>
        <figure class="item">
            <img src="../images/nature-p4.jpg">
        </figure>
    `,
    "marvel-dc": `
        <figure class="item">
            <img src="../images/marvel-dc-d2.jpg">
        </figure>
        <figure class="item">
            <img src="../images/marvel-dc-p1.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/marvel-dc-p2.jpg">
        </figure>
        <figure class="item">
            <img src="../images/marvel-dc-p3.jpg">
        </figure>
        <figure class="item">
            <img src="../images/marvel-dc-d3.jpg">
        </figure>
        <figure class="item">
            <img src="../images/marvel-dc-p5.jpg">
        </figure>
    `,
    "dragonball": `
        <figure class="item">
            <img src="../images/dragonball-d1.jpg">
        </figure>
        <figure class="item">
            <img src="../images/dragonball-p1.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/dragonball-p2.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/dragonball-p3.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/dragonball-d2.jpg">
        </figure>
        <figure class="item">
            <img src="../images/dragonball-p4.jpg">
        </figure>
    `,
    "space": `
        <figure class="item">
            <img src="../images/space-d1.jpg">
        </figure>
        <figure class="item">
            <img src="../images/space-p1.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/space-p2.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/space-p3.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/space-d2.jpg">
        </figure>
        <figure class="item">
            <img src="../images/space-p4.webp">
        </figure>
    `,
    "cars": `
        <figure class="item">
            <img src="../images/car-d1.jpg">
        </figure>
        <figure class="item">
            <img src="../images/car-p1.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/car-p2.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/car-p3.jpeg">
        </figure>
        <figure class="item">
            <img src="../images/car-d2.jpg">
        </figure>
        <figure class="item">
            <img src="../images/car-p4.jpeg">
        </figure>
    `

};

const genreSelect = document.getElementById("genre");
const container = document.querySelector(".container");

if (genreSelect && container) {
    genreSelect.addEventListener("change", (e) => {
        const selectedGenre = e.target.value;
        if (selectedGenre === "all") {
            let allContent = "";
            for (const key in wallpapers) {
                allContent += wallpapers[key];
            }
            container.innerHTML = allContent;
        } else if (wallpapers[selectedGenre]) {
            container.innerHTML = wallpapers[selectedGenre];
        }
    });

    // Check for query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter');

    if (filter) {
        // Set the select box value
        genreSelect.value = filter;
        // Trigger the change event manually to filter the content
        genreSelect.dispatchEvent(new Event('change'));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');

    next.addEventListener('click', function () {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    });

    prev.addEventListener('click', function () {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]); // here the length of items = 6
    });
});

function sendEmail(e) {
    e.preventDefault();
    let params = {
        subject: document.getElementById("subject").value,
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        message: document.getElementById("message").value,
    };
    emailjs.send('service_1e7s43g', 'template_5r8z7js', params)
        .then(function () {
            console.log('SUCCESS!');
            e.target.reset();
        }, function (error) {
            console.log('FAILED...', error);
        });
}
