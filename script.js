const questParagraphs = document.querySelector('.questions p')
const arrowUp = document.querySelectorAll('.questions .arrows')
const paragraphs = document.querySelectorAll('.questions .paragraphs')

// question.addEventListener('click', function () {
//   const idParagraph = this.getAttribute('data-paragraph')
//   const elementParagraph = document.querySelector(idParagraph)
//   elementParagraph.classList.toggle('active')
//   return console.log(idParagraph, elementParagraph)
// })

const quest = document.querySelectorAll('.questions > .question')
const questions = document.querySelectorAll('.questions')

questions.forEach(function (question) {
  question.addEventListener('click', function () {
    question.children[1].classList.toggle('active')
  })
})

quest.forEach(function (textBold) {
  textBold.addEventListener('click', function () {
    textBold.children[0].classList.toggle('bold-text')
    textBold.children[1].classList.toggle('arrow-up')
  })
})
