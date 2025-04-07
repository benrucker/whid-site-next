import { Catalog } from "./types/catalogTypes";

export const CATALOG: Catalog = {
  featured: {
    season: "s2",
    id: "unset",
    description: "",
  },
  seasons: {
    s1: {
      name: "Season 1",
      episodes: [
        {
          title: "The One We Don't Talk About",
          releaseDate: "4/14/2020",
          id: "1",
          episodeNumber: 1,
          parts: [
            {
              members: "Brendan, Ethan, Markwood, Trent",
              timestamp: "0:00",
            },
            {
              members: "Ben, Russell, Wyatt",
              timestamp: "4:22",
            },
            {
              members: "Chris, Kian, Yoni",
              timestamp: "9:32",
            },
          ],
        },
        {
          title: "Get Isekaied",
          releaseDate: "4/21/2020",
          id: "2",
          episodeNumber: 2,
          parts: [
            {
              members: "Brendan, Juan, Markwood, Thomas",
              timestamp: "0:31",
            },
            {
              members: "Ben, Josh, Kian, Russell",
              timestamp: "5:04",
            },
            {
              members: "Ethan, Trent, Tristan, Wyatt",
              timestamp: "9:11",
            },
            {
              members: "Trent",
              timestamp: "14:18",
            },
          ],
        },
        {
          title: "SIMP",
          releaseDate: "5/12/2020",
          id: "3",
          episodeNumber: 3,
          parts: [
            {
              members: "Ben, Josh, Markwood",
              timestamp: "0:00",
            },
            {
              members: "Brendan, Kian, Wyatt",
              timestamp: "4:59",
            },
            {
              members: "Ethan, Gabe, Jackson",
              timestamp: "10:59",
            },
            {
              members: "Chris, Jacob, Trent",
              timestamp: "15:14",
            },
          ],
        },
        {
          title: "Attack On Tacos",
          releaseDate: "6/4/2020",
          id: "4",
          episodeNumber: 4,
          parts: [
            {
              members: "Ethan, Tristan, Yoni",
              timestamp: "1:30",
            },
            {
              members: "Ben, Kian, Wyatt",
              timestamp: "6:35",
            },
            {
              members: "Trent",
              timestamp: "11:47",
            },
            {
              members: "Brendan, Chris, Jackson, Markwood",
              timestamp: "16:36",
            },
          ],
        },
        {
          title: "Jojo's Smashing Adventure",
          releaseDate: "6/21/2020",
          id: "5",
          episodeNumber: 5,
          parts: [
            {
              members: "Ben, Brendan, Gabe, Markwood",
              timestamp: "1:32",
            },
            {
              members: "Jackson, Jacob, Juan, Russell",
              timestamp: "6:40",
            },
            {
              members: "Sergei, Trent, Tristan, Wyatt",
              timestamp: "11:26",
            },
            {
              members: "Ben Hay, Chris, Ethan, Kian, Yoni",
              timestamp: "17:55",
            },
          ],
        },
        {
          title: "My Saucy AAAAcademia",
          releaseDate: "7/12/2020",
          id: "6",
          episodeNumber: 6,
          parts: [
            {
              members: "Brendan, Chris, Josh, Kian, Trent",
              timestamp: "2:18",
            },
            {
              members: "Ben, Gabe, Jackson, Josh, Tristan",
              timestamp: "7:07",
            },
            {
              members: "Ben Hay, Ethan, Jacob, Markwood, Ross",
              timestamp: "12:48",
            },
            {
              members: "Juan, Russell, Wyatt, Yoni",
              timestamp: "17:42",
            },
          ],
        },
        {
          title: "The OTHER One We Don't Talk About",
          releaseDate: "8/3/2020",
          id: "7",
          episodeNumber: 7,
          parts: [
            {
              members: "Ethan, Josh, Juan, Rob, Tristan",
              timestamp: "0:42",
            },
            {
              members: "Chris, Jacob, Markwood, Wyatt",
              timestamp: "6:27",
            },
            {
              members: "Ben, Ben Hay, Sergei, Trent, Yoni",
              timestamp: "12:02",
            },
            {
              members: "Brendan, Gabe, Jackson, Kian, Ross",
              timestamp: "18:40",
            },
          ],
        },
        {
          title: "Snord",
          releaseDate: "8/29/2020",
          id: "8",
          episodeNumber: 8,
          parts: [
            {
              members: "Ben, Ethan, Juan, Kian, Markwood",
              timestamp: "2:16",
            },
            {
              members: "Chris, Josh, Ross, Russell, Wyatt",
              timestamp: "8:29",
            },
            {
              members: "Ben Hay, Jackson, Trent, Yoni",
              timestamp: "15:11",
            },
          ],
        },
      ],
    },
    s2: {
      name: "Season 2",
      episodes: [
        {
          title: "whidubbed on Ice",
          releaseDate: "7/8/2021",
          id: "1",
          episodeNumber: 1,
          parts: [
            {
              members: "Chris, Juan, Markwood, Russell, Sergei, Wyatt",
              timestamp: "0:25",
            },
            {
              members: "Gabe, Jacob, Jackson, Josh, Tristan",
              timestamp: "4:44",
            },
            {
              members: "Ben Rucker, Ethan, Kian, Ben Hay, James, Alex, Trent",
              timestamp: "9:28",
            },
          ],
          description:
            "In another spectacularly stupid episode, the gang of ‘whidubbed’ dips their greasy toes into parodying the shambles of reality with multiple segments of ‘Planet Earth.’ Monkees and Cheetos and Club Penguinos, oh my!",
        },
        {
          title: "Jacob's Special Sauce",
          releaseDate: "5/24/2022",
          id: "2",
          episodeNumber: 2,
          parts: [
            {
              members: "Alex, Gabe, James, Juan, Ross, Tristan",
              timestamp: "1:31",
            },
            {
              members: "Ben Hay, Ethan, Jackson, Lyn, Wyatt",
              timestamp: "7:47",
            },
            {
              members: "Ben Rucker, Chris, Davon, Josh, Kyle, Markwood, Sergei",
              timestamp: "15:57",
            },
            {
              members: "Baru, Brendan, Jacob, Kian, Luq, Trent",
              timestamp: "23:20",
            },
          ],
          description:
            "You thought we were done?!\nYou thought you could escape?!\nYou can never escape the dub!\nNow shut up and eat your ravioli, as the cuckmeisters cook up another toxic JoJo episode for the main course!",
        },
        {
          title: "The Majors F###ing Died",
          releaseDate: "7/4/2023",
          id: "3",
          episodeNumber: 3,
          parts: [
            {
              members:
                "Bee, Ben Hay, Chris, Gabe, Jackson, Jacob, Josh, Juan, Kelly, Kyle, Maska, Markwood, Sergei, Trent",
              timestamp: "2:43",
            },
          ],
          description:
            "The whid majors forgot to make an April Fool’s joke in the server this year, so the minors made one for them (3 months late).\n\nAll hell breaks loose in the Metaverse, as the minors bring you a special majorless dub of Yu-Gi-Oh!",
        },
        {
          title: "Jacob's Zpecial Zauce",
          releaseDate: "1/14/2024",
          id: "4",
          episodeNumber: 4,
          parts: [
            {
              members: "Jackson, Tristan, Josh, Juan, Gabe",
              timestamp: "2:16",
            },
            {
              members: "Ethan, Kyle, Markwood, Lyn, Kevin",
              timestamp: "6:28",
            },
            {
              members: "Trent, Wyatt, Ben Hay, James, Kian",
              timestamp: "13:14",
            },
            {
              members: "Jacob, Ben Rucker, Sergei, Chris, Maska",
              timestamp: "20:20",
            },
          ],
          description:
            '"I\'m not fucking planning another episode of what have i dubbed."\n- Jacob Charles Mallory 2022\n\nAnd then he did anyway.',
        },
      ],
    },
    special: {
      name: "Specials",
      episodes: [
        {
          title: "The Spooky Fourth of July",
          releaseDate: "6/5/2021",
          id: "halloween",
          parts: [
            {
              members: "Ben, Ben Hay, Chris, Ethan, James, Juan, Sergei",
              timestamp: "1:12",
            },
            {
              members: "Jackson, Kian, Markwood, Tony, Tristan, Yoni",
              timestamp: "10:39",
            },
            {
              members: "Gabe, Jacob, Josh, Luq, Ross, Trent, Wyatt",
              timestamp: "19:08",
            },
          ],
          description:
            "Once upon a time, Trent got his Discord buddies together, in hopes of creating the most spectacularly spooky parody dub for Halloween. Unfortunately, nobody working on it had a calendar. Now, 8 months later, the boys have finally finished their magnum opus about fruitless war, sexual obsession and underage drug abuse. Join the gang of ‘whidubbed’ as they present their version of.... wait, what anime did we dub for this special?",
        },
      ],
    },
    extra: {
      name: "Extras",
      episodes: [
        {
          title: "The Best of whidubbed [Season One]",
          id: "s1-bestof",
        },
        {
          title: "All whidubbed Season One Episodes at Once",
          id: "all-s1-at-once",
        },
        {
          title: "Film Students React to WHID 7",
          id: "film-students-ep7",
        },
        {
          title: "get that shit outta my face",
          id: "shit",
        },
        {
          title: "i'm doing this instead of finals",
          id: "finals",
        },
        {
          title: "kian and his sick beats",
          id: "kian-sick-beats",
        },
        {
          title: "let.me.leave.",
          id: "let-me-leave",
        },
        {
          title: "qu'est-ce que j'ai doublé EP 1 - français",
          id: "french",
        },
        {
          title: "What Have I Dubbed Out of Context",
          id: "ooc",
        },
        {
          title: "whid 8 but i dont know what happened",
          id: "what-happened",
        },
        {
          title: "WHID Season 1 in 30 Seconds",
          id: "30-seconds",
        },
        {
          title: "WHID8xMyHeroAcademia Ending Comparison",
          id: "ep8-ending-comp",
        },
        {
          title: "WHIDubbed EP 6 But It's Just Screaming",
          id: "screaming",
        },
        {
          title: "Youre laughing... A simp just died and youre laughing...",
          id: "simp",
        },
        {
          title: "whid perfectly cut screams (s1)",
          id: "screams",
        },
        {
          title: "@majors",
          id: "majors",
        },
        {
          title: "WHIDubbed Google Translate",
          id: "translated",
        },
        {
          title: "whidubbed but only the forbidden word",
          id: "forbidden-word",
        },
        {
          title: "whidubbed but it's only transitions",
          id: "transitions",
        },
        {
          title: "whidubbed But It's Just All the Swear Words",
          id: "swears",
        },
        {
          title: "whidubbed Out of Context 2",
          id: "context2",
        },
        {
          title: "whidubbed Outtakes",
          id: "outtakes",
        },
        {
          title: "Film Students React to whidubbed Halloween Special",
          id: "film-students-halloween",
        },
        {
          title: "pronouns",
          id: "pronoun",
        },
        {
          title: "The Majors F###ing Died [Outtakes]",
          id: "majors-f---ing-died",
        },
        {
          title: "Edited by Mr. Sloan",
          id: "edited",
          chapters: [
            {
              label: "INTRO",
              timestamp: "00:00:26",
            },
            {
              label: "WHAT I USE",
              timestamp: "00:02:54",
              subChapters: [
                { label: "Editing Softwares", timestamp: "00:04:07" },
                {
                  label: "Hard Drives + Organizing",
                  timestamp: "00:09:46",
                },
                {
                  label: "Screen Capture Devices",
                  timestamp: "00:13:21",
                },
                { label: "Audio Interface", timestamp: "00:14:47" },
                {
                  label: "Exporting + Encoding",
                  timestamp: "00:15:29",
                },
                { label: "Back Straightener", timestamp: "00:16:50" },
              ],
            },
            {
              label: "PRINCIPLES",
              timestamp: "00:17:13",
              subChapters: [
                {
                  label: "Editing Basics",
                  timestamp: "00:17:18",
                  subChapters: [
                    {
                      label: "Fucking Around",
                      timestamp: "00:18:39",
                    },
                  ],
                },
                {
                  label: "Avoid Video Mistakes",
                  timestamp: "00:19:25",
                },
                {
                  label: "Always Keep an Eye on Your Audio",
                  timestamp: "00:20:46",
                  subChapters: [
                    {
                      label: "Don't Touch That Volume Button",
                      timestamp: "00:21:08",
                    },
                    {
                      label: "Compressors, Limiters, High Cut",
                      timestamp: "00:21:35",
                    },
                    {
                      label: "Faders Are Your Friend",
                      timestamp: "00:24:24",
                    },
                    {
                      label: "Audio Keyframing",
                      timestamp: "00:26:14",
                    },
                  ],
                },
                {
                  label: "Nesting Clips",
                  timestamp: "00:27:09",
                  subChapters: [
                    { label: "EQs", timestamp: "00:28:31" },
                    {
                      label: "ls Nesting a Necessity?",
                      timestamp: "00:29:45",
                    },
                    {
                      label: "Study Isolated Tracks",
                      timestamp: "00:32:53",
                    },
                  ],
                },
                {
                  label: 'The "Never Shut Up" Fallacy',
                  timestamp: "00:34:20",
                },
              ],
            },
            {
              label: "THEORIES & INFLUENCES",
              timestamp: "00:36:56",
              subChapters: [
                { label: "Where to Start", timestamp: "00:37:19" },
                {
                  label: "Every Video Has a Rhythm",
                  timestamp: "00:39:05",
                  subChapters: [
                    { label: "The Bad Guys", timestamp: "00:42:18" },
                    {
                      label: "Joke/Shot Ratio",
                      timestamp: "01:00:40",
                    },
                  ],
                },
                {
                  label: "The Visuals Don't Control You",
                  timestamp: "01:01:34",
                  subChapters: [
                    {
                      label: "Condensing + Rearranging",
                      timestamp: "01:02:53",
                    },
                    {
                      label: "Re-Animating the Source Material",
                      timestamp: "01:05:19",
                    },
                    {
                      label: "Cutting by the Blink",
                      timestamp: "01:12:01",
                    },
                  ],
                },
                {
                  label: "You Are You",
                  timestamp: "01:19:31",
                  subChapters: [
                    {
                      label: "Keep Track of Your Inspiration",
                      timestamp: "01:20:08",
                    },
                    {
                      label: "Music Selection",
                      timestamp: "01:22:46",
                    },
                  ],
                },
                {
                  label: "Controlled Chaos",
                  timestamp: "01:27:36",
                  subChapters: [
                    {
                      label: "Ed, Edd n Eddy",
                      timestamp: "01:28:58",
                    },
                    {
                      label: "Raiders of the Lost Ark",
                      timestamp: "01:33:23",
                    },
                  ],
                },
                {
                  label: "The Wall of Sound",
                  timestamp: "01:46:16",
                  subChapters: [
                    {
                      label: "Layering Sounds/Sound Objects",
                      timestamp: "01:50:48",
                    },
                    { label: "Echo/Reverb", timestamp: "01:57:27" },
                    {
                      label: "Mono vs. Stereo",
                      timestamp: "02:02:40",
                    },
                  ],
                },
                {
                  label: "Orchestrated Dialogue",
                  timestamp: "02:04:51",
                  subChapters: [
                    {
                      label: "The 3 Paces of Dialogue",
                      timestamp: "02:05:26",
                    },
                    { label: "Dragnet Style", timestamp: "02:08:04" },
                    { label: "Khonjin House", timestamp: "02:13:25" },
                  ],
                },
                {
                  label: "The Mel Blanc Effect (Noise Removal)",
                  timestamp: "02:15:41",
                },
                {
                  label: "No Theory Is Absolute",
                  timestamp: "02:18:31",
                },
              ],
            },
            { label: "CONCLUSION/MOTIVATION", timestamp: "02:21:24" },
          ],
        },
      ],
    },
  },
} as const;
