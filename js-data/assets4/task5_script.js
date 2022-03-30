(() => {
    const tasksListElement = document.querySelector(`.task5_list`);
    const reloadTaskBtn = document.querySelector('.task5_reloadTask')
    const checkingTaskBtn = document.querySelector('.task5_checkingTask')
    const checkTask = document.querySelector('.task5_checkTask')
    const chek_answerTxt = document.querySelector('.task5_chek_answer')


    const list = [{
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        }
    ]

    function fillList() {
        list.sort(() => Math.random() - 0.5).forEach(item => {
            let el = document.createElement('li')
            el.innerText = item.id
            el.setAttribute('data-id', item.id)
            el.classList.add('task5_item')
            el.draggable = true
            tasksListElement.append(el)
        })
    }
    fillList()

    const taskElements = tasksListElement.querySelectorAll(`.task5_item`);




    tasksListElement.addEventListener(`dragstart`, (evt) => {
        evt.target.classList.add(`selected`);
    })

    tasksListElement.addEventListener(`dragend`, (evt) => {
        evt.target.classList.remove(`selected`);
    });

    tasksListElement.addEventListener(`dragover`, (evt) => {

        evt.preventDefault();


        const activeElement = tasksListElement.querySelector(`.selected`);

        const currentElement = evt.target;

        const isMoveable = activeElement !== currentElement &&
            currentElement.classList.contains(`task5_item`);

        if (!isMoveable) {
            return;
        }

        const nextElement = (currentElement === activeElement.nextElementSibling) ?
            currentElement.nextElementSibling :
            currentElement;

        tasksListElement.insertBefore(activeElement, nextElement);
    });


    reloadTaskBtn.addEventListener('click', () => {
        tasksListElement.innerHTML = ''
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
        fillList()
    })

    checkingTaskBtn.addEventListener('click', () => {
        const taskElements = document.querySelectorAll(`.task5_item`);
        let arr = []
        taskElements.forEach(item => {
            arr.push(item.getAttribute('data-id'))
        })

        if (arr[0] === '1' && arr[1] === '2' && arr[2] === '3') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {

            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })
})()