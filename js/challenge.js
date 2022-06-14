let i = 0

const timer = document.getElementById('counter')
const pauseButton = document.getElementById('pause')
const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const likeButton = document.getElementById('heart')
const likesUpdate = document.querySelector('.likes')
const submitButton = document.getElementById('comment-form')

let timerTime = setInterval(upCounter, 1000)

function upCounter() {
    timer.innerText++
    return timer
}

function downCounter() {
    timer.innerText--
    return timer
}

function likeNumber() {
    likeButton.innerText = timerTime
    return likeButton
}

submitButton.addEventListener('submit', (e) => {
    e.preventDefault()
    const newComment = (e.target)['comment-input'].value
    const h3 = document.createElement('h3')
    const div = document.createElement('div')
    h3.innerText = newComment
    div.append(h3)
    document.getElementById('list').append(div)
    submitButton.reset();
})

likeButton.addEventListener('click', () => {
    if(likeButton.innerText === '❤️') {
        likeButton.innerText = 'click to return'
        const li = document.createElement('li')
        li.innerText = `you liked ${timer.innerText} ❤️!`
        likesUpdate.append(li)
    } else if (likeButton.innerText !== '❤️') {
        likeButton.innerText = '❤️'
    }
})

plusButton.addEventListener('click', upCounter)
minusButton.addEventListener('click', downCounter)
pauseButton.addEventListener('click', () => {
    if(pauseButton.innerText === 'pause') {
        clearInterval(timerTime)
        pauseButton.innerText = 'resume'
    } else if (pauseButton.innerText = 'resume') {
        pauseButton.innerText = 'pause'
        timerTime = setInterval(upCounter, 1000)
    }
})

