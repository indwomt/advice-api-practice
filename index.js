console.log('hello')

let adviceURL = 'https://api.adviceslip.com/advice'
let adviceContent = $('.advice-content')
let adviceNumber = $('.advice-number')
let button = $('.button')

function getAdvice() {
    fetch(adviceURL)
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        console.log(data)
        adviceNumber.text('Advice #' + data.slip.id )
        adviceContent.text(data.slip.advice)
    })
    


}

button.addEventListener('click', getAdvice())

// getAdvice()