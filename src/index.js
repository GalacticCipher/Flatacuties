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
    //Create characters via DOM Manipulation
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

            
        })
    })
})
