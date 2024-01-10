import param from "./parameters.js"
import {each,range,map,mean,filter,sumBy} from "lodash-es"
import {d2l,l2d} from "./utils"
import  {square} from "lattices"


var agents = [];
const T = 2*param.N+1;
const N = param.N;

const initialize = () => {
	param.timer={}; param.tick=0;

	const N = param.N;
	const s = square(N);
	agents = s.nodes;
	if(param.start_with_a_dot.widget.value()){
		each(agents,a=>{
			a.state=(a.n==(2*N) &  a.m==N)?1:0
		})		
	} else {
		each(agents,a=>{
			a.state=a.n==(2*N) & Math.random()<param.initial_density.widget.value()? 1 : 0
		})		
	}
};

const go  = () => {
	param.tick++;
	const bork = filter(agents,a=>(2*N)-a.n==param.tick);
	each(bork,a=>{
		let bolch = a.neighbors[6].state+""+a.neighbors[5].state+""+a.neighbors[4].state;
		if(Math.random() < param[bolch].widget.value()){
			a.state=1;
		} else {
			a.state=0;
		}
	})
	return sumBy(bork,x=>x.state)==0 || param.tick>2*N
}


const update = () => {
	

}

export {agents,initialize,go,update}
