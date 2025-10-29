class Rectangle {
	constructor(width, height){
		this._width = width; // Use underscore to avoid conflict with getter
		this._height = height; // Use underscore to avoid conflict with getter
	}

	get width(){
		return this._width; // Return the stored value
	} 

	get height(){
		return this._height; // Return the stored value
	}

	getArea(){
		return this.width * this.height; // Use getters to get width and height
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side, side); // Call Rectangle constructor with side for both width and height
	}

	getPerimeter(){
		return 4 * this.width; // Use width (or height) since both are the same
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
