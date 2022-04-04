(() => {
    const pencils = document.querySelector('.task17_pencils')
    const pencilsImg = document.querySelectorAll('.task17_pencilImg')
    const circleWrapper = document.querySelector('.task17_circleWrapper')
    const baloons = document.querySelectorAll('.task17_baloon')
    const reloadTaskBtn = document.querySelector('.task17_reloadTask')
    const checkingTaskBtn = document.querySelector('.task17_checkingTask')
    const checkTask = document.querySelector('.task17_checkTask')
    const chek_answerTxt = document.querySelector('.task17_chek_answer')

    let color = 'white'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task17_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task17_pencilSelect')
            })
            e.target.classList.add('task17_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.task17_baloon')) {
            e.target.closest('.task17_baloon').setAttribute('fill', color)
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task17_pencilSelect')
        })
        color = 'white'
        baloons.forEach(item => {
            item.setAttribute('fill', color)
        })

    })
})()