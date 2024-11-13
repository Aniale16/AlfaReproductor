const crearCanción = (informacioncancion) => {
    const div = document.createElement('div')
    div.setAttribute('class', 'songlist__song')
    div.innerHTML = `
        <img src="${"https://api.institutoalfa.org/api/songs/image/" + informacioncancion.image.filename}" alt="" class="songlist__song__cover">
        <div class="songlist__song__text">
            <h1 class="songlist__song__text__title">${informacioncancion.title}</h1>
            <p class="songlist__song__text__artist">${informacioncancion.author}</p>
        </div>
    `
    
    div.addEventListener('click', () => {
        document.getElementById('song-front').setAttribute('src', "https://api.institutoalfa.org/api/songs/image/" + informacioncancion.image.filename)

        document.getElementById('song-audio').setAttribute('src', "https://api.institutoalfa.org/api/songs/audio/" + informacioncancion.audio.filename)

        document.getElementById('song-title').innerHTML = informacioncancion.title

        document.getElementById('song-author').innerHTML = informacioncancion.author


    })

    
    return div
}

document.getElementById('play').addEventListener('click', () => {
    const audio = document.getElementById('song-audio')
    if (audio.pause) {
        audio.onplay()} else {audio.pause}
})

axios.get('https://api.institutoalfa.org/api/songs').then((res) => {
    const songs = res.data.songs

    songs.map((song) => {
        document.getElementById('container').appendChild(crearCanción(song))
    })
})