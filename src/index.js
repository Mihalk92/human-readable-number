module.exports = function toReadable(number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let result = '';
    let numToStr = number.toString().split('');
    let a = Math.floor(number / 10);
    let b = number % 10;
    let c = Math.floor(number / 100);
    let d = number % 100;

    if (number < 20) {
        return result = units[number]
    } else if (numToStr.length === 2) {
        if (b == 0) {
            return result = dozens[a - 1]
        } else if (numToStr[1] != 0) {
            return result = dozens[a - 1] + ' ' + units[b]
        }
    } else if (numToStr.length === 3) {
        if (d == 0) {
            return result = units[c] + ' hundred'
        } else if (d < 20) {
            return units[c] + ' hundred ' + units[d]
        } else if (d % 10 === 0) {
            return result = units[c] + ' hundred ' + dozens[numToStr[1] - 1]
        } else {
            return result = units[c] + ' hundred ' + dozens[Math.floor(d / 10) - 1] + ' ' + units[(d % 10)]
        }
    }

}
