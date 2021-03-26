
import { toggleAnswer } from './toggle.js'

const buttons = document.querySelectorAll ('.card__button')
const bookmarks = document.querySelectorAll ('.card__bookmark')
buttons.forEach(toggleAnswer);
    


bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('fill')
    bookmark.classList.toggle('active')
})});
 