const randomID = Math.floor(Math.random() * 200 + 1)
const id = randomID

const getAdvice = async () => {
    const response = await fetch(`https://api.adviceslip.com/advice/${id}`)
    const advice = await response.json()
    const postAdivces = () => {
        const getHtml = document.querySelector(".advices")
        getHtml.innerHTML = `<h2>${advice.slip.advice}</h2>`
    }
    postAdivces()
    console.log(advice)
}
getAdvice()
