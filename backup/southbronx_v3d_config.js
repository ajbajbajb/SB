var config = {
    style: 'mapbox://styles/ajbajb/cko0c4xsp5fif18o4c74jxlkx/draft',
    accessToken: 'pk.eyJ1IjoiYWpiYWpiIiwiYSI6ImNrbXhud2pheDA4ZTkycG8xd28xd2JiaXYifQ.R0mZkMatq-jELHM8njiu6A',
    showMarkers: false,
    markerColor: '#57068c',
    theme: 'light',
    use3dTerrain: false,
    title: 'Looking At Hunger in the South Bronx _ v.3d',
    subtitle: '1 million people face hunger in one of the wealthiest cities in the world.',
    byline: 'To explain why this happens, we can look at just a small area...',
    footer: 'Sources<br> <a href="https://www1.nyc.gov/assets/doh/downloads/pdf/data/2015chp-bx2.pdf">https://www1.nyc.gov/assets/doh/downloads/pdf/data/2015chp-bx2.pdf</a><br><a href="https://data2go.nyc/">https://data2go.nyc/</a><br><a href="https://communityprofiles.planning.nyc.gov/bronx/2">https://communityprofiles.planning.nyc.gov/bronx/2</a><br>.',
    chapters: [
    // FULL CITY INTRO
     {
            id: '3a',
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
                    layer: 'foodInsecure',
                    opacity: 0,
            },
                { 
                    layer: 'satl',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: '3b',
            alignment: 'left',
            hidden: false,
            title: '...and this is food-insecure New York City.',
            description:'',
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
            onChapterEnter: [
                {
                    layer: 'chrFoodInsecure',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: []
        },
        {
            id: '3c',
            alignment: 'left',
            hidden: false,
            title: '12.9 percent of New York City residents live in a situation of food insecurity...',
            description:'(text explaining hunger in NYC)',
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
            id: '3e',
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
            id: '4a',
            alignment: 'center',
            hidden: false,
            title: "Let's take a look at the South Bronx.",
            description: "",
            image: '',
            location: {
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{

            },
                {
            }
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

            },
                {
            }
            ],
            onChapterExit: []
        },
        {
            id: '4b',
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
            onChapterExit: [
                {
                layer: 'chrFoodInsecure',
                opacity: 0,
                duration: 1000
                }]
        },
        {
            id: '5a',
            alignment: 'right',
            hidden: false,
            title: "One quarter of the people there are struggling with hunger - that's three times more than the Upper East Side.",
            description: "",
            image: '',
            location: {
                center: [-73.93499, 40.80270],
                zoom: 13.06,
                pitch: 56.50,
                bearing: 52.80,
                curve: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'foodInsecSymb',
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
            id: '5b',
            alignment: 'right',
            hidden: false,
            title: '',
            description: "And half of them have to rely on food stamps to have enough food to eat.",
            image: '',
            location: {
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'snapSymbols',
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
            location: {
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
      
            ],
            onChapterExit: [
                {
                    layer: 'snapSymbols',
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
            alignment: 'center',
            hidden: false,
            title: '',
            description: "Ironically, the South Bronx is also home to the largest food distribution center in the world: Hunts Point Produce Market.",
            image: '',
            location: {
                center: [-73.87745, 40.81156],
                zoom: 15.46,
                pitch: 60.00,
                bearing: -50.40,
                curve: 0.5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'satl',
                opacity: 1,
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
            onChapterExit: [
            ]
        },
        {
            id: '6b',
            alignment: 'left',
            hidden: false,
            title: '',
            description: "Hunts Point supplies 60 percent of the produce for New York City...",
            image: '',
            location: {
            },
            callback: '',
            onChapterEnter: [                
                {
                    layer: 'blackbg',
                    opacity: 0
                    }
            ],
            onChapterExit: [
                {
                    layer: 'satl',
                    opacity: 0
                },
                {
                    layer: 'blackbg',
                    opacity: 0
                    }
            ]
        },
        {
            id: '7a',
            alignment: 'center',
            hidden: false,
            title: 'How Come?',
            description: "",
            image: '',
            location: {
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: []
            
        },
        {
            id: '8a',
            alignment: 'chunk',
            hidden: false,
            title: 'a. Cross Bronx Expressway',
            description: "Robert Moses Destroys The Bronx",
            image: 'images/crossbronxexpressway.jpg',
            location: {
                center: [-73.83833, 40.82945],
                zoom: 15.11,
                pitch: 0.00,
                bearing: -8.00
                            },
            callback: '',
            onChapterEnter: [
                {
                }
            ],
            onChapterExit: [
            ]
        },

        {    
            id: '8b',
            alignment: 'chunk',
            hidden: false,
            title: 'b. The Bronx is burning:',
            description: "40% of buildings abandoned in 70s",
            image: 'images/bronxburning.jpg',
            location: {
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'expressway',
            alignment: '',
            hidden: true,
            title: '',
            description: "",
            image: '',
            location: {
                center: [-73.83833, 40.82945],
                zoom: 15.11,
                pitch: 0.00,
                bearing: -8.00
                            },
            callback: '',
            onChapterEnter: [
                {
                }
            ],
            onChapterExit: [
            ]
        },
        {    
            id: '8c',
            alignment: 'chunk',
            hidden: false,
            title: 'c. White Flight:',
            description: "<img src='images/test.svg'/><strong>Line graph</strong> showing the change in population dynamics from the 70s: decrease in white population, increase in latino/black",
            image: 'images/bronxpop.png',
            location: {
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {    
            id: 'TEST',
            alignment: 'chunk',
            hidden: false,
            title: '',
            description: "<object style='width: 100%' data='images/test.svg' type='image/svg+xml'></object>",
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
            id: '8d',
            alignment: 'chunk',
            hidden: false,
            title: 'd. Urban Renewal',
            description: "Subsidized buildings in the 80s & 90s",
            image: 'images/test.svg',
            location: {
            },
            callback: '',
            onChapterEnter: [
                {layer: 'blackbg',
                opacity: 1
                }
            ],
            onChapterExit: [
                {layer: 'blackbg',
                opacity: 0
                }]
        },
        // OUT OF HISTORY
        {
            id: '9a',
            alignment: 'center',
            hidden: false,
            title: '',
            description: "Despite the recent revitalization, three decades of urban decay left the South Bronx with a large part of the population living in poverty.",
            onChapterEnter: [
                {
                    layer: 'blackbg',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: '9b',
            alignment: 'center',
            hidden: false,
            title: '',
            description: "And, thus, less money to buy food.",
            location: {
                center: [-73.91954, 40.81203],
                zoom: 13.96,
                pitch: 52.00,
                bearing: 52.80,
            },
            onChapterEnter: [
                {

                },
                {
                    layer: 'blackbg',
                    opacity: 0
                }
            ]
        },
        // BACK TO THE MAP / Carousel of 4 cards with graphs comparing social measures and a brief explainer
        {
            id: '10a',
            alignment: 'right',
            hidden: false,
            title: '(a. American Human Development Index)',
            description: "",
            image: '',
            location: {
                center: [-73.91954, 40.81203],
                zoom: 13.96,
                pitch: 52.00,
                bearing: 52.80,
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '10b',
            alignment: 'right',
            hidden: false,
            title: '(b. % individuals in households with incomes below the federal poverty threshold)',
            description: "",
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
            id: '10c',
            alignment: 'right',
            hidden: false,
            title: '(c. Average household income ($))',
            description: "",
            image: '',
            location: {
                center: [-73.91954, 40.81203],
                zoom: 13.96,
                pitch: 52.00,
                bearing: 52.80,
                
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '10d',
            alignment: 'right',
            hidden: false,
            title: '(d. Scale: Extreme housing burden (Renters spending 50% or more of income on housing-related costs))',
            description: "",
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
            id: '10c',
            alignment: 'center',
            hidden: false,
            title: '(a. American Human Development Index)',
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
            id: '11a',
            alignment: 'center',
            hidden: false,
            title: 'Then came COVID-19, and everything got worse.',
            description: "",
            image: 'images/ipl.png',
            location: {
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '11b',
            alignment: 'left',
            hidden: false,
            title: '',
            description: "Unemployment escalated, and the Bronx was the hardest hit area in the state.",
            image: '',
            location: {
                center: [-73.98724, 40.71486],
                zoom: 10.45,
                pitch: 43.00,
                bearing: 0.00,
                curve: 0.1,
                duration: 400
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '11c',
            alignment: 'left',
            hidden: false,
            title: '',
            description: "Due to the pandemic, many emergency food providers like local soup kitchens and food pantries closed too, making people venture farther from their communities to find a provider.",
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
            id: '12a',
            alignment: 'center',
            hidden: false,
            title: '',
            description: "But even if before the pandemic, and even if their income was a bit higher, South Bronx residents have another problem: lack of access to affordable and nutritious food.",
            image: '',
            location: {
                // bronx
                center: [-73.91727, 40.80949],
                zoom: 14.00,
                pitch: 50.00,
                bearing: -0.00,
                speed: 0.6,
                curve: 1
            },
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '12b',
            alignment: 'right',
            hidden: false,
            title: '',
            description: "These are all the supermarkets and grocery stores the South Bronx residents have available.",
            image: '',
            location: {
            },
            callback: '',
            onChapterEnter: [
                // supermarkets
            ],
            onChapterExit: [
            ]
        },
        {
            id: '12c',
            alignment: 'left',
            hidden: false,
            title: '',
            description: "And these are the bodegas...",
            image: '',
            location: {
            },
            callback: '',
            onChapterEnter: [
                // bodegas
            ],
            onChapterExit: [
            ]
        },
        
        {
            id: '13a',
            alignment: 'right',
            hidden: false,
            title: '',
            description: "The South Bronx have one of the highest bodega to supermarket ratio in New York City. That means they have more small corner stores than grocery stores, and thus limited options to buy fresh produce.",
            image: '',
            location: {
                center: [-74.00490, 40.74060],
                zoom: 11.13,
                pitch: 60.00,
                bearing: -7.20, 
                curve: 0.1,
                duration: 800
                },
            callback: '',
            onChapterEnter: [
                // supermarket to bodega ratio
            ],
            onChapterExit: [
            ]
        },
        {
            id: '13b',
            alignment: 'center',
            hidden: false,
            title: '',
            description: "In other words, this is how the ratio looks like when we compare South Bronx with another neighborhood:",
            image: 'images/gpl.png',
            location: {
                center: [-73.90204, 40.82057],
                zoom: 13.27,
                pitch: 57.50,
                bearing: -20.00,
                curve: 0.1,
                duration: 800
            
            },
            callback: '',
            onChapterEnter: [
                // supermarket to bodega ratio
            ],
            onChapterExit: [
            ]
        },
        {
            id: '14a',
            alignment: 'left',
            hidden: false,
            title: '',
            description: "There's a lot of fast food restaurants in the South Bronx too...",
            image: '',
            location: {
            },
            callback: '',
            onChapterEnter: [
                // fast food chains
            ],
            onChapterExit: [
            ]
        },
        {
            id: '14b',
            alignment: 'left',
            hidden: false,
            title: '',
            description: "... but very few farmer's markets. ",
            image: '',
            location: {
            },
            callback: '',
            onChapterEnter: [
                // farmers markets
            ],
            onChapterExit: [
            ]
        },
        {
            id: '15intro',
            alignment: 'full',
            hidden: false,
            title: '',
            description: "This explains the food habits of South Bronx residents, as they responded in a survey that included all New Yorkers in 2017 (Carousel with 3 comparative graphs)",
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
            id: '15a',
            alignment: 'full',
            hidden: false,
            title: 'a. Amount of food in the last 6 months)',
            description: "",
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
            id: '15b',
            alignment: 'full',
            hidden: false,
            title: 'b. Fruits and vegetables availability)',
            description: "",
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
            id: '15c',
            alignment: 'full',
            hidden: false,
            title: 'c. Sugary drinks consumption) ',
            description: "",
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
            id: '16a',
            alignment: 'left',
            hidden: false,
            title: '',
            description: "In summary: lacking money and enough food stores with fresh produce, many South Bronx residents turn to unhealthy food options. Hence the contradiction: despite being the most food-insecure area in the city, it's also the one with the highest obesity rate: 42% of the adults are obese.",
            image: '',
            location: {
                center: [-74.00490, 40.74060],
                zoom: 11.13,
                pitch: 60.00,
                bearing: -7.20,
                curve: 0.1,
                duration: 800
                },    
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // obesity rates
                    ],
                onChapterExit: [
                    
                    ]
        },
        {
            id: '16b',
            alignment: 'left',
            hidden: false,
            title: '',
            description: "That's a pattern we can see all over New York City: the most food-insecure an area is (shown in height on the map), the more overweight its residents are (shown in red on the map).",
            image: '',
            location: {

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
            id: '16c',
            alignment: 'center',
            hidden: false,
            title: '',
            description: "What are the best ways to reverse that? ",
            image: '',
            location: {
                center: [-74.00490, 40.74060],
                zoom: 11.13,
                pitch: 60.00,
                bearing: -7.20,
                curve: 0.3,
                duration: 800
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
            id: '17a',
            alignment: 'center',
            hidden: false,
            title: '',
            description: "Let's take a look at the South Bronx again and see some ways being used to fight food insecurity amidst the pandemic.",
            image: '',
            location: {
                center: [-73.90204, 40.82057],
                zoom: 13.27,
                pitch: 57.50,
                bearing: -20.00,
                curve: 0.3,
                duration: 800
            
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
            id: '17b',
            alignment: 'right',
            hidden: false,
            title: '',
            description: "1. Emergency Food Providers (explainer/overview with pros and cons of food pantries and soup kitchens",
            image: '',
            location: {
                },    
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                //Highlight food pantries & soup kitchens 
                    ],
                onChapterExit: [
                    
                    ]
        },
        {
            id: '17c',
            alignment: 'right',
            hidden: false,
            title: '',
            description: "2. Supplemental Nutrition Assistance Program (explainer/overview with pros and cons)",
            image: '',
            location: {
                },    
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // "Highlight grocery stores and farmer's markets (places that accept SNAPs)"
                    ],
                onChapterExit: [
                    
                    ]
        },
        {
            id: '17d',
            alignment: 'right',
            hidden: false,
            title: '',
            description: "3. School meals for children and community meals (explainer/overview with pros and cons)",
            image: '',
            location: {
                },    
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // "Highlight schools
                    ],
                onChapterExit: [
                    
                    ]
        },
        {
            id: '18a',
            alignment: 'full',
            hidden: false,
            title: 'These are the emergency solutions. If we want to fight food insecurity in the long term, further action is needed. ',
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
            onChapterEnter: [
                    ],
                onChapterExit: [
                    
                    ]
        },
        {
            id: '18b',
            alignment: 'full',
            hidden: false,
            title: '',
            description: "One thing is to help people choose healthier food options. (Text on WIC program, which provides free healthy food and services to low-income women and children, including nutrition counseling, breastfeeding support, health education, and referrals.",
            image: '',
            location: {
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
            id: '18c',
            alignment: 'full',
            hidden: false,
            title: '',
            description: "The residents can take action too through community gardens. (Explainer - end with a positive note)",
            image: '',
            location: {
                center: [-73.90204, 40.82057],
                zoom: 13.27,
                pitch: 57.50,
                bearing: -20.00,
                curve: 0.1,
                duration: 400
            
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // community gardens
                    ],
                onChapterExit: [
                    
                    ]
        },
  

    ]
};
       