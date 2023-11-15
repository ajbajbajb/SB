var config = {
    style: 'mapbox://styles/ajbajb/cknqjygo902b418rujmj8mup7',
    accessToken: 'pk.eyJ1IjoiYWpiYWpiIiwiYSI6ImNrbXhud2pheDA4ZTkycG8xd28xd2JiaXYifQ.R0mZkMatq-jELHM8njiu6A',
    showMarkers: false,
    markerColor: '#57068c',
    theme: 'light',
    use3dTerrain: false,
    title: 'Looking At Hunger in the South Bronx',
    subtitle: '1 million people face hunger in one of the wealthiest cities in the world.',
    byline: 'To explain why this happens, we can look at just a small area...',
    footer: 'Sources<br> <a href="https://www1.nyc.gov/assets/doh/downloads/pdf/data/2015chp-bx2.pdf">https://www1.nyc.gov/assets/doh/downloads/pdf/data/2015chp-bx2.pdf</a><br><a href="https://data2go.nyc/">https://data2go.nyc/</a><br><a href="https://communityprofiles.planning.nyc.gov/bronx/2">https://communityprofiles.planning.nyc.gov/bronx/2</a><br>.',
    chapters: [
    // FULL CITY INTRO
     {
            id: 'finyc1',
            alignment: 'left',
            hidden: false,
            title: 'This is New York City.',
            // image: '',
            description: "",
            location: {
            center: [-74.00490, 40.74060],
            zoom: 11.12,
            pitch: 60.00,
            bearing: -7.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                     {
                    layer: 'sat',
                    opacity: 0,
                    duration: 5000
            }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'finyc2',
            alignment: 'left',
            hidden: false,
            title: 'This is food-insecure New York City.',
            description:'(fade in datalayer)',
            image: '',
            location: {
                center: [-74.00490, 40.74060],
                zoom: 11.13,
                pitch: 60.00,
                bearing: -7.20
                },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'finyc3',
            alignment: 'left',
            hidden: false,
            title: '12.9 percent of New York City residents live in food insecurity...',
            description:'<hr>NYC with food insecurity layer	- Heatmap or choropleth',
            image: '',
            // location: {

            // //     },
            // // mapAnimation: '',
            // // // rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'finyc4',
            alignment: 'left',
            hidden: false,
            title: 'How is this possible in a city with the second highest GDP in the world? ',
            description:'',
            image: '',
            // location: {
            //     center: [-74.00490, 40.74060],
            //     zoom: 11.13,
            //     pitch: 60.00,
            //     bearing: -7.20
            //     },
            // mapAnimation: 'flyTo',
            // rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sb1',
            alignment: 'center',
            hidden: false,
            title: "Let's take a look at the South Bronx.",
            description: "",
            image: '',
            location: {
                center: [-73.91727, 40.80949],
                zoom: 14.00,
                pitch: 50.00,
                bearing: -0.00,
                speed: 0.6,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'sat',
                opacity: 1,
                duration: 400
            }
            ],
            onChapterExit: []
        },
        {
            id: 'sb2',
            alignment: 'right',
            hidden: false,
            title: '140,000 people live in the community districts 1 and 2... ',
            description: "",
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
            id: 'sbcomp1',
            alignment: 'right',
            hidden: false,
            title: 'People in South Bronx live in a worrying situation of food insecurity.',
            description: "Compare SB with a wealthy neighborhood in Manhattan putting charts on the map",
            image: 'images/uws_map.png',
            location: {
                center: [-73.94366, 40.80132],
                zoom: 13.36,
                pitch: 59.50,
                bearing: 71.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'sat',
                opacity: 0,
            }
            ],
            onChapterExit: []
        },
        {
            id: 'sbcomp2',
            alignment: 'right',
            hidden: false,
            title: '"South Bronx 26% -  Upper West Side 9%"	',
            description: "b. Chart: % of food insecure residents + (brief description of the data shown)",
            image: '',
            location: {
                center: [-73.94366, 40.80132],
                zoom: 13.36,
                pitch: 59.50,
                bearing: 71.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: []
        },
        {
            id: 'sbcomp3',
            alignment: 'right',
            hidden: false,
            title: 'South Bronx 29% - Upper West Side 2.5%',
            description: "c. Chart: % of households receveing SNAP benefit + (brief description of the data shown)",
            image: '',
            location: {
                center: [-73.94366, 40.80132],
                zoom: 13.36,
                pitch: 59.50,
                bearing: 71.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: []
        },
        {
            id: 'sbcomp4',
            alignment: 'right',
            hidden: false,
            title: 'South Bronx 18% Upper West Side 8%',
            description: "d. Chart: Consumption of fruits and vegetables + (brief description of the data shown)",
            image: '',
            location: {
                center: [-73.94366, 40.80132],
                zoom: 13.36,
                pitch: 59.50,
                bearing: 71.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: []
        },
                
        {
            id: 'HPa',
            alignment: 'center',
            hidden: false,
            title: 'Hunger vs Abundance',
            description: "Ironically, the South Bronx is also home to the largest food distribution center in the world: Hunts Point Produce Market.",
            image: '',
            location: {
                center: [-73.87745, 40.81156],
                zoom: 15.46,
                pitch: 60.00,
                bearing: -50.40
            },
            callback: '',
            onChapterEnter: [{
                layer: 'sat',
                opacity: 1,
            }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'HPb',
            alignment: 'left',
            hidden: false,
            title: '',
            description: "Hunts Point supplies 60 percent of the produce for New York City... (b. Text with info on Hunts Point)(with photo)",
            image: 'images/hpmarket.jpg',
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
            id: 'HPc',
            alignment: 'center',
            hidden: false,
            title: 'How Come?',
            description: "",
            image: '',
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
            id: 'whyA',
            alignment: 'center',
            hidden: false,
            title: 'Why:',
            description: "<hr>(Food insecurity/access explained in next cards) <br>Brief history of the forces (redlining) that have made it a hotspot of food insecurity",
            image: '',
            location: {
                center: [-73.91954, 40.81203],
                zoom: 13.96,
                pitch: 52.00,
                bearing: 52.80
            },
            callback: '',
            onChapterEnter: [{
                layer: 'sat',
                opacity: 0,
            }],
            onChapterExit: [
            ]
        },
        {
            id: 'whyB',
            alignment: 'right',
            hidden: false,
            title: 'Demographics',
            description: "Population as a contributing factor to poverty and hunger, a. Rise in population over the last 100 years, c. Population vs ethnicity",
            image: '',
            location: {
                center: [-73.91954, 40.81203],
                zoom: 13.96,
                pitch: 52.00,
                bearing: 52.80
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'whyC',
            alignment: 'right',
            hidden: false,
            title: 'Poverty Measure',
            description: "South Bronx: one of the poorest areas in NYC <br> a. Poverty Measure vs income level<br>b. Poverty Measure vs rent burden<br>c. Unemployment rate?",
            image: 'images/gpl.png',
            location: {
                center: [-73.91954, 40.81203],
                zoom: 13.96,
                pitch: 52.00,
                bearing: 52.80
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'whyD',
            alignment: 'right',
            hidden: false,
            title: 'Food Desert',
            description: "Low access to retail food stores 	Supermarkets in the area + Farmers markets + Bodegas<br>a. Photo<br>b. Chart Ratio bodegas to supermakets",
            image: 'images/ipl.png',
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
            id: 'whyE',
            alignment: 'right',
            hidden: false,
            title: 'Food Insecurity',
            description: "High access to unhealthy food sources, Fast food restaurants (McDonalds et al)<br>Data viz: ratio of healthy to unhealthy food (dynamic (maybe))",
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
            id: 'whyF',
            alignment: 'right',
            hidden: false,
            title: 'Food Access',
            description: "Text explaining healthy food options, or lack thereof, within 7 minutes walking	What kind of food they can find in 7 minutes, maybe using animated footsteps,<br> + Infographic of Fruits/Vegetables Consumption per Day + Sugared drinks consumption",
            image: 'images/gpl.png',
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
            id: 'whyG',
            alignment: 'right',
            hidden: false,
            title: 'Nutrition-Related Chronic Diseases',
            description: "South Bronx: one the areas most affected by nutrition related diseases <br>Choropleth (bivariate)<br>a. Obesity vs diabetes<br>b. Diseases vs ethnicity<br>c. Diseases vs age",
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
            id: 'whyH',
            alignment: 'right',
            hidden: false,
            title: 'Physical Activity in Past 30 Days',
            description: "Text about the exercise habits of SB	<br>Parks + bike paths",
            image: 'images/ipl.png',
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
            id: 'then',
            alignment: 'full',
            hidden: false,
            title: 'THEN?',
            description: "<hr> Government relief and community solutions",
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
            id: 'then',
            alignment: 'full',
            hidden: false,
            title: 'Name of person & food bank',
            description: "Short photo essay or video by Ralph to introduce this section",
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
            id: 'then2',
            alignment: 'left',
            hidden: false,
            title: 'Food Insecurity Relief',
            description: "Short bio explaining work at food bank<br>1. Food banks<br>2. Zoom to specific food bank (extrusion)",
            image: '',
            location: {
                center: [-73.88698, 40.81715],
                zoom: 17.71,
                pitch: 60.00,
                bearing: 103.20,
                speed: 0.6
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
            id: 'then3',
            alignment: 'left',
            hidden: false,
            title: 'Free School Meals',
            description: "Text explaining the various programs<br>School (k-12)<br>+Data viz: % children who depend on school meal programs, maybe over time (dynamic (maybe, and why?))",
            image: '',
            location: {
                center: [-73.90238, 40.81786],
                zoom: 17.05,
                pitch: 45.00,
                bearing: -40.00,
                speed: 0.6
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
            id: 'then4',
            alignment: 'left',
            hidden: false,
            title: 'SNAP',
            description: "SNAP	Define the term<br> + 'Spike' map of areas where SNAP is used most <br> + Data viz: Up/down trends in various neighborhoods",
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
            id: 'then5',
            alignment: 'left',
            hidden: false,
            title: 'FRESH ZONING',
            description: "Define the term <br> + Areas where FRESH program is available",
            image: '',
            location: {
                center: [-73.91638, 40.81291],
                zoom: 13.71,
                pitch: 0.00,
                bearing: -67.20,
                speed: 0.6
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'then6',
            alignment: 'left',
            hidden: false,
            title: "Healthy alternatives",
            description: "Text about organic and community farming<br>Brook Park Youth Farm + Farmers Markets",
            image: 'images/ipl.png',
            location: {
                center: [-73.91638, 40.81291],
                zoom: 13.71,
                pitch: 0.00,
                bearing: -67.20,
                speed: 0.6
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Outro',
            alignment: 'full',
            hidden: false,
            title: 'Outro',
            description: "<h1> End of the Story",
            // image: 'images/ipl.png',
            location: {
                center: [-73.91727, 40.80949],
                zoom: 14.00,
                pitch: 50.00,
                bearing: -0.00,
                curve: 2,
                speed: 0.6
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },


    ]
};
       