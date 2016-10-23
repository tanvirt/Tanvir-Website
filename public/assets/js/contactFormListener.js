function ContactFormListener(id) {
	this._id = id;
}

ContactFormListener.prototype.getId = function() {
	return this._id;
}

ContactFormListener.prototype.onSubmitSuccess = function(firstName, name, email, phone, message) {}
