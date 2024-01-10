// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		slider_size: 160,
		slider_show: true,
		slider_gap : 1,
		slider_girth:12,
		slider_knob:12,
		slider_anchor: {x:6.5,y:1},
		dens_slider_anchor:{x:6.5,y:11},
		toggle_anchor: {x:6.5,y:9.5},
		toggle_label_pos:"right",
		playbutton_size: 120,
		playbutton_anchor:{x:2,y:2},
		backbutton_anchor:{x:2,y:5},
//		resetbutton_anchor:{x:2,y:5},
		radio_anchor:{x:1,y:7},
		radio_size:160,
		radio_orientation:"vertical",
		radio_label_position:"right",
		radio_shape:"circle",
		bit_size:12
	},
	simulation: {
		delay:0
	}
}