const emojiEl = document.querySelector(".emoji");
const emojiNameEl = document.querySelector(".emoji-name");


const emojis = [];
async function getEmoji() {
    const response = await fetch("https://emoji-api.com/emojis?access_key=ed6a868e03b6600b9ad84103986b7f631313329b");
    const data = await response.json();

    for (let i = 0; i < 1500; i++) {
        emojis.push({
            emoji: `${data[i].character}`,
            name: `${data[i].unicodeName}`
        })
    }

}

getEmoji();

emojiEl.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * emojis.length);
    emojiEl.innerText = emojis[randomNumber].emoji;
    emojiNameEl.innerText = emojis[randomNumber].name;
})