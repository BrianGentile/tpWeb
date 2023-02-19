
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  
	// Définir ici les attributs de la 'classe'
  this.initialX = 0;
  this.initialY = 0;
  this.finalX = 0;
  this.finalY = 0;
  this.click = false;

  // Developper les 3 fonctions gérant les événements
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
  
	

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.maFctGerantLaPression, false);
  canvas.addEventListener('mousemove', this.maFctGerantLeDeplacement, false);
  canvas.addEventListener('mouseup', this.maFctGerantLeRelachement, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



