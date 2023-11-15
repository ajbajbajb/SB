var config = {
    style: 'mapbox://styles/ajbajb/cko0c4xsp5fif18o4c74jxlkx/draft',
    accessToken: 'pk.eyJ1IjoiYWpiYWpiIiwiYSI6ImNrbXhud2pheDA4ZTkycG8xd28xd2JiaXYifQ.R0mZkMatq-jELHM8njiu6A',
    showMarkers: false,
    markerColor: '#57068c',
    theme: 'nyu_darker',
    use3dTerrain: false,
    herovideo: '<div id="heroimage"><video poster="PATH-TO-STILL-IMAGE" autoplay="autoplay" loop="loop" controls="nocontrols" width="100%" height="auto"><source src="https://waqas-space.nyc3.cdn.digitaloceanspaces.com/bronx_food_dist_vid.mp4" type="video/mp4" autoplay="autoplay"></video></div>',
    title: 'One Million Hungry _ v.5.0 / May 19th AM',
    subtitle: '1 million people face hunger in one of the wealthiest cities in the world.', 
    byline: 'To explain why this happens, we can look at just a small area...',
    footer: '',
    chapters: [
        // FULL CITY INTRO
        {
            id: 'layercloser',
            alignment: 'left',
            hidden: true,
            location: {
                center: [-74.00490, 40.74060],
                zoom: 11.12,
                pitch: 60.00,
                bearing: -7.20
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [{
                    layer: 'foodInsecure',
                    opacity: 0,
                },
                {
                    layer: 'satl',
                    opacity: 0
                },
                {
                    layer: 'borocd',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: '3b',
            alignment: 'left',
            hidden: false,
            title: 'To begin, this is a map of <span class="red">food insecurity </span>in New York City.',
            description: '',
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
            onChapterEnter: [{
                    layer: 'chrFoodInsecure',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'borocd',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: '3c',
            alignment: 'left',
            hidden: false,
            title: 'According to the U.S. Department of Agriculture (USDA), a household lives in food insecurity when one or more members lack access to enough food for an active, healthy life.',
            description: '',
            image: '',
            // location: {

            // //     },
            // // mapAnimation: '',
            // // // rotateAnimation: true,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: []
        },
        {
            id: '3d',
            alignment: 'left',
            hidden: false,
            title: "In New York City, 12.9% of residents live in a state of food insecurity. That's 1.5% higher than the national average.",
            description: '',
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
            id: '3e',
            alignment: 'left',
            hidden: false,
            title: 'How is this possible in a city with the second highest GDP in the world? ',
            description: '',
            image: '',
            location: {
                center: [-74.00490, 40.74060],
                zoom: 11.12,
                pitch: 60.00,
                bearing: -7.20
                },
            // mapAnimation: 'flyTo',
            // rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4a',
            alignment: 'center',
            hidden: false,
            title: "Now let's look at the southern tip of the Bronx, a loosely defined area commonly referred to as the South Bronx.",
            description: "",
            image: '',
            location: {},
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'borocd',
                    opacity: 1

                },
                {}
            ],
            onChapterExit: []
        },
        {
            id: 'sbmapmovetobronx',
            alignment: 'center',
            hidden: true,
            title: "",
            description: "",
            image: '',
            location: {
                // south bronx pulled back
                center: [-73.89933, 40.80891],
                zoom: 13.10,
                pitch: 33.50,
                bearing: 16.10,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{

                },
                {}
            ],
            onChapterExit: []
        },
        {
            id: '4b',
            alignment: 'right',
            hidden: false,
            title: 'The South Bronx is located directly across the Harlem River from the borough of Manhattan.',
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
            onChapterExit: [{
                layer: 'chrFoodInsecure',
                opacity: 1,
                duration: 1000
            }]
        },
        {
            id: '4c',
            alignment: 'right',
            hidden: false,
            title: "In this story, we'll focus on community districts 1 and 2 of the South Bronx, an area where 140,000 people reside.",
            description: "",
            image: '',
            location: {},
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'sboutline',
                opacity: 1
            }],
            onChapterExit: []
        },
        {
            id: '5a',
            alignment: 'right',
            hidden: false,
            title: "These two South Bronx districts are among the most <span class='red'>food insecure</span> areas in the city.",
            description: "",
            image: '',
            location: {

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [{
                    layer: 'chrFoodInsecure',
                    opacity: 0
                },
                {
                    layer: 'borocd',
                    opacity: 0
                }
            ]
        },
        {
            id: '5b',
            alignment: 'right',
            hidden: false,
            title: "One-quarter of residents here do not consume enough nutritious food to live a healthy life.",
            description: "Source: Feeding America, 2018",
            image: '',
            location: {},
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'sboutline',
                    opacity: 0
                },

                {
                    layer: 'foodInsecSymb',
                    opacity: 0.85
                },
                {
                    layer: 'fi_t',
                    opacity: 1
                },
                {
                    layer: 'satl',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: '5bb',
            alignment: 'right',
            hidden: false,
            title: "That's twice the city average and three times more than the Upper East Side, an affluent neighborhood just blocks away in Manhattan.",
            description: "",
            image: '',
            location: {
                // above ues
                center: [-73.93499, 40.80270],
                zoom: 13.06,
                pitch: 56.50,
                bearing: 52.80,
                speed: 0.3,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'snapSymbols',
                opacity: 0,
            },
            {
                layer: 'snap_t',
                opacity: 0
            }
            ],
            onChapterExit: [{
                    layer: 'foodInsecSymb',
                    opacity: 0
                },
                {
                    layer: 'fi_t',
                    opacity: 0
                }
            ]
        },
        {
            id: '5c',
            alignment: 'right',
            hidden: false,
            title: "Roughly half of South Bronxites rely on <span class='yellow'>SNAP</span>, formerly known as food stamps, to get the sustenance they need.",
            description: "% of Households Using support from the Supplemental Nutrition Assistance Program",
            image: '',
            location: {},
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'foodInsecSymb',
                    opacity: 0
                },
                {
                    layer: 'fi_t',
                    opacity: 0
                },
                {
                    layer: 'snapSymbols',
                    opacity: 0.85
                },
                {
                    layer: 'snap_t',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'SnapHide',
            alignment: 'right',
            hidden: true,
            title: '',
            description: "",
            image: '',
            location: {},
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [{
                    layer: 'snapSymbols',
                    opacity: 0
                },
                {
                    layer: 'snap_t',
                    opacity: 0
                },
                {
                    layer: 'foodInsecSymb',
                    opacity: 0
                }
            ]
        },
        {
            id: '6a',
            alignment: 'left',
            hidden: false,
            title: 'Paradoxically, the South Bronx is also home to the largest food distribution center in the world, Hunts Point Cooperative Market.',
            description: "",
            image: '',
            location: {
                center: [-73.87745, 40.81156],
                zoom: 15.46,
                pitch: 60.00,
                bearing: -50.40,
                speed: 0.3,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'satl',
                    opacity: 1,
                    speed: 0.3
                },
                {
                    layer: 'blackbg',
                    opacity: 0
                },
                {
                    layer: 'foodInsecure',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: '6b',
            alignment: 'left',
            hidden: false,
            title: "Spanning 1 million square feet, Hunts Point Cooperative Market provides produce and meat for 23,000 restaurants in New York City.",
            description: "© Adam Kuban",
            image: 'images/hunts-point-market-meat.jpg',
            location: {},
            callback: '',
            onChapterEnter: [{
                layer: 'blackbg',
                opacity: 0
            }],
            onChapterExit: [

                {
                    layer: 'blackbg',
                    opacity: 0
                }
            ]
        },
        {
            id: '6c',
            alignment: 'left',
            hidden: false,
            title: "Every year, more than 210 million packages of produce pass through the market, sourced from 49 states and 55 countries before being distributed across the city.",
            description: "",
            image: 'images/truck-at-the-loading-dock-hunts-point-market-the-bronx-new-york-city.jpg',
            location: {},
            callback: '',
            onChapterEnter: [{
                layer: 'blackbg',
                opacity: 0
            }],
            onChapterExit: []
        },
        {
            id: '6d',
            alignment: 'left',
            hidden: false,
            title: "Still, their South Bronx neighbors don't have enough to eat.",
            description: "",
            image: '',
            location: {},
            callback: '',
            onChapterEnter: [{
                layer: 'blackbg',
                opacity: 0
            }],
            onChapterExit: [{
                    layer: 'satl',
                    opacity: 0
                },
                {
                    layer: 'blackbg',
                    opacity: 0
                },
                {
                    layer: 'sboutline',
                    opacity: 0
                }
            ]
        },
        {
            id: 'whyis',
            alignment: 'center',
            hidden: false,
            title: 'Why is this happening?',
            description: "",
            image: '',
            location: {},
            callback: '',
            onChapterEnter: [{
                layer: 'blackbg',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'satl',
                opacity: 0
            }]

        },
        {
            id: 'whyis',
            alignment: 'center',
            hidden: false,
            title: "Let's look back.",
            description: "",
            image: '',
            location: {},
            callback: '',
            onChapterEnter: [{
                layer: 'blackbg',
                opacity: 1
            }],
            onChapterExit: []

        },
        {
            id: '8a',
            alignment: 'chunk',
            hidden: false,
            title: 'Historically, at the start of the 20th century, the South Bronx was a middle-class residential area that attracted recent German, Irish, Italian and Jewish immigrants wanting to flee a crowded Manhattan.',
            description: "",
            image: '',
            location: {
                // cross bronx far away
                center: [-73.85850, 40.82942],
                zoom: 12.84,
                pitch: 1.50,
                bearing: -9.79
            },
            callback: '',
            onChapterEnter: [{}],
            onChapterExit: []
        },
        {
            id: '8b',
            alignment: 'chunk',
            hidden: false,
            title: 'Its population was predominantly white until the middle of the century, when the city began building public housing developments for those displaced by slum clearing in Manhattan, mostly African-Americans and Puerto Ricans.',
            description: "",
            image: '',
            location: {},
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8c',
            alignment: 'chunk',
            hidden: false,
            title: '',
            description: "GRAPH: Changes in the Bronx population dynamics in the last 100 years Dataset link",
            chart: '<div class="chart" id="whiteflight"></div>',
            image: '',
            location: {},
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8d',
            alignment: 'chunk',
            hidden: false,
            title: 'As a result, middle-class residents started moving out, increasing vacancy rates and decreasing property values.',
            description: "",
            image: '',
            location: {},
            callback: '',
            onChapterEnter: [
                {
                    layer: 'cbe',
                    opacity: 0,
                    speed: 0.3
                }
            ],
            onChapterExit: [{
                layer: 'blackbg',
                opacity: 0
            }]
        },
        {
            id: '8e',
            alignment: 'right',
            hidden: false,
            title: 'At the same time, as part of urban planner Robert Moses’ city renewal project, the Cross Bronx Expressway — the first highway built through a crowded urban environment in the U.S. — cut the borough in two.',
            description: "",
            image: '',
            location: {
                
                center: [-73.85662, 40.83212],
                zoom: 13.11,
                pitch: 0.00,
                bearing: 11.90,
                speed: 0.3
                
            },
            callback: '',
            onChapterEnter: [{
                layer: 'cbe',
                opacity: 0.9,
                speed: 0.3
            }],
            onChapterExit: []
        },
        {
            id: '8f',
            alignment: 'left',
            hidden: false,
            title: 'This had the unintended consequence of aggravating poverty and crime rates, which in turn led to a wave of landlords setting fire to their buildings to collect insurance money.',
            description: "",
            image: '',
            location: {},
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8g',
            alignment: 'left',
            hidden: false,
            title: 'The result was runaway urban decay.',
            description: "© Camilo J. Vergara/Library of Congress",
            image: 'images/south-bronx-broken-car-1977.jpg',
            location: {},
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'cbe',
                    opacity: 0
                }
            ]
        },
        // {    
        //     id: 'TEST',
        //     alignment: 'chunk',
        //     hidden: false,
        //     title: '',
        //     description: "<object style='width: 100%' data='images/test.svg' type='image/svg+xml'></object>",
        //     image: '',
        //     location: {
        //     },
        //     callback: '',
        //     onChapterEnter: [
        //     ],
        //     onChapterExit: [
        //     ]
        // },

        {
            id: 'transition',
            alignment: 'right',
            hidden: true,
            title: '<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/544790752?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="cross-bronx-expressway.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
            description: "",
            image: '',
            location: {
                center: [-73.91727, 40.80949],
                zoom: 14.00,
                pitch: 50.00,
                bearing: -0.00,
                speed: 0.3,
                curve: 1
            },
            callback: '',
            onChapterEnter: [{
                    layer: 'blackbg',
                    opacity: 0
                }

            ],
            onChapterExit: []
        }, {
            id: '9a',
            alignment: 'left',
            hidden: false,
            title: 'In the past two decades, the South Bronx has been undergoing significant urban revitalization, but its household income is still the lowest in the city.',
            description: "Graph: household income...",
            chart: '<div class="chart" id="medianHouseholdIncome"></div>',
            location: {
                center: [-73.91727, 40.80949],
                zoom: 14.00,
                pitch: 50.00,
                bearing: -0.00,
                speed: 0.3,
                curve: 1
            },
            callback: '',

            onChapterEnter: [{
                    layer: 'blackbg',
                    opacity: 0
                }, 
                {
                    layer: 'sboutline',
                    opacity: 0
                }

            ],
            onChapterExit: []
        },
        {
            id: '9b',
            alignment: 'left',
            hidden: false,
            title: 'Same with households living below the poverty line.',
            description: "Graph: Individuals in households with incomes below poverty threshold)",
            chart: '<div class="chart" id="poverty" style="width: 100%"></div>',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9c',
            alignment: 'center',
            hidden: false,
            title: 'And the American Human Development Index, a combined measure of health, income and education.',
            description: "",
            chart: '<div class="chart" id="hdiChart"></div>',
            location: {
                center: [-73.91727, 40.80949],
                zoom: 14.00,
                pitch: 50.00,
                bearing: -0.00,
                speed: 0.3,
                curve: 1,
             },
            onChapterEnter: [{

                },
                {
                    layer: 'blackbg',
                    opacity: 0
                }
            ]
        },
        {
            id: '9d',
            alignment: 'right',
            hidden: false,
            title: 'Diminishing incomes and extreme rent burden also mean less money to buy food.',
            description: "",
            location: {},
            onChapterEnter: [{
                    layer: 'unemploymentIncrease',
                    opacity: 0
                },
                {
                    layer: 'blackbg',
                    opacity: 0
                }
            ], 
            onChapterExit: [
                {
                layer: 'unemploymentIncrease',
                opacity: 0.88
                }
            ]
        },
        {
            id: '10a',
            alignment: 'center',
            hidden: false,
            title: 'Then came COVID-19, and everything got much, much worse.',
            description: "",
            image: '',
            location: {
                center: [-74.01758, 40.70067],
                zoom: 10.77,
                pitch: 27.50,
                bearing: -20.59,
                speed: 0.3,
                curve: 1
            },
            callback: '',
            onChapterEnter: [{
                layer: 'unemploymentIncrease',
                opacity: 0.88
            }],
            onChapterExit: []
        },
        {
            id: '10b',
            alignment: 'left',
            hidden: false,
            title: 'Unemployment escalated rapidly.',
            description: "",
            image: '',
            location: {
                // 5 boroughs
                center: [-74.01758, 40.70067],
                zoom: 10.77,
                pitch: 27.50,
                bearing: -20.59

            },
            callback: '',
            onChapterEnter: [{
                layer: 'unemploymentIncrease',
                opacity: 0.88
            },
            {
                layer: 'unemploymentnumbers',
                opacity: 0

            }],
            onChapterExit: []
        },
        {
            id: '10bb',
            alignment: 'left',
            hidden: false,
            title: '<span class="red">The Bronx</span> as a whole was the hardest hit area in the city.',
            description: "Unemployment March 2021 / NYC DOL",
            image: '',
            location: {
                // 5 boroughs
                center: [-74.01758, 40.70067],
                zoom: 10.77,
                pitch: 27.50,
                bearing: -20.59
            },
            callback: '',
            onChapterEnter: [{
                layer: 'unemploymentIncrease',
                opacity: 0.88,
                speed: 0.4
            },
            {
                layer: 'unemploymentnumbers',
                opacity: 1

            }],
            onChapterExit: []
        },
        {
            id: '10c',
            alignment: 'center',
            hidden: false,
            title: 'Also due to the pandemic, many emergency food providers like soup kitchens and food pantries closed, forcing participants to venture farther from their communities to find a provider.',
            description: "",
            chart: "<div class='chart' id='closedFoodProviders' width=100%></div>",
            location: {},
            callback: '',
            onChapterEnter: [{
                layer: 'unemploymentIncrease',
                opacity: 0
            },
            {
                layer: 'unemploymentnumbers',
                opacity: 0

            }],
            onChapterExit: []
        },
        {
            id: '11a',
            alignment: 'right',
            hidden: false,
            title: 'But even before the pandemic, those in the South Bronx had another problem: lack of access to affordable and nutritious food.',
            description: "",
            image: '',
            location: {
                // south bronx
                center: [-73.91727, 40.80949],
                zoom: 14.00,
                pitch: 50.00,
                bearing: -0.00,
                speed: 0.6,
                curve: 1
            },
            callback: '',
            onChapterEnter: [{
                layer: 'unemploymentIncrease',
                opacity: 0
            }],
            onChapterExit: []
        },
        {
            id: '11b',
            alignment: 'right',
            hidden: false,
            title: 'The South Bronx has one of the highest bodega-to-supermarket ratios in New York City. <br><br>That means they have many more small corner stores than grocery stores, and thus limited options to buy fresh produce.',
            description: "",
            image: '',
            location: {

            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11c',
            alignment: 'right',
            hidden: false,
            title: 'In other words, this is how the ratio looks like when we compare the South Bronx with the Upper East Side:',
            description: "Comparative Graph / SO Bronx x UES",
            image: 'images/gpl.png',
            location: {
                // above uws, to bronx
                center: [-73.94366, 40.80132],
                zoom: 13.36,
                pitch: 59.50,
                bearing: 71.20,
                speed: 0.5
            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // {
        //     id: '11d',
        //     alignment: 'right',
        //     hidden: false,
        //     title: 'And there are a lot of fast food restaurants in the South Bronx too.',
        //     description: "fast food chains dotted on map",
        //     image: '',
        //     location: {
        //         // south bronx
        //         center: [-73.91727, 40.80949],
        //         zoom: 14.00,
        //         pitch: 50.00,
        //         bearing: -0.00,
        //         speed: 0.6,
        //         curve: 1
        //     },
        //     callback: '',
        //     onChapterEnter: [{
        //         layer: 'obesity',
        //         opacity: 0

        //     },
        //         {
        //             layer: 'diabetes',
        //             opacity: 0
        //         }],
        //     onChapterExit: []
        // },
        {
            id: '12a',
            alignment: 'left',
            hidden: false,
            title: 'In short, lacking money and nutritious food outlets, many South Bronx residents turn to unhealthy alternatives.',
            description: "",
            image: '',
            location: {
                // nyc pull-back
                center: [-74.00490, 40.74060],
                zoom: 9.70,
                pitch: 60.00,
                bearing: -7.20,
                speed: 0.3,
                curve: 1
            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: [{
                layer: 'obesity',
                opacity: 0.8,
                speed: 0.4

            }]
        },
        {
            id: '12aa',
            alignment: 'left',
            hidden: false,
            title: 'Hence the contradiction: despite being the most food-insecure area in the city, the South Bronx also claims its highest obesity and diabetes rates.',
            description: "",
            image: '',
            location: {},
            callback: '',
            onChapterEnter: [],
            onChapterExit: [{
                layer: 'obesity',
                opacity: 0.8,
                speed: 0.4

            }]
        },
        {
            id: '12b',
            alignment: 'left',
            hidden: false,
            title: "42% of South Bronx residents — twice the city's average — are <span class='orange'>obese</span>, which means increased health risks.",
            description: "bar map showing obesity rates",
            image: '',
            location: {},
            callback: '',
            onChapterEnter: [{
                layer: 'obesity',
                opacity: 0.8

            }],
            onChapterExit: [{
                    layer: 'obesity',
                    opacity: 0
                },
                {
                    layer: 'diabetes',
                    opacity: 0.8
                }
            ]
        },
        {
            id: '12c',
            alignment: 'left',
            hidden: false,
            title: "And 20% of South Bronx adults have <span class='pink'>diabetes</span>.",
            description: "",
            image: '',
            location: {
                // nyc pull-back
                center: [-74.00490, 40.74060],
                zoom: 9.70,
                pitch: 60.00,
                bearing: -7.20,
            },
            callback: '',
            onChapterEnter: [
                {
                    layer: 'obesity',
                    opacity: 0
                },        
            {
                layer: 'diabetes',
                opacity: 0.8
            }],
            onChapterExit: [{
                layer: 'fiobbar',
                opacity: 1
            },
                {
                    layer: 'obesity',
                    opacity: 0
                }, {
                    layer: 'diabetes', 
                    opacity: 0
                }],
        },
        {
            id: '12cc',
            alignment: 'left',
            hidden: false,
            title: "That's four times what we see in the wealthiest neighborhoods.",
            description: "",
            image: '',
            location: {
                center: [-73.95837, 40.69755],
                zoom: 10.22,
                pitch: 60.00,
                bearing: 72.80,
                speed: 0.3,
                curve: 1
            },
            callback: '',
            onChapterEnter: [{
                layer: 'diabetes',
                opacity: 1
            }],
            onChapterExit: [{
                    layer: 'diabetes',
                    opacity: 0
                },
                {
                    layer: 'fiobbar',
                    opacity: 1
                }
            ],
        },
        {
            id: '12d',
            alignment: 'left',
            hidden: false,
            title: "It's a pattern we can see across New York City:",
            description: "",
            image: '',
            location: {},
            callback: '',
            onChapterEnter: [{
                layer: 'fiobbar',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'diabetes',
                opacity: 0
            }]
        },
        {
            id: '12d',
            alignment: 'left',
            hidden: false,
            title: "The more food-insecure an area is (shown in height on the map), the more overweight its residents are (shown in red on the map)",
            description: "",
            image: '',
            location: {
                center: [-73.99067, 40.66950],
                zoom: 10.75,
                pitch: 60.00,
                bearing: 21.60,
                speed: 0.3,
                curve: 1
            },
            callback: '',
            onChapterEnter: [{
                    layer: 'fiobbar',
                    opacity: 1
                }

                // supermarkets
            ],
            onChapterExit: []
        },
        {
            id: '12e',
            alignment: 'center',
            hidden: false,
            title: "What's being done to reverse negative eating trends in the Bronx? ",
            description: "",
            image: '',
            location: {},
            callback: '',
            onChapterEnter: [{
                    layer: 'obesity',
                    opacity: 0,
                    speed: 0.4
                },
                {
                    layer: 'diabetes',
                    opacity: 0,
                    speed: 0.4
                },
            ],
            onChapterExit: [
                {
                    layer: 'obesity',
                    opacity: 0
                },
                {
                    layer: 'diabetes',
                    opacity: 0
                },
                {
                    layer: 'fiobbar',
                    opacity: 0,
                    speed: 0.4
                }
            ]
        },

        {
            id: '13a',
            alignment: 'right',
            hidden: false,
            title: "Let's take a look at the South Bronx again and explore how food insecurity is being addressed amid the pandemic. ",
            description: "dot map w/ grocery stores, pantries, soup kitchens etc",
            image: '',
            location: {
                // south bronx pulled back
                center: [-73.88960, 40.82038],
                zoom: 13.00,
                pitch: 40.50,
                bearing: -3.11,
                speed: 0.2,
                curve: 1
            
            },
            callback: '',
            onChapterEnter: [{
                layer: 'greenmarkets_sym',
                opacity: 0.9,
                speed: 0.3
            },
            {
                layer: 'schools_sym',
                opacity: 0.9
            },
            {
                layer: 'grocerystores_sym',
                opacity: 0.9
            },
            {
                layer: 'foodpantry_sym',
                opacity: 0.9
            }
                // supermarket to bodega ratio
            ],
            onChapterExit: []
        },
        {
            id: '13b',
            alignment: 'center',
            hidden: false,
            title: "One of those ways is SNAP. The federal program provides 1.8 million low-income families in New York City with EBT cards that allow them to buy food in grocery stores and farmer's markets. ",
            description: "",
            image: '',
            location: {},
            callback: '',
            onChapterEnter: [
                {
                layer: 'greenmarkets_sym',
                opacity: 0.9
            },
            {
                layer: 'schools_sym',
                opacity: 0.9
            },
            {
                layer: 'grocerystores_sym',
                opacity: 0.9
            },
            {
                layer: 'foodpantry_sym',
                opacity: 0.9
            }
            ],
            onChapterExit: []
        },
        {
            id: '13c',
            alignment: 'right',
            hidden: false,
            title: "SNAP has traditionally served as a critical anti-poverty tool. However, it doesn't prevent people from buying innutritious food or from becoming dependent on the emergency assistance. ",
            description: "highlight grocery stores & farmer's markets (places that accept SNAP)",
            image: '',
            location: {},
            callback: '',
            onChapterEnter: [        
                {
                    layer: 'greenmarkets_sym',
                    opacity: 0.9
                },
                {
                    layer: 'schools_sym',
                    opacity: 0
                },
                {
                    layer: 'grocerystores_sym',
                    opacity: 0.9
                },
                {
                    layer: 'foodpantry_sym',
                    opacity: 0
                }
                // fast food chains
            ],
            onChapterExit: []
        },
        {
            id: '13d',
            alignment: 'right',
            hidden: false,
            title: "Other emergency food measures have also been important in alleviating food insecurity. These have typically been food pantries and soup kitchens opened by charitable organizations to distribute pantry items and prepared meals, respectively, to those in need. ",
            description: "",
            image: '',
            location: {
                center: [-73.88960, 40.82038],
                zoom: 13.00,
                pitch: 40.50,
                bearing: -3.11
            },
            callback: '',
            onChapterEnter: [
                {        
                    layer: 'greenmarkets_sym',
                    opacity: 0
                },
                {
                    layer: 'schools_sym',
                    opacity: 0
                },
                {
                    layer: 'grocerystores_sym',
                    opacity: 0
                },
                {
                    layer: 'foodpantry_sym',
                    opacity: 0.9
                }
            ],
            onChapterExit: []
        },
        {
            id: '13e',
            alignment: 'right',
            hidden: false,
            title: "There are over 50 such places in the South Bronx. While many of them had to shut down during the pandemic, those left standing have been crucial in fighting the hunger epidemic.",
            description: "Highlight food pantries & soup kitchens",
            image: '',
            location: {

            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13ee',
            alignment: 'right',
            hidden: false,
            title: "As an example, GetFoodNYC, a city-run program, has distributed over 200 million meals since March 2020.",
            description: "",
            image: '',
            location: {

            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13f',
            alignment: 'right',
            hidden: false,
            title: "Schoolchildren are covered too — or at least they were. Before the pandemic, all public schools in the city offered breakfast and lunch to their students. ",
            description: "",
            image: '',
            location: {

            },
            callback: '',
            onChapterEnter: [
                {        
                layer: 'greenmarkets_sym',
                opacity: 0
            },
            {
                layer: 'schools_sym',
                opacity: 0.9
            },
            {
                layer: 'grocerystores_sym',
                opacity: 0
            },
            {
                layer: 'foodpantry_sym',
                opacity: 0
            }
            ],
            onChapterExit: []
        },
        {
            id: '13g',
            alignment: 'right',
            hidden: false,
            title: "Now that they reopened, students will have their schools meals again. And, hopefully, their school gardens. Since 2010, the Grow to Learn NYC initiative has been fostering the creation of sustainable food gardens in every New York City public school.",
            description: "Highlight Schools",
            image: '',
            location: {

            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'greenmarkets_sym',
                    opacity: 0
                },
                {
                    layer: 'schools_sym',
                    opacity: 0
                },
                {
                    layer: 'grocerystores_sym',
                    opacity: 0
                },
                {
                    layer: 'foodpantry_sym',
                    opacity: 0
                }
            ]
        },
        {
            id: 'video',
            alignment: 'video',
            hidden: false,
            title: '<video poster="PATH-TO-STILL-IMAGE" autoplay="autoplay" loop="loop" controls="nocontrols" width="100%" height="auto"><source src="https://waqas-space.nyc3.cdn.digitaloceanspaces.com/bronx_food_dist_vid.mp4" type="video/mp4" autoplay="autoplay"></video>',
            description: "",
            image: '',
            location: {

            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13h',
            alignment: 'right',
            hidden: false,
            title: "That takes us to the community gardens that dot the South Bronx landscape, among other neighborhoods.",
            description: "",
            image: '',
            location: {

            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13i',
            alignment: 'right',
            hidden: false,
            title: "Instead of waiting for outside aid, the community itself is taking steps to grow its own produce, thus ensure its food sovereignty.",
            description: "",
            image: '',
            location: {

            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13j',
            alignment: 'right',
            hidden: false,
            title: "If that seed of an idea could take root in the South Bronx, there may be hope for eliminating food insecurity.",
            description: "",
            image: '',
            location: {

            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '13k',
            alignment: 'center',
            hidden: false,
            title: 'Not just in the South Bronx, but in all of New York City.',
            description: "Highlight Community Gardens",
            image: '',
            location: {

            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



    ]
};