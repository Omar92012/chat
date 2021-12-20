let messaage = ""
input.onPinPressed(TouchPin.P0, function () {
    messaage = "" + messaage + "-"
})
input.onButtonPressed(Button.A, function () {
    messaage = "" + messaage + "1"
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(messaage)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    messaage = "" + messaage + "0"
})
basic.forever(function () {
	
})
