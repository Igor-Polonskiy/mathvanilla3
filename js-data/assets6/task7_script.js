(() => {
    const reloadTaskBtn = document.querySelector('.task7_reloadTask')
    const checkingTaskBtn = document.querySelector('.task7_checkingTask')
    const checkTask = document.querySelector('.task7_checkTask')
    const chek_answerTxt = document.querySelector('.task7_chek_answer')
    const input1 = document.querySelector('#task7_1')
    const input2 = document.querySelector('#task7_2')
    const input3 = document.querySelector('#task7_3')

    const play1 = document.querySelector('.task7_play1')
    const play2 = document.querySelector('.task7_play2')
    const play3 = document.querySelector('.task7_play3')

    const audio = document.querySelectorAll('.task7_audio')




    let answer1 = 0
    let answer2 = 0
    let answer3 = 0


    play1.addEventListener('click', () => {
        audio[0].play()
    })
    play2.addEventListener('click', () => {
        audio[1].play()
    })
    play3.addEventListener('click', () => {
        audio[2].play()
    })


    input1.addEventListener('change', (e) => {
        answer1 = e.target.value
    })
    input2.addEventListener('change', (e) => {
        answer2 = e.target.value
    })
    input3.addEventListener('change', (e) => {
        answer3 = e.target.value
    })




    reloadTaskBtn.addEventListener('click', () => {
        input1.value = ''
        input2.value = ''
        input3.value = ''



        answer1 = 0
        answer2 = 0
        answer3 = 0

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === '2' &&
            answer2 === '3' &&
            answer3 === '4') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()