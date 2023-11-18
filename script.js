let myText = document.getElementById("mytext");
let myAuthor = document.getElementById("myAuthor");
let randomBtn = document.getElementById("randomBtn");
let rotate = document.getElementById("rotate");
let rotate1 = document.getElementById("rotate1");
let rotateStop = document.getElementById("rotateStop");
let rotateStop1 = document.getElementById("rotateStop1");
rotate.style.display = "none";
rotate1.style.display = "none";


let jsonData = "";
var randomdata = 0;

randomBtn.addEventListener('click', () => {
    randomdata = Math.floor(Math.random() * 16)
    QuotesRandomApi(randomdata)
})

const QuotesRandomApi = async (randData) => {
    let QuotesAPI = await fetch("https://type.fit/api/quotes");
    jsonData = await QuotesAPI.json();
    let mainOutputText = jsonData[randData].text
    let mainOutputAuthor = jsonData[randData].author
    myText.innerText = mainOutputText
    myAuthor.innerText = mainOutputAuthor
    myText.style.color = "blue"
    rotate.style.display = "block";
    rotate1.style.display = "block";
    rotateStop.style.display = "none";
    rotateStop1.style.display = "none";
}
QuotesRandomApi();