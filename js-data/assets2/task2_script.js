(() => {
    const audio = document.querySelectorAll('.task2_audio')
    const task2_prev = document.querySelector('.task2_prev')
    const task2_next = document.querySelector('.task2_next')
    const task2_slide = document.querySelector('.task2_img')
    const slide_caption = document.querySelector('.task2_slide_caption')
    const numberOfimgs = document.querySelector('.task2_count2')
    const count = document.querySelector('.task2_count1')
    const task2_begin = document.querySelector('.task2_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_3/assets2/task2_1.png',
            text: 'Сколько носков на рисунке?'
        },
        {
            id: 2,
            src: 'Images_3/assets2/task2_2.png',
            text: 'На рисунке один носок. Обозначим количество носков цифрой 1.'
        },
        {
            id: 3,
            src: 'Images_3/assets2/task2_3.png',
            text: 'Что изменилось?'
        },
        {
            id: 4,
            src: 'Images_3/assets2/task2_4.png',
            text: 'Добавили ещё один носок.'
        },
        {
            id: 5,
            src: 'Images_3/assets2/task2_5.png',
            text: 'Обозначим число носков цифрой.'
        },
        {
            id: 6,
            src: 'Images_3/assets2/task2_6.png',
            text: 'Чтобы получить два, нужно к 1 добавить один.'
        },
        {
            id: 7,
            src: 'Images_3/assets2/task2_7.png',
            text: 'Про два одинаковых или схожих предмета говорят «пара».'
        },
        {
            id: 8,
            src: 'Images_3/assets2/task2_8.png',
            text: 'Перед тобой пары предметов. Если предметов два — то это пара, а если больше двух или меньше двух — то нет.'
        },
        {
            id: 9,
            src: 'Images_3/assets2/task2_9.png',
            text: 'Сколько зайцев?'
        },
        {
            id: 10,
            src: 'Images_3/assets2/task2_10.png',
            text: 'Обозначим число зайцев цифрой.'
        },
        {
            id: 11,
            src: 'Images_3/assets2/task2_11.png',
            text: 'Что изменилось?'
        },
        {
            id: 12,
            src: 'Images_3/assets2/task2_12.png',
            text: 'Остался один заяц.'
        },
        {
            id: 13,
            src: 'Images_3/assets2/task2_13.png',
            text: 'Два без одного — это один.'
        }
    ]

    task2_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task2_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task2_begin.style.display = 'none'
        } else if (e.target.classList.contains('task2_start2')) {
            task2_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task2_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task2_slide.append(element)

    task2_prev.addEventListener('click', () => {
        if (currentSlide > 1) {
            currentSlide--
            if (sound) {
                audio[currentSlide].pause()
                audio[currentSlide].currentTime = 0
                audio[currentSlide - 1].play()
            }
            slide_caption.innerText = pictures[currentSlide - 1].text
            element.src = pictures[currentSlide - 1].src
            count.innerText = currentSlide
            task2_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task2_prev.style.opacity = 0
        }


    })

    task2_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task2_prev.style.opacity = 1
            currentSlide++
            if (sound) {
                audio[currentSlide - 2].pause()
                audio[currentSlide - 2].currentTime = 0
                audio[currentSlide - 1].play()
            }
            slide_caption.innerText = pictures[currentSlide - 1].text
            element.src = pictures[currentSlide - 1].src
            count.innerText = currentSlide
        }
        if (currentSlide === pictures.length) {
            task2_next.style.opacity = 0
        }

    })
})()