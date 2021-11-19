const apiUrl = 'https://randomuser.me/api';

async function getAPI() {
    const resp = await fetch(apiUrl);
    const respData = await resp.json();

    console.log(respData);

    respData.results.forEach((person) => {
        const { name, picture } = person;

        const personEl = document.createElement('div');
        personEl.classList.add('person');

        personEl.innerHTML = `
            <img
                src="${picture.thumbnail}"
                alt="${name.first}"
            />
            <p>${name.first}</p>
            <button onclick="getData()">Nouvelle personne</button>
        `

        document.body.appendChild(personEl);
    });

    return respData;
}

function getData() {
    const buttonGetData = document.querySelector("button");
    buttonGetData.remove();
    getAPI();
}

getAPI();
