Record Store Day Countdown (HTML5 Canvas)
=============

Overview
-----------

This repo contains code for a HTML5 Canvas object that displays the number of days and hours remaining until Record Store Day.

This code was developed to replace the Adobe Flash implementation of the Record Store Day countdown timer, as found on http://recordstoreday.com.

* Created by Paul Woidke (2013-06-17)
* Email: [PaulWoidke@gmail.com](mailto:PaulWoidke@gmail.com)
* Twitter: [@PaulWoidke](https://twitter.com/PaulWoidke)
* GitHub: [PWoidke](https://github.com/pwoidke)

### Current Version: 1.0 (2013.06.17.01.00)

Usage
-----------

Add the file `Impact-Label-fontfacekit` to your site. This folder can be placed anywhere, but be sure to update `RSDCountdown.js (ln. 17)` to reflect the correct file path if it is not at the root directory of your site.

Add the file `RSDCOM2011_nodate_1.jpg` to your site. This file can be placed anywhere, but be sure to update `RSDCountdown.js (ln. 24)` to reflect the correct file path if it is not at the root directory of your site.

Add a link to `RSDCountdown.js` anywhere in your HTML file (usually in the head or at the end of the body element):

    <script src="RSDCountdown.js"></script>

Add the following code on your HTML page where you want the countdown to appear. This code provides a fallback for browsers that do not support HTML5 Canvas:

    <canvas id="RSDCountdown">
        <object height="176" width="300">
            <param name="allowScriptAccess" value="sameDomain" />
            <param name="allowFullScreen" value="false" />
            <param name="movie" value="http://recordstoreday.com/templates/Store/pretty_new/swf/countdown.swf" />
            <param name="quality" value="high" />
            <param name="bgcolor" value="#FFF" />
            <param name="shuffle" value="true" />
            <embed src="http://recordstoreday.com/templates/Store/pretty_new/swf/countdown.swf" width="300" height="176" bgcolor="#FFF" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" AllowScriptAccess="sameDomain"></embed>
        </object>
    </canvas>

Bugs
-----------
Since `@font-face` loads font files asynchronously, it is sometimes necessary to refresh the page before fonts will display in the canvas. See [stackoverflow.com/questions/2756575](http://stackoverflow.com/questions/2756575/drawing-text-to-canvas-with-font-face-does-not-work-at-the-first-time) for more details.

Notes
-----------

* `Impact-Label-fontfacekit` folder was generated by [Font Squirrel (http://www.fontsquirrel.com)](http://www.fontsquirrel.com).

* Please see `Impact-Label-fontfacekit/Tension Type Font License.txt` for font licensing.
