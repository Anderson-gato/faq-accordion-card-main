const questParagraphs = document.querySelector('.questions p')
const arrowUp = document.querySelectorAll('.questions .arrows')
const paragraphs = document.querySelectorAll('.questions .paragraphs')
const quest = document.querySelectorAll('.questions > .question')
const questions = document.querySelectorAll('.questions')

// event para abrir as respostas
questions.forEach(function (question) {
  question.addEventListener('click', function () {
    question.children[1].classList.toggle('active')
  })
})

// quando for disparado o evento click, vai deixar colocar o bold no texto e a seta pra cima
quest.forEach(function (textBoldAndArrowUp) {
  textBoldAndArrowUp.addEventListener('click', function () {
    textBoldAndArrowUp.children[0].classList.toggle('bold-text')
    textBoldAndArrowUp.children[1].classList.toggle('arrow-up')
  })
})

// trocando os src das imagens quando a viewport chegar em 1000px
const image = document.querySelector('.main-image')
const mql = window.matchMedia('(min-width: 1000px)')

function screen(e) {
  // quando mql.matches for maior que 1000px
  if (e.matches) {
    image.children[0].src = '/images/illustration-woman-online-desktop.svg'
    image.children[1].src = '/images/bg-pattern-desktop.svg'
  } else {
    image.children[0].src = '/images/illustration-woman-online-mobile.svg'
    image.children[1].src = '/images/bg-pattern-mobile.svg'
  }
}

mql.addEventListener('change', screen)

// realizando eventos enquanto a página carrega
window.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  const minWidth = 1000

  // condicional para quando a width for maior que 1000px ela trocar os src das imagens
  if (width >= minWidth) {
    image.children[0].src = '/images/illustration-woman-online-desktop.svg'
    image.children[1].src = '/images/bg-pattern-desktop.svg'
  } else {
    image.children[0].src = '/images/illustration-woman-online-mobile.svg'
    image.children[1].src = '/images/bg-pattern-mobile.svg'
  }
})
