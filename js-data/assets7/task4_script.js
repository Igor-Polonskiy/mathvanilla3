(() => {
    const reloadTaskBtn = document.querySelector('.task4_reloadTask')
    const checkingTaskBtn = document.querySelector('.task4_checkingTask')
    const checkTask = document.querySelector('.task4_checkTask')
    const chek_answerTxt = document.querySelector('.task4_chek_answer')
    const input1 = document.querySelector('#task4_1')
    const input2 = document.querySelector('#task4_2')


    const play1 = document.querySelector('.task4_play1')
    const play2 = document.querySelector('.task4_play2')

    const audio = document.querySelectorAll('.task4_audio')




    let answer1 = 0
    let answer2 = 0


    play1.addEventListener('click', () => {
        audio[0].play()
    })
    play2.addEventListener('click', () => {
        audio[1].play()
    })



    input1.addEventListener('change', (e) => {
        answer1 = e.target.value
    })
    input2.addEventListener('change', (e) => {
        answer2 = e.target.value
    })




    reloadTaskBtn.addEventListener('click', () => {
        input1.value = ''
        input2.value = ''

        answer1 = 0
        answer2 = 0

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === '1' &&
            answer2 === '5') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()