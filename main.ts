input.onPinPressed(TouchPin.P0, function () {
    text_list.push(["5"])
})
input.onButtonPressed(Button.A, function () {
    text_list.push(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + (text_list))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    text_list.push(0)
})
let text_list: number[] = []
let list: number[] = []
basic.forever(function () {
	
})
