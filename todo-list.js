const arr = [];

renderTemplate()
console.log(arr)

function addElement () {
  const inputElement = document.querySelector('.js-input')
  const dateElement = document.querySelector('.js-date')
  const name = inputElement.value
  const date = dateElement.value

  arr.push({
    // name: name
    // date: date,
    name, date
  })

  inputElement.value = ''
  dateElement.value = ''
  renderTemplate()
}

function renderTemplate () {

  let HTML = ''
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    const arrObject = arr[i]
    // const name = arrObject.name
    // const date = arrObject.date
    const { name, date } = arrObject
    HTML += `<div>${name}</div>
      <div>${date}</div>
      <button onclick="arr.splice(${i}, 1)
      renderTemplate()
      " class="delete-button">Delete</button>`
  }
  document.querySelector('.js-div').innerHTML = HTML
}

