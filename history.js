// Daily Video History Log & Topic Registry
const PODCAST_HISTORY = [
  {
    "episode": 1,
    "topic": "The Art of Unhurried Mornings",
    "date": "2026-10-15T08:09:53.953606",
    "duration_sec": 75.28,
    "duration_min": 1.25,
    "video_file": "podcast_ep1_20261015_080823.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 2,
    "topic": "Finding Quiet in the Everyday: Cultivating Inner Peace",
    "date": "2026-10-15T08:49:32.789771",
    "duration_sec": 1121.69,
    "duration_min": 18.69,
    "video_file": "podcast_ep2_20261015_083217.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 3,
    "topic": "Die Kunst des achtsamen Atmens: Ein stiller Anker im Alltag",
    "date": "2026-10-17T11:52:43.068324",
    "duration_sec": 1350.96,
    "duration_min": 22.52,
    "video_file": "podcast_ep3_20261017_113811.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 4,
    "topic": "Die stille Kraft der Worte: Bewusst wählen, tiefer fühlen",
    "date": "2026-10-18T05:33:19.224643",
    "duration_sec": 1453.87,
    "duration_min": 24.23,
    "video_file": "podcast_ep4_20261018_051415.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 5,
    "topic": "Die sanfte Kunst des Loslassens: Raum schaffen für Neues",
    "date": "2026-10-19T05:43:27.178869",
    "duration_sec": 1288.82,
    "duration_min": 21.48,
    "video_file": "podcast_ep5_20261019_052544.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 6,
    "topic": "Die sanfte Melodie des Seins: Im Einklang mit dem Moment leben",
    "date": "2026-10-20T05:49:11.649465",
    "duration_sec": 1234.73,
    "duration_min": 20.58,
    "video_file": "podcast_ep6_20261020_052748.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 7,
    "topic": "Das leise Summen der Gedanken: Innere Klänge wahrnehmen und gestalten",
    "date": "2026-10-21T05:46:15.940459",
    "duration_sec": 1196.57,
    "duration_min": 19.94,
    "video_file": "podcast_ep7_20261021_052535.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 8,
    "topic": "Das leise Flüstern der Natur: Achtsamkeit im Freien neu entdecken",
    "date": "2026-10-22T05:48:38.613903",
    "duration_sec": 1318.56,
    "duration_min": 21.98,
    "video_file": "podcast_ep8_20261022_053142.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 9,
    "topic": "Das leise Echo der Stille: Gedanken sanft ordnen und Klarheit finden",
    "date": "2026-10-23T05:50:00.877565",
    "duration_sec": 1260.48,
    "duration_min": 21.01,
    "video_file": "podcast_ep9_20261023_052946.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 10,
    "topic": "Das leise Licht der Dankbarkeit: Momente der Fülle im Alltäglichen entdecken",
    "date": "2026-10-24T05:20:45.693627",
    "duration_sec": 1159.01,
    "duration_min": 19.32,
    "video_file": "podcast_ep10_20261024_050848.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 11,
    "topic": "Das leise Glühen des Selbstmitgefühls: Sanft zu dir selbst sein im Alltag",
    "date": "2026-10-25T05:42:08.607076",
    "duration_sec": 1304.3,
    "duration_min": 21.74,
    "video_file": "podcast_ep11_20261025_052455.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 12,
    "topic": "Das leise Fließen der Zeit: Momente bewusst genießen und Hektik entfliehen",
    "date": "2026-10-26T05:43:08.726545",
    "duration_sec": 1268.06,
    "duration_min": 21.13,
    "video_file": "podcast_ep12_20261026_052928.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 13,
    "topic": "Die sanfte Kunst des Zuhörens: Die Welt mit offenen Ohren empfangen",
    "date": "2026-10-27T06:08:20.041326",
    "duration_sec": 1325.69,
    "duration_min": 22.09,
    "video_file": "podcast_ep13_20261027_054534.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 14,
    "topic": "Das leise Leuchten des Augenblicks: Kleine Freuden im stillen Sein finden",
    "date": "2026-10-29T06:50:22.467667",
    "duration_sec": 1134.86,
    "duration_min": 18.91,
    "video_file": "podcast_ep14_20261029_063441.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 15,
    "topic": "Das leise Rauschen der Gedankenpausen: Raum schaffen für innere Ruhe",
    "date": "2026-10-30T06:48:39.148683",
    "duration_sec": 1110.53,
    "duration_min": 18.51,
    "video_file": "podcast_ep15_20261030_063438.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 16,
    "topic": "Das leise Lied der Langsamkeit: Den Wert des langsamen Gehens entdecken",
    "date": "2026-10-31T06:39:37.873829",
    "duration_sec": 1115.59,
    "duration_min": 18.59,
    "video_file": "podcast_ep16_20261031_062318.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 17,
    "topic": "Das leise Kichern des Glücks: Freude in den kleinen Dingen finden",
    "date": "2026-11-01T07:09:16.255124",
    "duration_sec": 1230.38,
    "duration_min": 20.51,
    "video_file": "podcast_ep17_20261101_065648.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 18,
    "topic": "Das leise Flüstern der Intuition: Den inneren Kompass sanft erspüren",
    "date": "2026-11-02T07:12:39.429659",
    "duration_sec": 1181.49,
    "duration_min": 19.69,
    "video_file": "podcast_ep18_20261102_065632.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 19,
    "topic": "Das leise Tanzen der Gedanken: Mit Anmut durch innere Landschaften gleiten",
    "date": "2026-11-03T07:36:25.012348",
    "duration_sec": 1137.14,
    "duration_min": 18.95,
    "video_file": "podcast_ep19_20261103_071923.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 20,
    "topic": "Das leise Weben der Träume: Innere Welten sanft erkunden",
    "date": "2026-11-04T07:14:08.011963",
    "duration_sec": 1202.93,
    "duration_min": 20.05,
    "video_file": "podcast_ep20_20261104_070157.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 21,
    "topic": "Das leise Murmeln der Natur: Den Klang der Stille in Geräuschen finden",
    "date": "2026-11-05T07:44:04.020411",
    "duration_sec": 1189.75,
    "duration_min": 19.83,
    "video_file": "podcast_ep21_20261105_072853.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 22,
    "topic": "Das leise Summen des Herzens: Den eigenen Rhythmus finden und ehren",
    "date": "2026-11-06T07:44:39.066217",
    "duration_sec": 1132.68,
    "duration_min": 18.88,
    "video_file": "podcast_ep22_20261106_072728.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 23,
    "topic": "Das leise Leuchten der Selbstakzeptanz: Dich selbst annehmen, genau so, wie du bist",
    "date": "2026-11-07T06:58:45.099063",
    "duration_sec": 1209.58,
    "duration_min": 20.16,
    "video_file": "podcast_ep23_20261107_064014.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 24,
    "topic": "Das leise Atmen der Erde: Erdung im Hier und Jetzt finden",
    "date": "2026-11-08T07:02:17.765555",
    "duration_sec": 1153.17,
    "duration_min": 19.22,
    "video_file": "podcast_ep24_20261108_064558.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 25,
    "topic": "Das leise Pulsieren des Lebens: Im sanften Rhythmus des Alltags ankommen",
    "date": "2026-11-09T07:33:46.995056",
    "duration_sec": 1060.32,
    "duration_min": 17.67,
    "video_file": "podcast_ep25_20261109_071759.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 26,
    "topic": "Das leise Schwingen der Gefühle: Sanfter Umgang mit inneren Wellen",
    "date": "2026-11-10T08:14:14.589799",
    "duration_sec": 1248.1,
    "duration_min": 20.8,
    "video_file": "podcast_ep26_20261110_075447.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 27,
    "topic": "Das leise Glitzern der Zufälle: Die Magie des Unerwarteten entdecken",
    "date": "2026-11-11T07:35:59.574624",
    "duration_sec": 1183.3,
    "duration_min": 19.72,
    "video_file": "podcast_ep27_20261111_071808.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 28,
    "topic": "Das leise Flüstern der Morgenröte: Den Tag sanft begrüßen",
    "date": "2026-11-12T08:06:40.464005",
    "duration_sec": 1142.21,
    "duration_min": 19.04,
    "video_file": "podcast_ep28_20261112_074830.mp4",
    "platform": "Facebook"
  }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = PODCAST_HISTORY; }
if (typeof window !== 'undefined') { window.PODCAST_HISTORY = PODCAST_HISTORY; }
