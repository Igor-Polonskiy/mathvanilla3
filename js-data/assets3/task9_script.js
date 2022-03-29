(() => {
    const reloadTaskBtn = document.querySelector('.task9_reloadTask')
    const checkingTaskBtn = document.querySelector('.task9_checkingTask')
    const checkTask = document.querySelector('.task9_checkTask')
    const chek_answerTxt = document.querySelector('.task9_chek_answer')
    const imgsWrapper = document.querySelector('.task9_imgwrapper')

    let pictures = [{
            id: 1,
            src: 'Все квадраты красного цвета',
            data: false
        },
        {
            id: 2,
            src: 'Между фигурами зелёного цвета других фигур нет',
            data: false
        },
        {
            id: 3,
            src: 'Синий круг больше жёлтого',
            data: true
        },
        {
            id: 4,
            src: 'На рисунке только один пятиугольник',
            data: true
        },
        {
            id: 5,
            src: 'Маленьких фигур меньше, чем больших',
            data: true
        },
        {
            id: 6,
            src: 'Квадратов больше, чем треугольников',
            data: true
        }
    ]


    let count = 0

    function fillField() {
        pictures.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task9_img')
            answer.innerText = item.src
            answer.setAttribute('data-number', item.data)
            imgsWrapper.append(answer)

        })
    }

    fillField()

    imgsWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('task9_img')) {
            e.target.classList.toggle('task9_active')
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        imgsWrapper.innerHTML = ''
        fillField()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let imgs = document.querySelectorAll('.task9_active')
        let winVar = 0
        imgs.forEach(item => {
            if (item.getAttribute('data-number') === 'false') {
                winVar++
            } else winVar--
        })

        if (winVar === 2) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()