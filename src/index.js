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