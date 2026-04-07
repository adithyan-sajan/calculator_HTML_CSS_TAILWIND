const updateDisplay = (val) => {
    input.value += val
}
const clearDisplay = () => {
    input.value = ""
}
const clearLast = () => {
    input.value = input.value.slice(0, -1)
}