var config = {
    style: 'mapbox://styles/ajbajb/ckn50pk7y03rl17kfwqmiojge',
    accessToken: 'pk.eyJ1IjoiYWpiYWpiIiwiYSI6ImNrbXhud2pheDA4ZTkycG8xd28xd2JiaXYifQ.R0mZkMatq-jELHM8njiu6A',
    showMarkers: false,
    markerColor: '#57068c',
    theme: 'light',
    use3dTerrain: false,
    title: 'South Bronx',
    subtitle: '',
    // byline: 'Alex John Beck',
    footer: 'Sources<br> <a href="https://www1.nyc.gov/assets/doh/downloads/pdf/data/2015chp-bx2.pdf">https://www1.nyc.gov/assets/doh/downloads/pdf/data/2015chp-bx2.pdf</a><br><a href="https://data2go.nyc/">https://data2go.nyc/</a><br><a href="https://communityprofiles.planning.nyc.gov/bronx/2">https://communityprofiles.planning.nyc.gov/bronx/2</a><br>.',
    chapters: [
    // FULL CITY INTRO
     {
            id: '1',
            alignment: 'center',
            hidden: false,
            title: 'Why the South Bronx?',
            // image: '',
            description: "<hr>Large title + subtitle + text defining SB and why it’s our focus (i.e. paradox of hunger in a wealthy city)",
            location: {
            center: [-74.00490, 40.74060],
            zoom: 11.13,
            pitch: 60.00,
            bearing: -7.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                     {
                    layer: '',
                    opacity: 0,
                    duration: 5000
            }
            ],
            onChapterExit: [
            ]
        },
        {
            id: '2a',
            alignment: 'center',
            hidden: false,
            title: '2A: South Bronx',
            description: "Brief history of the forces (redlining) that have made it a hotspot of food insecurity",
            image: '',
            location: {
                center: [-73.91727, 40.80949],
                zoom: 14.00,
                pitch: 50.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2b',
            alignment: 'left',
            hidden: false,
            title: '2b',
            description: "Insert Old Photo",
            image: 'images/ipl.png',
            location: {
                center: [-73.91727, 40.80949],
                zoom: 14.00,
                pitch: 50.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2c',
            alignment: 'right',
            hidden: false,
            title: 'South Bronx 2c',
            description: "Chart Rise in population over the last 100 years",
            image: 'images/gpl.png',
            location: {
                center: [-73.91727, 40.80949],
                zoom: 14.00,
                pitch: 50.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2c',
            alignment: 'lefrightt',
            hidden: false,
            title: 'South Bronx 2d',
            description: "Chart Population by ethnicity",
            image: 'images/gpl.png',
            location: {
                center: [-73.91727, 40.80949],
                zoom: 14.00,
                pitch: 50.00,
                bearing: -0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: '3a',
            alignment: 'left',
            hidden: false,
            title: 'Poverty Measure',
            description: "'Spike' map showing areas of highest poverty / pull back on NYC + South Bronx: one of the poorest areas in NYC",
            image: '',
            location: {
                center: [-73.93664, 40.71378],
                zoom: 10.95,
                pitch: 45.50,
                bearing: -8.00    
                
            },
            // mapAnimation: 'flyTo',
            // rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
                        {
            id: '3b',
            alignment: 'right',
            hidden: false,
            title: '3b data',
            description: "chart showing poverty measure vs income level",
            image: 'images/gpl.png',
            location: {},
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '3c',
            alignment: 'left',
            hidden: false,
            title: '3c Data',
            description: "Chart showing poverty measure vs <strong>rent burder</strong>",
            image: 'images/gpl.png',
            location: {},
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '3d',
            alignment: 'left',
            hidden: false,
            title: '3d Data',
            description: "unemployment rate?",
            image: 'images/gpl.png',
            location: {},
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '4a',
            alignment: 'right',
            hidden: false,
            title: '4a Nutrition-Related Chronic Diseases',
            description: "South Bronx: one the areas most affected by nutrition related diseases rate?",
            image: '',
            location: {
                center: [-73.92343, 40.81158],
                zoom: 14.91,
                pitch: 49.50,
                bearing: 61.60
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '4b',
            alignment: 'left',
            hidden: false,
            title: '4b Data',
            description: "Chart showing increase/decrease of obesity, diabetes",
            image: 'images/gpl.png',
            location: {
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '4c',
            alignment: 'right',
            hidden: false,
            title: '4c Data',
            description: "Chart showing increase/decrease of diseases vs race/ethnicity",
            image: 'images/gpl.png',
            location: {
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '4d',
            alignment: 'right',
            hidden: false,
            title: '4d Data',
            description: "Chart showing increase.decrease of diseases vs age",
            image: 'images/gpl.png',
            location: {
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '5',
            alignment: 'left',
            hidden: true,
            title: '5 / Hunts Point Distribution Center / Hunger & Abundance',
            description: "The irony of having the largest food distribution in the world and still struggle with hunger. <br>Charts comparing HP numbers and scarcity in SB",
            image: 'images/gpl.png',
            location: {
                center: [-73.87745, 40.81156],
                zoom: 15.46,
                pitch: 60.00,
                bearing: -50.40
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '6',
            alignment: 'center',
            hidden: false,
            title: '6',
            description: "<h1>WHY? (Food insecurity/access explained in next cards)",
            image: '',
            location: {
                center: [-73.90204, 40.82057],
                zoom: 13.27,
                pitch: 57.50,
                bearing: -20.00
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '7a',
            alignment: 'left',
            hidden: false,
            title: '7a / Food Desert',
            description: "Low access to retail food stores",
            image: 'images/ipl.png',
            location: {
                center: [-73.90204, 40.82057],
                zoom: 13.27,
                pitch: 57.50,
                bearing: -20.00
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },    {
            id: '7b',
            alignment: 'left',
            hidden: false,
            title: '7b Data',
            description: "chart showing ratio of bodegas to supermarkets",
            image: 'images/gpl.png',
            location: {
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },    
        {
            id: '8',
            alignment: 'right',
            hidden: false,
            title: '8 Food Insecurity',
            description: "Fast food restaurants (McDonalds et al). High access to unhealthy food sources / pulled-back map showing unhealthy options",
            image: '',
            location: {
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '9a',
            alignment: 'center',
            hidden: false,
            title: '9a Food Access',
            description: "What kind of food they can find in 7 minutes, maybe using animated footsteps? Text explaining healthy food options, or lack thereof, within 7 minutes walking",
            image: '',
            location: {
                center: [-73.91638, 40.81291],
                zoom: 13.71,
                pitch: 0.00,
                bearing: -67.20
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '9Aanimation',
            alignment: 'center',
            hidden: false,
            title: '9a Food Access Animation',
            description: "<h1>animated footsteps?</h1>",
            image: '',
            location: {
                center: [-73.91638, 40.81291],
                zoom: 13.71,
                pitch: 0.00,
                bearing: -67.20
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '9b',
            alignment: 'left',
            hidden: false,
            title: '9b Food Access',
            description: "Infographic of Fruits/Vegetables Consumption per Day + Sugared drinks consumption",
            image: 'images/gpl.png',
            location: {
                center: [-73.91638, 40.81291],
                zoom: 13.71,
                pitch: 0.00,
                bearing: -67.20
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '10',
            alignment: 'center',
            hidden: false,
            title: '10 Physical Activity in the Past 30 Days',
            description: "Text about the exercise habits of SB",
            image: 'images/ipl.png',
            location: {
                center: [-73.91638, 40.81291],
                zoom: 13.71,
                pitch: 0.00,
                bearing: -67.20
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '11',
            alignment: 'center',
            hidden: false,
            title: '',
            description: "<h1> SO WHAT? <br>(Government relief and community solutions explained in next cards)</h1>",
            image: '',
            location: {
                center: [-73.91638, 40.81291],
                zoom: 13.71,
                pitch: 0.00,
                bearing: -67.20
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '12',
            alignment: 'right',
            hidden: false,
            title: '',
            description: "12 / Food Insecurity Relief / Short bio explaining work at food bank",
            image: 'images/ipl.png',
            location: {
                center: [-73.88698, 40.81715],
                zoom: 17.71,
                pitch: 60.00,
                bearing: 103.20
                },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'foodbanks',
                    opacity: 1,
                    duration: 400
                }
                    ],
                onChapterExit: [{
                    layer: 'foodbanks',
                    opacity: 0,
                    duration: 400
                }
                    ]
        },
        {
            id: '13a',
            alignment: 'left',
            hidden: false,
            title: '13a / Schools',
            description: "Free School Meals	Text explaining the various programs",
            image: '',
            location: {
                center: [-73.90238, 40.81786],
                zoom: 17.05,
                pitch: 45.00,
                bearing: -40.00
                },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                    ],
                onChapterExit: [
                    
                    ]
        },
        {
            id: '13b',
            alignment: 'left',
            hidden: false,
            title: '13b / Schools',
            description: "Data viz: % children who depend on school meal programs, maybe over time (dynamic)",
            image: 'images/gpl.png',
            location: {
                center: [-73.90238, 40.81786],
                zoom: 17.05,
                pitch: 45.00,
                bearing: -40.00
                },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                    ],
                onChapterExit: [
                    
                    ]
        },
        {
            id: '14a',
            alignment: 'right',
            hidden: false,
            title: '14a "Spike" map of areas where SNAP is used most',
            description: "SNAP	Define the term",
            image: '',
            location: {
                center: [-73.92025, 40.81852],
                zoom: 13.67,
                pitch: 57.00,
                bearing: 33.60
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '14b',
            alignment: 'right',
            hidden: false,
            title: '14b ',
            description: "SNAP / Data viz: Up/down trends in various neighborhoods",
            image: 'images/gpl.png',
            location: {
                center: [-73.92025, 40.81852],
                zoom: 13.67,
                pitch: 57.00,
                bearing: 33.60
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '15',
            alignment: 'left',
            hidden: false,
            title: '15 FRESH ZONING',
            description: "Define the term",
            image: '',
            location: {
                center: [-73.91638, 40.81291],
                zoom: 13.71,
                pitch: 0.00,
                bearing: -67.20
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '16',
            alignment: 'right',
            hidden: false,
            title: '16 Brook Park Youth Farm + Farmers Markets',
            description: "Healthy alternatives	Text about organic and community farming",
            image: 'images/ipl.png',
            location: {
                center: [-73.91638, 40.81291],
                zoom: 13.71,
                pitch: 0.00,
                bearing: -67.20
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Outro',
            alignment: 'center',
            hidden: false,
            title: 'Outro',
            description: "<h1> End of the Story",
            image: 'images/ipl.png',
            location: {
                center: [-73.91727, 40.80949],
                zoom: 14.00,
                pitch: 50.00,
                bearing: -0.00,
                curve: 2
            
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },


    ]
};
