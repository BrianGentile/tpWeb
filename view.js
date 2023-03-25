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

  function updateShapeList(index, shape){
    document.getElementById('shapeList').insertAdjacentHTML('beforeend', toDom(shape,index))
  }



  function toDom(shape, index) {
    if(shape && typeof shape === 'object') {
      let innerHtml = `<li id="liRemove${index}">`
      if(shape.constructor === Rectangle)
        innerHtml += `<span style="color:${shape.color}">▯ : </span> Rectangle`
      else if(shape.constructor === Line)
        innerHtml += `<span style="color:${shape.color}">/ : </span> Line`
      innerHtml += `<button type="button" class="btn btn-default" remove" id="remove${index}"><span class="glyphicon glyphicon-remove-sign"></span></button>`
  
    return innerHtml + '</li>'
    
  }
}

