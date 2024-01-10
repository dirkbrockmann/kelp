// this connects the model and the visualization. For each we have three categories of events
// 1. initialization, 2. update, 3. iteration
// this is used by index.js, e.g. to initialize the explorable

import {initialize as model_init, update as model_update, go as model_go} from "./model.js"
import {initialize as visual_init, update as visual_update, go as visual_go} from "./viz.js"
import * as ct from "./controls.js"
import param from "./parameters.js"

function iterate (display,config) {
	param.done = model_go();
	visual_go(display,config);		
	if(param.done){
		ct.go.press(ct.ct_panel)
	}
};

function initialize (display,config) {
	param.done=false;
	model_init();
	visual_init(display,config); 
};

function update (display,config) {
	model_update();
	visual_update(display,config);
}

export {iterate,initialize,update}