function showTextAndImage() {
    const testo = document.getElementById('altro');

    if (testo.style.display === 'none') {
        testo.style.display = 'block';
    }
    else {
        testo.style.display = 'none';
    }

    const container = document.getElementById('leggi-di-piu');

    if (!container.querySelector('img')) {
        const image = document.createElement('img');
        image.src = 'https://images.unsplash.com/photo-1690654008678-b4ee50220b0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbiUyMHNpcm98ZW58MHx8MHx8fDA%3D';
    
    image.alt = 'San Siro 1926';

    container.appendChild(image);
    }
}

document.getElementById('leggiButton').addEventListener('click', showTextAndImage);

document.getElementById('video-btn').addEventListener('click', function() {
    const dati = {
        title: 'LA STORIA DI SAN SIRO',
        url: 'https://www.youtube.com/embed/_TTZE7kMfeQ'
    };

    const container = document.getElementById('video-container');
    container.innerHTML = "";

    const title = document.createElement('h4');
    title.textContent = dati.title;

    const iframe = document.createElement("iframe");
    iframe.src = dati.url;
    iframe.width = "560";
    iframe.height = "315";
    iframe.frameBorder = "0";
    iframe.allow = "fullscreen";

    container.appendChild(title);
    container.appendChild(iframe);
});

document.getElementById('review-btn').addEventListener('click', function() {
    const recensione = [
        {user: "Mario Rossi", text: "Uno degli stadi più belli del mondo, esperienza da fare almeno una volta!"},
        {user: "Luigi Bianchi", text: "Si potrebbe scrivere un libro per tutto ciò che c'è da dire su questo magnifico stadio..."},
        {user: "Anna Verdi", text: "Veramente una bella struttura, sulle tribune si entra in un mondo tutto nuovo!"}
    ];

    const container = document.getElementById('review-container');
    container.innerHTML = "";

    recensione.forEach(recensione => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('recensione');

        const user = document.createElement('h5');
        user.textContent = recensione.user;

        const text = document.createElement('p');
        text.textContent = recensione.text;

        reviewDiv.appendChild(user);
        reviewDiv.appendChild(text);
        container.appendChild(reviewDiv);
    });
});