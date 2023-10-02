let display = document.querySelector('.display')
const button = document.getElementsByClassName('button')

const calc = {
  operator: [button[1], button[2], button[3], button[7], button[11], button[15]],
  special: [button[0], button[16], button[18], button[19]]
}

let values = 0

// Key numbers
const numbers = [button[17], button[12], button[13], button[14], button[8], button[9], button[10], button[4], button[5], button[6]]
for (let i = 0, len = numbers.length; i < len; i++) {
  numbers[i].addEventListener('click', () => {
    const number = numbers[i].value
    values = values + number
    parseInt(values)
    display.value += number
  })
}

