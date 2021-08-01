import MercuryImg from './images/mercury.jpg';
import VenusImg from './images/venus.jpg';
import EarthImg from './images/earth.jpg';
import MarsImg from './images/mars.jpg';
import JupiterImg from './images/jupiter.jpg';
import SaturnImg from './images/saturn.png';
import UranusImg from './images/uranus.jpg';
import NeptuneImg from './images/neptune3.jpg';
import SunImg from './images/sun.jpg';
import MoonImg from './images/moon.jpg';

export const sunData = {
  name: 'The Sun',
  rank: 0,
  distance: '---',
  orbitTime: '---',
  diameter: '1,392,700 km',
  temp: '5,500 C',
  gravity: '274 m/s^2',
  mass: '1.989 x 10^30 kg (1,989,000,000,000,000,000,000,000,000,000) (~2 Billion-Billion-Trillion)',
  info: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light and infrared radiation. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometres (864,000 miles), or 109 times that of Earth. Its mass is about 330,000 times that of Earth; it accounts for about 99.86% of the total mass of the Solar System. Roughly three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon and iron",
  image: SunImg,
};

export const moonData = {
  name: 'The Moon',
  rank: 3.5,
  distance: '149.6 million km',
  orbitTime: '27 Earth days',
  dayLength: '29.53 Earth days',
  diameter: '3475 km',
  temp: '-20 C',
  gravity: '1.6 m/s^2',
  mass: '0.073 x 10^24 kg (73,000,000,000,000,000,000,000) (73 Million-Million-Billion)',
  info: "The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth it is the largest natural satellite in the Solar System relative to the size of its planet, the fifth largest satellite in the Solar System overall, and is larger than any known dwarf planet. Orbiting Earth at an average distance of 384,400 km (238,900 mi), or about 30 times Earth's diameter, its gravitational influence slightly lengthens Earth's day and is the main driver of Earth's tides. The Moon is classified as a planetary-mass object and a differentiated rocky body, and lacks any significant atmosphere, hydrosphere, or magnetic field. Its surface gravity is about one-sixth of Earth's; Jupiter's moon Io is the only satellite in the Solar System known to have a higher surface gravity and density.",
  image: MoonImg,
};

export const mercuryData = {
  name: 'Mercury',
  rank: 1,
  distance: '57.9 million km',
  orbitTime: '88 Earth days',
  dayLength: '176 Earth days',
  diameter: '4879 km',
  temp: '167 C',
  gravity: '3.7 m/s^2',
  mass: '0.330 x 10^24 kg (330,000,000,000,000,000,000,000) (330 Million-Million-Billion)',
  info: " is the smallest planet in the Solar System and the closest to the Sun. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes (Ἑρμῆς). Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°. This proximity to the Sun means the planet can only be seen near the western horizon after sunset or the eastern horizon before sunrise, usually in twilight. At this time, it may appear as a bright star-like object but is often far more difficult to observe than Venus. From Earth, the planet telescopically displays the complete range of phases, similar to Venus and the Moon, which recurs over its synodic period of approximately 116 days.",
  image: MercuryImg,
};

export const venusData = {
  name: 'Venus',
  rank: 2,
  distance: '108.2 million km',
  orbitTime: '224.7 Earth days',
  dayLength: '116.75 Earth days',
  diameter: '12,104 km',
  temp: '464 C',
  gravity: '8.9 m/s^2',
  mass: '4.87 x 10^24 kg (4,870,000,000,000,000,000,000,000) (~5 Million-Billion-Billion)',
  info: " is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight. Venus lies within Earth's orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a little while before dawn. Venus does not have any moons, a distinction it shares only with Mercury among the planets in the Solar System.",
  image: VenusImg,
};

export const earthData = {
  name: 'Earth',
  rank: 3,
  distance: '149.6 million km',
  orbitTime: '365.25 days',
  dayLength: '24.25 hours',
  diameter: '12,756 km',
  temp: '15 C',
  gravity: '9.8 m/s^2',
  mass: '5.97 x 10^24 kg (5,970,000,000,000,000,000,000,000) (5.97 Million-Billion-Billion)',
  info: " is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics.",
  image: EarthImg,
};

