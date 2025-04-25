// this sets up the controls in the control panel
// it adds the widgets to the container and generates attaches the widget to the 
// variables and parameters defined in parameters.js

import * as widgets from "d3-widgets"
import {range,map,toPairs,each,sortBy} from "lodash-es"

import cfg from "./config.js"
import parameters from "./parameters.js"

import {toArray,add_id_label,add_widget,get_variables,get_booleans,get_choices} from "./utils.js"

import styles from "./styles.module.css"
import {format} from "d3"

const fo = format(".3f");

// defined variables for variables, booleans and choices, extracting the information from parameters.js

const variables = get_variables(parameters);
const booleans = get_booleans(parameters);
const choices = get_choices(parameters);

// adding ids and labels to the variables based on names for the variables, see utils.js for the function add_id_label

add_id_label(variables)
add_id_label(booleans)
add_id_label(choices)

// making arrays for the three types of parameters

const va = sortBy(toArray(variables),v=>v.id);
const bo = toArray(booleans);
const ch = toArray(choices);


const sliders = map(va,
		v => widgets.slider()
					.id(v.id)
					.label(v.label)
					.range(v.range)
					.value(v.default)
					.size(cfg.widgets.slider_size)
					.labelposition("top")
					.girth(cfg.widgets.slider_girth)
					.knob(cfg.widgets.slider_knob)
		);
		


each(sliders,s=>{s.label(s.id()=="initial_density"?"initial density":null)})
		
const toggles = map(bo, 
		v => widgets.toggle()
					.id(v.id).
					label(v.label).
					value(v.default)					
		);
		
const radios = map(ch, 
		v => widgets.radio()
					.choices(v.choices)
					.id(v.id)
					.value(v.default)
					.orientation(cfg.widgets.radio_orientation)
					.labelposition(cfg.widgets.radio_label_position)
		);
		
each(ch[0].setups[radios[0].value()].values,(v,i)=>sliders[i].value(v))

		
add_widget(bo,toggles);
add_widget(va,sliders);
add_widget(ch,radios);

const dens_slider=sliders[8];

sliders.pop()

const go = widgets.button().actions(["play","pause"])
//const setup = widgets.button().actions(["back"])
const reset = widgets.button().actions(["rewind"])

		
const buttons = [go,reset];

var ct_panel;

export default (controls,grid)=>{

	const sl_pos=grid.position(cfg.widgets.slider_anchor.x,range(sliders.length)
			.map(x=>(cfg.widgets.slider_anchor.y+(cfg.widgets.slider_gap)*x)));
	
	const dens_sl_pos=grid.position(cfg.widgets.dens_slider_anchor.x,cfg.widgets.dens_slider_anchor.y)
				
	const tg_pos=grid.position(cfg.widgets.toggle_anchor.x,cfg.widgets.toggle_anchor.y);	

	const ra_pos=grid.position(cfg.widgets.radio_anchor.x,cfg.widgets.radio_anchor.y);		
	
	sliders.forEach((sl,i) => sl.position(sl_pos[i]));
	
	dens_slider.position(dens_sl_pos);
	toggles[0].position(tg_pos).labelposition(cfg.widgets.toggle_label_pos)

	radios[0].position(ra_pos)
		.size(cfg.widgets.radio_size).shape(cfg.widgets.radio_shape)
	
	go.position(grid.position(cfg.widgets.playbutton_anchor.x,cfg.widgets.playbutton_anchor.y))
		.size(cfg.widgets.playbutton_size);
	
	reset.position(grid.position(cfg.widgets.backbutton_anchor.x,cfg.widgets.backbutton_anchor.y));
	
//	setup.position(grid.position(cfg.widgets.resetbutton_anchor.x,cfg.widgets.resetbutton_anchor.y));
	

	controls.selectAll(null).data(sliders).enter().append(widgets.widget);
	controls.selectAll(null).data([dens_slider]).enter().append(widgets.widget);
	controls.selectAll(null).data(toggles).enter().append(widgets.widget);
	controls.selectAll(null).data(buttons).enter().append(widgets.widget);
	controls.selectAll(null).data(radios).enter().append(widgets.widget);

	controls.selectAll(null).data(sliders).enter().append("text")
		.text(d=>fo(d.value()))
		.attr("transform",d=>"translate"+"("+(d.position().x+cfg.widgets.slider_size+14)+","+d.position().y+")")
		.attr("class",styles.slidervalue)
	
	controls.selectAll(null).data(sliders).enter().append("g")
		.attr("transform",d=>"translate"+"("+(d.position().x)+","+d.position().y+")")
		.attr("class",styles.bit)
		.attr("id",d=>d.id())
	
	const bs = cfg.widgets.bit_size;
	
	controls.selectAll("."+styles.bit).append("rect")
		.attr("width",bs).attr("height",bs)
		.attr("class",d=>d.id()[0]==0 ? styles.off : styles.on)
		.attr("transform","translate("+(-bs-4*bs)+","+(-bs/2)+")")

	controls.selectAll("."+styles.bit).append("rect")
		.attr("width",bs).attr("height",bs)
		.attr("class",d=>d.id()[2]==0 ? styles.off : styles.on)
		.attr("transform","translate("+(+bs-4*bs)+","+(-bs/2)+")")

	controls.selectAll("."+styles.bit).append("rect")
		.attr("width",bs).attr("height",bs)
		.attr("class",d=>d.id()[1]==0 ? styles.off : styles.on)
		.attr("transform","translate("+(0-4*bs)+","+(-bs/2)+")")
		.style("stroke","darkred")
		.style("stroke-width",3)
	
	ct_panel = controls;
		
}


export {dens_slider,sliders,toggles,radios,go,reset,reset as setup,variables,booleans,choices,ct_panel}


