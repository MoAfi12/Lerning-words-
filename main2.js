let words = JSON.parse(localStorage.getItem('memorizedWords')) || [];
console.log(words);

let startNumber = 0;
let count = 2;

function displayWords() {

    console.log("dunct", words);
    let displayData = document.querySelector('.container-element');


    const batch = words.slice(startNumber, startNumber + count);
    startNumber += count;

    batch.forEach(word => {
        console.log(word);
        const wordData = `
        <h1>${word.word}</h1>
        <p><strong>Definition:</strong> ${word.definition}</p>
        <p><strong>Examples:<br></strong> ${word.examples.join('<br>')} </p>
        <p><strong>Synonyms:<br></strong> ${word.synonyms.join('<br>')} </p>
        <p><strong>antonyms:<br></strong> ${word.antonyms.join('<br>')} </p>
        `;
        displayData.innerHTML += wordData;
    });
}

displayWords();

window.addEventListener('scroll', () => {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        displayWords();
    }
});