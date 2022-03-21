var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var x = 300;
        var y = 200;
        var dx = 3;
        var dy = 3;
        var height = 50;
        var text = "Bouncing Bonnel";

        function animate () {
            var metrics = ctx.measureText(text);
            var width = metrics.width;
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);

            ctx.font = "bold 30px Helvetica";
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText(text, x, y);
            

            if ((x + width > innerWidth)||(x <= 0)) {
                dx = -dx;
            }

            if ((y > innerHeight)||(y <= height/2)) {
                dy = -dy;
            }
            x += dx;
            y += dy;
        }
        animate();