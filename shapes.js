//Ellipse
function Ellipse(vector_point, radiusX, radiusY, stroke_or_fill)
{
	this.vector_point = vector_point;
	this.radiusX = radiusX;
	this.radiusY = radiusY;

	this.col = 135;

	if(stroke_or_fill === "fill")
	{
		fill(this.col);
	}
	else if(stroke_or_fill === "stroke")
	{
		stroke(this.col)
	}
	
	ellipse(this.vector_point.x, this.vector_point.y, this.radiusX, this.radiusY);

	this.color = function(c)
	{
		//clear();
		this.col = c;
		
		if(stroke_or_fill === "fill")
		{
			fill(this.col);
		}
		else if(stroke_or_fill === "stroke")
		{
			stroke(this.col)
		}
		
		ellipse(this.vector_point.x, this.vector_point.y, this.radiusX, this.radiusY);
	};
}

//Circle
function Circle(vector_point, radius, stroke_or_fill)
{
	this.vector_point = vector_point;
	this.radius = radius;

	this.col = 135;

	if(stroke_or_fill === "fill")
	{
		fill(this.col);
	}
	else if(stroke_or_fill === "stroke")
	{
		stroke(this.col)
	}
	
	ellipse(this.vector_point.x, this.vector_point.y, this.radius, this.radius);

	this.color = function(c)
	{
		//clear();
		this.col = c;
		
		if(stroke_or_fill === "fill")
		{
			fill(this.col);
		}
		else if(stroke_or_fill === "stroke")
		{
			stroke(this.col)
		}
		
		ellipse(this.vector_point.x, this.vector_point.y, this.radius, this.radius);
	};
}

//Polygon
function Polygon(array_of_vectors, stroke_or_fill, plotId)
{
	this.array_of_vectors = array_of_vectors;
	this.plotId = plotId;
	
	this.red = 0;
	this.green = 0;
	this.blue = 255;
	this.alpha = 0;

	if(stroke_or_fill === "fill")
	{
		fill(244, 241, 65, 255);
	}
	else if(stroke_or_fill === "stroke")
	{
		stroke(this.red, this.green, this.blue, this.alpha);
	}
	
	beginShape();
	var i = 0;
	for(i=0; i<this.array_of_vectors.length; i++)
	{
		vertex(array_of_vectors[i].x, array_of_vectors[i].y);
	}
	endShape();

	this.color = function(r, g, b, alpha)
	{
		//clear();
		this.red = r;
		this.green = g;
		this.blue = b;
		this.alpha = alpha;
		
		if(stroke_or_fill === "fill")
		{
			fill(244, 241, 65, 255);
		}
		else if(stroke_or_fill === "stroke")
		{
			stroke(this.red, this.green, this.blue, this.alpha);
		}
		
		beginShape();
		var i = 0;
		for(i=0; i<this.array_of_vectors.length; i++)
		{
			vertex(this.array_of_vectors[i].x, this.array_of_vectors[i].y);
		}
		endShape();
	};
}

//Rectangle
function Rectangle(array_of_vectors, stroke_or_fill)
{
	this.array_of_vectors = array_of_vectors;
	
	this.col = 135;

	if(stroke_or_fill === "fill")
	{
		fill(this.col);
	}
	else if(stroke_or_fill === "stroke")
	{
		stroke(this.col);
	}
	
	rect(this.array_of_vectors[0].x, this.array_of_vectors[0].y, this.array_of_vectors[1].x, this.array_of_vectors[1].y);

	this.color = function(c)
	{
		//clear();
		this.col = c;
		
		if(stroke_or_fill === "fill")
		{
			fill(this.col);
		}
		else if(stroke_or_fill === "stroke")
		{
			stroke(this.col);
		}
		
		rect(this.array_of_vectors[0].x, this.array_of_vectors[0].y, this.array_of_vectors[1].x, this.array_of_vectors[1].y);
	};
}