export const marsData = {
  name: 'Mars',
  rank: 4,
  distance: '227.9 million km',
  orbitTime: '687 Earth days',
  dayLength: '24.7 hours (1.029 Earth days)',
  diameter: '6,792 km',
  temp: '-65 C',
  gravity: '3.7 m/s^2',
  mass: '0.642 x 10^24 kg (642,000,000,000,000,000,000,000) (642 Million-Million-Billion)',
  info: " is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'. The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.",
  image: MarsImg,
};

export const jupiterData = {
  name: 'Jupiter',
  rank: 5,
  distance: '778.6 million km',
  orbitTime: '4331 Earth days',
  dayLength: '9.9 hours',
  diameter: '142,984 km',
  temp: '-110 C',
  gravity: '23.1 m/s^2',
  mass: '1898 x 10^24 kg (1,898,000,000,000,000,000,000,000,000) (1.898 Billion-Billion-Billion)',
  info: " is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but still one-thousandth the mass of the Sun. Jupiter is the third-brightest natural object in the Earth's night sky after the Moon and Venus. It has been observed since pre-historic times and is named after the Roman god Jupiter, the king of the gods, because of its massive size. Jupiter is primarily composed of hydrogen, but helium comprises one quarter of its mass and one tenth of its volume. It likely has a rocky core of heavier elements, but like the other giant planets, Jupiter lacks a well-defined solid surface. The on-going contraction of its interior generates heat greater than the amount received from the Sun. Because of its rapid rotation, the planet's shape is that of an oblate spheroid; it has a slight but noticeable bulge around the equator. The outer atmosphere is visibly segregated into several bands at different latitudes, with turbulence and storms along their interacting boundaries. A prominent result of this is the Great Red Spot, a giant storm that is known to have existed since at least the 17th century, when it was first seen by telescope.",
  image: JupiterImg,
};

export const saturnData = {
  name: 'Saturn',
  rank: 6,
  distance: '1433.5 million km',
  orbitTime: '10747 Earth days',
  dayLength: '10.7 hours',
  diameter: '120,536 km',
  temp: '-140 C',
  gravity: '9.0 m/s^2',
  mass: '568 x 10^24 kg (568,000,000,000,000,000,000,000,000) (568 Million-Billion-Billion)',
  info: " is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive. Saturn is named after the Roman god of wealth and agriculture; its astronomical symbol (♄) represents the god's sickle. The Romans named the seventh day of the week Saturday, Sāturni diēs ('Saturn's Day') no later than the 2nd century for the planet Saturn.",
  image: SaturnImg,
};

export const uranusData = {
  name: 'Uranus',
  rank: 7,
  distance: '2872.5 million km',
  orbitTime: '30589 Earth days',
  dayLength: '17.2 hours',
  diameter: '51,118 km',
  temp: '-195 C',
  gravity: '8.7 m/s^2',
  mass: '86.8 x 10^24 kg (86,800,000,000,000,000,000,000,000) (86.8 Million-Billion-Billion)',
  info: " is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky (Uranus) who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn). Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as 'ice giants' to distinguish them from the other giant planets. It has the coldest planetary atmosphere in the Solar System, with a minimum temp of −224°C, and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds.",
  image: UranusImg,
};

export const neptuneData = {
  name: 'Neptune',
  rank: 8,
  distance: '4495.1 million km',
  orbitTime: '59800 Earth days',
  dayLength: '16.1 hours',
  diameter: '49,528 km',
  temp: '-200 C',
  gravity: '11.0 m/s^2',
  mass: '102 x 10^24 kg (102,000,000,000,000,000,000,000,000) (102 Million-Billion-Billion)',
  info: " is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. The planet orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km; 2.8 billion mi). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident.",
  image: NeptuneImg,
};
