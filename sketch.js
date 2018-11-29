let ax, ay;
let bx, by;
let cx, cy;

let x, y;


function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(20);
	ax = width/2;
	ay = 0;
	bx = 0;
	by = height;
	cx = width;
	cy = height;

	x = random(width);
	y = random(height);

	background(0);
	stroke(255);
	strokeWeight(1);
	stroke(0);
	// point(ax, ay);
	// point(bx, by);
	// point(cx, cy);
}

function draw() {
	let xd = 0.5;
	for(var n = 1; n<=1500; ++n){
		point(x,y);
		let r = floor(random(4));
		if (r == 0||r==3){
			stroke(255,113,206, 60);
			x = lerp(x,ax,xd);
			y = lerp(y,ay,xd);
		}

		else if (r == 1){
			stroke(1,205,254, 60);
			x = lerp(x,bx,xd);
			y = lerp(y,by,xd);
		}

		else if (r == 2){
			stroke(255,251,150, 60);
			x = lerp(x,cx,xd);
			y = lerp(y,cy,xd);
		}
	}
}

