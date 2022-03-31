(() => {
    const audio = document.querySelectorAll('.task4_audio')
    const task4_prev = document.querySelector('.task4_prev')
    const task4_next = document.querySelector('.task4_next')
    const task4_slide = document.querySelector('.task4_img')
    const slide_caption = document.querySelector('.task4_slide_caption')
    const numberOfimgs = document.querySelector('.task4_count2')
    const count = document.querySelector('.task4_count1')
    const task4_begin = document.querySelector('.task4_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_3/assets6/task4_1.png',
            text: 'Какая лестница длиннее? Какая короче?'
        },
        {
            id: 2,
            src: 'Images_3/assets6/task4_2.png',
            text: 'Лестница слева короче лестницы справа. Лестница справа длиннее лестницы слева.'
        },
        {
            id: 3,
            src: 'Images_3/assets6/task4_3.png',
            text: 'Какой шарф длиннее?'
        },
        {
            id: 4,
            src: 'Images_3/assets6/task4_4.png',
            text: 'Эти шарфы одинаковой длины.'
        },
        {
            id: 5,
            src: 'Images_3/assets6/task4_5.png',
            text: 'Всегда ли можно на глаз определить, какой из предметов короче, а какой длиннее?'
        },
        {
            id: 6,
            src: 'Images_3/assets6/task4_6.png',
            text: 'Посмотрите на рисунок. Какой приём использовали первоклассники, чтобы сравнить длины ремней?'
        },
        {
            id: 7,
            src: 'Images_3/assets6/task4_7.png',
            text: 'Чтобы сравнить длину, предметы можно наложить друг на друга. Мы видим, что жёлтый ремень длиннее синего, а синий ремень короче жёлтого.'
        }
    ]

    task4_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task4_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task4_begin.style.display = 'none'
        } else if (e.target.classList.contains('task4_start2')) {
            task4_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task4_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task4_slide.append(element)

    task4_prev.addEventListener('click', () => {
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
            task4_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task4_prev.style.opacity = 0
        }


    })

    task4_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task4_prev.style.opacity = 1
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
            task4_next.style.opacity = 0
        }

    })
})()