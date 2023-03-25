
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	document.getElementById('butRect').onclick = () => this.currEditingMode = editingMode.rect;
	document.getElementById('butLine').onclick = () => this.currEditingMode = editingMode.line;
	document.getElementById('spinnerWidth').onchange = (e) => this.currLineWidth = e.target.value;
	document.getElementById('colour').onchange = (e) => this.currColour = e.target.value;







	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function(dnd){
		
		if(this.currEditingMode == editingMode.rect){
			this.currentShape = new Rectangle(dnd.initialX, dnd.initialY, this.currColour, this.currLineWidth, dnd.finalX - dnd.initialX, dnd.finalY - dnd.initialY);

		}
		else {
		 	this.currentShape = new Line(dnd.initialX, dnd.initialY, this.currColour, this.currLineWidth, dnd.finalX, dnd.finalY);

		}
		drawing.paint(ctx);


	}.bind(this);

	this.onInteractionUpdate = function(dnd){
		if(this.currEditingMode == editingMode.rect){
			this.currentShape = new Rectangle(dnd.initialX, dnd.initialY, this.currColour, this.currLineWidth, dnd.finalX - dnd.initialX, dnd.finalY - dnd.initialY);

		}
		else {
		 	this.currentShape = new Line(dnd.initialX, dnd.initialY, this.currColour, this.currLineWidth, dnd.finalX, dnd.finalY);

		}
		drawing.paint(ctx);
		this.currentShape.paint(ctx);

	}.bind(this);

	this.onInteractionEnd = function(dnd){
		if(this.currEditingMode == editingMode.rect){
			this.currentShape = new Rectangle(dnd.initialX, dnd.initialY, this.currColour, this.currLineWidth, dnd.finalX - dnd.initialX, dnd.finalY - dnd.initialY);

		}
		else {
		 	this.currentShape = new Line(dnd.initialX, dnd.initialY, this.currColour, this.currLineWidth, dnd.finalX, dnd.finalY);

		}
		drawing.Shapes.push(this.currentShape);
		
		drawing.paint(ctx);
		
	}.bind(this);


};


