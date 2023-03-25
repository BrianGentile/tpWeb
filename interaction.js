function DnD(canvas, interactor) {
  
  this.initialX = 0;
  this.initialY = 0;
  this.finalX = 0;
  this.finalY = 0;
  this.click = false;


  this.maFctGerantLaPression = function(evt){
    this.initialX = getMousePosition(canvas,evt).x;
    this.initialY = getMousePosition(canvas,evt).y;
    this.click=true;

    console.log(this);
    interactor.onInteractionStart(this);

  }.bind(this);

  this.maFctGerantLeDeplacement = function(evt){
    if(this.click){
      this.finalX = getMousePosition(canvas,evt).x
      this.finalY = getMousePosition(canvas,evt).y
    }

      console.log(this)
      interactor.onInteractionUpdate(this)

  }.bind(this);

  this.maFctGerantLeRelachement = function(evt){
    this.finalX = getMousePosition(canvas,evt).x
    this.finalY = getMousePosition(canvas,evt).y
    this.click = false

    console.log(this)
    interactor.onInteractionEnd(this)

  }.bind(this);
  
	

  canvas.addEventListener('mousedown', this.maFctGerantLaPression, false);
  canvas.addEventListener('mousemove', this.maFctGerantLeDeplacement, false);
  canvas.addEventListener('mouseup', this.maFctGerantLeRelachement, false);

};



function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



