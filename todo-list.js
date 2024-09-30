const arr = [];

renderTemplate()

function addElement () {

  const inputElement = document.querySelector('.js-input')
  const name = inputElement.value

  arr.push(name)

  inputElement.value = ''
  renderTemplate()
}

function renderTemplate () {

  let tasks = ''
  for (let i = 0; i < arr.length; i++) {
    tasks += `<p>${arr[i]}<p>`
  }
  document.querySelector('.js-div').innerHTML = tasks
}

