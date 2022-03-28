(() => {
    const audio = document.querySelectorAll('.task3_audio')
    const task3_prev = document.querySelector('.task3_prev')
    const task3_next = document.querySelector('.task3_next')
    const task3_slide = document.querySelector('.task3_img')
    const slide_caption = document.querySelector('.task3_slide_caption')
    const numberOfimgs = document.querySelector('.task3_count2')
    const count = document.querySelector('.task3_count1')
    const task3_begin = document.querySelector('.task3_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_3/assets2/task3_1.png',
            text: 'Второй день недели — вторник.'
        },
        {
            id: 2,
            src: 'Images_3/assets2/task3_2.png',
            text: 'Второй месяц года — февраль.'
        },
        {
            id: 3,
            src: 'Images_3/assets2/task3_3.png',
            text: 'Второй месяц осени — октябрь.'
        }
    ]

    task3_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task3_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task3_begin.style.display = 'none'
        } else if (e.target.classList.contains('task3_start2')) {
            task3_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task3_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task3_slide.append(element)

    task3_prev.addEventListener('click', () => {
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
            task3_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task3_prev.style.opacity = 0
        }


    })

    task3_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task3_prev.style.opacity = 1
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
            task3_next.style.opacity = 0
        }

    })
})()