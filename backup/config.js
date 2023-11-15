var config = {
    style: 'mapbox://styles/ajbajb/ckn50pk7y03rl17kfwqmiojge',
    accessToken: 'pk.eyJ1IjoiYWpiYWpiIiwiYSI6ImNrbXhud2pheDA4ZTkycG8xd28xd2JiaXYifQ.R0mZkMatq-jELHM8njiu6A',
    showMarkers: false,
    markerColor: '#57068c',
    theme: 'light',
    use3dTerrain: false,
    title: 'Food Problems: Hunts Point',
    // subtitle: 'What Makes New Yorkers Hungry? Examining a neighborhood in the Bronx',
    byline: 'Alex John Beck',
    footer: 'Source: source citations, etc.',
    chapters: [
    // FULL CITY INTRO
     {
            id: 'NYC',
            alignment: 'center',
            hidden: false,
            title: 'Why Are People Hungry in New York City?',
            // image: '',
            description: '',
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
                    layer: 'huntspointfoodproblems',
                    opacity: 0,
                    duration: 5000
            }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Intro',
            alignment: 'left',
            hidden: false,
            title: 'Hunts Point',
            // image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
          center: [-73.88516, 40.80869],
            zoom: 14.54,
            pitch: 45.00,
            bearing: 0.00,
            speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'huntspointfoodproblems',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'huntspointfoodproblems',
                    opacity: 0
                }
            ]
        },

        {
            id: 'hp-market',
            alignment: 'right',
            hidden: false,
            title: 'A Distribution Hub',
            // image: './path/to/image/source.png',
            description: "'Physically cut off from the rest of the Bronx by the system of highways that made it the industrial center it is today, the Hunts Point community learned long ago to rely on itself for survival.' NY1" ,
            location: {
               center: [-73.87605, 40.81143],
                    zoom: 16.38,
                    pitch: 60.00,
                    bearing: -50.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                    layer: 'sat',
                    opacity: 1
            }],
            onChapterExit: [
            {
                    layer: 'sat',
                    opacity: 0
            }]
        },

        {
            id: 'foodpantries',
            alignment: 'left',
            hidden: false,
            title: 'foodpantries',
            // image: './path/to/image/source.png',
            description: "Margarette Purvis, the president and chief executive of the Food Bank, asked an employee which neighborhood appeared to be hungriest. “She said, ‘Our neighborhood,’” Ms. Purvis said. “In all that big old planning and strategy, there was a big old hole.” Food Bank now delivers to a Hunts Point pantry run by Bright Temple A.M.E. Church, which will open the area’s only soup kitchen this fall with the nonprofit’s help.",
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
                duration: 0
            }
                ],
            onChapterExit: [
                {
                layer: 'foodbanks',
                opacity: 1,
                duration: 0
                }
                ]
        },
           {
            id: 'manyfoodpantries',
            alignment: 'right',
            hidden: false,
            title: 'A Hub For Hunger',
            // image: './path/to/image/source.png',
            description: "In fact there are many food pantries in this neighborhood of the Bronx. Far more than there are supermarkets.",
            location: {
            center: [-73.88999, 40.81390],
            zoom: 14.17,
            pitch: 0,
            bearing: -10,
            speed:0.5,
            curve:2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'fastfood',
            alignment: 'right',
            hidden: false,
            title: 'Too Much Fast Food',
            image: 'images/nofruits.png',
            description: "<h1> mcdonalds</h1>",
            location: {
            center: [-73.89145, 40.82060],
            zoom: 19.45,
            pitch: 60.00,
            bearing: -172.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        // //   {
        // //     id: 'fastfood',
        // //     alignment: 'left',
        // //     hidden: false,
        // //     title: 'Food Deserts',
        // //     image: 'image/nofruits.png',
        // //     description: "Obesity (percent of adults): Hunts Point/Longwood: 42% (1) | NYC: 24% (1)     Childhood Obesity (percent of public school children in grades K through 8):  Hunts Point/Longwood: 26% (1) | NYC: 20% (1) Diabetes (percent of adults): Hunts Point/Longwood: 20% (1) | NYC: 11% (1)"
        // //     location: {
        // //     center: [-73.88698, 40.81715],
        // //     zoom: 17.71,
        // //     pitch: 60.00,
        // //     bearing: 103.20
        // //     },
        // //     mapAnimation: 'flyTo',
        // //     rotateAnimation: false,
        // //     callback: '',
        // //     onChapterEnter: [],
        // //     onChapterExit: []
        // // }
    ]
};
