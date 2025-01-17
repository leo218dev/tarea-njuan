const videos = [
    '<iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/gDBPW7lR_ko?si=8iSFdXlmojmckTuB&amp;start=622" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/vJHxSUtzO2s?si=94x7hifnhuLN3kcd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/PVfRuxstcyQ?si=LHaEhquV8BuiLSkr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/S5fBU8yRCMM?si=3QgR2pahM1qaoVP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<blockquote class="twitter-tweet embed-responsive-item" data-media-max-width="560"><p lang="es" dir="ltr">mi madre: que majo el niño jugando con sus amiguitos<br><br>yo con 7 años a las puertas de la torre iberdrola: <a href="https://t.co/nh8JJLcch4">pic.twitter.com/nh8JJLcch4</a></p>&mdash; Δwiki esteparios (@olmopia) <a href="https://twitter.com/olmopia/status/1862850627430207550?ref_src=twsrc%5Etfw">November 30, 2024</a></blockquote>',
    '<iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/Ng6_COhsI8E?si=N-wdxU73DL3iCr45" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/_mxu_P_CGnI?si=30UqFHusepNAxXmV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/mxCu5bmvxKQ?si=OxjWVqaKW65LNL4u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
]

const cargarVideos = () => {
    const galeria = document.querySelector('#galeria')
    videos.forEach(video => {
        galeria.innerHTML += '<div class="embed-responsive embed-responsive-16by9">' + video + '</div>'
    })
}

cargarVideos()