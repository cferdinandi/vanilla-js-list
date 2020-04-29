/*! vanillajs v1.3.0 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/vanilla-js-podcast */
(function () {
	'use strict';

	/**
	 * Element.matches() polyfill (simple version)
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
	 */
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}

	// Mailchimp form
	if (document.querySelector('#mailchimp-form')) {
		mailchimp();
	}

}());
