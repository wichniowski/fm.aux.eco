const categories = {
  electronic: "Electronic",
  pop: "Pop",
  informational: "Informational",
  funkhiphop: "Funk & Hip Hop",
  various: "Various",
};

export type Station = {
  name: string;
  id: string;
  hastag?: string;
  url: string;
  img: string;
  type?: string;
  cat?: string;
  link: string;
  description: string;
};

const stations = [
  {
    name: "NTS 1",
    hashtag: "nts1",
    id: "NTS",
    url: "https://stream-relay-geo.ntslive.net/stream",
    img: "./station-logos/nts1.png",
    link: "",
    description:
      "NTS provides curious minds with a home for music discovery. Built by music lovers, for music lovers.",
  },
  {
    name: "NTS 2",
    id: "NTS2",
    hashtag: "nts2",
    url: "https://stream-relay-geo.ntslive.net/stream2",
    img: "./station-logos/nts2.png",
    link: "",
    description:
      "NTS provides curious minds with a home for music discovery. Built by music lovers, for music lovers.",
  },
  {
    name: "GDS.fm",
    id: "gds.fm",
    hashtag: "gds",
    url: "https://gdsfm.out.airtime.pro/gdsfm_a",
    img: "./station-logos/gdsfm.png",
    link: "https://gds.fm/",
    description: "Zürichs Radio gegen den Strom.",
  },
  {
    name: "WEFUNK",
    hashtag: "wefunk",
    id: "wefunkradio",
    url: "http://s-09.wefunkradio.com:81/wefunk64.mp3",
    img: "./station-logos/wefunk.png",
    link: "http://www.wefunkradio.com/",
    description:
      "WEFUNK is a Hip Hop, Funk & Soul mix show broadcasting from Montreal. Tune in and enjoy underground hip hop, classic funk and rare grooves.",
  },
  {
    name: "dublab",
    id: "dublab",
    hashtag: "dublab",
    url: "https://dublab.out.airtime.pro/dublab_a",
    img: "./station-logos/dublab.png",
    link: "https://www.dublab.com/",
    description:
      "dublab is a platform for discovery and the cultivation of next-wave music, arts and culture.",
  },
  {
    name: "KEXP",
    id: "kexp",
    hashtag: "kexp",
    url: "https://kexp-mp3-128.streamguys1.com/kexp128.mp3",
    img: "./station-logos/kexp.png",
    link: "https://www.kexp.org/donate/",
    description:
      "KEXP is a nonprofit arts organization serving music lovers through in-person, broadcast and online programming.",
  },
  {
    name: "Worldwide FM",
    id: "worldwidefm",
    hashtag: "worldwide",
    url: "https://worldwidefm.out.airtime.pro/worldwidefm_b",
    img: "./station-logos/worldwide.png",
    link: "https://worldwidefm.net/",
    description: "An award winning radio station with a global audience.",
  },
  {
    name: "Seoul Community Radio",
    id: "seoulcommunityradio",
    hashtag: "scr",
    url: "http://188.166.198.223/radio/8000/radio.mp3",
    img: "./station-logos/scr.png",
    link: "https://www.seoulcommunityradio.com/",
    description:
      "SCR Live shows are broadcasted regularly Wed-Sun from 7PM KST.",
  },
  {
    name: "Rinse FM",
    id: "rinse",
    hashtag: "rinse",
    url: "https://streamer-uk.rinse.fm:8443/stream",
    img: "",
    link: "https://www.rinse.fm/",
    description:
      "Rinse is at the centre of a vast musical community. As genres, artists and scenes evolve and fragment, so Rinse remains locked to the pulse of the underground.",
  },
  {
    name: "Refuge Worldwide",
    id: "rw",
    hashtag: "rw",
    url: "https://streaming.radio.co/s3699c5e49/listen",
    img: "",
    link: "",
    description:
      "Refuge Worldwide is a community radio station and fundraising platform based in Berlin.",
  },
  {
    name: "Byte FM",
    id: "byte",
    hashtag: "bytefm",
    url: "https://uplink.byte.fm/bytefm-main/mp3-128/?ar-distributor=ffa0",
    img: "",
    link: "",
    description:
      "ByteFM ist moderiertes Musik- und Kultur-Radio aus Hamburg",
  },
   {
    name: "Radio Buena Vida",
    id: "rbv",
    hashtag: "rbv",
    url: "https://s4.radio.co/s69b281ac0/listen",
    img: "",
    link: "https://buenavida.co.uk/get-involved/",
    description:
      "Radio Buena Vida first went on air in October 2020, live from Glasgow",
  },
];

export { stations };
