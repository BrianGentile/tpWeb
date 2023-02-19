
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.


Rectangle.prototype.paint = function(ctx) {

  ctx.beginPath();
  ctx.rect(this.initialX, this.initialY, this.height, this.width);
  ctx.stroke();
};

Line.prototype.paint = function(ctx) {
  ctx.beginPath();
  ctx.moveTo(this.initialX, this.initialY);
  ctx.lineTo(this.finalX, this.finalY );
  ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.Shapes.forEach(function (eltDuTableau) {
    // now fill the canvas
    eltDuTableau.paint(ctx);
  });
};
