import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import styles from "./styles.module.css"
import {each,filter} from "lodash-es"

const N = param.L;
const X = d3.scaleLinear().domain([-0.5,0.5]);
const Y = d3.scaleLinear().domain([-0.5,0.5]);

var ctx,dL,W,H;

const initialize = (display,config) => {

	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');	
	ctx.clearRect(0, 0, W, H);
	each(filter(agents,a=>a.state==1),a=>{
		const c = a.cell();		
		const color = "black";		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;
		ctx.lineWidth = 0;
		ctx.fillRect( X(c[0].x) , Y(c[0].y) , X(c[2].x)-X(c[0].x) , Y(c[2].y)-Y(c[0].y) )
	})
	
	
};


const go = (display,config) => {
	
	ctx.clearRect(0, 0, W, H);
	each(filter(agents,a=>a.state==1),a=>{
		const c = a.cell();		
		const color = "black";		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;
		ctx.lineWidth = 0;
		ctx.fillRect( X(c[0].x) , Y(c[0].y) , X(c[2].x)-X(c[0].x) , Y(c[2].y)-Y(c[0].y) )
	})
}

const update = (display,config) => {
	
	
}


export {initialize,go,update}
