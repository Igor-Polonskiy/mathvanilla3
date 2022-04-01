(() => {
    const reloadTaskBtn = document.querySelector('.task7_reloadTask')
    const checkingTaskBtn = document.querySelector('.task7_checkingTask')
    const checkTask = document.querySelector('.task7_checkTask')
    const chek_answerTxt = document.querySelector('.task7_chek_answer')
    const task = document.querySelector('.task7_wrapper')
    const inputs = task.querySelectorAll('input')
    const input1 = document.querySelector('#task7_1')
    const input2 = document.querySelector('#task7_2')
    const input3 = document.querySelector('#task7_3')
    const input4 = document.querySelector('#task7_4')
    const input5 = document.querySelector('#task7_5')
    const input6 = document.querySelector('#task7_6')
    const input7 = document.querySelector('#task7_7')
    const input8 = document.querySelector('#task7_8')
    const input9 = document.querySelector('#task7_9')
    const input10 = document.querySelector('#task7_10')
    const input11 = document.querySelector('#task7_11')
    const input12 = document.querySelector('#task7_12')
    const input13 = document.querySelector('#task7_13')
    const input14 = document.querySelector('#task7_14')
    const input15 = document.querySelector('#task7_15')
    const input16 = document.querySelector('#task7_16')
    const input17 = document.querySelector('#task7_17')
    const input18 = document.querySelector('#task7_18')
    const input19 = document.querySelector('#task7_19')
    const input20 = document.querySelector('#task7_20')
    const input21 = document.querySelector('#task7_21')
    const input22 = document.querySelector('#task7_22')
    const input23 = document.querySelector('#task7_23')


    let rigt = [5, 2, 3, 5, 1, 3, 5, 2, 4, 1, 3, 4, 5, 1, 3, 5, 1, 2, 4, 5, 2, 3, 4]


    let answers = []

    inputs.forEach((item, index) => {
        item.addEventListener('change', (e) => {
            answers[index] = e.target.value
        })
    })


    reloadTaskBtn.addEventListener('click', () => {
        inputs.forEach((item) => {
            item.value = ''
        })

        answers.length = 0
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0
        rigt.forEach((item, index) => {
            if (answers[index] && item === +answers[index]) {
                winVar++
            }
        })

        console.log(winVar, answers)
        if (winVar === 23) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()