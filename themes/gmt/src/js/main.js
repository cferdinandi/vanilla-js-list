import './main-components/_matches-polyfill.js';
import './main-components/mailchimp.js';

// Mailchimp form
if (document.querySelector('#mailchimp-form')) {
	mailchimp();
}