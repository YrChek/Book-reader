let textSize, textColor, bookColor = 'non_existent'  // несуществующий css, что бы при первом remove ошибку не выдавало
const bookControls = document.querySelector('.book__controls')
// const coolection = Array.from(bookControls.querySelectorAll('a'))
const coolection = bookControls.querySelectorAll('a')
const bookContent = document.querySelector('.book__content')

coolection.forEach((el) => {
    el.onclick = onClick
})

function onClick(e) {
    let element = e.target
    if (element.closest('.book__control_font-size')) {
        bookControls.querySelector('.font-size_active').classList.remove('font-size_active')
        bookContent.classList.remove(textSize)
        textSize = 'book_fs-' + element.dataset.size
        if (element.dataset.size) {
            bookContent.classList.add(textSize)
        }
        element.classList.add('font-size_active')
        return false
    }

    if (element.closest('.book__control_color')) {
        bookControls.querySelector('.book__control_color').querySelector('.color_active').classList.remove('color_active')
        element.classList.add('color_active')
        bookContent.classList.remove(textColor)
        textColor = 'book_color-' + element.dataset.textColor
        bookContent.classList.add(textColor)
        return false
    }

    if (element.closest('.book__control_background')) {
        bookControls.querySelector('.book__control_background').querySelector('.color_active').classList.remove('color_active')
        element.classList.add('color_active')
        bookContent.classList.remove(bookColor)
        bookColor = 'book_bg-' + element.dataset.bgColor
        bookContent.classList.add(bookColor)
        return false
    }
    return false
}

