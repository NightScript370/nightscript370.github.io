const script = document.createElement('script')
script.setAttribute('src', 'https://unpkg.com/tsparticles@1.14.3/dist/tsparticles.slim.js');
document.querySelector('script').insertAdjacentElement('beforebegin', script);

const tsParticlesDiv = document.createElement('div')
tsParticlesDiv.setAttribute('id', 'tsparticles')
document.getElementsByClassName('bg')[0].insertAdjacentElement('beforebegin', tsParticlesDiv);

setTimeout(() => tsParticles.load("tsparticles", {
	"absorbers": [],
	"background": {},
	"backgroundMask": {
		"cover": {
			"color": {
				"value": "#fff"
			},
			"opacity": 1
		},
		"enable": false
	},
	"detectRetina": true,
	"emitters": [],
	"fpsLimit": 30,
	"infection": {
		"cure": false,
		"delay": 0,
		"enable": false,
		"infections": 0,
		"stages": []
	},
	"interactivity": {
		"detectsOn": "canvas",
		"events": {
			"onClick": {
				"enable": true,
				"mode": "push"
			},
			"onDiv": {
				"elementId": "",
				"enable": false,
				"mode": []
			},
			"onHover": {
				"enable": true,
				"mode": "repulse",
				"parallax": {
					"enable": false,
					"force": 60,
					"smooth": 10
				}
			},
			"resize": true
		},
		"modes": {
			"absorbers": [],
			"bubble": {
				"distance": 400,
				"duration": 2,
				"opacity": 0.8,
				"size": 40
			},
			"connect": {
				"distance": 80,
				"lineLinked": {
					"opacity": 0.5
				},
				"radius": 60
			},
			"emitters": [],
			"grab": {
				"distance": 400,
				"lineLinked": {
					"opacity": 1
				}
			},
			"push": {
				"quantity": 4
			},
			"remove": {
				"quantity": 2
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4,
				"speed": 1
			},
			"slow": {
				"factor": 3,
				"radius": 200
			}
		}
	},
	"particles": {
		"collisions": {
			"enable": false,
			"mode": "bounce"
		},
		"color": {
			"value": "#ffffff"
		},
		"lineLinked": {
			"blink": false,
			"color": {
				"value": "#ffffff"
			},
			"consent": false,
			"distance": 150,
			"enable": true,
			"opacity": 0.4,
			"shadow": {
				"blur": 5,
				"color": {
					"value": "white"
				},
				"enable": false
			},
			"width": 1
		},
		"move": {
			"attract": {
				"enable": false,
				"rotate": {
					"x": 600,
					"y": 1200
				}
			},
			"direction": "none",
			"enable": true,
			"noise": {
				"delay": {
					"random": {
						"enable": false,
						"minimumValue": 0
					},
					"value": 0
				},
				"enable": false,
				"factor": {
					"horizontal": {
						"value": 50,
						"offset": 0
					},
					"vertical": {
						"value": 10,
						"offset": 40000
					}
				}
			},
			"outMode": "out",
			"random": false,
			"speed": 2,
			"straight": false,
			"trail": {
				"enable": false,
				"length": 10,
				"fillColor": {
					"value": "#FFF"
				}
			},
			"vibrate": false
		},
		"number": {
			"density": {
				"enable": true,
				"area": 800,
				"factor": 1000
			},
			"limit": 0,
			"value": 80
		},
		"opacity": {
			"animation": {
				"enable": false,
				"minimumValue": 0.1,
				"speed": 1,
				"sync": false
			},
			"random": {
				"enable": false,
				"minimumValue": 1
			},
			"value": 0.5
		},
		"rotate": {
			"animation": {
				"enable": false,
				"speed": 0,
				"sync": false
			},
			"direction": "clockwise",
			"random": false,
			"value": 0
		},
		"shadow": {
			"blur": 0,
			"color": {
				"value": "#FFF"
			},
			"enable": false,
			"offset": {
				"x": 0,
				"y": 0
			}
		},
		"shape": {
			"options": {
				"character": {
					"fill": true,
					"close": true,
					"font": "Verdana",
					"style": "",
					"value": "*",
					"weight": "400"
				},
				"char": {
					"fill": true,
					"close": true,
					"font": "Verdana",
					"style": "",
					"value": "*",
					"weight": "400"
				},
				"image": {
					"fill": true,
					"close": true,
					"height": 100,
					"replaceColor": true,
					"src": "https://cdn.matteobruni.it/images/particles/github.svg",
					"width": 100
				},
				"images": {
					"fill": true,
					"close": true,
					"height": 100,
					"replaceColor": true,
					"src": "https://cdn.matteobruni.it/images/particles/github.svg",
					"width": 100
				},
				"polygon": {
					"fill": true,
					"close": true,
					"sides": 5
				},
				"star": {
					"fill": true,
					"close": true,
					"sides": 5
				}
			},
			"type": "circle"
		},
		"size": {
			"animation": {
				"destroy": "none",
				"enable": false,
				"minimumValue": 0.1,
				"speed": 40,
				"startValue": "max",
				"sync": false
			},
			"random": {
				"enable": true,
				"minimumValue": 1
			},
			"value": 5
		},
		"stroke": {
			"color": {
				"value": "#fff"
			},
			"width": 0,
			"opacity": 1
		},
		"twinkle": {
			"lines": {
				"enable": false,
				"frequency": 0.05,
				"opacity": 1
			},
			"particles": {
				"enable": false,
				"frequency": 0.05,
				"opacity": 1
			}
		}
	},
	"pauseOnBlur": true,
	"polygon": {
		"draw": {
			"enable": false,
			"stroke": {
				"color": {
					"value": "#fff"
				},
				"width": 0.5,
				"opacity": 1
			}
		},
		"enable": false,
		"inline": {
			"arrangement": "one-per-point"
		},
		"move": {
			"radius": 10,
			"type": "path"
		},
		"scale": 1,
		"type": "none",
		"url": ""
	}
}), 1000);