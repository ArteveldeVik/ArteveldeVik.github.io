const body = document.querySelector('body')

const getJson = async () => {
    const url = await fetch("index.json")
    const data = await url.json()
    return data
}

getJson()
.then((data) => {
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const ul = document.createElement("ul")
    const img = document.createElement("img")

    h1.innerHTML = data.titel
    p.innerHTML = data.omschrijving
    img.innerHTML = data.afbeelding

    body.appendChild(h1)
    body.appendChild(p)
    body.appendChild(ul)
    body.appendChild(img)

    data.technology.forEach(elm => {
        const li = document.createElement('li')
        li.innerHTML = elm
        li.appendChild(ul)       
    });
})