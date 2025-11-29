const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: '2005-03-01',
		description:
			'A baby girl, secretly a princess, is discovered by a wizard family. Ten years later, she and her adoptive brother, a young army sentry who is actually the long-lost seventh son of a seventh son, must flee from a dark necromancer and embark on a magical adventure.',
		imgSrc: 'images/Septimus Heap Book One- Magyk.webp',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy, Young Adult, Adventure, Magic',
		stars: '&#9733;&#9733;&#9733;&#9733;&#9734;'
	},
    {
        id: 2,
        title: 'Magnus Chase Book One: Sword of Summer',
        date: '2021-12-12',
        description:
            'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
        // No local image available for this book.
        imgSrc:
            'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '&#9733;&#9733;&#9733;&#9733;&#9734;'
    },
	{
		id: 3,
		title: "Harry Potter and the Sorcerer's Stone",
		date: '1997-06-26',
		description:
			"Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
        // No local image available for this book.
		imgSrc: 'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780590353427/primary/renditions/700',
		imgAlt: "Book cover for Harry Potter and the Sorcerer's Stone",
		ages: '10-14',
		genre: 'Fantasy, Young Adult, Magic, Adventure',
		stars: '&#9733;&#9733;&#9733;&#9733;&#9733;'
	},
	{
		id: 4,
		title: 'The Eye of the World',
		date: '1990-01-15',
		description:
			'The Wheel of Time turns and Ages come and pass, leaving memories that become legend. Legend fades to myth, and even myth is long forgotten when the Age that gave it birth comes again. In one Age, called the Third Age by some, an Age yet to come, an Age long past, a wind rose in the Mountains of Mist. The wind was not the beginning. There are neither beginnings nor endings to the turning of the Wheel of Time. But it was a beginning.',
		imgSrc: 'images/The Eye of the World.jpg',
		imgAlt: 'Book cover for The Eye of the World',
		ages: '15-18',
		genre: 'Fantasy, High Fantasy, Epic Fantasy, Adventure',
		stars: '&#9733;&#9733;&#9733;&#9733;&#9734;'
	},
	{
		id: 5,
		        title: 'Dune',
				date: '1965-08-01',
				description:
					`In a distant future, Paul Atreides' noble family accepts stewardship of the desert planet Arrakis, the only source of the most valuable substance in the universe, "the spice".`,
				imgSrc: 'images/Dune.jpg',
				imgAlt: 'Book cover for Dune',
				ages: '15-18',		genre: 'Science Fiction, Fantasy, Classic',
		stars: '&#9733;&#9733;&#9733;&#9733;&#9733;'
	},
	{
		id: 6,
		title: 'The Man in the High Castle',
		date: '1962-10-01',
		description:
			'In an alternate reality where the Axis powers won World War II, the United States is divided between Germany and Japan. A mysterious book called "The Grasshopper Lies Heavy" depicts a world where the Allies won, inspiring a rebellion.',
		imgSrc: 'images/The Man in the High Castle.jpg',
		imgAlt: 'Book cover for The Man in the High Castle',
		ages: '15-18',
		genre: 'Science Fiction, Alternate History, Dystopian, Classic',
		stars: '&#9733;&#9733;&#9733;&#9733;&#9734;'
	}
];

function createArticleHTML(article) {
    return `
        <div class="book-details">
            <p>Date Published: ${new Date(article.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            <p>Age Group: ${article.ages}</p>
            <p>Genre: ${article.genre}</p>
            <icon>${article.stars}</icon>
        </div>
        <div class="book-image">
            <h3>${article.title}</h3>
            <img src="${article.imgSrc}" alt="${article.imgAlt}">
            <p>${article.description}</p>
        </div>
    `;
}

function renderArticles() {
    const articleContainer = document.querySelector('.book-container');
    articleContainer.innerHTML = articles.map(article => `<div class="book" data-id="${article.id}">${createArticleHTML(article)}</div>`).join('');
}

function filterAndSortArticles() {
    console.log('--- Filtering triggered ---');
    const ageGroup = document.getElementById('age-group').value;
    const genre = document.getElementById('genre').value;
    const rating = document.getElementById('rating').value;
    const sortBy = document.getElementById('sort').value;
    console.log(`Values: Age=${ageGroup}, Genre=${genre}, Rating=${rating}, Sort=${sortBy}`);

    let filteredArticles = articles;

    if (ageGroup !== 'all') {
        filteredArticles = filteredArticles.filter(article => article.ages === ageGroup);
    }
    console.log(`After age filter: ${filteredArticles.length} articles`);

    if (genre !== 'all') {
        const genreToSearch = genre.replace(/-/g, ' ');
        filteredArticles = filteredArticles.filter(article => article.genre.toLowerCase().includes(genreToSearch));
    }
    console.log(`After genre filter: ${filteredArticles.length} articles`);

    if (rating !== 'all') {
        const minStars = parseInt(rating, 10);
        filteredArticles = filteredArticles.filter(article => {
            const starCount = (article.stars.match(/&#9733;/g) || []).length;
            return starCount >= minStars;
        });
    }
    console.log(`After rating filter: ${filteredArticles.length} articles`);

    if (sortBy === 'newest') {
        filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'oldest') {
        filteredArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === 'rating') {
        filteredArticles.sort((a, b) => {
            const aStars = (a.stars.match(/&#9733;/g) || []).length;
            const bStars = (b.stars.match(/&#9733;/g) || []).length;
            return bStars - aStars;
        });
    }

    console.log(`Final articles to render: ${filteredArticles.length}`);
    const articleContainer = document.querySelector('.book-container');
    articleContainer.innerHTML = filteredArticles.map(article => `<div class="book" data-id="${article.id}">${createArticleHTML(article)}</div>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderArticles();
    document.getElementById('sort').addEventListener('change', filterAndSortArticles);
    document.getElementById('age-group').addEventListener('change', filterAndSortArticles);
    document.getElementById('genre').addEventListener('change', filterAndSortArticles);
    document.getElementById('rating').addEventListener('change', filterAndSortArticles);
});