/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// Define the dataset of TV shows and array of strings (TV show title, genre, rating)
let tvShows = [
    {
        title: "Fresh Prince of Bel Air",
        genre: "Comedy",
        rating: 8.6,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg"
    },
    {
        title: "Curb Your Enthusiasm",
        genre: "Comedy",
        rating: 8.7,
        imageURL: "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        title: "East Los High",
        genre: "Drama",
        rating: 7.5,
        imageURL: "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg"
    }
];

// Function to display cards dynamically
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    tvShows.forEach(show => {
        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, show.title, show.genre, show.rating, show.imageURL);
        cardContainer.appendChild(nextCard);
    });
}

// Function to edit card content
function editCardContent(card, title, genre, rating, imageURL) {
    card.style.display = "block";
    card.querySelector("h2").textContent = title;
    card.querySelector(".genre").textContent = `Genre: ${genre}`;
    card.querySelector(".rating").textContent = `Rating: ${rating}`;
    card.querySelector("img").src = imageURL;
    card.querySelector("img").alt = `${title} Poster`;
}

// Initial call to show cards
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
} 

function removeLastCard() {
    tvShows.pop(); // Remove last item in tvShows array
    showCards(); // Call showCards again to refresh
}

