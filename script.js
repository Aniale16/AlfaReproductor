const crearCanción = (informacioncancion) => {}


    const div = document.createElement('div')
    div.setAttribute('class', 'songlist__song')
    div.innerHTML = `
        <img src="/assets1/covermini.png" alt="" class="songlist__song__cover">
        <div class="songlist__song__text">
            <h1 class="songlist__song__text__title">DIE FOR YOU</h1>
            <p class="songlist__song__text__artist">Starset</p>
        </div>
    `
    return div
