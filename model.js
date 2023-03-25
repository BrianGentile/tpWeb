function Drawing(){
    this.Shapes = new Array()
}



function Shape (initialX, initialY, color, thickness){
    this.initialX = initialX
    this.initialY = initialY
    this.color = color
    this.thickness = thickness
}

function Rectangle(initialX, initialY, color, thickness, height, width){
    Shape.call(this, initialX, initialY, color, thickness)
    this.height = height
    this.width = width
}

function Line(initialX, initialY, color, thickness, finalX, finalY){
    Shape.call(this, initialX, initialY, color, thickness)
    this.finalX = finalX
    this.finalY = finalY
}
