// Maps charm slug to global rank position (1 = most popular)
// Charms not listed here get ranked after all listed ones, in id order
export const globalRanking: Record<string, number> = {
  // ── TOP 15 ── Instantly recognizable worldwide, billions of people ──────────
  "evil-eye-middle-east": 1,        // ~3B people across Turkey/Greece/MENA/Latin America/global fashion
  "four-leaf-clover": 2,            // Universal Western symbol, known on every continent
  "horseshoe": 3,                   // Pan-European + Americas, ancient and near-universal
  "maneki-neko": 4,                 // Japan → all of Asia → global via restaurants/shops
  "hamsa-hand": 5,                  // MENA + North Africa + global fashion (also listed as hand-of-fatima)
  "dreamcatcher": 6,                // Native American origin → sold worldwide in every souvenir shop
  "evil-eye-bracelet-american": 7,  // Massive global fashion trend of the 2010s–2020s
  "jade": 8,                        // China + SE Asia, 8000+ years, enormous diaspora reach
  "laughing-buddha": 9,             // All of East/SE Asia + global via restaurants/shops
  "elephant-indian": 10,            // India + Thailand + Africa + global decor
  "red-envelope": 11,               // China + all East/SE Asia, ~2B people use annually
  "lucky-bamboo": 12,               // Global houseplant sold in every garden center worldwide
  "scarab-beetle": 13,              // Egypt + global recognition via archaeology/museums
  "daruma-doll": 14,                // Japan, growing global popularity
  "om-symbol": 15,                  // India + global via yoga/meditation/wellness culture

  // ── TOP 16–50 ── Very widely known, strong cross-cultural penetration ───────
  "rabbits-foot": 16,               // Americas + Europe, classic lucky charm
  "ladybug": 17,                    // Europe + Americas, instantly recognized
  "lucky-number-seven": 18,         // Global pop culture — dice, slot machines, everywhere
  "wishbone": 19,                   // Anglo-American, Thanksgiving/Christmas tradition
  "lucky-penny": 20,                // English-speaking world, "find a penny pick it up"
  "ankh": 21,                       // Ancient Egypt, global recognition via pop culture
  "dragon": 22,                     // China + all of East Asia, iconic worldwide
  "goldfish": 23,                   // China + global via feng shui, nearly universal
  "money-frog": 24,                 // China + SE Asia, ubiquitous in shops/restaurants
  "koi-fish": 25,                   // Japan + China + global pond/tattoo culture
  "rose-quartz": 26,                // Global crystal healing trend, sold everywhere
  "citrine-crystal": 27,            // Global crystal trend, "merchant's stone"
  "amethyst": 28,                   // Global, most popular purple crystal
  "key-charm": 29,                  // Europe + Americas, universal symbol of luck/opportunity
  "star-of-david": 30,              // Jewish communities worldwide, widely recognized
  "celtic-cross": 31,               // ~2.4B Christians worldwide; most widely worn religious symbol
  "crucifix": 32,                   // Catholic world (~1.3B), extremely common
  "rosary-beads": 33,               // Catholic global, one of the most common religious objects
  "ganesha-figurine": 34,           // India + Hindu diaspora + global (obstacle-remover universally recognized)
  "lucky-dice": 35,                 // Western pop culture, fuzzy dice, casino culture
  "red-string": 36,                 // Jewish/Kabbalah origin → global celebrity adoption
  "hand-of-fatima": 37,             // Islamic world + global (variant of hamsa)
  "chimney-sweep": 38,              // Germany + Central Europe, strong luck tradition
  "lucky-pig": 39,                  // Germany + Central Europe, piggy banks worldwide
  "mistletoe": 40,                  // Northern Europe + Americas, Christmas tradition
  "mala-beads": 41,                 // Islamic world (1.8B) + Buddhist + Christian, near-universal
  "st-christopher-medal": 42,       // Catholic world, patron of travelers, enormous reach
  "guardian-angel-pin": 43,         // Western/Christian, mass-market gift item
  "peacock-feather": 44,            // India + global via decorative culture
  "turquoise": 45,                  // Native American + global gemstone
  "jamaican-doctor-bird": 46,       // Jamaica, symbol of the Caribbean
  "feather-charm": 47,              // Global, many traditions
  "coral": 48,                      // Mediterranean + global, ancient
  "pearl": 49,                      // Global, centuries of tradition
  "tree-of-life": 50,               // Cross-cultural (Celtic/Jewish/Norse/Islamic), global art motif

  // ── TOP 51–100 ── Well-known globally, strong regional depth ────────────────
  "turkish-nazar": 51,
  "greek-mati-evil-eye": 52,
  "hamsa-indian-version": 53,
  "hamsah-jewish": 54,
  "eye-of-horus": 55,              // Ancient Egypt, globally recognized
  "eye-of-providence": 56,         // Freemason / US dollar, global conspiracy culture
  "phoenix": 57,                   // China + Greece + global mythology
  "yin-yang": 58,                  // China → global philosophy/pop culture icon
  "bagua-mirror": 59,              // Feng shui, Chinese diaspora worldwide
  "claddagh-ring": 60,             // Irish, enormous diaspora reach
  "leprechaun": 61,                // Irish + global Saint Patrick's Day culture
  "horseshoe-american": 62,
  "four-leaf-clover-american": 63,
  "lotus-flower": 64,              // Hindu/Buddhist, global yoga/wellness
  "lotus-egyptian": 65,
  "buddhist-prayer-beads": 66,
  "number-seven": 67,
  "lucky-cat-paw": 68,             // Japanese lucky cat variant
  "lucky-cat-eye-marble": 69,
  "lucky-cat-european": 70,
  "endless-knot-buddhist": 71,
  "dharma-wheel": 72,
  "white-tara": 73,
  "tibetan-singing-bowl": 74,      // Global meditation market
  "nepalese-prayer-flags": 75,     // Global via Nepal tourism, very recognizable
  "nepalese-prayer-wheel": 76,
  "bodhi-tree-leaf": 77,
  "medicine-buddha": 78,
  "rudraksha-beads": 79,           // India + Hindu/yogic diaspora worldwide
  "bindi": 80,                     // India, globally recognized fashion item
  "shankha-conch-shell": 81,       // Hindu + Buddhist, widespread
  "kalasha-sacred-pot": 82,
  "kumkum-tilak": 83,
  "tulsi-plant": 84,
  "diya-lamp": 85,                 // Diwali, globally recognized
  "diwali-lakshmi-coin": 86,
  "navaratna-nine-gems": 87,
  "yantra": 88,
  "saudi-sword-charm": 89,         // Arabian Peninsula cultural symbol
  "mexican-milagros": 90,          // Mexico + Latin America, global folk art
  "day-of-the-dead-skull-calavera": 91, // Global pop culture via Día de Muertos
  "our-lady-of-guadalupe-medal": 92,
  "copal-incense-charm": 93,
  "medicine-bag": 94,
  "arrowhead": 95,
  "totem-pole-charm": 96,
  "thunderbird": 97,
  "inuit-inukshuk": 98,
  "canadian-maple-leaf": 99,
  "boomerang": 100,

  // ── TOP 101–150 ── Strong regional recognition, growing global reach ─────────
  "viking-rune-stones": 101,
  "thors-hammer": 102,             // Norse + global via Marvel/pop culture
  "helm-of-awe": 103,
  "vegvisir": 104,
  "yggdrasil": 105,
  "triskele": 106,                 // Celtic, global
  "pentacle": 107,                 // Wicca/pagan, global
  "ouroboros": 108,                // Ancient, global symbolism
  "infinity-symbol": 109,          // Modern global symbol
  "spiral": 110,
  "labyrinth": 111,
  "evil-eye-candle": 112,
  "evil-eye-malocchio": 113,
  "cornicello": 114,               // Italian horn, Italian diaspora worldwide
  "italian-cricket": 115,
  "maori-fish-hook-hei-matau": 116,
  "maori-hei-tiki": 117,
  "maori-greenstone-pounamu": 118,
  "maori-koru-spiral": 119,
  "maori-twist-pikorua": 120,
  "tibetan-dzi-bead": 121,
  "pixiu": 122,                    // Chinese wealth charm, growing global popularity
  "dragon-turtle": 123,
  "ru-yi-scepter": 124,
  "chinese-bat": 125,              // Feng shui, Chinese diaspora
  "chinese-ingot": 126,
  "chinese-knot": 127,
  "double-fish": 128,
  "double-happiness": 129,
  "money-plant-pachira": 130,
  "money-tree": 131,
  "wu-lou": 132,
  "carp-gate": 133,
  "feng-shui-compass": 134,
  "maneki-neko-black": 135,
  "lucky-bamboo-american": 136,
  "beckoning-cat-coin": 137,
  "fortune-cat-bell": 138,
  "fu-dogs": 139,
  "haetae": 140,                   // Korean
  "korean-norigae": 142,
  "korean-dokkaebi": 143,
  "pujok": 144,
  "mugunghwa": 145,
  "samjogo": 146,
  "paper-crane": 147,              // Japan, global via origami culture
  "omamori": 148,
  "ema": 149,
  "koinobori": 150,

  // ── TOP 151–200 ── Moderately known globally, strong in home regions ──────────
  "sensu": 151,                    // Japanese folding fan, global cultural export
  "tanuki": 152,
  "tengu-mask": 153,
  "inu-hariko": 154,
  "kokeshi-doll": 155,
  "lucky-mallet": 156,
  "sarubobo": 157,
  "teru-teru-bozu": 158,
  "shisa": 159,
  "torii-gate": 160,
  "lucky-bamboo-plant": 161,
  "peach-of-immortality": 162,
  "mystic-knot": 163,
  "eternal-knot": 164,
  "three-legged-toad": 165,
  "golden-toad": 166,
  "vietnamese-dragon-turtle": 167,
  "vietnamese-lucky-cat": 168,
  "vietnamese-tet-kumquat-tree": 169,
  "cambodian-naga": 170,
  "erawan-three-headed-elephant": 171,
  "thai-buddha-amulet": 172,
  "thai-spirit-house": 173,
  "thai-garland-phuang-malai": 174,
  "nang-kwak-thai-beckoning-lady": 175,
  "sak-yant-charm": 176,
  "thai-palad-khik": 177,
  "phra-phrom-thai-brahma": 178,
  "balinese-barong-mask": 179,
  "indonesian-keris-dagger": 180,
  "javanese-batik-symbols": 181,
  "malaysian-wau-kite": 182,
  "filipino-anting-anting": 183,
  "khamsa-five": 184,              // North African variant of hamsa
  "iranian-simurgh": 185,
  "persian-farvahar": 186,
  "persian-evil-eye": 187,
  "persian-turquoise": 188,
  "persian-haft-sin": 189,
  "iranian-haft-sin-plate": 190,
  "arabian-dallah": 191,
  "arabian-falcon": 192,
  "arabian-horse": 193,
  "date-palm": 194,
  "dead-sea-salt-charm": 195,
  "turkish-ceramic-tulip-tile": 196,
  "turkish-ceramic-hand": 197,
  "turkish-evil-eye-tree": 198,
  "turkish-whirling-dervish": 199,
  "turkish-tulip": 200,

  // ── TOP 201–260 ── Recognized by enthusiasts, strong in their regions ─────────
  "islamic-crescent": 201,
  "tasbih-prayer-beads": 202,
  "jordanian-mosaic": 203,
  "ojo-turco": 204,
  "lebanese-cedar": 205,
  "syrian-jasmine": 206,
  "bahraini-pearl": 207,
  "emirati-gold-coin": 208,
  "kuwaiti-dhow-boat": 209,
  "omani-khanjar-dagger": 210,
  "qatari-oryx": 211,
  "yemeni-jambiya": 212,
  "iraqi-palm-tree": 213,
  "moroccan-star": 214,
  "moroccan-tagine-charm": 215,
  "berber-fibula": 216,
  "berber-cross": 217,
  "berber-carpet-symbol": 218,
  "tunisian-fish": 219,
  "tunisian-hand-of-fatima-door-knocker": 220,
  "algerian-fennec": 221,
  "libyan-crescent": 222,
  "cartouche": 223,                // Egyptian, global via tourism
  "egyptian-blue-faience": 224,
  "egyptian-cat-bastet": 225,
  "egyptian-pyramid": 226,
  "djed-pillar": 227,
  "sphinx-charm": 228,
  "wadjet-eye": 229,
  "mediterranean-scarab": 230,
  "ankole-cattle-horn": 231,
  "cowrie-shell": 232,             // Africa + diaspora globally
  "cowrie-shells": 233,
  "west-african-juju-charm": 234,
  "gris-gris-bag": 235,
  "mojo-hand": 236,
  "voodoo-doll-protective": 237,
  "candomble-beads": 238,
  "haitian-veve": 239,
  "cuban-elegua": 240,
  "yoruba-orisha-charm": 241,
  "yoruba-ibeji-twin-figure": 242,
  "igbo-ikenga-figure": 243,
  "akan-goldweight": 244,
  "ashanti-golden-stool-symbol": 245,
  "gye-nyame-adinkra": 246,
  "sankofa-adinkra": 247,
  "dwennimmen-adinkra": 248,
  "kente-cloth-charm": 249,
  "african-mask": 250,
  "dogon-kanaga-mask": 251,
  "senufo-bird-ivory-coast": 252,
  "nkondi-nail-figure": 253,
  "congolese-power-figure": 254,
  "maasai-beaded-necklace": 255,
  "kenyan-maasai-shield": 256,
  "east-african-ostrich-egg": 257,
  "rwandan-imigongo": 258,
  "ugandan-bark-cloth": 259,
  "tanzanian-tingatinga-art": 260,

  // ── TOP 261–300 ── Known in specific communities, notable cultural artifacts ───
  "african-elephant-tusk-carving": 261,
  "baobab-tree-charm": 262,
  "botswana-zebra-charm": 263,
  "namibian-welwitschia": 264,
  "south-african-protea-flower": 265,
  "xhosa-beadwork": 266,
  "zulu-love-letter-beadwork": 267,
  "zulu-shield": 268,
  "swazi-shield": 269,
  "ndebele-doll": 270,
  "sangoma-bone-set": 271,
  "muti-charm-bag": 272,
  "ethiopian-coffee-bean": 273,
  "ethiopian-coptic-cross": 274,
  "nigerian-coral-bead": 275,
  "ghanaian-fertility-doll-akuaba": 276,
  "cameroon-grasslands-mask": 277,
  "liberian-country-devil-mask": 278,
  "sierra-leone-nomoli-stone": 279,
  "djembe-drum-charm": 280,
  "tuareg-silver-pendant": 281,
  "tuareg-cross": 282,
  "benin-bronze-plaque": 283,
  "lesotho-basotho-hat": 284,
  "zambian-eagle": 285,
  "malagasy-aye-aye-charm": 286,
  "malagasy-zebu-horn": 287,
  "fijian-tabua-whale-tooth": 288,
  "samoan-tapa-cloth": 289,
  "tongan-ngatu": 290,
  "papua-new-guinea-bird-of-paradise": 291,
  "didgeridoo": 292,
  "australian-aboriginal-dot-painting": 293,
  "australian-opal": 294,
  "wattle-flower": 295,
  "kangaroo-paw": 296,
  "platypus": 297,
  "uluru-stone": 298,
  "haida-raven": 299,
  "hawaiian-tiki": 300,

  // ── TOP 301–350 ── Niche cultural artifacts with passionate communities ─────────
  "hawaiian-kukui-nut-lei": 301,
  "hawaiian-plumeria": 302,
  "aztec-sun-stone": 303,
  "quetzalcoatl-feather": 304,
  "mayan-jade": 305,
  "guatemalan-jade": 306,
  "peruvian-tumi-knife": 307,
  "peruvian-chakana-cross": 308,
  "peruvian-bull-torito-de-pucara": 309,
  "ekeko-bolivian-god-of-abundance": 310,
  "llama-figurine": 311,
  "argentinian-gaucho-knife": 312,
  "bahia-ribbon-bonfim": 313,
  "brazilian-figa-hand": 314,
  "brazilian-pomba-gira": 315,
  "nopal-cactus-charm": 316,
  "mexican-marigold": 317,
  "dominican-faceless-doll": 318,
  "puerto-rican-vejigante-mask": 319,
  "trinidadian-carnival-mask": 320,
  "guyanese-jaguar-tooth": 321,
  "venezuelan-devil-dancer-mask": 322,
  "ecuadorian-panama-hat": 323,
  "colombian-el-dorado-charm": 324,
  "colombian-tumbaga": 325,
  "chilean-copihue-flower": 326,
  "huipil-textile-charm": 327,
  "ojo-de-dios": 328,
  "rain-stick": 329,
  "santo-nino-figure": 331,
  "dala-horse": 332,               // Swedish, global via IKEA/Scandinavian design
  "edelweiss": 333,                // Alpine, global via Sound of Music
  "swiss-cowbell": 334,
  "dutch-wooden-shoes": 335,
  "fleur-de-lis": 336,
  "coq-gaulois": 337,
  "muguet": 338,
  "azulejo-tile-charm": 339,
  "portuguese-rooster": 340,       // Barcelos rooster, global tourism icon
  "portuguese-sardine": 341,
  "spanish-bull-charm": 342,
  "italian-corno": 343,
  "cornucopia": 344,
  "corn-dolly": 345,
  "acorn": 346,                    // Germanic/British, symbol of potential
  "white-heather": 347,            // Scottish, global via tourism
  "anchor-charm": 348,
  "ship-wheel": 349,
  "compass-rose": 350,

  // ── TOP 351–400 ── Lesser-known but culturally significant ────────────────────
  "griffin": 351,
  "unicorn": 352,
  "caduceus": 353,
  "maltese-cross": 354,
  "matryoshka-nesting-doll": 355,  // Russia, global via tourism/kitsch
  "faberge-egg-charm": 356,
  "russian-firebird": 357,
  "domovoy-house-spirit": 358,
  "podkova-russian-horseshoe": 359,
  "baba-yaga-charm": 360,
  "ukrainian-pysanka": 361,
  "ukrainian-motanka-doll": 362,
  "ukrainian-sunflower": 363,
  "bulgarian-martenitsa": 364,
  "romanian-martisor": 365,
  "romanian-evil-eye": 366,
  "croatian-licitar-heart": 367,
  "czech-bohemian-crystal": 368,
  "czech-good-soldier-svejk": 369,
  "slovak-linden-tree": 370,
  "slovenian-linden-leaf": 371,
  "polish-kurpie-star": 372,
  "polish-boleslawiec-pottery-charm": 373,
  "polish-white-eagle": 374,
  "latvian-namejs-ring": 375,
  "estonian-cornflower": 376,
  "lithuanian-stork": 377,
  "belarusian-stork": 378,
  "albanian-double-eagle": 379,
  "macedonian-poppy": 380,
  "bosnian-copper-plate": 381,
  "montenegrin-olive": 382,
  "serbian-opanak-shoe": 383,
  "moldovan-grape-vine": 384,
  "armenian-pomegranate": 385,
  "armenian-khachkar-cross": 386,
  "georgian-grapevine-cross": 387,
  "azerbaijani-pomegranate": 388,
  "kazakh-eagle": 389,
  "kazakh-tunduk": 390,
  "uzbek-suzani": 391,
  "basque-lauburu": 392,
  "hungarian-tulip-motif": 393,
  "hungarian-horseshoe": 394,
  "gluckspfennig": 395,
  "schornsteinfeger": 396,
  "norwegian-troll": 397,
  "troll-doll": 398,
  "finnish-kuksa": 399,
  "greek-olive-branch": 400,

  // ── TOP 401–450 ── Specialist knowledge, deep cultural meaning ────────────────
  "greek-pomegranate": 401,
  "greek-worry-beads-komboloi": 402,
  "cypriot-olive": 403,
  "blue-ceramic-tile": 404,
  "bulgarian-rose": 405,
  "heart-charm": 406,
  "circle-ring": 407,
  "triangle-charm": 408,
  "five-pointed-star": 409,
  "peace-sign": 410,
  "sun-charm": 411,
  "moon-phase-charm": 412,
  "eclipse-charm": 413,
  "north-node-charm": 414,
  "mars-charm": 415,
  "venus-charm": 416,
  "saturn-return-talisman": 417,
  "mercury-retrograde-protection": 418,
  "zodiac-pendant": 419,
  "birthstone-charm": 420,
  "angel-charm": 421,
  "lucky-coins": 422,
  "patron-saint-medals": 423,
  "miraculous-medal": 424,
  "scapular": 425,
  "st-benedict-medal": 426,
  "menorah": 427,
  "mezuzah": 428,
  "israeli-chai-symbol": 429,
  "pomegranate-jewish": 430,
  "red-kabbalah-string": 431,
  "holy-water-vial": 432,
  "dream-pillow": 433,
  "talisman-pouch": 434,
  "lodestone-magnetite": 435,
  "pyrite-fools-gold": 436,
  "lapis-lazuli": 438,
  "hematite": 439,
  "obsidian": 440,
  "black-tourmaline": 441,
  "clear-quartz": 442,
  "selenite": 443,
  "labradorite": 444,
  "moonstone": 445,
  "fluorite": 446,
  "aventurine": 447,
  "tiger-s-eye": 448,
  "malachite": 449,
  "carnelian": 450,

  // ── TOP 451–495 ── Rare, highly specialized, or very regional ─────────────────
  "sodalite": 451,
  "aquamarine": 452,
  "alexandrite": 453,
  "amber": 454,
  "garnet": 455,
  "peridot": 456,
  "topaz": 457,
  "ruby": 458,
  "emerald": 459,
  "sapphire": 460,
  "opal": 461,
  "jet-stone": 462,
  "bloodstone": 463,
  "cat-s-eye-stone": 464,
  "sri-lankan-moonstone": 465,
  "aloe-vera-plant": 466,
  "camphor": 467,
  "coconut": 468,
  "turmeric-root-charm": 469,
  "mango-leaves": 470,
  "peepal-tree-leaf": 471,
  "bael-leaf": 472,
  "sindoor-box": 473,
  "kolam-rangoli": 474,
  "south-asian-evil-eye": 475,
  "indian-evil-eye-nazar-battu": 476,
  "myanmar-chinthe-lion": 477,
  "takrut-scroll": 478,
  "surinamese-maroon-charm": 479,
  "uli-body-art-charm": 482,
  "lucky-bamboo-wish-box": 483,
  "baltic-amber": 484,
  "horseshoe-crab": 485,
  "horseshoe-crab-shell": 486,
  "salt-lamp": 487,
  "wind-chime": 488,
  "hawthorn-blossom": 489,
  "badger-tooth": 490,
  "robin-redbreast": 491,
  "persian-paisley": 492,
  "fuzzy-dice": 493,
  "swastika-hindu-auspicious": 494,
};
