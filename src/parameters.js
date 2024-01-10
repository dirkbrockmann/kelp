// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		N:150,
	done:false,
		"000": {
			range:[0,1],
			default:0
		},
		"001": {
			range:[0,1],
			default:0
		},
		"010": {
			range:[0,1],
			default:0
		},
		"011": {
			range:[0,1],
			default:0
		},
		"100": {
			range:[0,1],
			default:0
		},
		"101": {
			range:[0,1],
			default:0
		},
		"110": {
			range:[0,1],
			default:0
		},
		"111": {
			range:[0,1],
			default:0
		},
		"initial_density": {
			range:[0,1],
			default:0.1
		},
		systems : {
			choices:["Water weed","Volcano","Giant Kelp","Spotted Kelp","Sierpinsky"],
			default:2,
			setups:[
				{density:0.8,values:[0.000,0.500,0.233,0.653,0.500,0.500,0.863,0.303]},
				{density:0.1,values:[0.000,0.433,0.000,0.753,0.763,1.000,0.733,0.903]},
				{density:0.1,values:[0.000, 0.323, 0.703, 0.793, 0.500, 1.000, 0.793, 0.000]},
				{density:0.6,values:[0.000, 0.550, 0.500, 0.500, 0.550,0.000, 0.500, 1.000]},
				{density:-1,values:[0.000,1,0,1,1,0,1,0]}
			]	
		},
		start_with_a_dot: {
		default: false
		}
}

