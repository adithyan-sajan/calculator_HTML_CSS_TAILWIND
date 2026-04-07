const updateDisplay = (val) => {
    input.value += val
}
const clearDisplay = () => {
    input.value = ""
}
const clearLast = () => {
    input.value = input.value.slice(0, -1)
}
const calculate = () => {
    try {
        input.value = eval(input.value)

    } catch (error) {
        input.value = "Invalid Input"
    }
}