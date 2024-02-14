const body = document.querySelector('body')

const getJson = async () => {
    const url = await fetch("index.json")
    const data = await url.json()
    return data
}

getJson()
.then((data) => {
    body.innerHTML = `
        <h1>${data.titel}</h1>
        <p>${data.omschrijving}</p>
        <ul></ul>
        <img src="${data.afbeelding}" alt="">
    `

    data.technology.forEach(elm => {
        const li = document.createElement('li')
        li.innerHTML = elm
        li.appendChild(ul)       
    });
})