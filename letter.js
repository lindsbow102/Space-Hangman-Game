//Control whether or not a letter appears as a "_" or as itself on-screen
function letter(value) {
	this.value = value;
	this.show = false;
	if (this.value == ' ') 
		this.show = true;
}

letter.prototype.printInfo = function() {
	if (this.show) {
		return this.value;
	}
	return "_ ";
}

exports.letter = letter;