//PolyLine
function PolyLine(array_of_vectors)
{
	this.array_of_vectors = array_of_vectors;
	this.red = 0;
	this.green = 0;
	this.blue = 255;
	this.alpha = 255;

	stroke(this.red, this.green, this.blue, this.alpha);
	strokeWeight(2);

	var i=0;
	for(i=0; i<this.array_of_vectors.length - 1; i++)
	{
		line(this.array_of_vectors[i].x, this.array_of_vectors[i].y, this.array_of_vectors[i+1].x, this.array_of_vectors[i+1].y);
	}
	
	this.color = function(r, g, b, alpha)
	{
		this.red = r;
		this.green = g;
		this.blue = b;
		this.alpha = alpha;

		stroke(this.red, this.green, this.blue, this.alpha);
		strokeWeight(2);

		var i=0;
		for(i=0; i<this.array_of_vectors.length - 1; i++)
		{
			line(this.array_of_vectors[i].x, this.array_of_vectors[i].y, this.array_of_vectors[i+1].x, this.array_of_vectors[i+1].y);
		}
	};
}

//DashedLine
function DashedLine(startX, startY, endX, endY, speed)
{
	this.startX = startX;
	this.startY = startY;
	this.endX = endX;
	this.endY = endY;

	this.x1 = this.startX;
	this.y1 = this.startY;
	this.x2 = this.endX;
	this.y2 = this.endY;

	this.slope = (this.y2 - this.y1)/(this.x2 - this.x1);

	this.speed = speed;

	this.offset = 0;
	
	this.move = function()
	{

		if(this.offset%this.speed === 0)
		{

			clear();
			background(123, 123, 223);	
			stroke(0);

			console.log(typeof(this.y2));
					
			line(this.x1, this.y1, (this.x1 + 10), this.y1 + ((this.x1 + 10) - this.x1)*this.slope);
			
			this.x1 += 10;
			this.y1 += ((this.x1 + 10) - this.x1)*this.slope;

			line((this.x1 + 10), this.y1 + ((this.x1 + 10) - this.x1)*this.slope, (this.x1 + 20), this.y1 + ((this.x1 + 20) - this.x1)*this.slope);

			this.x1 += 10;
			this.y1 += ((this.x1 + 10) - this.x1)*this.slope;

			line((this.x1 + 20), this.y1 + ((this.x1 + 20) - this.x1)*this.slope, (this.x1 + 30), this.y1 + ((this.x1 + 30) - this.x1)*this.slope);

			this.x1 += 10;
			this.y1 += ((this.x1 + 10) - this.x1)*this.slope;

			line((this.x1 + 30), this.y1 + ((this.x1 + 30) - this.x1)*this.slope, (this.x1 + 40), this.y1 + ((this.x1 + 40) - this.x1)*this.slope);

			this.x1 += 10;
			this.y1 += ((this.x1 + 10) - this.x1)*this.slope;

			line((this.x1 + 40), this.y1 + ((this.x1 + 40) - this.x1)*this.slope, (this.x1 + 50), this.y1 + ((this.x1 + 50) - this.x1)*this.slope);

			this.x1 += 10;
			this.y1 += ((this.x1 + 10) - this.x1)*this.slope;

			line((this.x1 + 50), this.y1 + ((this.x1 + 50) - this.x1)*this.slope, (this.x1 + 60), this.y1 + ((this.x1 + 60) - this.x1)*this.slope);

			this.x1 += 10;
			this.y1 += ((this.x1 + 10) - this.x1)*this.slope;

			line((this.x1 + 60), this.y1 + ((this.x1 + 60) - this.x1)*this.slope, (this.x1 + 70), this.y1 + ((this.x1 + 70) - this.x1)*this.slope);

			this.x1 += 10;
			this.y1 += ((this.x1 + 10) - this.x1)*this.slope;


			if(this.x1 > this.x2)
			{
				this.x1 = this.startX;
				this.y1 = this.startY;
				this.x2 = this.endX;
				this.y2 = this.endY;
			}
		}
		this.offset++;
	}
}

//Tooltip
function Tooltip(title, startX, startY, width, height)
{
	this.title = title;
	this.startX = startX;
	this.startY = startY;
	this.width = width;
	this.height = height;

	this.show = function()
	{
		noStroke();
		fill(0, 0, 0, 255);
		rect(this.startX, this.startY, this.width, this.height, 20);
		noStroke();
		fill(255);
		textSize(15);
		text(this.title, this.startX+20, this.startY+20);
	};

	this.hide = function()
	{
		clear();
	};
}