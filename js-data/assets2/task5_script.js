(() => {
    const reloadTaskBtn = document.querySelector('.task5_reloadTask')
    const checkingTaskBtn = document.querySelector('.task5_checkingTask')
    const checkTask = document.querySelector('.task5_checkTask')
    const chek_answerTxt = document.querySelector('.task5_chek_answer')
    const imgsWrapper = document.querySelector('.task5_imgwrapper')

    let pictures = [{
            id: 1,
            src: 'Images_3/assets2/task5_1.png',
            data: false
        },
        {
            id: 2,
            src: 'Images_3/assets2/task5_2.png',
            data: false
        },
        {
            id: 3,
            src: 'Images_3/assets2/task5_3.png',
            data: true
        },
        {
            id: 4,
            src: 'Images_3/assets2/task5_4.png',
            data: true
        },
        {
            id: 5,
            src: 'Images_3/assets2/task5_5.png',
            data: false
        }
    ]


    let count = 0

    function fillField() {
        pictures.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task5_img')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
            imgsWrapper.append(answer)

        })
    }

    fillField()

    imgsWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('task5_img')) {
            e.target.classList.toggle('task5_active')
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        imgsWrapper.innerHTML = ''
        fillField()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let imgs = document.querySelectorAll('.task5_active')
        let winVar = 0
        imgs.forEach(item => {
            if (item.getAttribute('data-number') === 'false') {
                winVar++
            } else winVar--
        })

        if (winVar === 3) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()