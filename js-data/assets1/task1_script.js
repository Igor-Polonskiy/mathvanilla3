(() => {
    const audio = document.querySelectorAll('.task1_audio')
    const task1_prev = document.querySelector('.task1_prev')
    const task1_next = document.querySelector('.task1_next')
    const task1_slide = document.querySelector('.task1_img')
    const slide_caption = document.querySelector('.task1_slide_caption')
    const numberOfimgs = document.querySelector('.task1_count2')
    const count = document.querySelector('.task1_count1')
    const task1_begin = document.querySelector('.task1_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_3/assets1/task1_1.png',
            text: 'Жил-был зайчик. Сколько зайчиков?'
        },
        {
            id: 2,
            src: 'Images_3/assets1/task1_2.png',
            text: 'Один.'
        },
        {
            id: 3,
            src: 'Images_3/assets1/task1_3.png',
            text: 'Встретил он своих друзей. Сколько зайцев?'
        },
        {
            id: 4,
            src: 'Images_3/assets1/task1_4.png',
            text: 'Много.'
        },
        {
            id: 5,
            src: 'Images_3/assets1/task1_5.png',
            text: 'Друзья угостили нашего героя морковкой. Сколько морковок?'
        },
        {
            id: 6,
            src: 'Images_3/assets1/task1_6.png',
            text: 'Одна.'
        },
        {
            id: 7,
            src: 'Images_3/assets1/task1_7.png',
            text: 'Число «один» можно обозначить цифрой 1.'
        },
        {
            id: 8,
            src: 'Images_3/assets1/task1_7.png',
            text: 'Числа — это единицы счёта. С их помощью можно определить количество предметов.'
        },
        {
            id: 9,
            src: 'Images_3/assets1/task1_8.png',
            text: 'Цифры — это специальные знаки для записи чисел.Цифр всего десять.'
        },
        {
            id: 10,
            src: 'Images_3/assets1/task1_9.png',
            text: 'Например, на картинке 10 яблок. Число 10 можно записать двумя цифрами: 1 и 0.'
        }
    ]

    task1_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task1_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task1_begin.style.display = 'none'
        } else if (e.target.classList.contains('task1_start2')) {
            task1_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task1_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task1_slide.append(element)

    task1_prev.addEventListener('click', () => {
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
            task1_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task1_prev.style.opacity = 0
        }


    })

    task1_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task1_prev.style.opacity = 1
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
            task1_next.style.opacity = 0
        }

    })
})()