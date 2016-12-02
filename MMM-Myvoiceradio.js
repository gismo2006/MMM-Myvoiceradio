/* global Module */

/* Magic Mirror
 * Module: MMM-Myvoiceradio
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("MMM-Myvoiceradio",{

// Default module config.
	defaults: { text: "<div style='font-size: 20px;'>Sender1: BigFM<br>Sender2: Einslive</div>"
	},

notificationReceived: function(notification, payload, sender) {
var self = this;
    if (notification === "einslive"){
        self.sendSocketNotification('einslive', {});
    }
if (notification === "bigfm"){
        self.sendSocketNotification('bigfm', {});
    }
if (notification === "radiostop"){
        self.sendSocketNotification('radiostop', {});
    }
},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});
