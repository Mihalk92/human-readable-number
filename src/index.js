module.exports = function toReadable(number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let result = '';
    let numToStr = number.toString().split('');

    if (number < 20) {
        return result = units[number]
    } else if (numToStr.length === 2 ) {
        if (numToStr[1] == '0'){
            return result = dozens[+numToStr[0] - 1]
        } else {
            return result = dozens[+numToStr[0] - 1] + ' ' + units[+numToStr[1]]
        }
    } else if (numToStr.length === 3) {
        if (numToStr[1] == '0' && numToStr[2] == '0') {
            return result = units[numToStr[0]] + ' hundred'
        } else if (numToStr[1] == '0' && numToStr[2] != '0') {
            return result = units[numToStr[0]] + ' hundred ' + units[numToStr[2]]
        }
    }
}
