module.exports = function toReadable(int) {
    var result = '';
    var str = String(int);

    var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var oneTens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var hundreds = ' hundred';

    if (int < 10) {
        return result = ones[int];
    } else if (int < 20) {
        return result = oneTens[int - 10];
    } else if (int < 1000) {
        result = (str.length === 3) ? ones[parseInt(str[0])] + hundreds : '';
        if (str.length === 3 && str[1] > 1) {
            result += (str[1] == 0) ? '' : ' ' + tens[parseInt(str[1])];
            return result += (str[2] == 0) ? '' : ' ' + ones[parseInt(str[2])];
        } else if (str.length === 3 && str[1] < 1) {
            if (str[2] < 1) {
                return result;
            }
            return result += ' ' + ones[parseInt(str[2])];
        } else if (str.length === 2) {
            result = tens[parseInt(str[0])];
            return result += (str[1] == 0) ? '' : ' ' + ones[parseInt(str[1])];
        } else {
            return result += ' ' + oneTens[parseInt(str[2])];
        }

    }

}
