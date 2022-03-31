(() => {
    const reloadTaskBtn = document.querySelector('.task9_reloadTask')
    const checkingTaskBtn = document.querySelector('.task9_checkingTask')
    const checkTask = document.querySelector('.task9_checkTask')
    const chek_answerTxt = document.querySelector('.task9_chek_answer')
    const imgsWrapper = document.querySelector('.task9_imgwrapper')
    const audioList = document.querySelectorAll('.task9_audio')


    let pictures = [{
            id: 1,
            data: false,
            text: 'Третий снизу предмет самый длинный.'
        },
        {
            id: 2,
            data: true,
            text: 'На рисунке два предмета одинаковой длины.'

        },
        {
            id: 3,
            data: true,
            text: 'Между зелёным карандашом и ручкой находится самый длинный предмет.'
        },
        {
            id: 4,
            data: false,
            text: 'Кисточка длиннее ручки, но короче карандаша.'
        }
    ]


    function fillField() {
        pictures.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task9_img')
            answer.innerHTML = item.text
            let audio = document.createElement('span');
            audio.innerHTML = '&#128265;'
            audio.addEventListener('click', (e) => {
                audioList[item.id - 1].play()
            })
            answer.append(audio)
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
        if (imgs.length) {
            imgs.forEach(item => {
                if (item.getAttribute('data-number') === 'true') {
                    winVar++
                } else winVar--
            })
        }

        if (winVar === 2) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()