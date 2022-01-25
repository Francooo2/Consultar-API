const list   = document.getElementById('list')
const button = document.getElementById('btn')
const url    = 'https://jsonplaceholder.typicode.com/posts'

const loadData = async (resource) => {
    const response = await fetch(resource)
    const posts = await response.json()
    return posts
}

const getData = async (url) => {
    try {
        let posts = await loadData(url)
        return posts
    } catch (e) {
        alert('En este momento no es posible cargar un recurso necesario.')
    }
}

button.addEventListener('click', async () => {

    const posts = await getData(url)

    for (const post of posts) {
        let element   = document.createElement('li')
        let title     = document.createElement('h2')
        let paragraph = document.createElement('p')

        title.textContent     = post.title
        paragraph.textContent = post.body
        element.appendChild(title)
        element.appendChild(paragraph)
        element.classList.add('element')
        list.appendChild(element)
    }

})