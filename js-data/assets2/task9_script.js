(() => {
    const reloadTaskBtn = document.querySelector('.task9_reloadTask')
    const checkingTaskBtn = document.querySelector('.task9_checkingTask')
    const checkTask = document.querySelector('.task9_checkTask')
    const chek_answerTxt = document.querySelector('.task9_chek_answer')
    const inputElephant = document.querySelector('#task9_1')


    let answer1 = 0



    inputElephant.addEventListener('change', (e) => {
        answer1 = e.target.value
    })



    reloadTaskBtn.addEventListener('click', () => {
        inputElephant.value = ''
        answer1 = 0
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === '2') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()