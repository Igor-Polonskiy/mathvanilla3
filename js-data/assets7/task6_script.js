(() => {
    const reloadTaskBtn = document.querySelector('.task6_reloadTask')
    const checkingTaskBtn = document.querySelector('.task6_checkingTask')
    const checkTask = document.querySelector('.task6_checkTask')
    const chek_answerTxt = document.querySelector('.task6_chek_answer')
    const input1 = document.querySelector('#task6_1')
    const input2 = document.querySelector('#task6_2')
    const input3 = document.querySelector('#task6_3')
    const input4 = document.querySelector('#task6_4')
    const input5 = document.querySelector('#task6_5')
    const input6 = document.querySelector('#task6_6')
    const input7 = document.querySelector('#task6_7')
    const input8 = document.querySelector('#task6_8')



    let answer1 = 0
    let answer2 = 0
    let answer3 = 0
    let answer4 = 0
    let answer5 = 0
    let answer6 = 0
    let answer7 = 0
    let answer8 = 0



    input1.addEventListener('change', (e) => {
        answer1 = e.target.value
    })
    input2.addEventListener('change', (e) => {
        answer2 = e.target.value
    })
    input3.addEventListener('change', (e) => {
        answer3 = e.target.value
    })
    input4.addEventListener('change', (e) => {
        answer4 = e.target.value
    })
    input5.addEventListener('change', (e) => {
        answer5 = e.target.value
    })
    input6.addEventListener('change', (e) => {
        answer6 = e.target.value
    })
    input7.addEventListener('change', (e) => {
        answer7 = e.target.value
    })
    input8.addEventListener('change', (e) => {
        answer8 = e.target.value
    })




    reloadTaskBtn.addEventListener('click', () => {
        input1.value = ''
        input2.value = ''
        input3.value = ''
        input4.value = ''
        input5.value = ''
        input6.value = ''
        input7.value = ''
        input8.value = ''

        answer1 = 0
        answer2 = 0
        answer3 = 0
        answer4 = 0
        answer5 = 0
        answer6 = 0
        answer7 = 0
        answer8 = 0
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        console.log(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8)
        if (answer1 === '4' &&
            answer2 === '5' &&
            answer3 === '1' &&
            answer4 === '5' &&
            answer5 === '5' &&
            answer6 === '5' &&
            answer7 === '1' &&
            answer8 === '2') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()