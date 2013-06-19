//For todays date;
Date.prototype.today = function () {
    "use strict";
    return ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" + (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" + this.getFullYear();
};
//For the time now
Date.prototype.timeNow = function () {
    "use strict";
    return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes() + ":" + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
};

window.onload = function () {
    "use strict";
    var canvas = document.getElementById('RSDCountdown'),
        ctx = canvas.getContext('2d');

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'Impact-Label-fontfacekit/stylesheet.css';
    document.getElementsByTagName('head')[0].appendChild(link);

    var image = new Image();
    image.src = link.href;
    image.onerror = function () {
        var base_image = new Image();
        base_image.src = 'RSDCOM2011_nodate_1.jpg';
        base_image.onload = function () {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

            ctx.drawImage(base_image, 0, 0, ctx.canvas.clientWidth, (0.625 * ctx.canvas.clientHeight));
            ctx.save();
            ctx.rotate(-0.06);
            ctx.fillStyle = "#2b2227";
            ctx.fillRect(112, 82, 160, 30);

            ctx.font = '27px ImpactLabelReversedRegular';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText("BEGINS IN", 120, 105);

            ctx.restore();

            ctx.font = '20px ImpactLabelReversedRegular';
            ctx.fillStyle = '#000000';
            ctx.fillText("DAYS", 100, 135);
            ctx.fillText("HOURS", 210, 135);

            var now = new Date();
            var rsd = new Date("04/19/2014");
            var timeDiff = Math.abs(rsd.getTime() - now.getTime());
            var diffDaysExact = timeDiff / (1000 * 3600 * 24);
            var diffDays = Math.floor(diffDaysExact);
            var diffHours = Math.floor((diffDaysExact - diffDays) * 24);

            ctx.font = '45px ImpactLabelReversedRegular';
            ctx.fillStyle = '#F09F36';
            ctx.textAlign = 'right';
            ctx.fillText(diffDays, 100, 135);
            ctx.fillText(diffHours, 210, 135);
            ctx.textAlign = 'left';
        };
    };
};