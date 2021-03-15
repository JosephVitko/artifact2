module.exports = {
    capitalize: function(str) {
        let firstLetter = str.substr(0, 1);
        return firstLetter.toUpperCase() + str.substr(1);
    },
}
