# MMM-Myvoiceradio
A very simple radio Module for your MM² controlled by voice 


Hello everybody!!! :-)
Welcome to my first module.


Ok I created a very very simple module for my own MagicMirror, but I like to share it whit you. :-)

This is my first try of create a module and uploading it to github. 

*What do this modul?* 

This modul can start a radio staion and play a Live stream. Also you can stop the stream. At this standard config there was two radio stations from Germany. (Einslive diggi and BigFM).

*How does it work?*

To use this modul you have to install and config the voicecontrol Modul, too.
If this works fine you have to create some Hotwords. One for every staion and one word to stop Radio. 
!!! Carefull!!! At my own mirror I create at first a Hotword called Sender1 (Station1) and a hotword called Sender2 (Station2). But then the voicecontroll Module detection can't regonize the correct Word and like to play everything. So I create some speziall Words, like the name of the two Radiostation and for STOPP the Hotword Radiostop. 

It works very easy. There are two diffrent .js Files in this git. A js file for the module and a Node_helper.js file. And there are a folder whit scripts. 

At first you have to create a hotword and config it in your config.js file. Like every hotword. Then you have to spezify a message which will send if the hotword will detected. In my case einslive for example. If the Hotword is now detected, the message "einslive" will send to all other modules. The MMM-Myvoiceradio.js file detected this message and send a soketnotification called "einslive" too. Now the Node_helper.js detected this soketnotification and started the right script at the Stations Folder. And thats all... Now you should hear some music. 

Some times before I write about Radistop. If this hotword is detected, the Node_helper.js file send the order kill mpg123 to stop radio. This will a hard method but it works. And normaly no other Sound was playing at the same time the order kill mpg123 will ok. 

!!! VERY IMPORTANT!!! A user called Broberg show me a mistake! The used exec command didn´t work. Because I forget to explain YOU have to make the script files exutable!!! I use the command "chmod +x <file>" in the shell. 

At last I will say: YOU HAVE TO CHECK EVERY FOLDERPATH in my files!!! Maybe at your MM² there was other Folders use.
AND: I write, I use to play mp123. I didn't know if it will be install by standard.

OHHH and a little word to the script at the staion folder. You can see there will only start the stream. I use the option -q because they will no text display in your console. 
THE biggest Problem was to find out the right and direct Path to the Live stream. I remember I have google a lot. :-)

Here the chnage for your config.js 

{
        module: 'MMM-Myvoiceradio',
        position: 'lower_third',
        config: { 
		}
    },
    
*What did it display?*

This module displayed at standard only one thing, the name of the two radio stations. You can change or delete this in MMM-Myvoiceradio. Where it will be displayed you can chnace in your config.js file. 

