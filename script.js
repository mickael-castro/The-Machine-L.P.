const modal = document.getElementById("dialog1")
const btn1 = document.getElementById("btn1")
const btn1_Close = document.getElementById("btn1_Close")

const modal2 = document.getElementById("dialog2")
const btn2 = document.getElementById("btn2")
const btn2_Close = document.getElementById("btn2_Close")

const modal3 = document.getElementById("dialog3")
const btn3 = document.getElementById("btn3")
const btn3_Close = document.getElementById("btn3_Close")

const modal4 = document.getElementById("dialog4")
const btn4 = document.getElementById("btn4")
const btn4_Close = document.getElementById("btn4_Close")

const modal5 = document.getElementById("dialog5")
const btn5 = document.getElementById("btn5")
const btn5_Close = document.getElementById("btn5_Close")

btn1.onclick = () => {
    modal.showModal()
}

btn1_Close.onclick = () => {
    modal.close()
}

btn2.onclick = () => {
    modal2.showModal()
}

btn2_Close.onclick = () => {
    modal2.close()
}

btn3.onclick = () => {
    modal3.showModal()
}

btn3_Close.onclick = () => {
    modal3.close()
}

btn4.onclick = () => {
    modal4.showModal()
}

btn4_Close.onclick = () => {
    modal4.close()
}

btn5.onclick = () => {
    modal5.showModal()
}

btn5_Close.onclick = () => {
    modal5.close()
}