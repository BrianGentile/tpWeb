var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;


	document.getElementById('butRect').onclick = () => this.currEditingMode = editingMode.rect;
	document.getElementById('butLine').onclick = () => this.currEditingMode = editingMode.line;
	document.getElementById('spinnerWidth').onchange = (e) => this.currLineWidth = e.target.value;
	document.getElementById('colour').onchange = (e) => this.currColour = e.target.value;







	new DnD(canvas, this);

	this.onInteractionStart = function(dnd){

			if(this.currEditingMode == editingMode.rect){
				this.currentShape = new Rectangle();
			}
			else{
				this.currentShape = new Line();
			}


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

		var uid = generateUUID();
		console.log(uid)
		drawing.Shapes.set(uid,this.currentShape);
		drawing.paint(ctx,canvas);
		updateShapeList(uid,this.currentShape);
		document.getElementById("remove" + uid).onclick = (event) => remove(drawing, event.currentTarget.id.substring(6), ctx, canvas);
		
	}.bind(this);

};
	//fonction prise sur Internet
	function generateUUID() { // Public Domain/MIT
		var d = new Date().getTime();//Timestamp
		var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16;//random number between 0 and 16
			if(d > 0){//Use timestamp until depleted
				r = (d + r)%16 | 0;
				d = Math.floor(d/16);
			} else {//Use microseconds since page-load if supported
				r = (d2 + r)%16 | 0;
				d2 = Math.floor(d2/16);
			}
			return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
	}

	function remove(drawing, index, ctx, canvas){
		console.log(index);
		drawing.Shapes.delete(index);
		document.getElementById('liRemove' + index).remove()
		drawing.paint(ctx, canvas);
	}
