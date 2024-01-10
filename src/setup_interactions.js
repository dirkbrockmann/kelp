
import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import resetparameters from "./reset_parameters.js"
import {iterate,initialize,update} from "./simulation.js"
import {each} from "lodash-es"
import styles from "./styles.module.css"
import {format} from "d3"

const fo = format(".3f");

var timer = {}

const startstop = (display,config) => {
	if(ct.go.value() == 1 ){
		 if(param.tick==2*param.N+1 || param.done==true) {
 			initialize(display,config);
 		}
	
			timer = interval(()=>iterate(display,config),cfg.simulation.delay)
	} else {
		timer.stop()		
	}
}

export default (display,controls,config) => {
	
	ct.reset.update(()=>resetparameters(controls))	
	ct.go.update(() => {
		startstop(display,config)
	}) 
//	ct.setup.update(() => initialize(display,config)) 
	param.systems.widget.update(()=>{
		
		each(param.systems.setups[param.systems.widget.value()].values,(v,i)=>ct.sliders[i].reset(controls,v))
		ct.dens_slider.reset(controls,param.systems.setups[param.systems.widget.value()].density)
		controls.selectAll("."+styles.slidervalue).text(d=>fo(d.value()))
		
		
		const oswald = param.systems.setups[param.systems.widget.value()].density == -1;
		
		controls.select("#slider_initial_density")
			.transition().style("opacity",oswald?0:1)
		controls.select("#slider_initial_density").selectAll("*")
			.style("pointer-events",oswald?"none":null)
		
		// controls.select("#toggle_start_with_a_dot")
// 			.transition().style("opacity",oswald?0:1)
// 		controls.select("#toggle_start_with_a_dot").selectAll("*")
// 			.style("pointer-events",oswald?"none":null)
		
		if(oswald){
			param.start_with_a_dot.widget.reset(controls,true)
		} else {
			param.start_with_a_dot.widget.reset(controls,false)
		}
		initialize(display,config);
	})
	
	param.start_with_a_dot.widget.update(()=>{

		controls.select("#slider_initial_density")
			.transition().style("opacity",param.start_with_a_dot.widget.value()?0:1)
		controls.select("#slider_initial_density").selectAll("*")
			.style("pointer-events",param.start_with_a_dot.widget.value()?"none":null)
		
		initialize(display,config);
	})
	
	param.initial_density.widget.update_end(()=>{initialize(display,config)});

	each(ct.sliders,s=>{
		s.update(()=> { controls.selectAll("."+styles.slidervalue).text(d=>fo(d.value()))})
		s.update_end(()=>initialize(display,config))
	})


}

