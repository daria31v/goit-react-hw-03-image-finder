import { ButtonLoadMore } from './Button.styled'
// При натисканні на кнопку Load more повинна довантажуватись наступна порція зображень і рендеритися разом із попередніми. Кнопка повинна рендеритися лише тоді, коли є якісь завантажені зображення. Якщо масив зображень порожній, кнопка не рендериться.

export const Button = ({onClick}) => {
    return (
        <ButtonLoadMore onClick={onClick}>LOAD MORE</ButtonLoadMore>
    )
}