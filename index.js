const dayInput = document.getElementById('day')
const monthInput = document.getElementById('month')
const yearInput = document.getElementById('year')

dayInput.addEventListener('change', event => {
    dayInput.parentElement.classList.remove("required-error")
    dayInput.parentElement.classList.remove("invalid-error")
    // if (Number(dayInput.value) > 31) {
    //     dayInput.value = 31
    // }
    if (["", "0", "00"].includes(monthInput.value)) return
    dayInput.value = Number(dayInput.value)
    if (String(dayInput.value).length === 1) {
        dayInput.value = "0" + dayInput.value
    }
})

monthInput.addEventListener('change', event => {
    monthInput.parentElement.classList.remove("required-error")
    monthInput.parentElement.classList.remove("invalid-error")
    // if (Number(monthInput.value) > 12) {
    //     dayInput.value = 12
    // }
    if (["", "0", "00"].includes(monthInput.value)) return
    monthInput.value = Number(monthInput.value)
    if (String(monthInput.value).length === 1) {
        monthInput.value = "0" + monthInput.value
    }
})

yearInput.addEventListener('change', event => {
    yearInput.parentElement.classList.remove("required-error")
    yearInput.parentElement.classList.remove("invalid-error")
    if (monthInput.value === "") return
    monthInput.value = Number(monthInput.value)
})


const button = document.getElementById('button')

button.addEventListener('click', event => {
    let returning = false
    if (dayInput.value === "") {
        dayInput.parentElement.classList.add('required-error')
        returning = true
    }
    if (monthInput.value === "") {
        monthInput.parentElement.classList.add('required-error')
        returning = true
    }
    if (yearInput.value === "") {
        yearInput.parentElement.classList.add('required-error')
        returning = true
    }
    if ((1 > Number(monthInput.value) || Number(monthInput.value) > 12) && monthInput.value !== "") {
        returning = true
        monthInput.parentElement.classList.add('invalid-error')
        if ((1 > Number(dayInput.value) || Number(dayInput.value) > 31) && dayInput.value !== "") dayInput.parentElement.classList.add('invalid-error')
    } else if ((1 > Number(dayInput.value) || Number(dayInput.value) > new Date(yearInput.value, monthInput.value, 0).getDate()) && dayInput.value !== "") {
        dayInput.parentElement.classList.add('invalid-error')
        returning = true
    }
    if (yearInput.value > new Date().getFullYear()) {
        yearInput.parentElement.classList.add('invalid-error')
        returning = true
    }
    if (returning) {
        document.getElementById('output-days').innerText = "--"
        document.getElementById('output-months').innerText = "--"
        document.getElementById('output-years').innerText = "--"
        return
    }
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