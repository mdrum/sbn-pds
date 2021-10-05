 
var basepath = '/pds/'

var searchData = [{
        name: 'Altimetry',
        subtitle: '',
        description: ' These data sets contain altimetry data which is collected by measuring reflected laser light from the surface of an object. This allows for measurements of height, distance, and altitude. Altimeters can utilize radio waves as well as lasers to measure distance.  ',
        url: basepath + 'archive/altimetry.html',
        category: 'Data Types'
    },{
        name: 'Plasma/Particles/Magnetosphere',
        subtitle: '',
        description: 'These data sets contain data collected by a magnometer. A Magnometer is used to collect data about the magnetic forces of an object. These observation sets can contain magnetic field data and well as detected electromagnetic anomalies.',
        url: basepath + 'archive/plasma.html',
        category: 'Data Types'
    },{
        name: 'Image Data',
        subtitle: '',
        description: ' These data sets contain Photographic image data, which can be either from ground based telescopes or from a spacecraft. These data sets will contain numerous images of an object or a group of objects. These data sets are mostly asteroid data sets with some comets and other solar system bodies. ',
        url: basepath + 'archive/image.html',
        category: 'Data Types'
    },{
        name: 'Maps and Mosaics',
        subtitle: '',
        description: 'These data sets contain Mosaic images which are a single large image stitched together from numerous smaller images to give a wide field view of an area.  Usually, it is constructed from a series of spacecraft images taken closely together in time so that the Sun angle is consistent throughout the mosaic; however, for global mosaics, that is not possible.  Additionally, the images are frequently photometrically corrected so that the reflected light is normalized to a single emission angle, typically 30°.',
        url: basepath + 'archive/maps.html',
        category: 'Data Types'
    },{
        name: 'NEO Surveys',
        subtitle: '',
        description: ' These data sets contain Astronomical Survey observations. An astronomical survey is a generalized search over all (or most) of the sky and lacks a specific target. For SBN, its goal is to discover comets and asteroids and improve our knowledge of their orbits.  Alternatively, an astronomical survey may comprise a set of many images or spectra of objects that share a common type or feature. ',
        url: basepath + 'archive/surveys.html',
        category: 'Data Types'
    },{
        name: 'Nuclear',
        subtitle: '',
        description: '  These data sets contain nuclear observations which are made using some speciality spectrometers that detect interactions of highly energetic particles.  These can be an X-ray spectrometer that measures X-rays that are emitted from the surface.  Another one is a neutron spectrometer, which detects different energy states of neutrons that are created when cosmic rays impact the surface.  Detailed analysis can separate particles, atoms, and molecules by their mass, momentum, or energy. Data from these observations can be used to determine chemical composition and abundance.  ',
        url: basepath + 'archive/xgn.html',
        category: 'Data Types'
    },{
        name: 'Orbital data',
        subtitle: 'proper elements and dynamical families',
        description: ' These data sets contain derived data relating to the orbits of objects. These data sets will include the proper elements and dynamical families. Orbital observations can be ground based or from spacecraft. Orbital data sets are typically collected over a longer time period to allow for a complete observation of an orbital path.  ',
        url: basepath + 'archive/orbital.html',
        category: 'Data Types'
    },{
        name: 'Photometry and Lightcurves',
        subtitle: '',
        description: ' These data sets contain Photometry observations, which are used to measure the brightness of celestial objects. These measurements can provide information about an object’s size, distance, temperature, and rotational period. These data sets are mostly asteroid data sets with some comets and other solar system bodies.',
        url: basepath + 'archive/phot.html',
        category: 'Data Types'
    },{
        name: 'Physical Properties',
        subtitle: 'spin vectors, taxonomic classification, albedos, densities, and diameters',
        description: 'These data sets include observations on the physical properties of asteroids such as spin vectors, taxonomic classifications, albedos, densities and diameters.',
        url: basepath + 'archive/physical.html',
        category: 'Data Types'
    },{
        name: 'Polarimetry',
        subtitle: '',
        description: 'These datasets contain the measurement of polarization of electromagnetic waves such as radio or light waves (the orientation of the light waves). Typically polarimetry is done on electromagnetic waves that have traveled through or have been reflected, refracted or diffracted by some material in order to characterize that object. ',
        url: basepath + 'archive/polarimetry.html',
        category: 'Data Types'
    },{
        name: 'Radar',
        subtitle: '',
        description: ' These data sets contain radar observations which is a measurement system that uses radio waves (Radar) to determine the range, angle, or velocity of objects. This is done by reflecting radar waves off of a target and analyzing the reflections. Radar data can be used to construct both radar images and shape models of objects.  ',
        url: basepath + 'archive/radar.html',
        category: 'Data Types'
    },{
        name: 'Radio Science',
        subtitle: '',
        description: ' These data sets contain Radio science data, which makes use of the radio telemetry signal between the spacecraft and radio telescopes on Earth to accurately measure position of the spacecraft.  These measurements can be used to determine the gravity field, mass, and other physical characteristics of a body the spacecraft encounters. ',
        url: basepath + 'archive/rs.html',
        category: 'Data Types'
    },{
        name: 'Shape Models',
        subtitle: '',
        description: 'These data sets contain Shape models (or Digital Terrain Models) three-dimensional models of the shape of an object. They can be derived using radar data, visible image data, light curves with inversion techniques and/or laser altimeter data. ',
        url: basepath + 'shape-models/',
        category: 'Data Types'
    },{
        name: 'Gravity Models',
        subtitle: '',
        description: ' These data sets contain gravity models which are a detailed model of the gravitational field of an object, such as spherical harmonics, radial gravity acceleration, or internal density.  Gravity models are derived from radio science data which make use of the radio telemetry signal between the spacecraft and earth to accurately determine the position of the spacecraft ',
        url: basepath + 'archive/gravity.html',
        category: 'Data Types'
    },{
        name: 'SPICE Kernels',
        subtitle: '',
        description: ' These data sets include SPICE data, which contains time-series details of the position and pointing of the spacecraft, and the position and rotation state of the planets/small bodies.  It also includes exact definitions of the spacecraft equipment and instruments, to include how they are oriented on the spacecraft. The complete SPICE information provides deterministic information to compute relative and inertial positions, pointing and angles of objects in space.',
        url: basepath + 'archive/spice.html',
        category: 'Data Types'
    },{
        name: 'Spectrophotometry and Spectra',
        subtitle: '',
        description: ` These data sets contain Spectrophotometry observations which are the quantitative measurement of the reflection or transmission properties of a material as a function of wavelength.This data can also be commonly represented as a chart or a graph that shows the intensity of light being emitted over a range of wavelengths (or wavenumbers). `,
        url: basepath + 'archive/spectra.html',
        category: 'Data Types'
    },{
        name: 'All Asteroid Data',
        subtitle: '',
        url: basepath + 'archive/asteroids.html',
        category: 'Target Types'
    },{
        name: 'All Dust Data',
        subtitle: '',
        url: basepath + 'archive/dust.html',
        category: 'Target Types'
    },{
        name: 'Near Earth Objects',
        subtitle: '',
        url: basepath + 'archive/neos.html',
        category: 'Target Types'
    },{
        name: 'TNOs, Centaurs, and Pluto',
        subtitle: '',
        url: basepath + 'archive/tnos.html',
        category: 'Target Types'
    },{
        name: 'Planetary Satellites',
        subtitle: '',
        url: basepath + 'archive/sat.html',
        category: 'Target Types'
    },{
        name: 'Meteorites',
        subtitle: '',
        url: basepath + 'archive/meteorite.html',
        category: 'Target Types'
    },{
        name: 'Meteoroids',
        subtitle: '',
        url: basepath + 'archive/meteoroid.html',
        category: 'Target Types'
    },{
        name: 'Comets',
        subtitle: '',
        url: basepath + 'archive/comets.html',
        category: 'Target Types'
    },{
        name: 'Laboratory Spectra',
        subtitle: '',
        url: basepath + 'archive/lab.html',
        category: 'Target Types'
    },{
        name: 'Bopps',
        subtitle: 'Ceres',
        instruments: ['Stratospheric Terahertz Observatory (STO)',],
        url: 'http://pdssbn.astro.umd.edu/data_sb/missions/bopps/index.shtml',
        category: 'Mission'
    },{
        name: 'BRRISON',
        subtitle: 'C/2012 S1 (ISON)',
        instruments: ['BRRISON INFRARED CAMERA (BIRC)', 'ULTRAVIOLET AND VISIBLE IMAGING CAMERA (UVVis)'],
        url: 'https://pds-smallbodies.astro.umd.edu/data_sb/missions/brrison/index.shtml',
        category: 'Mission'
    },{
        name: 'Cassini',
        subtitle: 'Interplanetary dust and Small satellite shape models',
        instruments: ['HRD', 'CDA',],
        url: basepath + 'archive/cassini.html',
        category: 'Mission'
    },{
        name: 'Dawn',
        subtitle: '4 Vesta, 1 Ceres',
        instruments: ['VIR', 'FC', 'GRaND',],
        url: basepath + 'resource/dawn',
        category: 'Mission'
    },{
        name: 'Deep Impact',
        subtitle: '9P/Tempel 1, Earth/Moon/Jupiter as calibrators',
        instruments: ['High Resolution Instrument Infrared Spectrometer (HRI-IR)', 'High Resolution Instrument Visible CCD (HRI-VIS)', 'Medium Resolution Instrument Visible CCD (MRI-VIS)', 'Impactor Targeting Sensor Visible CCD (ITS-VIS)'],
        url: 'https://pds-smallbodies.astro.umd.edu/data_sb/missions/deepimpact/index.shtml',
        category: 'Mission'
    },{
        name: 'Deep Space 1',
        subtitle: '9969 Braille, 19P/Borrelly 1, Cometary Dust',
        instruments: ['Ion Propulsion System Diagnostic System (IDS)', 'Miniature Integrated Camera Spectrometer (MICAS)', 'Plasma Experiment for Planetary Exploration (PEPE)'],
        url: 'https://pds-smallbodies.astro.umd.edu/data_sb/missions/deepspace1/index.shtml',
        category: 'Mission'
    },{
        name: 'Double Asteroid Redirection Test (DART)',
        subtitle: 'Near-Earth binary asteroid Didymos, asteroid deflection test',
        instruments: [,],
        url: 'https://pds-smallbodies.astro.umd.edu/data_sb/missions/dart/index.shtml',
        category: 'Mission'
    },{
        name: 'Galileo',
        subtitle: '243 Ida, 951 Gaspra, Small planetary satellites, Interplanetary dust',
        instruments: ['Galileo dust detector system (GDDS)',],
        url: basepath + 'archive/galileo.html',
        category: 'Mission'
    },{
        name: 'Giotto',
        subtitle: '1P/Halley, Interplanetary dust',
        instruments: ['Dust Impact Detector System (DID)', 'Energetic Particle Analyzer (EPA)', 'Radio Science Experiment (GRE)', 'Halley Multicolour Camera (HMC)', 'Ion Mass Spectrometer (IMS)', 'Johnstone Plasma Analyzer (JPA)', 'Magnetometer (MAG)', 'Optical Probe Experiment (OPE)', 'Particle Impact Analyzer (PIA)', 'Neutral Mass Spectrometer (NMS)'],
        url: 'http://pdssbn.astro.umd.edu/data_sb/missions/giotto/index.shtml',
        category: 'Mission'
    },{
        name: 'Hayabusa',
        subtitle: '25143 Itokawa',
        instruments: ['Asteroid Multi-band Imaging Camera (AMICA)', 'Near-Infrared Spectrometer (NIRS)', 'X-Ray Spectrometer (XRS)', 'Light Detection and Ranging (LIDAR)',],
        url: basepath + 'archive/hayabusa.html',
        category: 'Mission'
    },{
        name: 'Hayabusa2',
        subtitle: '162173 Ryugu',
        instruments: ['Optical Navigation Cameras (ONC)', 'Thermal Infrared Imager (TIR)', 'Near Infrared Spectrometer (NIRS3)', 'Light Detection and Ranging (LIDAR)', 'MASCOT lander', 'Minerva landers', 'Deployable Camera (DCAM3)',],
        url: basepath + 'resource/hayabusa2',
        category: 'Mission'
    },{
        name: 'Hubble Space Telescope',
        subtitle: '1 Ceres, 4 Vesta',
        instruments: ['Hubble',],
        url: basepath + 'archive/sc.html',
        category: 'Mission'
    },{
        name: 'IRAS',
        subtitle: 'Interplanetary dust, Asteroids',
        instruments: ['Focal Plane Array (FPA)',],
        url: basepath + 'archive/iras.html',
        category: 'Mission'
    },{
        name: 'LADEE',
        subtitle: 'Lunar dust',
        instruments: ['Lunar Dust Experiment (LDEX)', 'Neutral Mass Spectrometer (NMS)', 'UV-Vis Spectrometer (UVS)'],
        url: basepath + 'archive/ladee.html',
        category: 'Mission'
    },{
        name: 'Mariner 9',
        subtitle: 'Deimos',
        instruments: [''],
        url: basepath + 'archive/sc.html',
        category: 'Mission'
    },{
        name: 'MSX',
        subtitle: 'Interplanetary dust, Asteroids, Comets',
        instruments: ['Spirit III',],
        url: basepath + 'archive/msx.html',
        category: 'Mission'
    },{
        name: 'NEAR',
        subtitle: '433 Eros, 253 Mathilde, C/Hyakutake (1996 B2)',
        instruments: ['Multi-Spectral Imager (MSI)', 'Near-Infrared Spectrometer (NIRS)', 'Gamma-Ray Spectrometer (GRS)', 'X-ray Spectromter (XRS)', 'NEAR Magnetometer (MAG)', 'NEAR Laser Rangefinder (NLR)', 'Radio Science Subsystem (RSS)',],
        url: basepath + 'resource/near',
        category: 'Mission'
    },{
        name: 'NEO Surveys',
        subtitle: 'Asteroids and Comets',
        instruments: [],
        url: basepath + 'archive/surveys.html',
        category: 'Mission'
    },{
        name: 'NEOWISE',
        subtitle: 'Asteroids, Satellites of Saturn',
        instruments: [],
        url: basepath + 'resource/neowisediam.html',
        category: 'Mission'
    },{
        name: 'New Horizons',
        subtitle: 'Pluto, and satellites of Pluto and Jupiter',
        instruments: ['ALICE Ultraviolet Imaging Spectrograph (ALICE)', 'Linear Etalon Imaging Spectral Array (LEISA)', 'RALPH', 'Long Range Reconnaissance Imager (LORRI)', 'Multispectral Visible Imaging Camera (MVIC)','Pluto Energetic Particle Spectrometer Science Investigation (PEPSSI)','Radio Science Experiment (REX)', 'Student Dust Counter (SDC)', 'Solar Wind Around Pluto (SWAP)', ],
        url: 'http://pdssbn.astro.umd.edu/data_sb/missions/newhorizons/index.shtml',
        category: 'Mission'
    },{
        name: 'New Horizons Kuiper Belt Extended Mission',
        subtitle: '486958 Arrokoth (KBO)',
        instruments: ['ALICE Ultraviolet Imaging Spectrograph (ALICE)', 'Linear Etalon Imaging Spectral Array (LEISA)', 'RALPH', 'Long Range Reconnaissance Imager (LORRI)', 'Multispectral Visible Imaging Camera (MVIC)','Pluto Energetic Particle Spectrometer Science Investigation (PEPSSI)','Radio Science Experiment (REX)', 'Student Dust Counter (SDC)', 'Solar Wind Around Pluto (SWAP)', ],
        url: 'https://pdssbn.astro.umd.edu/data_sb/missions/nh-kem/index.shtml',
        category: 'Mission'
    },{
        name: 'OSIRIS-REx',
        subtitle: '101955 Bennu',
        instruments: ['OCAMS', 'TAGCAMS', 'OVIRS', 'OTES', 'REXIS', 'OLA', 'Deep Space Network (DSN)',],
        url: basepath + 'resource/orex/',
        category: 'Mission'
    },{
        name: 'Rosetta',
        subtitle: '2867 Steins, 21 Lutetia',
        instruments: ['ALICE Ultraviolet Imaging Spectrograph (ALICE)', 'Comet Nucleus Sounding Experiment By Radiowave Transmission (CONSERT)', 'Cometary Secondary Ion Mass Analyzer (COSIMA)', 'Grain Impact Analyser and Dust Accumulator (GIADA)', 'Micro-Imaging Dust Analysis System (MIDAS)', 'Microwave Spectroscopy (MIRO)', 'Rosetta Orbiter Navigation Camera (NAVCAM)', 'OSIRIS Narrow Angle Camera (OSINAC)', 'OSIRIS Wide Angle Camera (OSIWAC)', 'Rosetta Orbiter Spectrometer for Ion and Neutral Analysis (ROSINA)', 'Rosetta Orbiter Plasma Consortium Ion Composition Analyser (RPCICA)', 'Rosetta Orbiter Plasma Consortium Ion and Electron Sensor (RPCIES)', 'Rosetta Orbiter Plasma Consortium Langmuir Probe (RPCLAP)', 'Rosetta Orbiter Plasma Consortium Fluxgate Magnetometer (RPCMAG)', 'Rosetta Orbiter Plasma Consortium Mutual Impedance Probe (RPCMIP)', 'Radio Science (RSI)', 'Standard Radiation Environment Monitor (SREM)', 'Visible and Infrared Thermal Imaging Spectrometer (VIRTIS)', 
                     'Alpha-Proton-X-ray Spectrometer (APXS)', 'Rosetta Lander Cometary Infrared and Visible Analyser (CIVA)', 'Cometary Sampling and Composition Experiment (COSAC)', 'Methods of Determining and Understanding Light Elements from Unequivocal Stable Isotope Compositions (MODULUS)', 'Multi-Purpose Sensors For Surface and Sub-Surface Science (MUPUS)', 'Rosetta Lander Imaging System - Descent and close-up Imager (ROLIS)', 'RoLand Magnetic field investigation and Plasma monitor (ROMAP)', 'Drill and Sampling Device (SD2)', 'Surface Electrical, Seismic and Acoustic Monitoring Experiments (SESAME)',],
        url: 'http://pdssbn.astro.umd.edu/data_sb/missions/rosetta/index.shtml',
        category: 'Mission'
    },{
        name: 'Stardust',
        subtitle: '5535 Annefrank',
        instruments: ['NAVCAM',],
        url: 'http://pdssbn.astro.umd.edu/holdings/sdu-a-navcam-2-edr-annefrank-v2.0/dataset.html',
        category: 'Mission'
    },{
        name: 'Ulysses',
        subtitle: 'Interplanetary dust',
        instruments: ['Ulysses dust detector system (UDDS)',],
        url: basepath + 'resource/udds.html',
        category: 'Mission'
    },{
        name: 'Vega 1 and 2',
        subtitle: '1P/Halley (1682 Q1)',
        instruments: [''],
        url: basepath + 'archive/sc.html',
        category: 'Mission'
    },{
        name: 'Viking Orbiter',
        subtitle: 'Phobos, Deimos',
        instruments: [''],
        url: basepath + 'archive/sc.html',
        category: 'Mission'
    },{
        name: 'Voyager 1 and 2',
        subtitle: 'Small planetary satellites',
        url: basepath + 'archive/sc.html',
        category: 'Mission'
    }
];