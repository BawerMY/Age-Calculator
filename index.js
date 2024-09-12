const dayInput = document.getElementById('day')
const monthInput = document.getElementById('month')
const yearInput = document.getElementById('year')

dayInput.addEventListener('change', event => {
    if (Number(dayInput.value) > 31) {
        dayInput.value = 31
    }
    dayInput.value = Number(dayInput.value)
    if (String(dayInput.value).length === 1) {
        dayInput.value = "0" + dayInput.value
    }
})

monthInput.addEventListener('change', event => {
    if (Number(monthInput.value) > 12) {
        dayInput.value = 12
    }
    monthInput.value = Number(monthInput.value)
    if (String(monthInput.value).length === 1) {
        monthInput.value = "0" + monthInput.value
    }
})

yearInput.addEventListener('change', event => {
    yearInput.value = Number(yearInput.value)
})

const button = document.getElementById('button')

button.addEventListener('click', event => {
    const currentDate = new Date()
    let day = currentDate.getDate() - Number(dayInput.value)
    let month = currentDate.getMonth() - Number(monthInput.value) + 1
    let year = currentDate.getFullYear() - Number(yearInput.value)

    if (day < 0) {
        day = new Date(yearInput.value, monthInput.value - 1, 0).getDate() - (Number(dayInput.value) - currentDate.getDate()) // not sure of this line
        month--
    }

    if (month < 0) {
        month = 12 - (Number(monthInput.value) - currentDate.getMonth())
        year--
    }

    document.getElementById('output-days').innerText = day
    document.getElementById('output-months').innerText = month
    document.getElementById('output-years').innerText = year
})

document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        button.click()
    }
})