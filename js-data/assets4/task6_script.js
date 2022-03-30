(() => {
    const audio = document.querySelectorAll('.task6_audio')
    const task6_prev = document.querySelector('.task6_prev')
    const task6_next = document.querySelector('.task6_next')
    const task6_slide = document.querySelector('.task6_img')
    const slide_caption = document.querySelector('.task6_slide_caption')
    const numberOfimgs = document.querySelector('.task6_count2')
    const count = document.querySelector('.task6_count1')
    const task6_begin = document.querySelector('.task6_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_3/assets4/task6_1.png',
            text: 'Рассмотри рисунок. Сколько кроликов?'
        },
        {
            id: 2,
            src: 'Images_3/assets4/task6_2.png',
            text: 'На рисунке два кролика. Обозначим это цифрой.'
        },
        {
            id: 3,
            src: 'Images_3/assets4/task6_3.png',
            text: 'Что изменилось?'
        },
        {
            id: 4,
            src: 'Images_3/assets4/task6_4.png',
            text: 'Прибежал ещё один кролик.'
        },
        {
            id: 5,
            src: 'Images_3/assets4/task6_5.png',
            text: 'Кроликов стало больше. Чтобы это показать, в математике используют знак «+».'
        },
        {
            id: 6,
            src: 'Images_3/assets4/task6_6.png',
            text: 'Сколько стало кроликов?'
        },
        {
            id: 7,
            src: 'Images_3/assets4/task6_7.png',
            text: 'Кроликов стало три. Записать это можно с помощью знака «равно». Прочитать эту запись можно так: «К двум прибавить один получится три». А можно так: «Два плюс один равно трём».'
        },
        {
            id: 8,
            src: 'Images_3/assets4/task6_8.png',
            text: 'Что теперь изменилось?'
        },
        {
            id: 9,
            src: 'Images_3/assets4/task6_9.png',
            text: 'Два кролика ускакали, т. е. кроликов стало меньше. Записать это можно с помощью такого равенства. Читаем так: «Из трёх вычесть два получится один». А можно так: «Три минус два равно один».'
        },
        {
            id: 10,
            src: 'Images_3/assets4/task6_10.png',
            text: 'Такие записи называются равенства.'
        }
    ]

    task6_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task6_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task6_begin.style.display = 'none'
        } else if (e.target.classList.contains('task6_start2')) {
            task6_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task6_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task6_slide.append(element)

    task6_prev.addEventListener('click', () => {
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
            task6_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task6_prev.style.opacity = 0
        }


    })

    task6_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task6_prev.style.opacity = 1
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
            task6_next.style.opacity = 0
        }

    })
})()