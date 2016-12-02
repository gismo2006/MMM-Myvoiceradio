'use strict';
const NodeHelper = require('node_helper');
const exec = require('child_process').exec;
var timer;
//function initialize() {
//}
//(function(){
//	initialize();
//			autosleep();
//})();
module.exports = NodeHelper.create({
  start: function() {
		this.started = false;
  }, 
 
  socketNotificationReceived: function(notification) {
	if (notification === "bigfm") {
			exec("sudo /home/pi/MagicMirror/modules/MMM-Myvoiceradio/stations/bigfm.sh", null);
	}
if (notification === "einslive") {
			exec("sudo /home/pi/MagicMirror/modules/MMM-Myvoiceradio/stations/einslive.sh", null);
	}
if (notification === "radiostop") {
			exec("sudo pkill mpg123", null);
	}


   },
  
});

	