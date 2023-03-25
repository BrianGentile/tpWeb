Rectangle.prototype.paint = function(ctx) {
  ctx.strokeStyle = this.color;
  ctx.lineWidth = this.thickness;
  ctx.beginPath();

    ctx.rect(this.initialX, this.initialY, this.height, this.width);
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {

    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.beginPath();
    
    ctx.moveTo(this.initialX, this.initialY);
    ctx.lineTo(this.finalX, this.finalY );
    ctx.stroke();
  };
  
  Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.Shapes.forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };
  
