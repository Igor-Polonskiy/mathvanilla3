(() => {
    const audio = document.querySelectorAll('.task13_audio')
    const task13_prev = document.querySelector('.task13_prev')
    const task13_next = document.querySelector('.task13_next')
    const task13_slide = document.querySelector('.task13_img')
    const slide_caption = document.querySelector('.task13_slide_caption')
    const numberOfimgs = document.querySelector('.task13_count2')
    const count = document.querySelector('.task13_count1')
    const task13_begin = document.querySelector('.task13_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_3/assets8/task13_1.png',
            text: 'Как получить число три?'
        },
        {
            id: 2,
            src: 'Images_3/assets8/task13_2.png',
            text: 'Сколько грибов?'
        },
        {
            id: 3,
            src: 'Images_3/assets8/task13_3.png',
            text: 'Грибов три. Как разделить три гриба между двумя ёжиками?'
        },
        {
            id: 4,
            src: 'Images_3/assets8/task13_4.png',
            text: 'Можно одному ёжику дать один гриб, а другому — два.'
        },
        {
            id: 5,
            src: 'Images_3/assets8/task13_5.png',
            text: 'А можно первому ёжику дать два гриба, а второму — один.'
        },
        {
            id: 6,
            src: 'Images_3/assets8/task13_6.png',
            text: 'Три — это один и два.Три — это два и один.'
        },
        {
            id: 7,
            src: 'Images_3/assets8/task13_7.png',
            text: 'Как получить число четыре?'
        },
        {
            id: 8,
            src: 'Images_3/assets8/task13_8.png',
            text: 'Сколько кругов? Сколько красных кругов? А синих?'
        },
        {
            id: 9,
            src: 'Images_3/assets8/task13_9.png',
            text: 'Четыре — это один и три.'
        },
        {
            id: 10,
            src: 'Images_3/assets8/task13_10.png',
            text: 'Что изменилось?'
        },
        {
            id: 11,
            src: 'Images_3/assets8/task13_11.png',
            text: 'Красных кругов два. Синих кругов тоже два. Значит, четыре — это два и два.'
        },
        {
            id: 12,
            src: 'Images_3/assets8/task13_12.png',
            text: 'Что изменилось?'
        },
        {
            id: 13,
            src: 'Images_3/assets8/task13_13.png',
            text: 'Красных кругов три. Синих кругов один. Значит, четыре — это три и один.'
        },
        {
            id: 14,
            src: 'Images_3/assets8/task13_14.png',
            text: 'Как получить число пять?'
        },
        {
            id: 15,
            src: 'Images_3/assets8/task13_15.png',
            text: 'Сколько красных точек на рисунке? А сколько синих? Сколько всего точек?'
        },
        {
            id: 16,
            src: 'Images_3/assets8/task13_16.png',
            text: 'Красных точек 4, синих — 1. Всего пять точек. Значит, пять — это четыре и один.'
        },
        {
            id: 17,
            src: 'Images_3/assets8/task13_17.png',
            text: 'Как ещё можно получить число пять?'
        },
        {
            id: 18,
            src: 'Images_3/assets8/task13_18.png',
            text: 'Пять — это три и два.'
        },
        {
            id: 19,
            src: 'Images_3/assets8/task13_19.png',
            text: 'Как ещё можно получить число пять?'
        },
        {
            id: 20,
            src: 'Images_3/assets8/task13_20.png',
            text: 'Пять — это два и три.'
        },
        {
            id: 21,
            src: 'Images_3/assets8/task13_21.png',
            text: 'Как ещё можно получить число пять?'
        },
        {
            id: 22,
            src: 'Images_3/assets8/task13_22.png',
            text: 'Пять — это один и четыре.'
        }
    ]

    task13_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task13_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task13_begin.style.display = 'none'
        } else if (e.target.classList.contains('task13_start2')) {
            task13_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task13_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task13_slide.append(element)

    task13_prev.addEventListener('click', () => {
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
            task13_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task13_prev.style.opacity = 0
        }


    })

    task13_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task13_prev.style.opacity = 1
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
            task13_next.style.opacity = 0
        }

    })
})()