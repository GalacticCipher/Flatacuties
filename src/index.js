// Your code here
//html element through the getElementbyId
const characterData = () => {
    const characters = document.getElementById('bar')
}

characters.innerHTML = '';
//fetch the animal characters information from server
fetch('http://localhost:3000/characters')
.then((response) => {
    return response.json
})

.then(data  => {
    console.log(data);
    //Create characters via DOM to be shown on browser
    data.forEach(candidate =>{
        const characterList = document.createElement('li')
        characterList.textContent = candidate.name;

        //display character details when clicked
        characterList.addEventListener('click', () => {
            console.log('${candidate.name}:chosen')
            //
            const characterImage = document.getElementById('image')
            const characterName = document.getElementById('name')
            const characterVotes = document.getElementById('vote-count')

            characterImage.src = candidate.image;
            characterName.innerText = candidate.name;
            characterVotes.innerText = candidate.votes;

            let currentVote = parseInt(characterVotes.textContent, 10)

            const votesForm = document.getElementById('votes-form')
            const votes = document.getElementById('votes')

            //submit votes
            votesForm.addEventListener('submit', (votes))
            votes.preventDefault()// resets to default
            let newVote = parseInt(votes.ariaValueMax, 10)
            currentVOte = currentVote + newVote;
            characterVotes.textContent = currentVote;

        })

    })

    //append child
    characters.appendChild(characterList)
})

//shows content to the user when invoked
document.addEventListener('DOMContentLoaded', characterData)

//workng on adding votes
const inputVotes = document.querySelector("input#votes");
const animalVotes = document.querySelector("span#vote-count");
const form = document.querySelector("form#votes-form");
form.addEventLidtener("submit", (e) => {
    e.preventDefault();
    console.log(currentAnimal);
    currentAnimal.votes += parseInt(e.target.votes.value)
    showAnimal(currentAnimal);
    form.reset ();
});

//working on the reset button
const resetVotes = document.querySelector("button#reset-btn");
resetVotes.computedStyleMap.cursor ="pointer";
resetVotes.addEventListener("click", () => {
    currentAnimal.votes = 0;
    showAnimal.votes = 0;
    showAnimal(currentAnimal);
    form.reset();
})