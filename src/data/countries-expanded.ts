export interface Country {
  name: string;
  slug: string;
  region: string;
  description: string;
  charmSlugs: string[];
  flag: string;
}

export const countries: Country[] = [
  // ── EAST ASIA ──────────────────────────────────────────────────────────────
  {
    name: "China",
    slug: "china",
    region: "East Asia",
    flag: "🇨🇳",
    description:
      "China's tradition of lucky charms is ancient and encyclopedic, shaped by Taoism, Buddhism, Confucianism, and thousands of years of folklore. Red envelopes (hongbao) transfer blessings and wealth at Lunar New Year, the money frog draws financial abundance, and jade — revered for over seven thousand years — is thought to protect its wearer and draw in good fortune. The pixiu, a mythical winged lion said to attract wealth but never release it, is a favorite talisman for investors.\n\nFeng shui principles govern the placement of bagua mirrors, wu-lou gourds, and wind chimes to channel auspicious qi. The laughing Buddha radiates contentment, goldfish in pairs symbolize prosperity, and the double happiness character adorns weddings. Lucky bamboo arrangements encode wishes through stalk count, and the dragon remains the supreme emblem of imperial power and celestial fortune.",
    charmSlugs: [
      "red-envelope", "money-frog", "three-legged-toad", "jade", "laughing-buddha",
      "goldfish", "lucky-bamboo", "dragon", "pixiu", "wu-lou", "bagua-mirror",
      "money-tree", "dragon-turtle", "chinese-knot", "lucky-coins", "fu-dogs",
      "double-happiness", "ru-yi-scepter", "peach-of-immortality", "chinese-bat",
      "mystic-knot", "koi-fish", "red-string", "chinese-ingot", "golden-toad",
      "carp-gate", "maneki-neko", "pearl",
    ],
  },
  {
    name: "Japan",
    slug: "japan",
    region: "East Asia",
    flag: "🇯🇵",
    description:
      "Japan has one of the world's richest cultures of lucky charms, weaving together Shinto beliefs, Buddhist philosophy, and centuries of folk tradition. The beckoning cat (maneki-neko) draws customers and wealth, the Daruma doll watches over wishes until fulfilled, and omamori — small brocade pouches from shrines and temples — are carried for specific purposes: safe travel, academic success, health, or romance. The paper crane carries the ancient promise that folding one thousand grants a single wish.\n\nKoi fish symbolize perseverance, tanuki statues attract business luck, and the teru-teru-bozu charm summons fair weather. Ema votive plaques are hung at shrines with written prayers, sensu fans represent good luck and prosperity, and the torii gate marks the sacred threshold between the ordinary world and the divine.",
    charmSlugs: [
      "maneki-neko", "daruma-doll", "omamori", "paper-crane", "koi-fish",
      "tanuki", "teru-teru-bozu", "inu-hariko", "sarubobo", "koinobori",
      "ema", "kokeshi-doll", "dragon", "lucky-bamboo", "beckoning-cat-coin",
      "lucky-coins", "sensu", "torii-gate", "lucky-mallet", "tengu-mask",
      "jade", "red-string",
    ],
  },
  {
    name: "South Korea",
    slug: "south-korea",
    region: "East Asia",
    flag: "🇰🇷",
    description:
      "South Korea's charm traditions blend shamanistic roots, Buddhist devotion, and vibrant folk culture. The dokkaebi — a mischievous goblin clutching a spiked club — can grant wishes and is depicted as a protective household spirit. The haetae, a mythical stone lion-dog, has guarded palace gates for centuries and remains a symbol of Seoul. The norigae, a traditional pendant worn on hanbok, is imbued with wishes for longevity, prosperity, and love.\n\nThe pujok — a yellow paper talisman inscribed with sacred characters — is pasted to doors and walls to invite good fortune and ward off evil. The eternal knot from Buddhist symbolism appears on Korean crafts and jewelry as an emblem of infinite good fortune, and the samjogo (three-legged crow) is an ancient solar symbol of the Goguryeo kingdom associated with power and divine favor.",
    charmSlugs: [
      "korean-norigae", "korean-dokkaebi", "haetae", "pujok", "eternal-knot",
      "samjogo", "mugunghwa", "lucky-bamboo", "dragon", "jade", "lotus",
      "lucky-coins", "koi-fish", "red-string",
    ],
  },
  {
    name: "Taiwan",
    slug: "taiwan",
    region: "East Asia",
    flag: "🇹🇼",
    description:
      "Taiwan preserves Chinese folk religion in its most elaborate living form, with more temples per square kilometer than almost anywhere on earth. The island blends Taoism, Buddhism, and local deity worship — the Matsu goddess protects sailors, the city god and earth god patron neighborhoods and businesses, and small shrines appear even inside convenience stores. Red is the dominant color of fortune, manifesting in envelopes, lanterns, and ribbons.\n\nLucky numbers govern every significant decision: phone numbers, license plates, and wedding dates are chosen with numerological care, with eight sought and four avoided. Jade bracelets passed through generations carry ancestral blessing, and the pixiu pendant is ubiquitous as a wealth magnet. The money frog, double happiness character, and dragon turtle reflect the deep continuity of Chinese lucky-charm culture that Taiwan has preserved with exceptional vitality.",
    charmSlugs: [
      "red-envelope", "pixiu", "jade", "money-frog", "three-legged-toad",
      "lucky-bamboo", "dragon", "goldfish", "wu-lou", "chinese-knot",
      "lucky-coins", "fu-dogs", "double-happiness", "bagua-mirror", "money-tree",
      "dragon-turtle", "laughing-buddha", "lotus", "maneki-neko", "koi-fish",
      "red-string", "chinese-ingot",
    ],
  },
  {
    name: "Mongolia",
    slug: "mongolia",
    region: "East Asia",
    flag: "🇲🇳",
    description:
      "Mongolia's spiritual life is shaped by Tengrism — the ancient shamanic tradition venerating the Eternal Blue Sky — and later by Tibetan Buddhism, which arrived in the sixteenth century and became the dominant faith. The horse is the central lucky animal of Mongolian culture: the wind horse (Lungta) appears on prayer flags strung across mountains and passes, believed to carry prayers to the heavens and bring prosperity to the household below.\n\nThe eternal knot (endless knot) is one of the Eight Auspicious Symbols of Tibetan Buddhism deeply embedded in Mongolian craft and ceremony, symbolizing infinite wisdom and compassion. Prayer wheels, prayer flags, and singing bowls are everyday tools of spiritual protection. The Soyombo symbol on the national flag — a fire, sun, moon, and abstract forms — encodes an entire cosmology of good fortune and national identity.",
    charmSlugs: [
      "prayer-flags", "prayer-wheel", "eternal-knot", "singing-bowl",
      "dzi-bead", "mala-beads", "dharma-wheel", "dragon", "lucky-coins",
    ],
  },
  {
    name: "Hong Kong",
    slug: "hong-kong",
    region: "East Asia",
    flag: "🇭🇰",
    description:
      "Hong Kong is arguably the world's most superstition-saturated city, where centuries of Cantonese folk religion coexist with a gleaming financial metropolis. Feng shui masters are consulted for every major building project, and the distinctive slant of the HSBC headquarters was reportedly designed to channel favorable qi. The money frog sits at cash registers across the city, and the pixiu charm hangs from rearview mirrors and briefcases alike.\n\nWong Tai Sin Temple draws thousands of daily worshippers shaking fortune sticks to divine their fate in business and love. The jade market at Yau Ma Tei buzzes with buyers seeking protective bangles and carved auspicious symbols. Red envelopes are given not only at Lunar New Year but at weddings, birthdays, and the opening of every new business.",
    charmSlugs: [
      "money-frog", "pixiu", "jade", "red-envelope", "lucky-coins",
      "bagua-mirror", "wu-lou", "dragon", "goldfish", "lucky-bamboo",
      "fu-dogs", "dragon-turtle", "three-legged-toad", "maneki-neko",
      "chinese-knot", "laughing-buddha", "koi-fish",
    ],
  },
  {
    name: "Macau",
    slug: "macau",
    region: "East Asia",
    flag: "🇲🇴",
    description:
      "Macau's identity as the 'Las Vegas of Asia' is inseparable from its deep belief in luck and fortune. Cantonese folk religion underpins daily life — temples to the sea goddess A-Ma (from whom Macau takes its name) and Kuan Tai (the god of wealth and war) attract constant worshippers seeking fortune at the gambling tables. The number eight is obsessively favored in casino culture, appearing in hotel room numbers, gaming tables, and license plates.\n\nThe money frog and pixiu are fixtures on casino floors and in shop windows, and feng shui consultants are employed by major casino resorts to ensure the flow of wealth-attracting qi. Red envelopes are exchanged at every New Year, and the lotus flower — Macau's emblem — symbolizes purity rising from muddy waters.",
    charmSlugs: [
      "money-frog", "pixiu", "jade", "red-envelope", "lucky-coins",
      "dragon", "goldfish", "wu-lou", "fu-dogs", "bagua-mirror",
      "laughing-buddha", "three-legged-toad", "lotus", "chinese-knot",
    ],
  },

  // ── SOUTH ASIA ─────────────────────────────────────────────────────────────
  {
    name: "India",
    slug: "india",
    region: "South Asia",
    flag: "🇮🇳",
    description:
      "India's tradition of sacred amulets and lucky symbols is among the oldest and most diverse on earth, rooted in Hinduism, Buddhism, Jainism, Islam, and countless regional folk traditions. Ganesha, the elephant-headed remover of obstacles, presides over new beginnings and is invoked before any significant undertaking. The om symbol encodes the sound of the universe, and the lotus represents spiritual purity rising above worldly suffering.\n\nThe navaratna (nine gems) setting is considered supremely auspicious, aligning the wearer with planetary energies. Rudraksha seeds from the Elaeocarpus tree are strung as mala beads and worn for protection and spiritual power. The diya oil lamp drives away darkness and evil, the conch shell (shankha) is blown at auspicious ceremonies, and rangoli patterns drawn at thresholds with colored powder invite Lakshmi, the goddess of wealth, into the home.",
    charmSlugs: [
      "ganesha", "om-symbol", "lotus", "navaratna", "rudraksha", "tulsi",
      "shankha", "diya-lamp", "elephant", "peacock-feather", "rangoli",
      "kalasha", "mala-beads", "dharma-wheel", "bodhi-leaf", "cowrie-shell",
      "coral", "lucky-bamboo",
    ],
  },
  {
    name: "Pakistan",
    slug: "pakistan",
    region: "South Asia",
    flag: "🇵🇰",
    description:
      "Pakistan's charm traditions draw from Islam, Sufi mysticism, and ancient South Asian folk practice. The hand of Fatima (hamsa) appears as a protective amulet throughout Pakistan, particularly in Sindhi and Balochi embroidery traditions. The evil eye (nazar) is taken extremely seriously — blue glass eye beads are hung above doorways, from vehicles, and in cradles to deflect the malicious gaze.\n\nTasbih prayer beads are carried by millions as both a devotional practice and a calming talisman. The crescent and star of the national flag reflect Islamic identity, and these symbols appear on household amulets. In Sufi shrines across the country, devotees tie colorful threads to lattice gates and leave offerings in hopes of having prayers answered.",
    charmSlugs: [
      "hamsa-hand", "evil-eye", "tasbih", "islamic-crescent", "prayer-beads",
      "hand-of-fatima", "evil-eye-bracelet", "khamsa",
    ],
  },
  {
    name: "Bangladesh",
    slug: "bangladesh",
    region: "South Asia",
    flag: "🇧🇩",
    description:
      "Bangladesh weaves Islamic faith with deep pre-Islamic Bengali folk traditions in its approach to luck and protection. The evil eye (nazar) is a primary concern — black kohl is applied to infants' foreheads as protection, and small black dots are painted on children's cheeks to deflect envious glances. Mala beads and tasbih are used for devotional counting in both Hindu and Muslim households.\n\nThe lotus is sacred across Bangladesh's religious traditions and features in folk art, architecture, and auspicious ceremony. Cowrie shells have historically been used as currency and luck charms throughout the Bengal region. At the Urs festivals of Sufi saints, devotees tie colorful threads and receive protective amulets blessed by the resident holy man.",
    charmSlugs: [
      "evil-eye", "tasbih", "prayer-beads", "lotus", "cowrie-shell",
      "mala-beads", "islamic-crescent", "ganesha", "om-symbol",
    ],
  },
  {
    name: "Sri Lanka",
    slug: "sri-lanka",
    region: "South Asia",
    flag: "🇱🇰",
    description:
      "Sri Lanka's Theravada Buddhist tradition is among the world's oldest and most intact, and the island's lucky-charm culture reflects this lineage. The dharma wheel (dhammachakka), the bodhi leaf, and the lotus are the primary auspicious symbols found on temple walls, doorways, and jewelry throughout the country. Pirith, sacred chanting accompanied by the tying of a blessed white thread around the wrist, is performed at births, deaths, and new undertakings as protection.\n\nThe elephant, particularly the white elephant of legend, is the supreme lucky animal of Sri Lanka — it appears on the national flag's crest and draws massive crowds at the annual Esala Perahera procession in Kandy. The moon stone (moonstep) carved at temple entrances, depicting flame, geese, elephants, and lotuses, is one of the most iconic auspicious artworks in South Asian art.",
    charmSlugs: [
      "dharma-wheel", "bodhi-leaf", "lotus", "elephant", "mala-beads",
      "prayer-beads", "moonstone", "om-symbol", "shankha",
    ],
  },
  {
    name: "Nepal",
    slug: "nepal",
    region: "South Asia",
    flag: "🇳🇵",
    description:
      "Nepal sits at the crossroads of Hindu and Buddhist civilization, and its charm tradition draws from both with extraordinary depth. Prayer flags strung across mountain passes are said to spread the wind horse's blessings across the land with every breath of wind. Prayer wheels — from hand-held to building-sized — are spun by pilgrims to accumulate merit and attract good fortune. The singing bowl, originally a Himalayan ritual instrument, is used for meditation and blessing.\n\nDzi beads — ancient etched agate stones from the Himalayan plateau — are among the most precious amulets in Nepalese culture, believed to bring extraordinary protection and luck. The eternal knot, one of the eight auspicious symbols of Buddhism, appears on thangka paintings, woven textiles, and metal jewelry throughout the country. The om symbol and dharma wheel are inscribed on walls, stones, and prayer flags across the landscape.",
    charmSlugs: [
      "prayer-flags", "prayer-wheel", "singing-bowl", "dzi-bead", "eternal-knot",
      "om-symbol", "dharma-wheel", "mala-beads", "lotus", "bodhi-leaf",
      "elephant", "lucky-bamboo", "ganesha",
    ],
  },
  {
    name: "Bhutan",
    slug: "bhutan",
    region: "South Asia",
    flag: "🇧🇹",
    description:
      "Bhutan is the last surviving Vajrayana Buddhist kingdom and its charm culture is among the most intact in the world. Prayer flags fly from every high place; prayer wheels are built into the walls of temples and homes. The phallus — the symbol of the divine madman Drukpa Kunley — is painted on houses across Bhutan as a powerful ward against evil and envy, a sight that surprises most foreign visitors.\n\nThe dragon (Druk) is the national symbol, associated with thunder and sovereignty. Dzi beads from the Himalayan plateau are heirlooms of incalculable worth. Every dzong (fortress monastery) and home displays the eight auspicious symbols of Tibetan Buddhism: the eternal knot, lotus, dharma wheel, parasol, treasure vase, golden fish pair, victory banner, and conch shell.",
    charmSlugs: [
      "prayer-flags", "prayer-wheel", "dzi-bead", "eternal-knot", "dragon",
      "dharma-wheel", "mala-beads", "lotus", "singing-bowl", "shankha",
      "bodhi-leaf", "om-symbol",
    ],
  },
  {
    name: "Maldives",
    slug: "maldives",
    region: "South Asia",
    flag: "🇲🇻",
    description:
      "The Maldives is an Islamic nation built on coral islands with a deep seafaring heritage, and its amulet tradition blends Islamic practice with ancient Indian Ocean folk magic. The evil eye is the dominant concern for islanders, and blue glass beads and verses from the Quran are carried and displayed as protection. Tasbih prayer beads are an everyday companion for devotion and warding off misfortune.\n\nCowrie shells have historically played a central role in Maldivian culture as both currency and amulet — scattered on boats and buried beneath buildings as protective charms. The coconut palm is the tree of life on these islands, and coconut-related rituals mark births, weddings, and house-warmings as bringers of abundance.",
    charmSlugs: [
      "evil-eye", "tasbih", "prayer-beads", "cowrie-shell", "coconut-charm",
      "islamic-crescent", "anchor-charm",
    ],
  },

  // ── SOUTHEAST ASIA ─────────────────────────────────────────────────────────
  {
    name: "Thailand",
    slug: "thailand",
    region: "Southeast Asia",
    flag: "🇹🇭",
    description:
      "Thailand is one of the world's great centers of amulet culture. Thai Buddha amulets (phra phim) — pressed clay or cast metal images of the Buddha or revered monks — are worn in waterproof cases around the neck and are among the most seriously collected objects in the country, with a dedicated market in Bangkok where rare pieces command prices rivaling fine art. The amulet's power is believed to derive from the monk who consecrated it, protecting the wearer from harm, bullets, and misfortune.\n\nNang Kwak, the Thai goddess of prosperity, is the Thai equivalent of the Japanese beckoning cat — a female deity with a raised right hand blessing customers displayed in every shop. Spirit houses (san phra phum) receive daily offerings of flowers, incense, and red Fanta to keep household spirits content. The sacred Yantra tattoo (sak yant) inscribed by monks confers magical protection, and Thai garlands of jasmine are offered at shrines and given as marks of blessing.",
    charmSlugs: [
      "thai-buddha-amulet", "nang-kwak", "elephant", "lotus", "prayer-beads",
      "thai-garland", "lucky-bamboo", "dragon", "mala-beads", "dharma-wheel",
      "bodhi-leaf", "maneki-neko",
    ],
  },
  {
    name: "Vietnam",
    slug: "vietnam",
    region: "Southeast Asia",
    flag: "🇻🇳",
    description:
      "Vietnam's lucky-charm tradition is rooted in a blend of Taoism, Buddhism, Confucianism, and ancient Viet animism known as the 'triple religion.' The money frog and laughing Buddha are found in Vietnamese homes and businesses, and lucky red envelopes (li xi) are exchanged at Tet (Lunar New Year). The dragon is a cornerstone symbol of Vietnamese culture — unlike the Chinese dragon, the Vietnamese rong is a benevolent water deity associated with rain and agriculture.\n\nThe kumquat tree brought into homes at Tet represents prosperity and good fortune through its golden fruit. Peach blossom branches in the north and apricot blossom in the south are the iconic Tet decorations that channel luck into the new year. The carp (koi) is released alive into rivers at Kitchen God Day to carry the household deity to heaven, and lucky-coin wind chimes are hung at windows.",
    charmSlugs: [
      "money-frog", "laughing-buddha", "red-envelope", "dragon", "koi-fish",
      "lucky-bamboo", "lucky-coins", "lotus", "jade", "maneki-neko",
      "three-legged-toad", "goldfish", "wu-lou",
    ],
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    region: "Southeast Asia",
    flag: "🇮🇩",
    description:
      "Indonesia is a vast archipelago of extraordinary religious and cultural diversity — Islam, Hinduism, Buddhism, Christianity, and indigenous animism all contribute to a rich tradition of protective amulets and lucky symbols. In Bali, the Barong — a lion-like creature representing good — battles the witch Rangda in ritual dance, and Barong masks are powerful protective talismans. The keris, a wavy-bladed dagger, is one of Southeast Asia's most sacred objects: a keris with an odd number of curves is considered lucky and protective.\n\nThe anting-anting amulet tradition, shared with the Philippines, involves carrying objects believed to confer invulnerability, luck, and supernatural power. Offerings of flowers, rice, and incense are made daily at household shrines across Bali. Ganesha is venerated throughout the Hindu Balinese community as the remover of obstacles, and the elephant symbol appears on temple gates and amulets.",
    charmSlugs: [
      "balinese-barong", "keris-dagger", "ganesha", "elephant", "lotus",
      "om-symbol", "prayer-beads", "cowrie-shell", "dragon",
    ],
  },
  {
    name: "Philippines",
    slug: "philippines",
    region: "Southeast Asia",
    flag: "🇵🇭",
    description:
      "The Philippines has one of the most colorful amulet cultures in Asia, born from the fusion of indigenous Austronesian animism, centuries of Spanish Catholicism, and folk Islam in Mindanao. The anting-anting is the defining Filipino charm — a personal amulet believed to confer invulnerability, luck, and supernatural power. These objects range from carved wood to blessed medals to strange natural objects, and their authenticity depends entirely on the ritual performed by the albularyo (folk healer) who made them.\n\nCatholic devotion runs deep: the Santo Niño (Holy Child of Jesus) is the most widely venerated image in the country, and medals of San Cristóbal (St. Christopher) are attached to every jeepney and taxi. During fiesta season, agimats and charm pouches are bought and blessed at church steps. The pamaypay (lucky fan) and specific flowers woven into garlands carry auspicious meaning at weddings and fiestas.",
    charmSlugs: [
      "filipino-anting-anting", "st-christopher-medal", "rosary-beads",
      "crucifix", "guardian-angel", "evil-eye", "cowrie-shell",
    ],
  },
  {
    name: "Malaysia",
    slug: "malaysia",
    region: "Southeast Asia",
    flag: "🇲🇾",
    description:
      "Malaysia's charm culture reflects its extraordinary ethnic diversity — Malay Muslim, Chinese, Indian Tamil, and indigenous Orang Asli traditions weave together in a unique tapestry. In Chinese-Malaysian communities, all the major Chinese lucky symbols hold sway: the money frog, maneki-neko, red envelopes, and feng shui objects are essential in homes and businesses. Indian Tamil traditions bring Ganesha, the om symbol, and kolam (rangoli) drawn at thresholds to invite Lakshmi.\n\nMalay amulet tradition (tangkal) involves objects blessed by Islamic scholars, often incorporating Quranic verses written on paper sealed inside a charm casing. The keris holds deep spiritual significance in Malay royal culture. The evil eye (mata jahat) is guarded against with blue beads and specific Quranic verses, and cowrie shells appear in traditional Malay beadwork jewelry as symbols of protection.",
    charmSlugs: [
      "money-frog", "maneki-neko", "red-envelope", "lucky-coins", "ganesha",
      "om-symbol", "evil-eye", "keris-dagger", "prayer-beads", "tasbih",
      "cowrie-shell", "dragon", "jade", "lucky-bamboo",
    ],
  },
  {
    name: "Myanmar",
    slug: "myanmar",
    region: "Southeast Asia",
    flag: "🇲🇲",
    description:
      "Myanmar's Theravada Buddhist culture is among the most devout in the world, with monks collecting alms every morning and pagodas dominating every city skyline. The dhamma (dharma wheel) and lotus are the primary auspicious symbols woven into every aspect of Myanmar's visual culture. Bodhi leaves, Buddha images, and mala beads are everyday protective objects carried by the devout.\n\nMyanmar also has a rich tradition of nat worship — veneration of local spirits — which coexists with Buddhism. Special offering rituals at nat shrines involve flowers, music, and food to propitiate spirits that can bring fortune or misfortune. Lucky numbers and auspicious days are calculated by astrologers before weddings, business openings, and long journeys.",
    charmSlugs: [
      "dharma-wheel", "lotus", "bodhi-leaf", "mala-beads", "prayer-beads",
      "elephant", "dragon", "singing-bowl", "om-symbol",
    ],
  },
  {
    name: "Cambodia",
    slug: "cambodia",
    region: "Southeast Asia",
    flag: "🇰🇭",
    description:
      "Cambodia's charm culture rests on Theravada Buddhism intertwined with ancient Khmer animism and Brahminic traditions that never fully disappeared after Angkor's fall. The krama (checked scarf) tied around statues and spirit houses is a universal good-luck offering. Buddhist amulets blessed by monks, particularly images of the revered monk Luang Phor Dambang, are worn by soldiers, drivers, and students for protection.\n\nThe naga — the mythical serpent king — is omnipresent in Cambodian iconography, appearing on temple balustrades, royal regalia, and household altars as a protector of the land and water. The lotus is the symbol of Buddhism and purity, and lotus flower offerings are made at every shrine and ceremony. Kru (ritual specialists) create yantra-inscribed protective cloths and amulets that blend Sanskrit formulas with Khmer folk magic.",
    charmSlugs: [
      "dharma-wheel", "lotus", "bodhi-leaf", "mala-beads", "prayer-beads",
      "elephant", "dragon",
    ],
  },
  {
    name: "Laos",
    slug: "laos",
    region: "Southeast Asia",
    flag: "🇱🇦",
    description:
      "Laos is a deeply Buddhist country where the wats (temples) are the center of community life and the source of auspicious blessings. The baci (sou khuan) ceremony — in which white cotton threads are tied around the wrists of the honored guest by elders and monks — is the most distinctive Lao lucky-charm ritual, summoning the soul's spirits back to the body and wishing the recipient health, prosperity, and safe travels.\n\nThe naga, the mythical river serpent, holds special significance in Laos as the protector of the Mekong River. The three-headed elephant (Erawan) featured on the old royal flag is considered the luckiest of all animals. Prayer beads and lotus offerings are everyday components of Lao devotional life, and the dharma wheel appears on temples, flags, and household altars.",
    charmSlugs: [
      "dharma-wheel", "lotus", "bodhi-leaf", "mala-beads", "prayer-beads",
      "elephant", "dragon",
    ],
  },
  {
    name: "Singapore",
    slug: "singapore",
    region: "Southeast Asia",
    flag: "🇸🇬",
    description:
      "Singapore's dense multiethnic society — Chinese, Malay, Indian, Eurasian — produces one of the world's most layered charm cultures. In Chinese-Singaporean homes and businesses, feng shui is taken extremely seriously: the position of desks, the direction of doors, and the placement of water features are all carefully optimized. The money frog, pixiu, and laughing Buddha are found in every other shopfront.\n\nThe Hindu communities of Little India maintain vibrant traditions of Ganesha worship, kolam rangoli, and navaratna gem jewelry. The Malay community observes Islamic amulet traditions involving Quranic inscriptions, and the Peranakan community (Straits Chinese) has developed its own distinctive lucky-charm aesthetic blending Chinese and Malay elements in intricate beadwork and embroidery.",
    charmSlugs: [
      "money-frog", "pixiu", "laughing-buddha", "red-envelope", "lucky-coins",
      "bagua-mirror", "wu-lou", "dragon", "goldfish", "lucky-bamboo",
      "ganesha", "om-symbol", "evil-eye", "prayer-beads", "maneki-neko",
      "jade", "koi-fish",
    ],
  },
  {
    name: "Brunei",
    slug: "brunei",
    region: "Southeast Asia",
    flag: "🇧🇳",
    description:
      "Brunei is an Islamic sultanate where the official ideology of Melayu Islam Beraja (Malay Islamic Monarchy) shapes daily life. Islamic protective amulets — verses from the Quran inscribed on paper or metal and sealed in cases — are the primary protective charms. Tasbih prayer beads are carried universally, and the crescent moon and star of Islam are emblems of blessing on homes and vehicles.\n\nBrunei's indigenous Malay-Dayak heritage includes older animistic traditions involving specific plants, animal parts, and ceremonially blessed objects. The keris remains a prestigious ritual object in the royal court. Evil eye protection through Quranic recitation is practiced widely.",
    charmSlugs: [
      "tasbih", "prayer-beads", "islamic-crescent", "evil-eye", "keris-dagger",
    ],
  },
  {
    name: "Timor-Leste",
    slug: "timor-leste",
    region: "Southeast Asia",
    flag: "🇹🇱",
    description:
      "Timor-Leste (East Timor) blends Catholicism, animism, and Southeast Asian folk tradition in its approach to protection and luck. The lulik — sacred objects, places, and substances that carry spiritual power — are the foundation of Timorese cosmology. Lulik objects are kept in sacred houses (uma lulik) and are not to be touched by the uninitiated; they protect the clan and bring fortune to its members.\n\nRosary beads and crucifixes reflect the country's deep Catholic faith, brought by Portuguese missionaries and intensified during the independence struggle when the Church was the primary institution of resistance. The Church remains central to Timorese identity and its symbols are among the most trusted protective charms in the country.",
    charmSlugs: [
      "rosary-beads", "crucifix", "guardian-angel", "st-christopher-medal",
      "cowrie-shell",
    ],
  },

  // ── CENTRAL ASIA ───────────────────────────────────────────────────────────
  {
    name: "Kazakhstan",
    slug: "kazakhstan",
    region: "Central Asia",
    flag: "🇰🇿",
    description:
      "Kazakhstan's nomadic Kazakh culture carries a deep tradition of protective amulets rooted in Tengrism and shamanistic practice, now layered with centuries of Islamic influence. The tumar — a triangular or cylindrical metal amulet worn on a cord — is the quintessential Kazakh charm, traditionally containing a written prayer or sacred herb and worn to protect against the evil eye and illness. Every newborn is dressed with a tumar, and they appear on traditional headdresses and horse bridles.\n\nThe evil eye (köz tию) is taken seriously across Kazakh society: blue beads and wolf claws are traditional protections. The shamanic drum (dombra) and eagle feathers carry ceremonial power. Felt crafts — particularly the circular shanyrak pattern at the top of the yurt — represent the cosmic order and family continuity, and are among the most potent lucky symbols in Kazakh visual culture.",
    charmSlugs: [
      "evil-eye", "prayer-beads", "tasbih", "islamic-crescent", "feather",
      "amber", "turquoise",
    ],
  },
  {
    name: "Uzbekistan",
    slug: "uzbekistan",
    region: "Central Asia",
    flag: "🇺🇿",
    description:
      "Uzbekistan stands at the heart of the ancient Silk Road, and its charm tradition reflects millennia of trade-route syncretism between Persian, Turkic, Chinese, and Islamic cultures. The sacred city of Samarkand was a world center of Islamic scholarship, and Quranic amulets (tawiz) inscribed with protective verses are carried by millions. The hamsa hand appears throughout Uzbek decorative art, particularly in the geometric tile patterns of the great madrasas.\n\nThe evil eye is guarded against with blue-and-white nazarlik beads woven into jewelry, horse harnesses, and cradles. Uzbek embroidered suzani textiles incorporate auspicious symbols — pomegranates for fertility, rosettes for the sun, almond shapes (bodom) for life — stitched as wedding gifts to bring luck to a new household. Turquoise mined in the Kyzylkum desert has been used as a protective stone since antiquity.",
    charmSlugs: [
      "hamsa-hand", "evil-eye", "tasbih", "prayer-beads", "islamic-crescent",
      "turquoise", "persian-turquoise", "khamsa",
    ],
  },
  {
    name: "Turkmenistan",
    slug: "turkmenistan",
    region: "Central Asia",
    flag: "🇹🇲",
    description:
      "Turkmenistan's charm culture is rooted in Turkmen nomadic tradition and Sunni Islam. The göl — the distinctive diamond-shaped tribal motif woven into Turkmen carpets — functions as a clan totem and protective symbol. Turkmen silver jewelry is among the finest in Central Asia: large pectoral ornaments, headdresses, and belts set with carnelian stones are worn by women as displays of wealth and as powerful amulets against the evil eye.\n\nCarnelian (yashyl daş) is the national gemstone and is believed to bring happiness, health, and protection against envy. Amulets in the form of small Quran cases and tawiz pouches are worn by children and adults alike. The Akhal-Teke horse — one of the world's oldest horse breeds — is the supreme national symbol, and horse-related charms appear throughout Turkmen decorative arts.",
    charmSlugs: [
      "evil-eye", "tasbih", "prayer-beads", "islamic-crescent", "coral",
    ],
  },
  {
    name: "Tajikistan",
    slug: "tajikistan",
    region: "Central Asia",
    flag: "🇹🇯",
    description:
      "Tajikistan's Persian-speaking culture carries ancient traditions of protective amulets that predate Islam and persist alongside it. The evil eye (chashmi bad) is the primary threat guarded against in Tajik folk belief: mothers immediately apply a smudge of black soot or kajal to their newborn's forehead to protect against envious stares. Blue beads, wolf teeth, and specific Quranic verses on paper are placed in babies' beds.\n\nThe tawiz (ta'wiz) — a Quranic amulet sealed in a triangular silver case — is worn by children and adults as a general-purpose protective charm. Pomegranate motifs in embroidery and ceramics represent fertility and abundance. The region's ancient Zoroastrian heritage surfaces in reverence for fire and in the persistence of spring equinox celebrations (Nawruz) where bonfires are lit to burn away bad luck.",
    charmSlugs: [
      "evil-eye", "tasbih", "prayer-beads", "islamic-crescent", "persian-turquoise",
    ],
  },
  {
    name: "Kyrgyzstan",
    slug: "kyrgyzstan",
    region: "Central Asia",
    flag: "🇰🇬",
    description:
      "Kyrgyzstan's nomadic heritage runs deep, and its charm traditions blend Sunni Islam with ancient Turkic shamanistic beliefs. The talisman of felt — specifically the shyrdak patterned felt rug with its auspicious ram-horn (kochkor muiz) motifs — is among the most distinctly Kyrgyz lucky objects, believed to protect the yurt and its inhabitants. Eagle feathers from the trained golden eagles of the nomadic hunting tradition carry spiritual power.\n\nThe evil eye (köz) is guarded against with onyx and agate beads, wolf claws, and protective Quranic inscriptions. The Komuz folk instrument and the epic Manas cycle are considered bearers of the Kyrgyz people's collective spiritual power. New yurts and homes are blessed with incense and the recitation of prayers before first occupation.",
    charmSlugs: [
      "evil-eye", "prayer-beads", "tasbih", "feather", "islamic-crescent",
    ],
  },
  {
    name: "Afghanistan",
    slug: "afghanistan",
    region: "Central Asia",
    flag: "🇦🇫",
    description:
      "Afghanistan sits at the crossroads of Persian, Turkic, South Asian, and Central Asian charm traditions, all filtered through centuries of Islamic devotion. The evil eye (nazar) is the supreme concern: blue glass beads (nazarband) are pinned to babies' clothing, hung from doorways, and attached to vehicles throughout the country. The hand of Fatima appears on jewelry, door knockers, and embroidery as a powerful ward against harm.\n\nLapis lazuli — mined in the mountains of Badakhshan for over six thousand years — was considered a stone of divine protection by ancient Afghans and continues to be made into amulets and jewelry. The tawiz (written Quranic charm sealed in metal or cloth) is carried by soldiers and civilians alike for protection in conflict. The pomegranate, abundant in Afghan orchards, symbolizes prosperity and unity.",
    charmSlugs: [
      "evil-eye", "hamsa-hand", "hand-of-fatima", "tasbih", "prayer-beads",
      "lapis-lazuli", "turquoise", "persian-turquoise", "islamic-crescent",
      "khamsa",
    ],
  },

  // ── MIDDLE EAST ────────────────────────────────────────────────────────────
  {
    name: "Turkey",
    slug: "turkey",
    region: "Middle East",
    flag: "🇹🇷",
    description:
      "Turkey is the world capital of the evil eye, home to the nazar boncuğu — the iconic cobalt-blue glass eye bead that is perhaps the most exported amulet on earth. These beads are given at births, hung at doorways, attached to babies and animals, and gifted to new homeowners and businesses. The belief that an envious gaze can cause harm, illness, and misfortune is deeply rooted in Turkish folk culture and predates Islam in Anatolia.\n\nThe hamsa hand (known locally as khamsa or Fatma'nın Eli) is equally popular as a wall decoration and jewelry piece. Turkish coffee cup reading (tasseography) is a beloved folk art used to divine fortune. The blue evil eye motif appears woven into kilim carpets, hammered into copper, and blown into glass in the bazaars of Istanbul, Izmir, and Cappadocia. The crescent moon and star of the Ottoman imperial flag remain powerful symbols of blessing.",
    charmSlugs: [
      "evil-eye", "evil-eye-bracelet", "hamsa-hand", "khamsa", "hand-of-fatima",
      "tasbih", "prayer-beads", "islamic-crescent", "greek-mati",
    ],
  },
  {
    name: "Iran",
    slug: "iran",
    region: "Middle East",
    flag: "🇮🇷",
    description:
      "Iran's ancient Persian civilization has produced one of the world's richest traditions of protective amulets, predating Islam by millennia. Turquoise mined in the Nishapur region of Khorasan has been prized for over two thousand years as a stone of protection and good fortune — Persian warriors set it in their sword hilts and armor. The hand of Fatima (kaf-e Fatima) is worn by Shia Muslims as a devotional amulet invoking the Prophet's daughter.\n\nThe evil eye (chashm-e bad) is guarded against with blue beads, Quranic verses, and rue (espand) burned as incense to drive away envy. At Nowruz (Persian New Year), the haft-sin table is set with seven auspicious items — wheatgrass, vinegar, garlic, sumac, apple, hyacinth, and coins — to draw in abundance for the new year. Wild rue seeds are burned and waved around a person's head to cleanse bad luck.",
    charmSlugs: [
      "persian-turquoise", "hamsa-hand", "evil-eye", "tasbih", "prayer-beads",
      "hand-of-fatima", "islamic-crescent",
    ],
  },
  {
    name: "Iraq",
    slug: "iraq",
    region: "Middle East",
    flag: "🇮🇶",
    description:
      "Iraq is the cradle of civilization where the world's first recorded lucky-charm traditions originated in ancient Sumer, Babylon, and Assyria. The Assyrian evil eye tradition is among the oldest on earth — cylinder seals engraved with protective eyes date back four thousand years. Modern Iraqi culture, both Arab and Kurdish, centers on protection against the evil eye (ayn al-hasad) through blue beads, Quranic amulets, and the hand of Fatima.\n\nThe date palm — the tree of life of ancient Mesopotamia and the most prolific food tree of the Iraqi landscape — carries ancient associations with prosperity and divine favor that persist in folklore. The crescent moon is central to Shia Islamic identity here, and the hand of Abbas (a variant of the hamsa) carries specific Shia devotional meaning.",
    charmSlugs: [
      "evil-eye", "hamsa-hand", "hand-of-fatima", "tasbih", "prayer-beads",
      "date-palm", "islamic-crescent", "khamsa",
    ],
  },
  {
    name: "Saudi Arabia",
    slug: "saudi-arabia",
    region: "Middle East",
    flag: "🇸🇦",
    description:
      "Saudi Arabia follows Sunni Islamic tradition, and its charm culture is shaped by strict adherence to the Quran and Sunnah. The primary protective practice is the recitation of specific Quranic verses (ruqyah), particularly the Throne Verse (Ayat al-Kursi) and the two chapters of seeking refuge (al-Mu'awwidhatayn). Tasbih prayer beads are carried universally as both devotional tools and calming companions.\n\nDespite official theological disapproval of traditional amulets, folk practices persist: the hand of Fatima (kaf) appears on jewelry and door ornaments, and blue beads against the evil eye are widely worn. The date palm — Arabia's most sacred tree, fruit of which Muhammad is said to have favored — carries deep associations of divine sustenance and blessing. The crescent and star are emblems of the Islamic faith displayed on homes and vehicles.",
    charmSlugs: [
      "tasbih", "prayer-beads", "islamic-crescent", "evil-eye", "hand-of-fatima",
      "date-palm", "hamsa-hand",
    ],
  },
  {
    name: "UAE",
    slug: "uae",
    region: "Middle East",
    flag: "🇦🇪",
    description:
      "The United Arab Emirates blends Bedouin protective traditions with Islamic practice and, in recent decades, with the charm beliefs of its enormous expatriate population from India, Pakistan, Iran, and East Asia. The evil eye is the most universally acknowledged source of misfortune across all communities, and blue nazar beads appear in luxury hotels, souks, and on the dashboards of Lamborghinis alike. The hand of Fatima and Quranic amulet cases are popular throughout the local Emirati population.\n\nThe Arabian falcon — the supreme symbol of Emirati and Gulf culture — carries associations of power, freedom, and good fortune. Perfumed oud and frankincense are burned as spiritual purifiers in homes and at gatherings, carrying centuries of association with divine favor. Gold jewelry is the primary vehicle of wealth-display and protection in Emirati women's tradition, and specific khanjar (curved dagger) motifs appear as protective emblems.",
    charmSlugs: [
      "evil-eye", "hamsa-hand", "hand-of-fatima", "arabian-falcon", "tasbih",
      "prayer-beads", "islamic-crescent", "date-palm",
    ],
  },
  {
    name: "Israel",
    slug: "israel",
    region: "Middle East",
    flag: "🇮🇱",
    description:
      "Israel is home to several of the world's most potent and widely exported amulet traditions. The hamsa (hamesh) — the open hand said to protect against the evil eye — is used equally by Jewish and Arab Israelis, with five fingers representing the five books of Moses for Jews or the five pillars of Islam for Muslims. The Star of David (Magen David) became the definitive symbol of Jewish identity and is worn on pendants, mezuzot, and jewelry as a mark of faith and protection.\n\nThe mezuzah — a scroll containing the Shema prayer in a decorated case — is affixed to every doorpost of a Jewish home, fulfilling a biblical commandment and protecting those within. The red Kabbalah string tied around the left wrist, originally from Rachel's Tomb in Bethlehem, is believed to ward off the evil eye and has been popularized globally. The chai symbol (meaning 'life') and the fish (a traditional Hebrew symbol) are among the most popular Jewish lucky charms.",
    charmSlugs: [
      "hamsa-hand", "star-of-david", "mezuzah", "kabbalah-string", "chai-symbol",
      "evil-eye", "evil-eye-bracelet", "greek-mati",
    ],
  },
  {
    name: "Jordan",
    slug: "jordan",
    region: "Middle East",
    flag: "🇯🇴",
    description:
      "Jordan's charm tradition combines Bedouin heritage with Islamic practice in a landscape shaped by biblical history. The evil eye (ayn) is the central concern — blue glass beads are sewn onto clothing, pinned to babies, and hung from doorways and cars throughout the kingdom. The hand of Fatima and Quranic amulet cases are standard protective jewelry in both urban Amman and rural villages.\n\nJordanian Bedouin women wear elaborate silver jewelry laden with auspicious motifs: coral beads (for vitality), turquoise (for protection), and coin pendants (for prosperity). The ancient city of Petra — carved by the Nabataeans — was itself a sacred landscape where fortune was sought at divine niches and altars. The blue city of Madaba and the Jordan River carry ancient associations with divine blessing.",
    charmSlugs: [
      "evil-eye", "hamsa-hand", "hand-of-fatima", "tasbih", "prayer-beads",
      "turquoise", "coral", "islamic-crescent", "khamsa",
    ],
  },
  {
    name: "Lebanon",
    slug: "lebanon",
    region: "Middle East",
    flag: "🇱🇧",
    description:
      "Lebanon's extraordinary religious diversity — Maronite Christian, Sunni and Shia Muslim, Druze, Greek Orthodox — creates a uniquely layered charm culture where Christian and Islamic amulet traditions exist side by side and often overlap. The evil eye (ayn al-hasad) is the universal threat across all communities, and blue glass beads, hand of Fatima pendants, and Quranic/biblical verses are all deployed against it.\n\nThe Lebanese cedar tree, emblem of the nation, carries ancient associations of divine protection and immortality — the forests of Lebanon were sacred to the Phoenicians, Egyptians, and Hebrews. St. George medallions are carried by Lebanese Christians as protection, while Shia Muslims revere the hand of Abbas. The blue mati eye bead of Mediterranean tradition is found throughout Lebanese jewelry and home decoration.",
    charmSlugs: [
      "evil-eye", "hamsa-hand", "hand-of-fatima", "greek-mati", "tasbih",
      "prayer-beads", "rosary-beads", "st-christopher-medal", "islamic-crescent",
    ],
  },
  {
    name: "Syria",
    slug: "syria",
    region: "Middle East",
    flag: "🇸🇾",
    description:
      "Syria is one of the oldest continuously inhabited places on earth, and its amulet traditions are correspondingly ancient. The evil eye is the defining protective concern, and blue glass beads against the evil eye have been produced in Syrian glassblowing workshops — particularly in Aleppo — for centuries. The hamsa hand appears in Islamic geometric tilework, jewelry, and decorative arts throughout the country.\n\nThe Umayyad Mosque in Damascus, built on a site sacred to Aramaeans, Greeks, Romans, and Byzantine Christians before Islam, reflects Syria's deep layering of protective traditions. Christian communities in Syria carry rosary beads and wear gold crosses, while Muslims carry tasbih and Quranic amulet cases. Jasmine — the flower of Damascus — is woven into garlands as a blessing for weddings.",
    charmSlugs: [
      "evil-eye", "hamsa-hand", "hand-of-fatima", "tasbih", "prayer-beads",
      "rosary-beads", "islamic-crescent", "khamsa",
    ],
  },
  {
    name: "Yemen",
    slug: "yemen",
    region: "Middle East",
    flag: "🇾🇪",
    description:
      "Yemen's ancient civilization — home of the legendary Queen of Sheba — has one of the richest amulet traditions in the Arab world. Yemeni silver jewelry is among the most elaborate in the Middle East, and Yemeni women traditionally wear large pendants, head ornaments, and pectoral pieces set with silver, coral, amber, and carnelian as simultaneous wealth displays and protective amulets. The hand of Fatima is particularly prominent in Yemeni jewelry.\n\nThe evil eye is guarded against with a combination of Quranic verses, blue beads, and specific silver amulet cases containing written prayers. Frankincense and myrrh — ancient gifts of Arabia — are burned as spiritual purifiers. The date palm of the Hadramawt valley carries ancient associations of abundance. Specific plant amulets and animal-derived charms are used by traditional healers (faqih) in rural areas.",
    charmSlugs: [
      "evil-eye", "hamsa-hand", "hand-of-fatima", "tasbih", "prayer-beads",
      "coral", "amber", "date-palm", "islamic-crescent", "khamsa",
    ],
  },
  {
    name: "Oman",
    slug: "oman",
    region: "Middle East",
    flag: "🇴🇲",
    description:
      "Oman's seafaring heritage — its merchants traded frankincense along the ancient incense routes to Rome, Greece, and India — imbues its charm culture with a distinctly maritime and mercantile character. The khanjar (curved dagger) is the supreme national symbol, worn at ceremonies and appearing on the national emblem as a symbol of valor and protection. Silver jewelry set with coral and turquoise is the traditional protective adornment for Omani women.\n\nFrankincense is burned in every Omani home as a spiritual purifier and blessing — its smoke is believed to carry prayers to God and drive away malevolent spirits. Tasbih prayer beads are ubiquitous. The evil eye is guarded against with blue beads, kohl applied to children, and Quranic recitation. Silver amulet cases containing protective verses are worn by children.",
    charmSlugs: [
      "evil-eye", "tasbih", "prayer-beads", "hand-of-fatima", "coral",
      "turquoise", "islamic-crescent", "anchor-charm",
    ],
  },
  {
    name: "Kuwait",
    slug: "kuwait",
    region: "Middle East",
    flag: "🇰🇼",
    description:
      "Kuwait's Bedouin and pearling heritage shapes a charm tradition centered on Sunni Islamic practice and Gulf folk beliefs. The evil eye is universally feared, and blue beads, Quranic amulet cases, and the hand of Fatima are standard protective items. Tasbih prayer beads are carried by men and women as both devotional practice and everyday comfort.\n\nThe pearl — historically the foundation of Kuwait's pre-oil economy — carries deep associations of divine gift and unexpected wealth from the sea. Pearl jewelry remains an important traditional adornment. The falcon, the supreme symbol of Gulf culture, represents power and nobility and appears on watches, crests, and amulets.",
    charmSlugs: [
      "evil-eye", "hamsa-hand", "tasbih", "prayer-beads", "arabian-falcon",
      "pearl", "islamic-crescent", "date-palm",
    ],
  },
  {
    name: "Bahrain",
    slug: "bahrain",
    region: "Middle East",
    flag: "🇧🇭",
    description:
      "Bahrain, the ancient Dilmun of Mesopotamian legend — 'the land where the sun rises, the land of the living' — was considered a paradise and is one of the world's oldest pearling centers. Pearl jewelry is the premier traditional lucky adornment, and specific pearl designs are associated with divine favor and exceptional good fortune. Islamic amulet practice is dominant, with tasbih, Quranic cases, and the hand of Fatima the standard protective items.\n\nBahraini amulet culture also reflects its mixed Sunni and Shia Muslim population, with distinct Shia practices including specific prayers and devotional objects related to the Ahl al-Bayt. The evil eye is guarded against throughout society. The tree of life — an ancient mesquite tree that has survived alone in the desert for hundreds of years — is a national symbol of miraculous endurance.",
    charmSlugs: [
      "evil-eye", "hamsa-hand", "tasbih", "prayer-beads", "pearl",
      "hand-of-fatima", "islamic-crescent",
    ],
  },
  {
    name: "Qatar",
    slug: "qatar",
    region: "Middle East",
    flag: "🇶🇦",
    description:
      "Qatar's rapid transformation from a pearl-diving and fishing economy to one of the world's wealthiest nations has not displaced its deep roots in Gulf Bedouin tradition. The evil eye is universally feared and guarded against with blue beads, Quranic amulets, and hand of Fatima pendants. Tasbih prayer beads are standard among Qatari men. The falcon — kept by Qatari falconers with obsessive devotion and traveling with its own passport — is the supreme lucky animal of national identity.\n\nPearl jewelry from Qatar's historic pearl banks carries ancestral associations of divine gift and prosperity. Frankincense and oud are burned at social gatherings as spiritual purifiers. New buildings are blessed with Quranic recitation and specific protective rituals before occupation.",
    charmSlugs: [
      "evil-eye", "hamsa-hand", "tasbih", "prayer-beads", "arabian-falcon",
      "pearl", "islamic-crescent", "date-palm",
    ],
  },
  {
    name: "Palestine",
    slug: "palestine",
    region: "Middle East",
    flag: "🇵🇸",
    description:
      "Palestinian charm traditions are among the most ancient in the world, rooted in Canaanite, Byzantine, Islamic, and folk traditions layered across one of history's most contested landscapes. The evil eye (ayn) is the primary malevolent force in Palestinian folk belief, guarded against with blue glass beads, alum burned in fires, and Quranic verses recited by mothers over their children. The hand of Fatima is the most popular protective jewelry motif.\n\nPalestinian embroidery (tatreez) incorporates protective auspicious motifs — the cypress tree (eternal life), the eight-pointed star (protection), the crescent moon — stitched into clothing that functions simultaneously as cultural identity and wearable charm. The olive tree, which has been growing in Palestinian soil for thousands of years, is the supreme symbol of rootedness, endurance, and abundant blessing.",
    charmSlugs: [
      "evil-eye", "hamsa-hand", "hand-of-fatima", "tasbih", "prayer-beads",
      "islamic-crescent", "khamsa",
    ],
  },

  // ── NORTH AFRICA ───────────────────────────────────────────────────────────
  {
    name: "Egypt",
    slug: "egypt",
    region: "North Africa",
    flag: "🇪🇬",
    description:
      "Egypt is the birthplace of some of the world's most iconic and enduring lucky symbols. The scarab beetle (khepri) represented the rising sun and the cycle of rebirth to the ancient Egyptians, and carved scarab amulets were placed in tombs and worn by the living for five thousand years. The Eye of Horus (wedjat) — the healed eye of the falcon god — was the most powerful ancient Egyptian protective amulet, believed to ward off illness, evil, and death. The ankh, the looped cross meaning 'life,' is among the most recognizable symbols from any ancient civilization.\n\nModern Egypt layers these ancient legacies with Islamic practice: the hand of Fatima, blue evil eye beads, and Quranic amulet cases are carried alongside scarab pendants sold at every bazaar. The cartouche — the oval frame enclosing a royal name — remains a popular personalized amulet. The Coptic Christian community carries its own protective symbols including the Coptic cross and images of St. George.",
    charmSlugs: [
      "scarab-beetle", "eye-of-horus", "ankh", "cartouche", "evil-eye",
      "hamsa-hand", "hand-of-fatima", "tasbih", "prayer-beads",
      "islamic-crescent", "lapis-lazuli",
    ],
  },
  {
    name: "Morocco",
    slug: "morocco",
    region: "North Africa",
    flag: "🇲🇦",
    description:
      "Morocco's charm tradition is one of the richest in the Islamic world, blending Arab-Islamic practice with Berber animistic tradition and Sufi mysticism. The khamsa (hand of Fatima) is omnipresent — hammered in brass on door knockers, painted in henna on hands, cast in silver as pendants — and is Morocco's most iconic protective symbol. The evil eye (ayn al-hasad or in Berber: tit) is guarded against with blue beads, sprigs of rue, alum, and specific Quranic recitations.\n\nMoroccan Berber silver jewelry — particularly the fibula brooch and triangular Fatima-hand pendants — is both beautiful adornment and active protective amulet. The Sufi brotherhoods (tariqas) active throughout Morocco produce amulets and blessed objects through their sheikhs. The Moroccan star (eight-pointed star) appears in the tilework of every medina and carries auspicious geometric meaning. The color blue — particularly the blue of Chefchaouen — wards off evil.",
    charmSlugs: [
      "hamsa-hand", "khamsa", "evil-eye", "hand-of-fatima", "moroccan-star",
      "berber-cross", "tasbih", "prayer-beads", "islamic-crescent",
    ],
  },
  {
    name: "Tunisia",
    slug: "tunisia",
    region: "North Africa",
    flag: "🇹🇳",
    description:
      "Tunisia's amulet traditions show its layered history: Phoenician, Roman, Byzantine, Arab, Ottoman, and French influences all left marks on a vibrant folk-charm culture. The khamsa (hand of Fatima) is the supreme protective symbol, ubiquitous on door plates, jewelry, and textile ornaments. The fish (al-hut) is a beloved Tunisian lucky symbol — particularly popular among fishermen, it represents fertility, protection against the evil eye, and abundant food.\n\nThe evil eye (ain) is guarded against with blue beads, kohl, alum, and henna. Tunisian women wear elaborate silver jewelry set with coral beads at weddings and ceremonies; coral is believed to protect the wearer from envy and harm. The Berber heritage of Tunisia is preserved in tattoo traditions and jewelry forms that encode ancient protective motifs.",
    charmSlugs: [
      "hamsa-hand", "khamsa", "evil-eye", "hand-of-fatima", "tasbih",
      "prayer-beads", "islamic-crescent", "coral",
    ],
  },
  {
    name: "Algeria",
    slug: "algeria",
    region: "North Africa",
    flag: "🇩🇿",
    description:
      "Algeria's charm culture is anchored in the intersection of Berber (Amazigh) folk tradition and Sunni Islam. The khamsa is found throughout the country on door plaques, jewelry, and embroidery. The Tifinagh script of the Berber alphabet appears in amulet forms among Kabyle and Touareg communities. Evil eye protection is practiced universally, with blue beads, henna, and Quranic verses the standard tools.\n\nKabyle women's silver jewelry — including the elaborate fibula brooches, tiara ornaments, and enameled pendants — functions as both wealth display and powerful protective amulet. The conus shell and cowrie shell appear in Touareg and Berber jewelry as symbols of fertility and protection. Sufi shrine visits and the tying of votive threads are common practices for those seeking luck in marriage, business, or health.",
    charmSlugs: [
      "hamsa-hand", "khamsa", "evil-eye", "hand-of-fatima", "tasbih",
      "prayer-beads", "berber-cross", "cowrie-shell", "islamic-crescent",
    ],
  },
  {
    name: "Libya",
    slug: "libya",
    region: "North Africa",
    flag: "🇱🇾",
    description:
      "Libya's charm traditions are rooted in Sunni Islamic practice and Berber folk heritage. The hand of Fatima (khamsa) is the predominant protective amulet, found on doors, vehicles, and jewelry throughout the country. The evil eye is guarded against with blue beads, Quranic verses, and smoke from burned herbs including rue.\n\nLibya's ancient rock art in the Fezzan region includes images of animals and humans that anthropologists believe served protective and invocation purposes. The Touareg people of the south carry on Berber traditions of silver amulet jewelry, including the iconic Touareg cross pendant (teneghelt) whose form varies by region and functions as a protective identity marker.",
    charmSlugs: [
      "hamsa-hand", "khamsa", "evil-eye", "hand-of-fatima", "tasbih",
      "prayer-beads", "berber-cross", "islamic-crescent",
    ],
  },
  {
    name: "Sudan",
    slug: "sudan",
    region: "North Africa",
    flag: "🇸🇩",
    description:
      "Sudan's charm tradition is shaped by Sufi Islam — the country has one of the highest concentrations of Sufi orders (tariqas) in the world — alongside surviving Nubian and ancient Kushite traditions. The Sufi zikr ceremony, involving rhythmic chanting, music, and movement, is both worship and a collective ritual for drawing divine blessing. Sufi sheikhs issue blessed amulets (hirz) to followers seeking luck, healing, or protection.\n\nThe evil eye is widely feared: blue beads, kohl, and Quranic inscriptions are standard protection. Nubian silver jewelry from southern regions carries distinct amulet forms. The ancient Kushite pyramids of Meroe, built by the ancient Nubian civilization, are associated in local folklore with the tremendous spiritual power of the ancestors.",
    charmSlugs: [
      "hamsa-hand", "evil-eye", "tasbih", "prayer-beads", "islamic-crescent",
      "cowrie-shell", "ethiopian-cross",
    ],
  },

  // ── SUB-SAHARAN AFRICA ─────────────────────────────────────────────────────
  {
    name: "Nigeria",
    slug: "nigeria",
    region: "Sub-Saharan Africa",
    flag: "🇳🇬",
    description:
      "Nigeria is a powerhouse of African spiritual traditions, home to the Yoruba, Igbo, and Hausa-Fulani peoples among over 250 ethnic groups, each with deep amulet cultures. The Yoruba ibeji (twin figurines) are among the most sacred objects in Yoruba religion: when a twin dies, the ibeji is carved to house the dead child's spirit and must be honored and fed to prevent misfortune for the surviving twin and family. Cowrie shells have been the currency and amulet of the Yoruba, Igbo, and many other groups for centuries.\n\nThe Ifa divination system of the Yoruba, recognized by UNESCO as an Intangible Cultural Heritage, produces specific amulets and prescribed actions for each of its 256 odù (chapters). Gris-gris pouches — small bags of herbs, powders, and sacred objects — are used for protection and attraction of luck. The mojo hand tradition that traveled with enslaved West Africans to the Americas has its deep roots in Nigerian soil.",
    charmSlugs: [
      "yoruba-ibeji", "cowrie-shell", "gris-gris", "mojo-hand", "african-mask",
      "adinkra-gye-nyame",
    ],
  },
  {
    name: "Ghana",
    slug: "ghana",
    region: "Sub-Saharan Africa",
    flag: "🇬🇭",
    description:
      "Ghana is the homeland of the Akan people, who developed one of Africa's richest systems of symbolic amulets and gold weights. Adinkra symbols — a visual alphabet of proverbs and philosophical concepts — originated with the Bono people of Brong-Ahafo and were originally worn by royalty at funerals. Today they appear on cloth, jewelry, pottery, and architecture as expressions of values and prayers. The gye nyame symbol ('except God, I fear none') is the most ubiquitous, expressing ultimate faith.\n\nAkuaba dolls — abstract female figurines with flat disk-shaped heads — are carried by Akan women hoping to conceive healthy children. Akan gold weights, cast in bronze in the forms of animals and proverbs, encode wisdom and fortune. Kente cloth woven in specific colors and patterns carries status and auspicious meaning at royal ceremonies. Cowrie shells remain important in divination and as adornment.",
    charmSlugs: [
      "adinkra-gye-nyame", "adinkra-sankofa", "akuaba-doll", "akan-goldweight",
      "kente-charm", "cowrie-shell", "african-mask",
    ],
  },
  {
    name: "Kenya",
    slug: "kenya",
    region: "Sub-Saharan Africa",
    flag: "🇰🇪",
    description:
      "Kenya's diverse ethnic landscape — Kikuyu, Maasai, Luo, Kamba, Swahili, and many more — produces an equally diverse tapestry of lucky charms and protective traditions. The Maasai are among Africa's most recognizable peoples, and their beaded jewelry (enkiama) is both identity marker and powerful amulet: specific bead colors carry distinct meanings — white for purity, blue for sky and God, red for bravery and blood. Maasai necklaces are among the most iconic African amulets.\n\nThe Swahili coastal tradition blends Islamic and African folk practice — tasbih prayer beads, Quranic amulets, and specific plant-based charms are used for protection. Among the Kikuyu, the mugumo fig tree is considered sacred and lucky, and offerings are made at its base. The Kamba people are renowned carvers of protective figurines and ritual objects throughout East Africa.",
    charmSlugs: [
      "maasai-necklace", "cowrie-shell", "tasbih", "prayer-beads",
      "african-mask", "evil-eye",
    ],
  },
  {
    name: "Ethiopia",
    slug: "ethiopia",
    region: "Sub-Saharan Africa",
    flag: "🇪🇹",
    description:
      "Ethiopia is one of the world's oldest Christian nations, with the Ethiopian Orthodox Church tracing its roots to the fourth century. The Ethiopian cross is one of the most distinctive in the world — its interlaced geometric patterns encode eternal life and protection, and cross pendants are worn by virtually every Orthodox Christian as the primary protective amulet. The Ark of the Covenant, said to reside in Aksum, is the supreme lucky talisman of Ethiopian national identity.\n\nThe ketab scroll — a long piece of parchment covered in sacred texts, prayers, and magical diagrams — is folded and worn in a leather case around the neck for protection against illness, evil eye, and misfortune. Ethiopian talismans (tilsum) incorporate the four evangelists, archangels, and Solomon's seal in complex protective diagrams. The coffee ceremony, which originated in Ethiopia, involves blessing rituals that invite good fortune to the household.",
    charmSlugs: [
      "ethiopian-cross", "evil-eye", "prayer-beads", "rosary-beads",
      "cowrie-shell", "tasbih",
    ],
  },
  {
    name: "South Africa",
    slug: "south-africa",
    region: "Sub-Saharan Africa",
    flag: "🇿🇦",
    description:
      "South Africa's charm culture reflects its extraordinary diversity — Zulu, Xhosa, Sotho, Tswana, Ndebele, Cape Malay, and many other traditions coexist with European, Indian, and other immigrant influences. The Zulu love letter — a beaded message of colored beads encoding complex emotional meanings — is one of southern Africa's most distinctive amulet forms, worn as jewelry that simultaneously communicates and protects. Sangoma (traditional healers) create specific amulets (izinhlola) for their patients.\n\nThe ndlamu beadwork of the Ndebele women is among Africa's most beautiful amulet art, with elaborate geometric patterns painted on homes and worn as jewelry conveying fertility and blessing. Ubuntu ('I am because we are') — the foundational Southern African philosophy — shapes collective protective rituals. Ancestral communication through dreams and divination is central to misfortune prevention across most indigenous groups.",
    charmSlugs: [
      "zulu-love-letter", "cowrie-shell", "african-mask", "adinkra-gye-nyame",
      "maasai-necklace",
    ],
  },
  {
    name: "Tanzania",
    slug: "tanzania",
    region: "Sub-Saharan Africa",
    flag: "🇹🇿",
    description:
      "Tanzania's Swahili coastal culture is a centuries-old fusion of African, Arab, Indian, and Persian traditions, and its charm culture reflects all of these currents. Hirizi — Islamic amulets containing Quranic verses in small metal cases — are worn throughout the Muslim majority coast and Zanzibar archipelago. The evil eye (jicho baya) is widely feared and guarded against with Quranic verses and specific plants.\n\nMasai communities maintain their beadwork amulet traditions in northern Tanzania, and the diverse interior groups including the Chagga, Ha, and Sukuma have their own specific divination and amulet traditions. Cowrie shells are used in divination and as adornment by many groups. The black rhinoceros (now critically endangered) was historically associated with protection and strength.",
    charmSlugs: [
      "cowrie-shell", "evil-eye", "tasbih", "prayer-beads", "maasai-necklace",
      "african-mask",
    ],
  },
  {
    name: "Uganda",
    slug: "uganda",
    region: "Sub-Saharan Africa",
    flag: "🇺🇬",
    description:
      "Uganda's Bantu and Nilotic peoples have rich traditions of protective amulets rooted in ancestor veneration and the power of specific animals, plants, and objects. The Buganda kingdom, Uganda's most powerful traditional kingdom, has a sophisticated system of clan totems (miziro) that function as protective identities — harming your totem animal brings misfortune, and honoring it brings luck.\n\nTraditional healers (babalozi or nyanga) create specific protective amulets from animal parts, herbs, and sacred objects for their clients. Cowrie shells feature prominently in ceremonial dress and divination. The growing Christian and Islamic communities have overlaid these traditions with rosary beads, Quranic amulets, and prayer practices that blend with indigenous protective beliefs.",
    charmSlugs: [
      "cowrie-shell", "african-mask", "rosary-beads", "tasbih", "prayer-beads",
    ],
  },
  {
    name: "Congo",
    slug: "congo",
    region: "Sub-Saharan Africa",
    flag: "🇨🇩",
    description:
      "The Democratic Republic of Congo is home to some of Africa's most powerful and visually striking protective amulets. The Nkisi figures of the Kongo people — wooden figurines bristling with nails, blades, and other objects driven in by a ritual specialist (nganga) to activate their power — are among the most internationally recognized African ritual objects. Each nail driven into the nkisi activates a specific protective or punitive force.\n\nThe Luba and Kuba kingdoms produced elaborate ceremonial objects including masks and figures that channeled ancestral power. Cowrie shells are ubiquitous across ceremonial dress and divination objects throughout the Congo Basin. The syncretic Christian movements of Kimbanguism and similar Congolese churches have created their own distinctive blend of Christian and African protective symbolism.",
    charmSlugs: [
      "cowrie-shell", "african-mask", "rosary-beads", "prayer-beads",
    ],
  },
  {
    name: "Cameroon",
    slug: "cameroon",
    region: "Sub-Saharan Africa",
    flag: "🇨🇲",
    description:
      "Cameroon is described as 'Africa in miniature' for its diverse peoples and terrain, and its charm culture matches this diversity. The Bamileke people of the western highlands are renowned for their spectacular masks and royal regalia, including beaded elephant masks that concentrate royal and supernatural power. The Fang people produce elaborate reliquary figures (byeri) housing ancestral skulls to channel their protective power to the living.\n\nCowrie shells are used in divination and ceremonial dress across most ethnic groups. The Grassfields kingdoms of the west have sophisticated palace objects and royal amulets that encode political and supernatural power. Christian and Islamic amulet traditions are layered over these deep local foundations.",
    charmSlugs: [
      "cowrie-shell", "african-mask", "rosary-beads", "prayer-beads", "tasbih",
    ],
  },
  {
    name: "Senegal",
    slug: "senegal",
    region: "Sub-Saharan Africa",
    flag: "🇸🇳",
    description:
      "Senegal is a predominantly Muslim country with a deep tradition of Sufi Islam — particularly the Mouride and Tijaniyya brotherhoods — that has produced distinctive protective charm practices. The gris-gris is the quintessential Senegalese amulet: a small pouch or leather case containing Quranic verses, herbs, and sacred objects, worn around the neck, waist, or arm for protection and luck. Marabouts (Islamic spiritual leaders) are the primary producers of these charms and their advice and blessings are sought at every significant life moment.\n\nThe Touba pilgrimage to the holy city of the Mouride brotherhood is the largest religious gathering in sub-Saharan Africa, and the blessed objects — water, sand, grain — brought back from Touba are considered powerful protective charms. Wrestling (lutte sénégalaise) is deeply intertwined with amulet culture: professional wrestlers (lutteurs) wear elaborate gris-gris on their bodies for protection and victory.",
    charmSlugs: [
      "gris-gris", "tasbih", "prayer-beads", "islamic-crescent", "mojo-hand",
      "cowrie-shell",
    ],
  },
  {
    name: "Mali",
    slug: "mali",
    region: "Sub-Saharan Africa",
    flag: "🇲🇱",
    description:
      "Mali was the heart of the ancient Ghana, Mali, and Songhai empires, and its charm traditions carry the weight of this imperial history. The Mande-speaking Bambara, Malinke, and Soninke peoples have rich traditions of protective objects including the boli — a formless accumulative altar object built up with sacrificial blood and organic matter that concentrates supernatural protective power.\n\nIslamic practice is dominant and Sufi brotherhoods are strong: the great mosque of Djenné, built of mud brick, is the center of a living sacred landscape where blessings are sought. Tuareg people of the northern Sahara carry distinctive silver cross amulets (teneghelt) that differ by regional origin. Cowrie shells feature in the divination and dress of many ethnic groups.",
    charmSlugs: [
      "gris-gris", "tasbih", "prayer-beads", "islamic-crescent", "cowrie-shell",
      "african-mask", "berber-cross",
    ],
  },
  {
    name: "Ivory Coast",
    slug: "ivory-coast",
    region: "Sub-Saharan Africa",
    flag: "🇨🇮",
    description:
      "Côte d'Ivoire is renowned for its spectacular mask traditions — the Dan, Guro, Baule, and Senufo peoples each produce distinctive ritual masks that concentrate ancestral power and protect the community during ceremonies. The Baule people also carve remarkable spirit figures (blolo bla and blolo bian) representing a person's heavenly spouse, which must be honored to prevent marital misfortune.\n\nCowrie shells are used extensively in divination and ceremonial dress. Senufo divination objects and bronze amulets carry protective power assigned by trained initiates. The growing Muslim community carries gris-gris pouches and tasbih beads, while the Christian community wears crosses and rosary beads.",
    charmSlugs: [
      "cowrie-shell", "african-mask", "gris-gris", "tasbih", "prayer-beads",
      "rosary-beads",
    ],
  },
  {
    name: "Burkina Faso",
    slug: "burkina-faso",
    region: "Sub-Saharan Africa",
    flag: "🇧🇫",
    description:
      "Burkina Faso is home to the Mossi kingdoms and dozens of other ethnic groups with rich amulet traditions. The Mossi people's protective masks, particularly the tall headdress masks used in initiation ceremonies, channel ancestral power for the protection of the community. Protective amulets are made by specific ritual specialists and worn for battles, journeys, and business negotiations.\n\nThe baobab tree is revered throughout Burkina Faso as a source of life and sustenance in the Sahelian landscape, and specific baobab trees are considered sacred sites where offerings are made for luck. Gris-gris pouches containing Quranic verses and herbs are worn by Muslims; animist communities carry similar pouches with plant and animal ingredients consecrated by diviners.",
    charmSlugs: [
      "baobab", "cowrie-shell", "african-mask", "gris-gris", "tasbih",
      "prayer-beads",
    ],
  },
  {
    name: "Niger",
    slug: "niger",
    region: "Sub-Saharan Africa",
    flag: "🇳🇪",
    description:
      "Niger's predominantly Saharan and Sahelian landscape is home to Tuareg, Hausa, Zarma, and other peoples with distinct amulet traditions. The Tuareg silver cross (teneghelt) — distinctive cross pendants that vary in form by region — is the most iconic charm, originally given by a father to his son with the words 'I give you the four corners of the world, for one cannot know where one will die.' It functions as both identity marker and compass of divine protection.\n\nHausa tradition involves elaborate protective leather-work amulets, often incorporating Quranic verses. The baobab tree, associated with deep roots and survival in the harshest conditions, is a sacred tree for many Niger communities. The evil eye and gris-gris are central to protective belief throughout the country.",
    charmSlugs: [
      "berber-cross", "cowrie-shell", "gris-gris", "tasbih", "prayer-beads",
      "baobab", "evil-eye", "islamic-crescent",
    ],
  },
  {
    name: "Guinea",
    slug: "guinea",
    region: "Sub-Saharan Africa",
    flag: "🇬🇳",
    description:
      "Guinea's predominantly Muslim Fula (Peul) and Mandinka peoples carry a strong tradition of gris-gris amulets blessed by marabouts. The gris-gris here takes many forms — leather pouches, animal horns, cloth bundles — all containing Quranic verses and protective organic materials. Wrestling and hunting ceremonies involve elaborate amulet preparation.\n\nThe Baga people of the coastal region are known for their spectacular nimba (shoulder mask representing a female ancestor of fertility and prosperity). Cowrie shells are widely used in divination and ceremonial dress. Traditional healers (balantigi) create specific plant-based amulets for their clients.",
    charmSlugs: [
      "gris-gris", "cowrie-shell", "african-mask", "tasbih", "prayer-beads",
    ],
  },
  {
    name: "Sierra Leone",
    slug: "sierra-leone",
    region: "Sub-Saharan Africa",
    flag: "🇸🇱",
    description:
      "Sierra Leone is home to the Poro and Sande secret societies, among the most powerful indigenous institutions in West Africa, which produce and control specific amulets as part of initiation into adult spiritual knowledge. Sande society helmet masks (sowei) — worn by female society leaders — are among the most celebrated African art objects and concentrate protective feminine spiritual power.\n\nGris-gris amulets are worn throughout the country by Muslim and animist practitioners alike. Cowrie shells are ubiquitous in traditional dress and divination. The Krio (Creole) community of Freetown, descendants of freed enslaved people, maintains its own syncretic protective traditions blending West African, Caribbean, and European elements.",
    charmSlugs: [
      "gris-gris", "cowrie-shell", "african-mask", "tasbih", "prayer-beads",
    ],
  },
  {
    name: "Liberia",
    slug: "liberia",
    region: "Sub-Saharan Africa",
    flag: "🇱🇷",
    description:
      "Liberia's diverse peoples including the Kpelle, Bassa, Mano, and Grebo have strong traditions of protective amulets and secret societies. The Poro and Sande societies, shared with Sierra Leone, control the most powerful protective objects in Liberian indigenous society. Ancestral masquerades concentrate protective power and are used at funerals, initiations, and times of community crisis.\n\nThe Americo-Liberian community — founded by freed American slaves — brought mojo hand and root work amulet traditions from North America, creating a unique circuit of luck-charm knowledge between West Africa and its diaspora. Cowrie shells feature in divination and traditional dress. Specific tree roots, animal parts, and herbs are combined by specialists for protective and luck-attracting bundles.",
    charmSlugs: [
      "mojo-hand", "gris-gris", "cowrie-shell", "african-mask",
    ],
  },
  {
    name: "Togo",
    slug: "togo",
    region: "Sub-Saharan Africa",
    flag: "🇹🇬",
    description:
      "Togo is home to the Akodessewa Fetish Market in Lomé — the largest voodoo market in the world — where dried animal parts, carved figures, and natural substances used in traditional protective and luck-attracting ceremonies are sold alongside each other. This market is a visible testament to the vitality of Ewe and Fon voodoo (vodun) traditions. Vodun is not mere superstition here but a living theological system in which specific spirits (lwa or vodun) govern specific aspects of life.\n\nCowrie shells are used extensively in Ewe and Fon divination, and Fa divination (the southern cousin of Yoruba Ifa) produces specific prescribed amulets and rituals. The growing Islamic community carries gris-gris and tasbih. The adinkra symbols of neighboring Ghana's Akan people are shared across the border.",
    charmSlugs: [
      "cowrie-shell", "african-mask", "gris-gris", "adinkra-gye-nyame",
      "tasbih", "prayer-beads",
    ],
  },
  {
    name: "Benin",
    slug: "benin",
    region: "Sub-Saharan Africa",
    flag: "🇧🇯",
    description:
      "Benin is the spiritual homeland of Vodun (voodoo), where this sophisticated theological system originated before being spread to the Americas through the slave trade. The Fon and Ewe peoples venerate a complex pantheon of divine forces (lwa), and each person carries or displays specific objects associated with their protective lwa. The Dan (rainbow serpent), Mawu-Lisa (the divine twins), and Sakpata (the earth deity) are among the most important.\n\nCowrie shells are the primary sacred currency of Vodun practice — used in divination, offered to shrines, and woven into the ceremonial garments of priests. The Fa divination system produces personalized protective prescriptions. Benin City was the capital of the ancient Benin Kingdom whose bronze cast figures, including the famous Benin Bronzes, encode royal protective power.",
    charmSlugs: [
      "cowrie-shell", "african-mask", "gris-gris", "yoruba-ibeji",
    ],
  },
  {
    name: "Rwanda",
    slug: "rwanda",
    region: "Sub-Saharan Africa",
    flag: "🇷🇼",
    description:
      "Rwanda's Bantu tradition venerates Imana (the supreme creator) and a complex of ancestor spirits (abazima) who protect or afflict the living depending on how they are honored. Divination specialists (abapfumu) interpret signs and prescribe specific protective objects and ritual actions. The Intore dance tradition channels warrior strength and blessings for the community.\n\nChristianity is now dominant in Rwanda, and rosary beads and crosses are the most widely carried protective objects. Traditional healers continue to prescribe plant-based amulets (inkorōboro) for health and protection. The covenant basket (agaseke) — a lidded woven container — is considered a blessing object given at weddings and to welcome guests.",
    charmSlugs: [
      "cowrie-shell", "rosary-beads", "crucifix", "prayer-beads",
    ],
  },
  {
    name: "Burundi",
    slug: "burundi",
    region: "Sub-Saharan Africa",
    flag: "🇧🇮",
    description:
      "Burundi's Bantu tradition has a strong lineage of ancestral veneration in which the spirits of deceased relatives (imizinu) must be honored with offerings and ritual to protect the living from illness and misfortune. Traditional healers (imawe or umugesera) create protective objects and prescribe rituals. The sacred drum (karyenda) is the supreme symbol of Burundian royal power and collective protection.\n\nChristianity, brought by missionaries in the colonial era, is now practiced by the majority, and rosary beads and crosses are the most common protective objects. Traditional plant-based amulets and divination practices continue alongside Christian devotion.",
    charmSlugs: [
      "cowrie-shell", "rosary-beads", "crucifix", "prayer-beads",
    ],
  },
  {
    name: "Zambia",
    slug: "zambia",
    region: "Sub-Saharan Africa",
    flag: "🇿🇲",
    description:
      "Zambia's Bantu-speaking peoples — Bemba, Tonga, Lozi, and many others — share traditions of ancestral protective spirits (mizimu) and specialist healers (nganga) who create and activate protective objects. The Lozi royal bargemala ceremony (kuomboka), in which the Litunga moves from flood plain to highland, is accompanied by elaborate protective rituals.\n\nChristianity is now the dominant religion and the country officially declares itself a Christian nation, so crosses and rosary beads are the most widely carried protective objects. Traditional healing and amulet practices continue in many rural communities. Copper — mined in Zambia for thousands of years — carries historical associations with wealth and the power of the land.",
    charmSlugs: [
      "cowrie-shell", "rosary-beads", "crucifix", "prayer-beads",
    ],
  },
  {
    name: "Zimbabwe",
    slug: "zimbabwe",
    region: "Sub-Saharan Africa",
    flag: "🇿🇼",
    description:
      "Zimbabwe's Shona and Ndebele peoples carry deep traditions of ancestral veneration through which the spirits of the deceased communicate through spirit mediums (svikiro) and n'anga (traditional healers). The Zimbabwe bird — a carved soapstone fish eagle found at Great Zimbabwe — is the national symbol and an ancient emblem of royal protective power. Specific stones, animal parts, and plants are used in protective ngozi charms.\n\nThe Ndebele, originally from South Africa's Zulu tradition, maintain their own protective beadwork traditions. Christianity is widely practiced and crosses and rosary beads are common protective objects. The lion — national animal — carries deep associations of protective ancestral power in both Shona and Ndebele tradition.",
    charmSlugs: [
      "cowrie-shell", "rosary-beads", "crucifix", "prayer-beads", "african-mask",
    ],
  },
  {
    name: "Mozambique",
    slug: "mozambique",
    region: "Sub-Saharan Africa",
    flag: "🇲🇿",
    description:
      "Mozambique's Bantu-speaking peoples — Makua, Tsonga, Shona — carry traditions of ancestral protective spirits and specialized healers (curandeiro) who diagnose misfortune and prescribe protective objects and rituals. The Makua northern people have distinctive wooden helmet masks used in initiation rituals. The Swahili coastal tradition brings Islamic amulet practice with Quranic inscriptions and tasbih beads.\n\nThe Arab trading presence along the coast for over a millennium left deep marks on the protective traditions of coastal Mozambicans, particularly in the practice of writing Quranic protective verses. Christian crosses and rosary beads are widely carried in the south. Traditional n'anga healers prescribe animal-based and plant-based lucky objects.",
    charmSlugs: [
      "cowrie-shell", "african-mask", "rosary-beads", "tasbih", "prayer-beads",
    ],
  },
  {
    name: "Madagascar",
    slug: "madagascar",
    region: "Sub-Saharan Africa",
    flag: "🇲🇬",
    description:
      "Madagascar's Malagasy people blend Austronesian (Southeast Asian), Bantu African, and Arab cultural influences into a remarkably distinctive culture. The fady (taboo) system governs daily life: specific days, objects, actions, and foods are either forbidden or auspicious depending on one's ancestry. Famadihana (the turning of the bones) — the periodic exhumation of ancestors' remains for re-wrapping in fresh silk and dancing — is the most distinctive Malagasy lucky ceremony, maintaining the ancestors' goodwill.\n\nThe vintana (fate/astrology) system, derived from Arabic-Islamic astrological traditions, determines auspicious times for planting, building, and marriage. Ombiasy (traditional diviners) create sampy (royal talismans) and ody (personal protective amulets) from specific plant and animal materials. Cowrie shells are important in divination.",
    charmSlugs: [
      "cowrie-shell", "prayer-beads", "rosary-beads",
    ],
  },
  {
    name: "Malawi",
    slug: "malawi",
    region: "Sub-Saharan Africa",
    flag: "🇲🇼",
    description:
      "Malawi's predominantly Christian population carries a tradition of protective faith objects — crosses, rosary beads, and blessed water — overlaid on deep traditional Chewa and Ngoni practices of ancestral protection. The Gule Wamkulu (great dance) of the Chewa people, recognized by UNESCO, involves masked figures representing ancestral spirits who enforce social laws and provide protection.\n\nTraditional healers (asing'anga) prescribe specific amulets and rituals for protection and luck. Cowrie shells appear in traditional dress and divination. Lake Malawi — one of the world's largest and most biodiverse lakes — is considered a sacred landscape with specific protective spirits whose goodwill must be maintained by lakeside communities.",
    charmSlugs: [
      "cowrie-shell", "rosary-beads", "crucifix", "prayer-beads", "african-mask",
    ],
  },
  {
    name: "Botswana",
    slug: "botswana",
    region: "Sub-Saharan Africa",
    flag: "🇧🇼",
    description:
      "Botswana's Tswana and Kalanga peoples have traditions of ancestral veneration and traditional healers (dingaka) who diagnose and treat misfortune with specific protective objects and rituals. The mokgosi (community gathering tree) — often a large shade tree at the village center — is considered a place of communal protection where elders' blessings concentrate.\n\nChristianity is dominant and rosary beads, crosses, and church-blessed objects are the most common protective items. San (Bushmen) communities in the Kalahari maintain ancient traditions of trance healing in which the n/om (spiritual energy) is activated to provide protection and healing for the community. Ostrich eggshell beads, one of the oldest forms of personal ornamentation in human history, are used by the San as both jewelry and lucky charms.",
    charmSlugs: [
      "cowrie-shell", "rosary-beads", "crucifix", "prayer-beads",
    ],
  },
  {
    name: "Namibia",
    slug: "namibia",
    region: "Sub-Saharan Africa",
    flag: "🇳🇦",
    description:
      "Namibia's Ovambo, Herero, Nama, and San peoples each carry distinct amulet traditions. Herero women's Victorian-style dress incorporates protective iron and copper jewelry adapted from pre-colonial traditions. Himba women coat themselves in otjize (red ochre and butter fat), which functions simultaneously as skin protection, aesthetic identity, and sacred protective coating.\n\nThe San of the Kalahari maintain ancient trance healing traditions in which the healer activates spiritual power for community protection. Ostrich eggshell beads are among the oldest forms of human ornament ever found — South African sites date them to 75,000 years ago — and continue to be made by San women as both trade goods and personal lucky charms. Christian crosses and rosary beads are widely carried.",
    charmSlugs: [
      "cowrie-shell", "rosary-beads", "crucifix",
    ],
  },
  {
    name: "Lesotho",
    slug: "lesotho",
    region: "Sub-Saharan Africa",
    flag: "🇱🇸",
    description:
      "Lesotho's Basotho people carry protective traditions rooted in ancestral veneration and the power of specific animal and plant materials. The distinctive Basotho blanket — a woven wool blanket worn year-round as a cloak — carries specific patterns with protective and identity meanings. Traditional healers (dingaka) prescribe specific protective objects called litaola (divining bones) and herbal preparations.\n\nChristianity arrived early in Lesotho through French Protestant missionaries and is now dominant, so crosses and rosary beads are widely carried. The mokorotlo (woven grass hat) is a national symbol of identity and collective protection. The crocodile, emblem of the ruling Crocodile clan, is associated with ancestral protective power.",
    charmSlugs: [
      "rosary-beads", "crucifix", "prayer-beads", "cowrie-shell",
    ],
  },
  {
    name: "Eswatini",
    slug: "eswatini",
    region: "Sub-Saharan Africa",
    flag: "🇸🇿",
    description:
      "Eswatini (formerly Swaziland) is one of the world's last absolute monarchies, and the Swazi king's ritual power is both political and protective. The annual Incwala (first fruits ceremony) and Umhlanga (reed dance) are the two most important national rituals, both involving elaborate protective preparations and offerings to the ancestors for national good fortune.\n\nTraditional healers (tinyangas) create protective objects (tinyandza) from specific animal and plant materials. The Python (inswangati) is the sacred royal animal and a supreme protective symbol for the Swazi nation. Christian crosses and rosary beads are carried by the majority Christian population.",
    charmSlugs: [
      "cowrie-shell", "rosary-beads", "crucifix", "prayer-beads",
    ],
  },
  {
    name: "Mauritius",
    slug: "mauritius",
    region: "Sub-Saharan Africa",
    flag: "🇲🇺",
    description:
      "Mauritius is an extraordinary cultural melting pot where Indian, African, Chinese, and European traditions coexist, producing an equally diverse charm culture. The large Hindu Tamil community maintains strong traditions of Ganesha worship, prayer flower garlands, and navaratna gem jewelry. The Chinese community carries maneki-neko cats, red envelopes, and jade, and feng shui is consulted for buildings and businesses.\n\nThe African Creole community has preserved elements of protective traditions from various African origins, often blended with Catholic practice in a form sometimes called ti-bon. Rosary beads and crosses are carried by the Catholic majority. The dodo bird — extinct since the seventeenth century — has become an ironic lucky symbol of the island, appearing on souvenirs and amulets.",
    charmSlugs: [
      "ganesha", "om-symbol", "lotus", "evil-eye", "maneki-neko",
      "red-envelope", "jade", "lucky-coins", "rosary-beads", "crucifix",
    ],
  },
  {
    name: "Somalia",
    slug: "somalia",
    region: "Sub-Saharan Africa",
    flag: "🇸🇴",
    description:
      "Somalia is an overwhelmingly Sunni Muslim country whose charm tradition centers on Islamic protective practice. The evil eye (il-shayd) is the most feared source of misfortune, guarded against with Quranic recitations, blue beads, and black kohl applied to children. Tasbih prayer beads are carried universally. The hand of Fatima and Quranic amulet cases sealed in leather are standard protective jewelry.\n\nThe camel — the most important animal in Somali pastoral culture and the measure of all wealth — carries deep associations of abundance and divine favor. Incense (particularly frankincense from the southern coast) is burned to purify spaces and carry prayers. Poetry is the supreme art form of the Somali people, and specific poems function as verbal protective charms.",
    charmSlugs: [
      "evil-eye", "tasbih", "prayer-beads", "hand-of-fatima", "islamic-crescent",
    ],
  },
  {
    name: "Eritrea",
    slug: "eritrea",
    region: "Sub-Saharan Africa",
    flag: "🇪🇷",
    description:
      "Eritrea's mixed Muslim and Orthodox Christian population carries parallel protective traditions. The Eritrean Orthodox Christian community's amulet culture is closely related to Ethiopian Orthodox practice: the distinctive Eritrean cross, ketab scrolls, and specifically blessed objects from monasteries function as protective charms. The Coptic-style cross pendant is the primary Christian amulet.\n\nThe Muslim community, particularly the lowland Tigre and Saho peoples, carries Islamic amulets including tasbih, Quranic cases, and the hand of Fatima. Coffee ceremony rituals bless households and gatherings. The landscape of Eritrea includes ancient Aksumite stele and pre-Christian sacred sites that continue to be visited by those seeking ancestral blessings.",
    charmSlugs: [
      "ethiopian-cross", "evil-eye", "tasbih", "prayer-beads", "rosary-beads",
      "islamic-crescent",
    ],
  },
  {
    name: "Gabon",
    slug: "gabon",
    region: "Sub-Saharan Africa",
    flag: "🇬🇦",
    description:
      "Gabon is renowned in the history of African art for the Fang and Kota peoples' extraordinary reliquary guardian figures. Fang byeri figures — carved wooden figures placed atop bark containers of ancestral skulls — concentrate ancestral protective power for the living. Kota reliquary figures, covered in sheets of copper and brass, are among the most visually striking protective objects in world art.\n\nThe Bwiti initiation ceremony of the Fang, Mitsogo, and other peoples involves consumption of iboga root bark in a nocturnal ceremony that is simultaneously a healing ritual, a communication with the dead, and a powerfully protective initiation. Cowrie shells appear in ceremonial dress throughout the country.",
    charmSlugs: [
      "cowrie-shell", "african-mask", "rosary-beads", "prayer-beads",
    ],
  },
  {
    name: "Chad",
    slug: "chad",
    region: "Sub-Saharan Africa",
    flag: "🇹🇩",
    description:
      "Chad's predominantly Muslim population carries Islamic protective traditions layered over ancient Saharan and Sahelian folk practices. The Sara people of the south have animist traditions involving the yondo male initiation ceremony in which protective objects and scarification are used. The Arab and Toubou peoples of the north carry leather-encased Quranic amulets (hirz) as the primary protective charm.\n\nThe sultanates of central Chad — Bagirmi, Wadai, and Bornu — produced elaborate royal protective regalia including war amulets, armor inscribed with Quranic verses, and ceremonial staffs. Cowrie shells are used in traditional dress and trade. The evil eye is guarded against across most ethnic groups.",
    charmSlugs: [
      "evil-eye", "tasbih", "prayer-beads", "islamic-crescent", "cowrie-shell",
      "gris-gris",
    ],
  },
  {
    name: "Gambia",
    slug: "gambia",
    region: "Sub-Saharan Africa",
    flag: "🇬🇲",
    description:
      "The Gambia is one of West Africa's smallest countries but has a vibrant Mandinka gris-gris tradition deeply embedded in daily life. Marabout-produced jujus and gris-gris amulets are worn by nearly everyone — drivers attach them to their vehicles, wrestlers wear them wrapped around their bodies, and mothers pin them to their babies' clothing. These amulets combine Quranic verses with natural ingredients and are believed to provide specific targeted protection.\n\nThe Gambia's jokingly called 'the smiling coast' reflects a culture in which good fortune is actively sought and celebrated. Cowrie shells feature in divination and traditional dress. The baobab tree is a village center and sacred gathering place across the country.",
    charmSlugs: [
      "gris-gris", "tasbih", "prayer-beads", "islamic-crescent", "cowrie-shell",
      "baobab",
    ],
  },
  {
    name: "Cape Verde",
    slug: "cape-verde",
    region: "Sub-Saharan Africa",
    flag: "🇨🇻",
    description:
      "Cape Verde's Creole culture — born from the encounter of Portuguese colonizers and West African enslaved peoples — developed its own syncretic religious and protective traditions. The Catholic Church is dominant, and crosses, rosary beads, and medals of saints (particularly Our Lady of Fátima, who shares a name with the Islamic hand) are the primary protective objects. St. Christopher medals are popular among the seafaring population.\n\nElements of African amulet practice survived in the form of specific plant preparations, protective phrases, and objects blessed by curandeiros. The morna — Cape Verde's melancholic musical form — expresses the saudade (longing) that is the emotional core of Creole culture, and specific songs are believed to carry protective blessings.",
    charmSlugs: [
      "rosary-beads", "crucifix", "st-christopher-medal", "guardian-angel",
      "anchor-charm",
    ],
  },
  {
    name: "Djibouti",
    slug: "djibouti",
    region: "Sub-Saharan Africa",
    flag: "🇩🇯",
    description:
      "Djibouti's Afar and Issa (Somali) peoples are overwhelmingly Sunni Muslim with a strong tradition of Islamic protective amulets. The evil eye is universally feared: blue beads, kohl on children, and Quranic verses are standard protection. Tasbih prayer beads are carried by virtually all adults. Marabout-produced leather amulet cases containing protective Quranic verses are worn by children and adults.\n\nThe Afar people's protective tradition also involves specific plant preparations and animal-derived protective items used by traditional healers. Coffee, which grows nearby in Ethiopia, is consumed in elaborate ceremonies that bless the household and its guests.",
    charmSlugs: [
      "evil-eye", "tasbih", "prayer-beads", "hand-of-fatima", "islamic-crescent",
    ],
  },
  {
    name: "Seychelles",
    slug: "seychelles",
    region: "Sub-Saharan Africa",
    flag: "🇸🇨",
    description:
      "The Seychelles' Creole culture blends African, Asian, French, and British influences into a unique protective tradition. The Gris-Gris of the Seychelles is a local form of sorcery and counter-sorcery practice in which specific objects, plants, and formulas are used either to harm or to protect. The bonm dimunn (good person) or fanm-bwa (female forest spirit) concepts reflect the rich animist substratum beneath Catholic practice.\n\nRosary beads and Catholic saints' medals are the most widely used protective objects. The coco de mer — the world's largest seed, found only in the Seychelles — is considered extraordinarily lucky and is given as a gift of fortune. The sea and its creatures carry deep associations of protective power for these island communities.",
    charmSlugs: [
      "rosary-beads", "crucifix", "guardian-angel", "gris-gris",
      "cowrie-shell", "anchor-charm",
    ],
  },

  // ── EUROPE - WESTERN ───────────────────────────────────────────────────────
  {
    name: "France",
    slug: "france",
    region: "Europe - Western",
    flag: "🇫🇷",
    description:
      "France's lucky-charm tradition blends Catholic devotion, medieval folklore, and the remnants of Gallic and Roman superstition. The porte-bonheur (lucky charm) tradition is alive in everyday French culture: the horseshoe hung above the door with the opening pointing up (to hold the luck in), the four-leaf clover pressed in a book, and the ladybug (coccinelle) that lands on your hand all bring bonne chance. Finding a coin of any kind is considered especially lucky in France.\n\nThe fleur-de-lis — the lily motif that was the emblem of French royalty — carries ancient associations of divine favor and royal protection. The chimney sweep crossing your path on New Year's Day is considered one of the luckiest possible omens. The lily of the valley (muguet) given on May 1st is a beloved national lucky charm, with France seeing millions of sprigs exchanged on that single day.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "fleur-de-lis",
      "chimney-sweep", "wishbone", "number-seven", "key", "acorn",
      "st-christopher-medal", "rosary-beads",
    ],
  },
  {
    name: "Germany",
    slug: "germany",
    region: "Europe - Western",
    flag: "🇩🇪",
    description:
      "Germany has a wonderfully specific and charming set of New Year's luck traditions. The little marzipan pig (Glücksschwein — lucky pig) is one of Europe's most beloved and distinctly German lucky charms, given as a gift on New Year's Eve. The chimney sweep (Schornsteinfeger) is perhaps the luckiest person to encounter in Germany: touching their buttons or shaking their hand is said to transfer tremendous luck, and their image appears on New Year's cards and chocolate figurines.\n\nThe four-leaf clover is universally lucky, and the horseshoe (Hufeisen) is hung over doors. Acorns are lucky because the mighty oak grows from such a small seed — small acorn pendants and motifs are common in German jewelry. The ladybug (Marienkäfer — Mary's beetle) is considered a blessing from the Virgin Mary. Mushrooms (particularly the red-and-white fly agaric, the Glückspilz) are distinctly German lucky symbols that appear on New Year's decorations.",
    charmSlugs: [
      "pig", "chimney-sweep", "horseshoe", "four-leaf-clover", "ladybug",
      "acorn", "lucky-penny", "number-seven", "wishbone", "key",
      "anchor-charm",
    ],
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    region: "Europe - Western",
    flag: "🇳🇱",
    description:
      "The Netherlands has a charm tradition shaped by Protestant sobriety, maritime heritage, and strong folk customs. The horseshoe over the door, the four-leaf clover, and the lucky penny are standard Dutch good-luck objects. The Delftware lucky tile — specifically those depicting cheerful folk scenes — was historically hung in homes as a blessing. The tulip, so central to Dutch identity, carries associations of prosperity from the Golden Age when tulip bulbs were literally traded as currency.\n\nThe anchor, given the Netherlands' maritime history, appears on countless Dutch amulets, sailor pendants, and tattoos as a symbol of hope and steadfastness. The windmill (molen) is a national symbol of Dutch ingenuity that also appears in miniature as a prosperity charm. The Dutch expression 'geluk' (luck/happiness) is associated with finding coins, ladybugs, and the number seven.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "anchor-charm",
      "number-seven", "key", "wishbone",
    ],
  },
  {
    name: "Belgium",
    slug: "belgium",
    region: "Europe - Western",
    flag: "🇧🇪",
    description:
      "Belgium's charm tradition shares the pan-European luck-bringers while adding some distinctly Flemish and Walloon elements. The horseshoe, four-leaf clover, and ladybug (lieveheersbeestje — dear lord's little beast) are universal. The Manneken Pis — the small bronze boy urinating, Brusssels's most famous statue — is actually considered a luck-bringer whose image appears on chocolates and souvenirs given as gifts of good fortune.\n\nThe St. Nicholas tradition, particularly strong in Belgium, involves leaving shoes out on December 5th and receiving gifts — the ritual itself is considered a luck-blessing for the household. Belgian lace, historically the finest in Europe, was traditionally worked with prayers for luck woven into the pattern. The coin-in-the-shoe at weddings is practiced across Belgium.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "number-seven",
      "key", "wishbone", "chimney-sweep",
    ],
  },
  {
    name: "Luxembourg",
    slug: "luxembourg",
    region: "Europe - Western",
    flag: "🇱🇺",
    description:
      "Luxembourg's charm tradition follows the Western European pattern closely, with the horseshoe, four-leaf clover, and ladybug as standard lucky objects. Luxembourg's wine-growing culture gives the grape cluster a special place as a symbol of abundance — miniature grape bunches appear on harvest festival decorations and jewelry. The Echternach Dancing Procession, the oldest procession in the world recognized by UNESCO, involves ritual dance that was historically believed to protect participants from St. Vitus's Dance and bring community luck.\n\nThe founding legend of Luxembourg involves a fairy (Melusine) associated with the Alzette River, and water-related amulets and the idea of fairy blessings persist in folk culture. The Luxembourg lion from the national crest appears in miniature form as a protective symbol.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "number-seven",
      "key", "wishbone",
    ],
  },
  {
    name: "Switzerland",
    slug: "switzerland",
    region: "Europe - Western",
    flag: "🇨🇭",
    description:
      "Switzerland's Alpine folk culture has produced some distinctly charming lucky objects alongside pan-European traditions. The Swiss cowbell (Kuhglocke) is one of Switzerland's most iconic amulet objects — not just a functional tool but a symbol of Alpine blessing, peace, and prosperity. Miniature cowbells are given as good-luck gifts and carried as charms. The edelweiss flower, growing in the high mountain terrain where only the brave dare climb, is the quintessential Swiss symbol of good luck, protection, and love.\n\nThe horseshoe, four-leaf clover, and ladybug are universal in Switzerland. The Alpine horn (alphorn) and the image of the benevolent Swiss mountain are cultural lucky symbols. The Swiss cross — clean, simple, and internationally recognized — appears as a protective emblem.",
    charmSlugs: [
      "swiss-cowbell", "edelweiss", "horseshoe", "four-leaf-clover", "ladybug",
      "lucky-penny", "number-seven", "key", "acorn",
    ],
  },
  {
    name: "Austria",
    slug: "austria",
    region: "Europe - Western",
    flag: "🇦🇹",
    description:
      "Austria shares the German Glücksschwein (lucky pig) tradition at New Year and the universal European lucky objects. The chimney sweep (Rauchfangkehrer) is as lucky to encounter in Vienna as anywhere in the German-speaking world. Austrian folk Catholic culture adds a layer of saint medals and pilgrimage objects: the Black Madonna of Mariazell is one of Central Europe's most important pilgrimage sites, and medals and images of this Madonna are carried for protection.\n\nThe edelweiss, growing in the high Alps, is a symbol of deep love and lucky protection. Austrian Christmas traditions include specific luck-bringing objects: the pig, the four-leaf clover, the chimney sweep, the mushroom, and the horseshoe are all given as miniature table decorations (Glücksbringer) at New Year.",
    charmSlugs: [
      "pig", "chimney-sweep", "edelweiss", "horseshoe", "four-leaf-clover",
      "ladybug", "lucky-penny", "number-seven", "acorn", "key",
      "st-christopher-medal", "rosary-beads",
    ],
  },
  {
    name: "Liechtenstein",
    slug: "liechtenstein",
    region: "Europe - Western",
    flag: "🇱🇮",
    description:
      "Liechtenstein, as a German-speaking Alpine principality, shares the charm traditions of its neighbors Germany, Austria, and Switzerland. The lucky pig, chimney sweep, four-leaf clover, and horseshoe are all recognized as Glücksbringer. The edelweiss has special resonance as an Alpine symbol. The country's close ties to the Catholic Church mean that saint medals and pilgrimage objects are also common protective items.\n\nAs one of the world's smallest countries, Liechtenstein's local lucky symbols tend to focus on national identity markers — the princely crown, specific mountain views, and the Rhine landscape — that carry a sense of blessed continuity. The wishbone and the lucky penny complete the standard European complement of charms.",
    charmSlugs: [
      "pig", "chimney-sweep", "edelweiss", "horseshoe", "four-leaf-clover",
      "ladybug", "lucky-penny", "number-seven",
    ],
  },
  {
    name: "Monaco",
    slug: "monaco",
    region: "Europe - Western",
    flag: "🇲🇨",
    description:
      "Monaco, the world's second smallest nation and a global center of casino gambling and yachting, has an amulet culture shaped by French Catholic tradition, Mediterranean influences, and the very specific superstitions of high-stakes gamblers. Casino players in Monte Carlo have elaborate personal lucky rituals: specific seats at tables, lucky numbers, touching lucky objects, and avoiding unlucky colors. The horseshoe and four-leaf clover are universally recognized luck-bringers.\n\nThe Monégasque patron saint, St. Devote, is celebrated with a procession in January where a boat is ceremonially burned to bring good fortune. Lucky dice and the number seven are perhaps more loaded with meaning here than almost anywhere else on earth. The ship's wheel and anchor reflect Monaco's deep connection to the sea and yachting culture.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "lucky-dice", "number-seven", "lucky-penny",
      "key", "anchor-charm", "ship-wheel", "ladybug",
    ],
  },

  // ── EUROPE - NORTHERN ──────────────────────────────────────────────────────
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    region: "Europe - Northern",
    flag: "🇬🇧",
    description:
      "Britain has one of Europe's richest and most documented lucky-charm traditions. The horseshoe hung with the ends pointing up is perhaps the most quintessentially British good-luck object, nailed above innumerable doorways since the Middle Ages when the blacksmith was believed to have power over evil. Finding a penny and picking it up ('see a penny, pick it up, all day long you'll have good luck') is a nationwide folk practice. The chimney sweep at a wedding is considered essential for marital happiness.\n\nThe Cornish piskey, the Welsh dragon, and English folklore tradition add layers to the national charm palette. White heather from the Scottish Highlands is the most treasured botanical lucky charm in Britain, particularly from the Highlands. The robin redbreast is considered so lucky that harming one brings seven years of misfortune. The wishbone is snapped at Christmas dinner by the whole family. St. Christopher medals are carried by drivers and travelers throughout the country.",
    charmSlugs: [
      "horseshoe", "lucky-penny", "chimney-sweep", "white-heather", "robin-redbreast",
      "wishbone", "four-leaf-clover", "ladybug", "acorn", "number-seven",
      "key", "st-christopher-medal", "corn-dolly", "anchor-charm", "ship-wheel",
    ],
  },
  {
    name: "Ireland",
    slug: "ireland",
    region: "Europe - Northern",
    flag: "🇮🇪",
    description:
      "Ireland is the spiritual home of the four-leaf clover, the Claddagh ring, and some of Europe's most vivid folk-luck traditions. The three-leaf shamrock represents the Holy Trinity and St. Patrick's Christianization of Ireland; finding a four-leaf variant is one of the world's most universal symbols of exceptional good fortune. The Claddagh ring — two hands holding a crowned heart — is exchanged between lovers as a symbol of love, loyalty, and friendship, and its manner of wearing signals the wearer's relationship status.\n\nThe Celtic triskele, representing the three realms of land, sea, and sky (or past, present, future), is an ancient Irish lucky symbol found throughout Celtic art. Kissing the Blarney Stone at Blarney Castle is said to confer the gift of eloquence. The horseshoe, the lucky penny, and the wishbone are all observed. The fairy (sídhe) tradition means that specific fairy-associated plants — hawthorn, elder, and foxglove — are treated with careful respect as sources of both luck and peril.",
    charmSlugs: [
      "four-leaf-clover", "claddagh-ring", "triskele", "horseshoe", "lucky-penny",
      "wishbone", "number-seven", "key", "ladybug", "acorn", "anchor-charm",
      "st-christopher-medal",
    ],
  },
  {
    name: "Sweden",
    slug: "sweden",
    region: "Europe - Northern",
    flag: "🇸🇪",
    description:
      "Sweden's charm tradition is rooted in Norse mythology and Swedish folk belief (folktro), where the tomte (a small household spirit) protects the farm and its inhabitants if properly honored with porridge on Christmas Eve. The Dala horse (Dalahäst) — the hand-painted wooden horse from Dalarna — is Sweden's most iconic national symbol and lucky charm, representing strength, loyalty, and the spirit of the Swedish countryside. Red Dala horses are found in homes across the world as emblems of Swedish blessing.\n\nVikings carved runes for protection and success into weapons, ships, and buildings, and runic amulets were worn for luck and power. The number seven is universally lucky, horseshoes are hung above doors, and the ladybug (nyckelpiga — key maiden) brings luck. The Swedish Christmas tradition of the Julbock (Yule goat) connects to ancient Norse associations of the goat with Thor's own goats that pulled his chariot.",
    charmSlugs: [
      "dala-horse", "viking-runes", "horseshoe", "four-leaf-clover", "ladybug",
      "lucky-penny", "number-seven", "acorn", "key", "anchor-charm",
      "mistletoe",
    ],
  },
  {
    name: "Norway",
    slug: "norway",
    region: "Europe - Northern",
    flag: "🇳🇴",
    description:
      "Norway's charm tradition draws from a particularly vivid Norse mythology heritage alongside Christian folk practice. Thor's Hammer (Mjölnir) is perhaps the most powerful Norse amulet — worn as a pendant by Viking-age Norse people throughout Scandinavia, it is experiencing a massive revival today as both a religious symbol and a luck-bringer. The Vegvisir (wayfinder) — a runic compass — was inscribed in Icelandic grimoires as a charm for never losing your way. The Helm of Awe (Ægishjálmr) was painted on foreheads of warriors and inscribed on helmets for invincibility.\n\nNorwegian trolls, though mischievous and dangerous in legend, have been recast in modern folk culture as protective household spirits, and troll figurines are kept in homes for luck. The Norwegian rosemaling decorative painting tradition incorporates protective flowers and vine motifs. The anchor and ship wheel reflect Norway's seafaring identity.",
    charmSlugs: [
      "thors-hammer", "vegvisir", "helm-of-awe", "viking-runes", "norwegian-troll",
      "horseshoe", "four-leaf-clover", "ladybug", "number-seven", "anchor-charm",
      "ship-wheel", "acorn",
    ],
  },
  {
    name: "Denmark",
    slug: "denmark",
    region: "Europe - Northern",
    flag: "🇩🇰",
    description:
      "Denmark's charm tradition is a blend of Viking-age Norse heritage, Protestant sobriety, and Scandinavian folk customs. The horseshoe, four-leaf clover, and ladybug are all recognized Danish luck-bringers. The chimney sweep (skorstensfejeren) meeting on New Year's Day is a powerful good omen in Denmark as in the wider Germanic world. The number seven is universally lucky.\n\nHans Christian Andersen, Denmark's most famous storyteller, gave the world several lucky-charm archetypes — the ugly duckling transformation, the little mermaid, and the steadfast tin soldier all encode lessons about luck, destiny, and perseverance. The amber found along Jutland's beaches has been a protective and lucky stone in Denmark since prehistoric times. Viking runes remain popular as lucky inscriptions.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "chimney-sweep",
      "number-seven", "key", "viking-runes", "amber", "anchor-charm",
    ],
  },
  {
    name: "Finland",
    slug: "finland",
    region: "Europe - Northern",
    flag: "🇫🇮",
    description:
      "Finland's charm tradition blends Lutheran Christianity, Finno-Ugric shamanic heritage, and Scandinavian folk practice. The Finnish concept of sisu — indomitable resilience and will — is itself treated as a protective quality that can be cultivated. The Kalevala, Finland's national epic, is full of magical knowledge and runic charms called loitsu, and Finnish folk healing involved specific verbal formulas that could ward off illness and misfortune.\n\nThe horseshoe and four-leaf clover are standard luck-bringers. The pig is a powerful Finnish lucky symbol at New Year — marzipan pigs and pig-shaped ornaments are given as Glücksschwein in the shared Germanic tradition. Amber from the Baltic coast carries ancient protective associations. The Finnish sauna is considered a sacred space where illness and bad luck can be sweated out.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "pig",
      "number-seven", "acorn", "amber", "anchor-charm",
    ],
  },
  {
    name: "Iceland",
    slug: "iceland",
    region: "Europe - Northern",
    flag: "🇮🇸",
    description:
      "Iceland has the most intact Norse magical tradition in the world, preserved through medieval grimoires (galdrabók) that contain the stave symbols still used and tattooed today. The Vegvisir is Iceland's most famous magical stave — a runic compass that ensures the bearer never loses their way, famously tattooed on Björk. The Helm of Awe (Ægishjálmr) was historically painted on foreheads before battle for invincibility. Both are now popular as jewelry, tattoos, and art prints.\n\nIcelanders continue to take the existence of the huldufólk (hidden folk — elves) more seriously than most nations: surveys suggest a majority of Icelanders refuse to definitively deny their existence, and roads have been rerouted to avoid elf stones. The northern lights (aurora borealis) are considered auspicious — particularly for children conceived under them. The horse is a sacred animal in Icelandic culture.",
    charmSlugs: [
      "vegvisir", "helm-of-awe", "viking-runes", "thors-hammer", "horseshoe",
      "four-leaf-clover", "number-seven", "acorn", "anchor-charm",
    ],
  },
  {
    name: "Estonia",
    slug: "estonia",
    region: "Europe - Northern",
    flag: "🇪🇪",
    description:
      "Estonia's charm tradition is rooted in its Baltic-Finnic pre-Christian religion, which was formally suppressed only in the thirteenth century and whose elements persist in folklore to this day. The Estonian runic songs (regilaul) contained specific protective formulas. The snake (ussi) was considered a sacred household protective animal — harming the house snake brought misfortune. Oak trees and sacred groves (hiis) were treated as the residences of protective spirits.\n\nThe amber found along the Estonian coast has been crafted into protective amulets and jewelry since prehistoric times, and amber beads remain popular today as both jewelry and lucky charms. The horseshoe, four-leaf clover, and ladybug are standard European luck-bringers. Estonian folk song tradition, so central to national identity, is considered a source of collective protective blessing.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "amber",
      "number-seven", "key", "acorn",
    ],
  },
  {
    name: "Latvia",
    slug: "latvia",
    region: "Europe - Northern",
    flag: "🇱🇻",
    description:
      "Latvia has one of Europe's most carefully documented ancient folk-religion traditions, known as Dievturība (keeping of God), which was reconstructed from folklore in the 20th century. The Latvian sun cross (Auseklis) — a star pattern — and thunder cross (Pērkons' krusts) are ancient protective symbols that appear in amber jewelry, folk embroidery, and modern design. These geometrical protective signs (zīmes) are woven into mittens and embroidered onto clothing as active protective amulets.\n\nAmber from the Baltic Sea — called the 'gold of the Baltic' — is one of Latvia's most distinctive lucky charms, made into necklaces and pendants. The Latvian Song and Dance Festival, held every five years, is itself treated as a collective protective and luck-renewing ceremony for the nation. The horseshoe, four-leaf clover, and ladybug are standard.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "amber",
      "number-seven", "key",
    ],
  },
  {
    name: "Lithuania",
    slug: "lithuania",
    region: "Europe - Northern",
    flag: "🇱🇹",
    description:
      "Lithuania was the last country in Europe to officially convert to Christianity (1387), and its pre-Christian Baltic religion left deep marks on folk charm traditions. The rooster carved atop a Lithuanian farm building (klėtis) was the protective bird that drove away evil. The linden tree (liepa, which gives Lithuania its name) was sacred to Laima, the goddess of fate and luck; sitting under a linden tree was believed to invite her blessing.\n\nAmber — of which Lithuania is the world's leading producer — has been the primary protective stone of the Baltic region for six thousand years. Amber beads, amber-set silver jewelry, and amber pendants in every form are Lithuania's defining lucky charm. The Romuvan sacred fire tradition and the Užgavėnės spring carnival involve specific protective rituals against winter spirits and misfortune. Horseshoes and four-leaf clovers are standard.",
    charmSlugs: [
      "amber", "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny",
      "number-seven", "key", "acorn",
    ],
  },

  // ── EUROPE - SOUTHERN ──────────────────────────────────────────────────────
  {
    name: "Italy",
    slug: "italy",
    region: "Europe - Southern",
    flag: "🇮🇹",
    description:
      "Italy is one of Europe's most superstition-rich countries with one of the most distinctive suites of lucky charms in the world. The cornicello — a twisted red or gold horn pendant — is the quintessential Italian amulet, worn around the neck to ward off the evil eye and malocchio. It appears in gold, silver, coral, and red plastic across Italy and the Italian diaspora. The connection of the horn to virility and protection against the evil eye is ancient and deeply embedded in Italian folk belief.\n\nThe mano cornuta (hand with two fingers extended as horns) and the mano fico (hand with thumb between fingers) are gestures and amulet forms used specifically against the evil eye. The corno portafortuna (horn charm) is given as a house-warming gift. St. Christopher medals are carried by Italian drivers, and specific regional saints are invoked for protection. Finding a four-leaf clover, a horseshoe, or a coin brings luck; a fallen ladder to walk under and a broken mirror bring seven years of bad luck.",
    charmSlugs: [
      "cornicello", "evil-eye", "horseshoe", "four-leaf-clover", "ladybug",
      "lucky-penny", "number-seven", "key", "wishbone", "st-christopher-medal",
      "rosary-beads", "coral",
    ],
  },
  {
    name: "Spain",
    slug: "spain",
    region: "Europe - Southern",
    flag: "🇪🇸",
    description:
      "Spain's charm tradition is shaped by Catholic devotion, Moorish heritage, and regional folk variation across its autonomous communities. The azabache — a jet-black stone carved into hand (figa) or fist shapes — is a specifically Iberian amulet against the evil eye, particularly for babies and children. The azabache figa is pinned to infants' clothing as the first protective gift. The cross and specific saints are central to Spanish Catholic protective practice — the Virgen del Pilar, patron of Spain, is carried on medallions nationwide.\n\nThe pomegranate (granada) is Spain's pre-eminent symbol of abundance and fortune — it gives Granada its name and appears throughout Spanish decorative art. The Basque Lauburu — a curved four-armed cross — is the protective symbol of Basque country. Eating twelve grapes at midnight on New Year's Eve (one for each toll of the bell) ensures good luck for each month of the coming year.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "evil-eye",
      "rosary-beads", "st-christopher-medal", "number-seven", "key",
      "basque-lauburu", "greek-pomegranate",
    ],
  },
  {
    name: "Portugal",
    slug: "portugal",
    region: "Europe - Southern",
    flag: "🇵🇹",
    description:
      "Portugal's most beloved lucky symbol is the Galo de Barcelos — the Barcelos Rooster — a colorful earthenware cockerel that is the national good-luck charm. The legend tells of a roasted rooster that miraculously crowed to save an innocent man from execution, and the rooster since then has represented faith, luck, and the triumph of innocence. Miniature Barcelos roosters in every color are given as gifts of good fortune across Portugal and the diaspora.\n\nSaudade — the Portuguese feeling of longing for something absent — is expressed in fado music, and specific fado songs are believed to carry protective blessings. The cornicello-equivalent in Portugal is the figa (a hand-shaped fist amulet), particularly common in the north. The Catholic faith runs deep: rosary beads, Our Lady of Fátima medals, and St. Anthony of Lisbon (patron of lost things and the poor) are all standard protective objects. The anchor reflects Portugal's Age of Discoveries maritime heritage.",
    charmSlugs: [
      "portuguese-rooster", "horseshoe", "four-leaf-clover", "ladybug",
      "lucky-penny", "rosary-beads", "st-christopher-medal", "number-seven",
      "key", "anchor-charm", "ship-wheel",
    ],
  },
  {
    name: "Greece",
    slug: "greece",
    region: "Europe - Southern",
    flag: "🇬🇷",
    description:
      "Greece is one of the world's great centers of evil eye belief, and the mati (evil eye symbol) — a blue glass eye bead — is found in every Greek home, shop, vehicle, and piece of jewelry. The belief that envy can physically harm its target (matiasma) is taken seriously across all generations of Greek society, and the diagnosis and treatment of the evil eye by knowledgeable elders is a living practice. The blue mati appears on everything from baby cribs to cruise ships.\n\nThe komboloi — a string of beads clicked rhythmically through the fingers — is a quintessentially Greek object, descended from the worry beads of Ottoman influence. The Greek pomegranate smashed on the threshold at New Year releases its hundreds of seeds, each one a wish for prosperity. The hamsa, known in Greece as the mati hand, is widely used. The horseshoe and the number seven are standard European luck-bringers adopted throughout Greece.",
    charmSlugs: [
      "greek-mati", "evil-eye", "evil-eye-bracelet", "komboloi", "greek-pomegranate",
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "number-seven",
      "key", "hamsa-hand",
    ],
  },
  {
    name: "Malta",
    slug: "malta",
    region: "Europe - Southern",
    flag: "🇲🇹",
    description:
      "Malta's position at the center of the Mediterranean means its charm culture draws from Phoenician, Roman, Arab, Norman, and Catholic traditions in one concentrated space. The Maltese Cross — the eight-pointed cross of the Knights of St. John — is the supreme Maltese emblem and protective symbol, carried on medals, worn as jewelry, and displayed on homes. It represents the eight beatitudes and has protected Maltese identity through centuries of siege and foreign rule.\n\nThe dghajsa (traditional water taxi) and the eye of Osiris painted on the prow of Maltese fishing boats (luzzus) are continuations of an ancient Mediterranean tradition of protective eyes on boats. The evil eye (ghajn) is taken seriously, and coral amulets and specific prayers are used against it. The rosary and Catholic saints' medals are carried by virtually all Maltese as protective objects.",
    charmSlugs: [
      "maltese-cross", "evil-eye", "rosary-beads", "st-christopher-medal",
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "coral",
      "anchor-charm",
    ],
  },
  {
    name: "Cyprus",
    slug: "cyprus",
    region: "Europe - Southern",
    flag: "🇨🇾",
    description:
      "Cyprus, birthplace of Aphrodite and a cultural crossroads between Greek, Turkish, and Levantine traditions, has a rich amulet culture. The blue evil eye bead (mati in Greek Cypriot tradition, nazar in Turkish Cypriot tradition) is found throughout the island — hung above doorways, woven into baby clothing, and sold in every tourist shop. Both communities of the divided island share this practice despite their political separation.\n\nThe Cypriot church is one of the oldest independent Orthodox churches, and saints' medals, rosary beads, and icons are central protective objects. Specifically Cypriot is the tradition of the basil (vasilikos) pot kept on doorsteps for blessing — watering the basil is considered an act of inviting divine favor. The horseshoe, the pomegranate, and the Aphrodite-derived tradition of love charms mark Cyprus's unique cultural position.",
    charmSlugs: [
      "greek-mati", "evil-eye", "evil-eye-bracelet", "rosary-beads",
      "horseshoe", "four-leaf-clover", "greek-pomegranate", "number-seven",
      "key",
    ],
  },
  {
    name: "Andorra",
    slug: "andorra",
    region: "Europe - Southern",
    flag: "🇦🇩",
    description:
      "Andorra, the tiny Pyrenean principality between France and Spain, shares the charm traditions of its larger neighbors with a distinctly Catalan character. The horseshoe, four-leaf clover, and ladybug are standard luck-bringers. The Catalan tradition is strong: the caganer (defecating figure hidden in nativity scenes) is a Catalan lucky symbol, and the Feast of Sant Jordi (St. George) on April 23rd involves an exchange of roses and books considered the Catalan Valentine's Day and a day of shared luck.\n\nCatholic devotion is strong in this deeply traditional society, and rosary beads, Our Lady of Meritxell medals (the patron of Andorra), and saint medallions are carried as protection. The Pyrenean mountain landscape gives the edelweiss and mountain herbs specific lucky status.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "number-seven",
      "key", "rosary-beads", "edelweiss",
    ],
  },

  // ── EUROPE - EASTERN ───────────────────────────────────────────────────────
  {
    name: "Russia",
    slug: "russia",
    region: "Europe - Eastern",
    flag: "🇷🇺",
    description:
      "Russia's charm tradition blends Orthodox Christianity, pre-Christian Slavic folk belief, and the specific superstitions of one of the world's most superstitious cultures. The matryoshka (Russian nesting doll) is the most universally recognized Russian amulet symbol, representing the layers of the self and the protection of family within family. Russian folk belief includes specific lucky and unlucky actions in great detail: never whistle indoors (loses money), never shake hands across a threshold (causes quarrels), never give even numbers of flowers (even numbers are for funerals).\n\nThe horseshoe is hung above doors. The number seven is lucky, thirteen is unlucky. The domovoi — a household spirit who must be placated — is still believed in by many Russians, and specific offerings are left for it. The Russian Orthodox tradition produces specific protective objects: the natelniy krest (body cross worn since baptism), icons of specific protective saints, and holy water.",
    charmSlugs: [
      "matryoshka", "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny",
      "number-seven", "key", "wishbone", "crucifix", "rosary-beads",
    ],
  },
  {
    name: "Poland",
    slug: "poland",
    region: "Europe - Eastern",
    flag: "🇵🇱",
    description:
      "Poland's charm tradition blends Catholic devotion with a rich vein of Slavic folk superstition. The horseshoe above the door, the four-leaf clover, the ladybug (biedronka), and the lucky penny are all standard Polish luck-bringers. Christmas Eve dinner is particularly laden with folk luck: scales of carp are placed in wallets to ensure financial prosperity in the new year, and the first star of Christmas Eve triggers a meal of twelve dishes representing the twelve apostles.\n\nThe pysanka egg-painting tradition, shared with Ukraine, involves elaborate wax-resist patterns encoding specific wishes for luck, health, and fertility. The Polish folk costume from different regions incorporates specific embroidered motifs — particularly the rosette and the tree of life — with protective significance. St. Christopher medals are common, and the Black Madonna of Częstochowa is the national patron whose medals are carried for protection.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "wishbone",
      "number-seven", "key", "pysanka", "rosary-beads", "st-christopher-medal",
    ],
  },
  {
    name: "Czech Republic",
    slug: "czech-republic",
    region: "Europe - Eastern",
    flag: "🇨🇿",
    description:
      "The Czech Republic has a rich tradition of folk lucky charms centered on specific New Year's customs and everyday superstitions. The chimney sweep (kominík) is one of the luckiest people to touch in Czech culture — grabbing a button on a chimney sweep's uniform is said to transfer luck. The pig brings good fortune because it can always find food. The four-leaf clover (čtyřlístek) is universally lucky and has its own beloved Czech comic strip character named after it.\n\nThe horseshoe, ladybug, and number seven are standard European luck-bringers. Specifically Czech is the tradition of throwing an apple at Christmas Eve to divine one's fortune: the apple is cut in half and its seed pattern read. The Bohemian crystal tradition has given the Czech Republic the finest cut glass in Europe, and intricate crystal objects carry associations of refined luck and prosperity.",
    charmSlugs: [
      "pig", "chimney-sweep", "horseshoe", "four-leaf-clover", "ladybug",
      "lucky-penny", "number-seven", "key", "wishbone",
    ],
  },
  {
    name: "Hungary",
    slug: "hungary",
    region: "Europe - Eastern",
    flag: "🇭🇺",
    description:
      "Hungary's charm tradition is a blend of Magyar shamanic heritage, Slavic folk custom, and Catholic devotion. The pig is a central Hungarian lucky symbol at Christmas and New Year: eating pork on January 1st ensures that luck 'roots in' like a pig in the earth. The chimney sweep brings luck by encounter. The horseshoe and four-leaf clover are universal.\n\nHungarian folk embroidery from Kalocsa, Matyó, and other regions incorporates specific floral motifs — particularly the distinctive Hungarian rose — that carry protective blessings. The tátos (Hungarian shaman) tradition, officially suppressed for centuries, left folk traces in specific lucky practices involving horses and fire. The ancient Turul bird — a mythical eagle figure from Hungarian origin myths — is a symbol of divine protection and guidance.",
    charmSlugs: [
      "pig", "chimney-sweep", "horseshoe", "four-leaf-clover", "ladybug",
      "lucky-penny", "number-seven", "key", "rosary-beads",
    ],
  },
  {
    name: "Romania",
    slug: "romania",
    region: "Europe - Eastern",
    flag: "🇷🇴",
    description:
      "Romania has one of Europe's richest and most distinctive folk-magic traditions. The mărțișor — a small red-and-white twined cord with a charm attached — is given on March 1st to usher in spring and bring health, luck, and love for the coming year. Recipients wear them throughout March. This uniquely Romanian tradition is so beloved that UNESCO added it to its list of Intangible Cultural Heritage.\n\nThe deochi (evil eye) is seriously feared and treated by babele (wise women) using specific verbal charms and water rituals. The strigoi (vampire) and iele (fairy spirits) must be placated with specific offerings and protective objects including garlic, specific herbs, and iron. The Romanian Orthodox Church provides crosses, rosary beads, and blessed water as standard protective objects. The horseshoe and lucky number traditions are pan-European standards also observed here.",
    charmSlugs: [
      "martisor", "horseshoe", "four-leaf-clover", "ladybug", "evil-eye",
      "lucky-penny", "number-seven", "key", "rosary-beads", "crucifix",
    ],
  },
  {
    name: "Ukraine",
    slug: "ukraine",
    region: "Europe - Eastern",
    flag: "🇺🇦",
    description:
      "Ukraine's most internationally recognized lucky art form is the pysanka — the elaborately decorated Easter egg whose wax-resist patterns encode specific wishes and protective symbols. Different patterns carry specific meanings: solar motifs for life and good fortune, the wheat sheaf for prosperity, the deer for health. Every pattern has generations of accumulated meaning. This tradition is so central to Ukrainian identity that UNESCO has recognized it as an Intangible Cultural Heritage.\n\nThe embroidered vyshyvanka — the Ukrainian national embroidered shirt — incorporates regional protective patterns in its collar and sleeve embroidery. The horseshoe and the number seven are standard European luck-bringers. The Ukrainian Orthodox and Catholic churches produce crosses, rosary beads, and blessed water as protective objects. Sunflower seeds, given the sunflower's centrality to Ukrainian agriculture and identity, carry associations of the sun's blessing.",
    charmSlugs: [
      "pysanka", "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny",
      "number-seven", "key", "rosary-beads", "crucifix", "wishbone",
    ],
  },
  {
    name: "Bulgaria",
    slug: "bulgaria",
    region: "Europe - Eastern",
    flag: "🇧🇬",
    description:
      "Bulgaria's charm tradition is among Eastern Europe's most vivid, particularly its martenitsa custom. The martenitsa — closely related to the Romanian mărțișor — is a red-and-white twisted cord worn from March 1st (Baba Marta's Day) until the wearer sees the first stork or swallow of spring, at which point it is tied to a tree for luck. This is one of Bulgaria's most beloved and distinctive national traditions.\n\nThe evil eye (uroki) is taken very seriously in Bulgarian folk belief: blue beads are placed above babies' cribs, and knowledgeable women perform 'uroci' (cure rituals) with water, charcoal, and specific verbal formulas. The horseshoe, four-leaf clover, and ladybug are standard European luck-bringers. Bulgarian folk embroidery from different regions incorporates specific geometric protective motifs.",
    charmSlugs: [
      "martisor", "horseshoe", "four-leaf-clover", "ladybug", "evil-eye",
      "lucky-penny", "number-seven", "key", "rosary-beads",
    ],
  },
  {
    name: "Serbia",
    slug: "serbia",
    region: "Europe - Eastern",
    flag: "🇷🇸",
    description:
      "Serbia's charm tradition blends Serbian Orthodox Christianity with a rich layer of Slavic folk belief. The šargarepa (luck of the carrot) — a New Year's folk charm where finding a coin inside a baked bread (česnica) at Christmas brings specific luck — is a distinctly Serbian tradition. The česnica itself — a round Christmas bread with a coin baked inside — is broken by all family members with the one who gets the largest piece also getting the most luck.\n\nThe horseshoe, four-leaf clover, and ladybug are universal. The evil eye (uroci) is feared and treated by village wise women. Serbian folk embroidery carries specific protective motifs in the traditional vezenje needlework. Specific saints' days (krsna slava, the family patron saint celebration) are the most important luck-renewing ritual of the Serbian year.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "evil-eye",
      "number-seven", "key", "rosary-beads", "crucifix",
    ],
  },
  {
    name: "Croatia",
    slug: "croatia",
    region: "Europe - Eastern",
    flag: "🇭🇷",
    description:
      "Croatia's most distinctive lucky charm is the licitarsko srce — the licitar heart — a red beeswax gingerbread heart decorated with mirrors and colorful icing that is given as a love token and good-luck gift at festivals and fairs. These bright red hearts, traditionally associated with Zagreb's Dolac market, are so central to Croatian folk identity that UNESCO included them on the Intangible Cultural Heritage list. They are given between lovers, friends, and as housewarmings.\n\nThe horseshoe, four-leaf clover, and ladybug are standard European luck-bringers. Croatian folk embroidery (vezenje) incorporates specific regional protective motifs. Croatian sailors historically carried specific maritime amulets — the anchor, the ship's wheel — and prayed to Our Lady of Trsat for protection at sea. The Dubrovnik patron saint St. Blaise's medal is carried for protection throughout the Dalmatian coast.",
    charmSlugs: [
      "licitar-heart", "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny",
      "number-seven", "key", "rosary-beads", "anchor-charm",
    ],
  },
  {
    name: "Bosnia and Herzegovina",
    slug: "bosnia-and-herzegovina",
    region: "Europe - Eastern",
    flag: "🇧🇦",
    description:
      "Bosnia's extraordinary religious diversity — Muslim (Bosniak), Orthodox Christian (Serb), and Catholic (Croat) communities living in proximity — produces a layered charm culture where Islamic, Orthodox, and Catholic protective objects coexist. The hamsa and evil eye beads appear in Bosniak households, while Orthodox Serbs use crosses and rosary beads, and Catholics carry saints' medals. The evil eye (urok) is feared across all three communities.\n\nThe Bosnian traditional embroidery (vez) incorporates geometric protective motifs in the form of specific patterns in red and gold thread. The horseshoe, four-leaf clover, and ladybug are universally recognized. The ancient Bosnian tombstones (stećci) from the medieval period, with their distinctive carved symbols of the sun, crescent moon, and hand, reflect a deeper layer of Bosnian spiritual identity.",
    charmSlugs: [
      "hamsa-hand", "evil-eye", "tasbih", "horseshoe", "four-leaf-clover",
      "ladybug", "lucky-penny", "number-seven", "rosary-beads", "crucifix",
    ],
  },
  {
    name: "Albania",
    slug: "albania",
    region: "Europe - Eastern",
    flag: "🇦🇱",
    description:
      "Albania's charm tradition draws from its unique position as a country where bektashi Sufism, Sunni Islam, Orthodox Christianity, and Catholicism coexist, layered over pre-Islamic Illyrian folk traditions. The evil eye (syri i keq) is the primary source of misfortune, and blue beads (boncuk) are hung from babies' cribs, vehicles, and building cornerstones. The hamsa hand appears on jewelry and wall decorations.\n\nThe Kanun, the ancient Albanian customary law code that governed mountain communities for centuries, includes specific lucky and unlucky practices. The Eagle — the double-headed eagle of the national flag — is the supreme protective symbol of Albanian identity. Specific herb bundles, garlic strings, and horseshoes are hung above doors. The evil eye diagnosis and cure by elderly women is a living practice across the country.",
    charmSlugs: [
      "evil-eye", "hamsa-hand", "horseshoe", "four-leaf-clover", "ladybug",
      "lucky-penny", "number-seven", "rosary-beads", "tasbih",
    ],
  },
  {
    name: "North Macedonia",
    slug: "north-macedonia",
    region: "Europe - Eastern",
    flag: "🇲🇰",
    description:
      "North Macedonia's charm tradition blends Macedonian Orthodox Christian practice with a substantial layer of folk superstition influenced by centuries of Ottoman rule. The evil eye (uroci in Macedonian, nazar in the Turkish-influenced tradition) is widely feared, and blue beads, garlic, and specific verbal charms are used against it. The horseshoe, four-leaf clover, and ladybug are European universals also practiced here.\n\nMacedonian embroidery (везење) from different regions includes specific geometric motifs with protective meaning. The sun cross (an ancient Macedonian solar motif) appears on traditional objects and jewelry. The Macedonian Orthodox Church provides icons, crosses, and holy water for protection. Specific saints' day celebrations involve ritual foods with luck-bringing properties.",
    charmSlugs: [
      "evil-eye", "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny",
      "number-seven", "rosary-beads", "crucifix",
    ],
  },
  {
    name: "Montenegro",
    slug: "montenegro",
    region: "Europe - Eastern",
    flag: "🇲🇪",
    description:
      "Montenegro's small and deeply traditional society has a charm culture shaped by Montenegrin Orthodox Christianity and a fierce mountain warrior heritage. The krsna slava (family patron saint day) is the central annual luck-blessing ceremony for each family. The horseshoe, four-leaf clover, and ladybug are standard European luck-bringers. The evil eye is feared and treated by village healers.\n\nMontenegrin folk embroidery from the Duklja and Zeta regions incorporates specific protective patterns. The double-headed eagle of Montenegro's royal Petrović dynasty carries associations of divine protection. The distinctive Montenegrin cap (kapa) is treated with great respect as a symbol of masculine honor and ancestral blessing.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "evil-eye",
      "number-seven", "rosary-beads", "crucifix",
    ],
  },
  {
    name: "Moldova",
    slug: "moldova",
    region: "Europe - Eastern",
    flag: "🇲🇩",
    description:
      "Moldova's charm tradition closely mirrors Romanian folk practice, given the shared language, culture, and history. The mărțișor is given on March 1st as in Romania, making it one of the most cherished national lucky traditions. Moldovan folk embroidery incorporates traditional geometric motifs with protective significance, particularly in the distinctive ia (embroidered blouse) patterns.\n\nThe evil eye (deochi) is feared and treated by village healers with water, charcoal, and verbal formulas. The horseshoe, four-leaf clover, and ladybug are universal. Wine — Moldova being one of the world's most ancient wine-producing regions — carries associations of divine blessing and abundance, and specific wine-related rituals mark key life transitions.",
    charmSlugs: [
      "martisor", "horseshoe", "four-leaf-clover", "ladybug", "evil-eye",
      "lucky-penny", "number-seven", "key", "rosary-beads",
    ],
  },
  {
    name: "Slovakia",
    slug: "slovakia",
    region: "Europe - Eastern",
    flag: "🇸🇰",
    description:
      "Slovakia's charm tradition combines Czech and Polish folk practice with distinctly Slovak Catholic devotion. The pig, chimney sweep, four-leaf clover, and horseshoe are standard Central European luck-bringers especially prominent at New Year. The kroj (folk costume) from different Slovak regions incorporates specific embroidered patterns with protective significance.\n\nThe Slovak folk architecture tradition, particularly the decorated wooden churches of eastern Slovakia, incorporates carved protective motifs on doorways and eaves. The Seven Wonders of Slovakia include sacred landscapes where luck is sought. Specific Easter egg painting (kraslice) traditions parallel those of Ukraine and Poland, with protective motifs encoded in the designs.",
    charmSlugs: [
      "pig", "chimney-sweep", "horseshoe", "four-leaf-clover", "ladybug",
      "lucky-penny", "number-seven", "key", "rosary-beads", "pysanka",
    ],
  },
  {
    name: "Slovenia",
    slug: "slovenia",
    region: "Europe - Eastern",
    flag: "🇸🇮",
    description:
      "Slovenia's charm tradition sits at the intersection of Central European (Germanic), Mediterranean (Italian/Venetian), and Slavic influences, producing a rich folk culture. The potica (rolled nut cake) given at Christmas is a blessing object. Slovenian folk embroidery from the Gorenjska region incorporates specific lucky motifs. The horseshoe, four-leaf clover, and ladybug are European universals.\n\nThe Kurent — a frightening shaggy creature with cowbells and a hedgehog-skin cap — appears in the Kurentovanje carnival before Lent to chase away winter and evil spirits from the land. Wearing or carrying a Kurent image confers protective power from this ritual. The Lipizzaner horse, bred in Slovenia's Lipica stud farm, is a national symbol associated with grace and divine favor.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "number-seven",
      "key", "rosary-beads", "swiss-cowbell",
    ],
  },
  {
    name: "Belarus",
    slug: "belarus",
    region: "Europe - Eastern",
    flag: "🇧🇾",
    description:
      "Belarus's charm tradition is rooted in Slavic folk belief and Eastern Orthodox Christianity. The horseshoe, four-leaf clover, and ladybug are standard European luck-bringers. Belarusian folk embroidery (vyshyvanka) incorporates specific red-and-white geometric patterns on clothing and household linens that carry protective meaning — the specific patterns from each region encoding local protective symbols.\n\nThe Kupala Night (Ivan Kupala) — the Slavic midsummer festival — involves rituals for finding the legendary fern flower that grants unlimited luck to whoever finds it. Jumping over bonfires and floating flower wreaths down rivers are luck-seeking practices. The white stork is the supreme lucky bird of Belarus, nesting on rooftops and chimneys — having storks nest on your roof ensures a year of exceptional fortune.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "number-seven",
      "key", "rosary-beads",
    ],
  },
  {
    name: "Kosovo",
    slug: "kosovo",
    region: "Europe - Eastern",
    flag: "🇽🇰",
    description:
      "Kosovo's population is predominantly Albanian Muslim with a significant Serbian Orthodox minority, and its charm tradition reflects this dual heritage. The evil eye (syri keq) is the primary concern among the Albanian majority, and blue beads, garlic, and specific prayers are used against it. The hamsa hand appears in jewelry and home decoration. Tasbih prayer beads are widely carried.\n\nThe Serbian Orthodox minority carries crosses, rosary beads, and saints' medals. The Bektashi Sufi tradition — particularly strong in parts of Kosovo — includes specific amulet practices around tekke (lodge) visits and the blessing of objects by dervishes. The horseshoe is a universal European luck-bringer also observed here.",
    charmSlugs: [
      "evil-eye", "hamsa-hand", "tasbih", "horseshoe", "four-leaf-clover",
      "ladybug", "number-seven", "rosary-beads",
    ],
  },
  {
    name: "Georgia",
    slug: "georgia",
    region: "Europe - Eastern",
    flag: "🇬🇪",
    description:
      "Georgia is one of the world's oldest Christian nations (converted 337 CE) and its charm tradition is deeply shaped by Georgian Orthodox faith. The Georgian cross with its distinctive elongated bottom arm appears on jewelry, church facades, and household items as the supreme protective symbol. The nino cross — named after St. Nino, the missionary who converted Georgia — is formed of two pieces of grapevine tied with her own hair, and its distinctive drooping crossbar is uniquely Georgian.\n\nThe pomegranate is the supreme Georgian symbol of prosperity, fertility, and abundance — split pomegranates decorate Georgian churches and appear in the national emblem. Wine is sacred in Georgia, the birthplace of winemaking (the oldest wine vessels in the world were found here), and the ritual toast (tamada tradition) blesses and protects through words. The Bolnisi cross, the oldest Georgian cross motif, appears on protective jewelry and church facades.",
    charmSlugs: [
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "evil-eye",
      "number-seven", "rosary-beads", "crucifix", "greek-pomegranate",
    ],
  },
  {
    name: "Armenia",
    slug: "armenia",
    region: "Europe - Eastern",
    flag: "🇦🇲",
    description:
      "Armenia is one of the world's oldest Christian nations (the first to adopt Christianity as a state religion in 301 CE) and its charm tradition runs deep. The Armenian cross (khachkar) — a carved stone slab with an elaborate interlaced cross design unique to Armenian art — is the supreme protective symbol of Armenian culture. Each khachkar is unique, carved with prayers for specific purposes: protection in war, health for the sick, blessing for the dead.\n\nThe evil eye (char atchk) is widely feared, and blue beads, specific prayers, and garlic are used against it. The pomegranate is the supreme symbol of Armenian abundance and fertility, appearing in folk art, church decoration, and wedding ceremony. The apricot (the Armenian word 'prunus armeniaca' means 'Armenian plum') carries associations of divine sweetness and summer bounty. Armenian dolma and specific ritual foods are prepared with luck-attracting intentions.",
    charmSlugs: [
      "evil-eye", "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny",
      "number-seven", "rosary-beads", "crucifix", "greek-pomegranate",
    ],
  },
  {
    name: "Azerbaijan",
    slug: "azerbaijan",
    region: "Europe - Eastern",
    flag: "🇦🇿",
    description:
      "Azerbaijan's Shia Muslim majority carries Islamic protective amulet traditions alongside surviving elements of Zoroastrian fire worship from the country's pre-Islamic past. The evil eye (göz dəymək) is universally feared: blue beads (göz muncuğu) are hung above babies' cribs, and mothers perform specific counter-charm rituals. The hand of Fatima appears in jewelry and door decoration.\n\nBaku's Ateshgah fire temple was a Zoroastrian pilgrimage site where eternal flames burned from natural gas seeps, and fire retains spiritual significance in Azerbaijani folk culture. The Novruz spring festival, shared with Iran and Central Asia, involves specific luck-seeking rituals including jumping over bonfires to ensure health in the new year. Turquoise is a protective stone in Azerbaijani jewelry tradition.",
    charmSlugs: [
      "evil-eye", "hamsa-hand", "hand-of-fatima", "tasbih", "prayer-beads",
      "turquoise", "horseshoe", "four-leaf-clover", "number-seven",
      "islamic-crescent",
    ],
  },

  // ── AMERICAS - NORTH ───────────────────────────────────────────────────────
  {
    name: "United States",
    slug: "united-states",
    region: "Americas - North",
    flag: "🇺🇸",
    description:
      "The United States is the world's great melting pot of lucky-charm traditions, drawing from every culture that has contributed to its diverse population. The rabbit's foot is perhaps the most quintessentially American lucky charm — carried in pockets and on keychains, it blends European and West African hoodoo influences. The penny (particularly Lincoln pennies found face-up), the horseshoe, the wishbone, and the four-leaf clover are all deeply embedded in American folk practice.\n\nThe dreamcatcher, originating with the Ojibwe people, has become perhaps the most widespread Native American symbol adopted into broader American culture as a protective charm. The mojo hand — a small flannel bag filled with roots, herbs, and curios — is the central charm of African American hoodoo tradition, itself drawing from West African gris-gris. Lucky dice (particularly in Las Vegas culture) and the number seven are quintessential American luck symbols. St. Christopher medals hang from rearview mirrors across the country.",
    charmSlugs: [
      "rabbit-foot", "lucky-penny", "horseshoe", "wishbone", "four-leaf-clover",
      "dreamcatcher", "mojo-hand", "lucky-dice", "number-seven", "key",
      "ladybug", "acorn", "st-christopher-medal", "feather", "arrowhead",
      "medicine-bag", "lucky-bamboo", "maneki-neko",
    ],
  },
  {
    name: "Canada",
    slug: "canada",
    region: "Americas - North",
    flag: "🇨🇦",
    description:
      "Canada's charm tradition is shaped by its Indigenous heritage, French Catholic influence, British Protestant tradition, and a continuously arriving wave of immigrants from every part of the world. The Inukshuk — the stone figure built by Inuit people as waymarkers and navigational aids — has become Canada's most distinctive national symbol and lucky charm, representing guidance, cooperation, and safe passage. It appeared at the 2010 Vancouver Olympics as the central logo.\n\nIndigenous traditions across Canada's many First Nations include medicine bundles, dreamcatchers, and thunderbird amulets that carry protection and luck. French-Canadian Catholic practice adds saint medals, rosary beads, and ex-votos. The horseshoe, four-leaf clover, and other pan-Western European luck objects are standard in the English-speaking provinces. The hockey stick and puck — deeply Canadian symbols — carry their own folk luck superstitions in hockey culture.",
    charmSlugs: [
      "inukshuk", "dreamcatcher", "medicine-bag", "thunderbird", "feather",
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "number-seven",
      "rosary-beads", "st-christopher-medal", "rabbit-foot",
    ],
  },

  // ── AMERICAS - CENTRAL ─────────────────────────────────────────────────────
  {
    name: "Mexico",
    slug: "mexico",
    region: "Americas - Central",
    flag: "🇲🇽",
    description:
      "Mexico has one of the world's richest syncretisms of Indigenous and Spanish Catholic charm traditions. The milagros (miracles) — small metal votive offerings in the shape of body parts, animals, or other objects — are attached to saint statues in churches as petitions and thank-offerings, one of the most beautiful and touching folk-art traditions in the Americas. The ojo de dios (God's eye) — a yarn-wrapped cross made by Huichol people — is a protective charm that protects the household and its children.\n\nThe Virgen de Guadalupe is the supreme protective figure of Mexican Catholicism, with her image carried on medals, tattooed on skin, and displayed in homes and on trucks throughout the country. The calavera (skull) of Día de los Muertos is not morbid but a loving acknowledgment of ancestors whose blessing is sought. The Aztec sun calendar encodes the cosmic order, and the chili pepper (chile) is a specifically Mexican luck-bringer hung at doorways.",
    charmSlugs: [
      "milagros", "ojo-de-dios", "guadalupe-medal", "calavera", "aztec-sun",
      "lucky-chili-pepper", "rosary-beads", "st-christopher-medal", "crucifix",
      "worry-dolls", "copal-incense", "four-leaf-clover", "horseshoe",
      "lucky-penny",
    ],
  },
  {
    name: "Guatemala",
    slug: "guatemala",
    region: "Americas - Central",
    flag: "🇬🇹",
    description:
      "Guatemala is home to the largest concentration of Maya Indigenous people in Central America, and its charm tradition reflects the remarkable survival of ancient Maya cosmology alongside Spanish Catholicism. Worry dolls (muñecas quitapenas) — tiny cloth dolls from the Quiché Maya tradition — are placed under the pillow at night to take on the worries of the sleeper; by morning, the dolls have absorbed the problems. These are now sold worldwide as one of Guatemala's most beloved exports.\n\nThe quetzal bird — brilliant emerald green, the national symbol — is a deeply auspicious creature representing freedom and divine favor. The huipil (Maya women's woven garment) incorporates village-specific protective motifs woven into every square inch. Copal incense has been burned in Maya ceremony for over two thousand years and continues to be used in churches and in traditional Maya ceremonies to carry prayers to the divine.",
    charmSlugs: [
      "worry-dolls", "copal-incense", "feather", "rosary-beads", "crucifix",
      "milagros", "guardian-angel",
    ],
  },
  {
    name: "Honduras",
    slug: "honduras",
    region: "Americas - Central",
    flag: "🇭🇳",
    description:
      "Honduras's charm tradition blends Lenca and Maya Indigenous heritage with Spanish Catholicism. Milagros (votive offerings) are pinned to saints in Catholic churches as petitions and thank-offerings. Rosary beads and images of the Virgin Mary and specific saints are the primary protective objects of daily life. The ojo de dios (God's eye) is made by Lenca craftspeople for protection.\n\nHonduran folk belief includes the duende (a mischievous dwarf spirit) and specific plant-based protective practices. The copal resin burned as incense in ceremonies derives from ancient Maya ritual practice that continues in modified form in both Catholic and traditional ceremonies. St. Christopher and guardian angel medals are standard protective items.",
    charmSlugs: [
      "milagros", "rosary-beads", "crucifix", "st-christopher-medal",
      "guardian-angel", "copal-incense", "ojo-de-dios",
    ],
  },
  {
    name: "El Salvador",
    slug: "el-salvador",
    region: "Americas - Central",
    flag: "🇸🇻",
    description:
      "El Salvador's charm tradition is shaped by Pipil Maya heritage and deep Spanish Catholic devotion. The patron of El Salvador — El Divino Salvador del Mundo (the Divine Savior of the World) — is the central protective figure, venerated on August 6th in a national celebration. Milagros attached to saints in churches are petitions and offerings. The rosary is carried by millions as a daily protective practice.\n\nFolk beliefs about the siguanaba (a dangerous female spirit) and the cipitío (a dwarf trickster) shape protective practices. Specific herbs — ruda (rue), basil, and rosemary — are hung at doorways for protection. The güipil, the traditional woven garment, incorporates protective color and pattern combinations.",
    charmSlugs: [
      "milagros", "rosary-beads", "crucifix", "st-christopher-medal",
      "guardian-angel", "four-leaf-clover",
    ],
  },
  {
    name: "Nicaragua",
    slug: "nicaragua",
    region: "Americas - Central",
    flag: "🇳🇮",
    description:
      "Nicaragua's charm tradition blends Miskito, Nahuatl, and Chorotega Indigenous heritage with Spanish Catholic practice. The Purísima — the spectacular festival of the Immaculate Conception in December — involves the entire nation singing to the Virgin Mary and being showered with gifts, making it one of Central America's most distinctive and joyful luck-blessing ceremonies. The rosary and specific saint images are the primary protective objects.\n\nThe magic protection of la Güegüence — Nicaragua's UNESCO-recognized folk drama figure representing the cunning mestizo trickster — is invoked metaphorically in folk belief. Specific herbs, copal incense, and folk healers (curanderos) provide the non-Catholic protective tradition. The güipil and specific textile patterns from Masaya and other regions carry protective symbolic significance.",
    charmSlugs: [
      "milagros", "rosary-beads", "crucifix", "st-christopher-medal",
      "guardian-angel", "copal-incense",
    ],
  },
  {
    name: "Costa Rica",
    slug: "costa-rica",
    region: "Americas - Central",
    flag: "🇨🇷",
    description:
      "Costa Rica's charm tradition is shaped by strong Catholic devotion and is arguably among the most cheerful in Central America, reflecting the national concept of 'pura vida' (pure life). The oxcart (carreta) with its elaborate floral wheel paintings is a UNESCO-recognized folk art form and one of Costa Rica's most beloved lucky symbols — the colorful wheels encoding prosperity and the good life. Miniature painted carreta wheels are given as good-luck gifts.\n\nThe Virgen de los Ángeles, patron of Costa Rica, is celebrated on August 2nd with a barefoot pilgrimage to the Basílica in Cartago, where thousands seek blessing and carry back small bottles of the miraculous water. Milagros are pinned to the Virgin's statue. The rosary, crucifix, and guardian angel medal are standard protective items.",
    charmSlugs: [
      "milagros", "rosary-beads", "crucifix", "guardian-angel",
      "st-christopher-medal", "four-leaf-clover",
    ],
  },
  {
    name: "Panama",
    slug: "panama",
    region: "Americas - Central",
    flag: "🇵🇦",
    description:
      "Panama's charm tradition reflects its position as the crossroads of the Americas — Indigenous Kuna, Afro-Caribbean, and Spanish traditions all contribute. The Kuna (Guna) people of the San Blas archipelago create molas — reverse-appliqué cloth panels — with intricate geometric patterns that incorporate protective cosmological symbols. Kuna medicine men (neles) are among the most sophisticated ritual specialists in the Americas.\n\nAfro-Panamanian communities maintain elements of African protective traditions brought by enslaved workers, including specific plant-based charms and rituals for protection. Catholic practice is dominant in the cities: milagros, rosary beads, and saint medals are standard protective items. The compass rose appears on Panamanian navigational objects given the country's key role in global maritime trade.",
    charmSlugs: [
      "milagros", "rosary-beads", "crucifix", "guardian-angel", "compass-rose",
      "anchor-charm", "feather",
    ],
  },
  {
    name: "Belize",
    slug: "belize",
    region: "Americas - Central",
    flag: "🇧🇿",
    description:
      "Belize's cultural diversity — Maya, Garifuna, Creole, Mestizo, Mennonite, East Indian — produces an eclectic charm tradition. The Garifuna people, descendants of Arawak, Carib, and African ancestors, have a living tradition of ancestor veneration and healing ceremonies (dugu) in which the ancestral spirits are propitiated for the health and fortune of the family. Garifuna healers (buyei) create specific protective objects.\n\nMaya communities maintain traditional healing and calendar knowledge, and specific objects blessed by h-men (Maya shamans) carry protective power. Catholic devotion among the mestizo and Creole population centers on saint medals and rosary beads. The jaguar, the supreme predator of Mesoamerican cosmology, is the Belizean national animal and a symbol of power and protection.",
    charmSlugs: [
      "rosary-beads", "crucifix", "guardian-angel", "feather",
      "copal-incense", "dreamcatcher",
    ],
  },

  // ── AMERICAS - SOUTH ───────────────────────────────────────────────────────
  {
    name: "Brazil",
    slug: "brazil",
    region: "Americas - South",
    flag: "🇧🇷",
    description:
      "Brazil is home to one of the world's most distinctive lucky charms: the figa — a carved fist with the thumb thrust between the index and middle fingers — which wards off the evil eye (olho gordo) and is Brazil's most iconic amulet. The figa appears in gold, silver, ebony, and coral jewelry throughout the country. The colorful Bonfim ribbons (fitas do Senhor do Bonfim) tied around the wrist three times while making wishes outside the famous Salvador church are perhaps the most beautiful Brazilian lucky charm — when the ribbon eventually falls off naturally, the wishes are granted.\n\nCandomblé and Umbanda, the Brazilian Afro-syncretic religions, produce a rich tradition of protective objects: ilekes (sacred bead necklaces in the colors of specific orixás), elekes, and specific herbal preparations. The number thirteen — considered unlucky elsewhere — is considered lucky in some Brazilian contexts. The laughing Buddha, maneki-neko, and other East Asian lucky objects have entered Brazilian culture through the large Japanese-Brazilian community.",
    charmSlugs: [
      "brazilian-figa", "bonfim-ribbon", "evil-eye", "rosary-beads",
      "st-christopher-medal", "crucifix", "horseshoe", "four-leaf-clover",
      "maneki-neko", "lucky-bamboo",
    ],
  },
  {
    name: "Argentina",
    slug: "argentina",
    region: "Americas - South",
    flag: "🇦🇷",
    description:
      "Argentina's charm tradition reflects its largely European immigrant heritage — Italian, Spanish, German, and Jewish communities all brought their traditions. The cornicello horn pendant and the mano cornuta of Italian tradition are common in Buenos Aires. The evil eye (mal de ojo) is feared across Latin America and blue beads and milagros are used in Argentina as throughout the Spanish-speaking world.\n\nThe gaucho tradition of the pampas has its own lucky objects: the knife (facón) carried for protection, specific yerba mate drinking rituals with luck implications, and the mate gourd itself passed among friends as a sharing of fortune. The Argentine Jewish community has contributed hamsa, Star of David, and Kabbalah string traditions. The tango tradition involves specific dance superstitions about luck on the milonga floor.",
    charmSlugs: [
      "cornicello", "evil-eye", "horseshoe", "four-leaf-clover", "ladybug",
      "lucky-penny", "hamsa-hand", "star-of-david", "milagros", "rosary-beads",
    ],
  },
  {
    name: "Colombia",
    slug: "colombia",
    region: "Americas - South",
    flag: "🇨🇴",
    description:
      "Colombia's vibrant syncretic culture blends Indigenous, African, and Spanish traditions into a rich charm landscape. The milagros tradition is strong in Colombian Catholic practice, and specific saints — particularly the Señor de los Milagros — are petitioned with votive offerings. The brujería (folk magic) tradition of the Pacific coast and Andean regions has produced specific protective plant-based remedies and amulets.\n\nThe evil eye (mal de ojo) is guarded against with a combination of Catholic prayers and folk practices including black coral beads, rue (ruda) plants at doorways, and specific ritual cleansings. Emeralds — mined in Colombia's Boyacá region in the world's finest quality — are considered stones of exceptional luck and prosperity, particularly the Muzo and Chivor mines. The indigenous Wayuu people of La Guajira create distinctive mochilas (woven bags) that encode cosmological protective patterns.",
    charmSlugs: [
      "milagros", "evil-eye", "rosary-beads", "crucifix", "st-christopher-medal",
      "guardian-angel", "horseshoe", "four-leaf-clover",
    ],
  },
  {
    name: "Peru",
    slug: "peru",
    region: "Americas - South",
    flag: "🇵🇪",
    description:
      "Peru has one of the world's richest Indigenous lucky-charm traditions, rooted in the Inca civilization and the many Andean cultures that preceded and coexist with it. The Peruvian tumi — the ceremonial sacrificial knife with a semicircular blade — is the supreme symbol of Peruvian national luck, displayed in homes and offices for good fortune. The chakana (Andean cross) encodes Inca cosmology in a cross of equal arms with stepped sides, representing the three worlds: Hanan Pacha (upper), Kay Pacha (this world), and Ukhu Pacha (inner).\n\nThe torito de Pucará — the ceramic bull from Pucará — is placed on the rooftops of new homes to bless the structure and its inhabitants. The ekeko — the small figurine from Tiahuanaco origin, laden with miniature goods — is the Andean deity of abundance and luck, and his image surrounded by tiny food, vehicles, and money is placed in homes to attract the real thing. Worry dolls are a Guatemalan tradition that has permeated Peruvian tourist culture.",
    charmSlugs: [
      "peruvian-tumi", "chakana-cross", "torito-de-pucara", "ekeko",
      "llama", "worry-dolls", "rosary-beads", "crucifix", "milagros",
      "copal-incense",
    ],
  },
  {
    name: "Chile",
    slug: "chile",
    region: "Americas - South",
    flag: "🇨🇱",
    description:
      "Chile's charm tradition blends Mapuche Indigenous heritage with Spanish Catholic and later European immigrant influences. The Mapuche chemamüll (carved wooden ancestor figures) and kultrún (shamanic drum) carry powerful protective associations in Mapuche culture. The machi (Mapuche shaman-healer) is the primary practitioner of protective and luck-attracting ceremonies.\n\nChilean Catholic practice is strongly devoted to specific local saints and the Virgin Mary — milagros are pinned to statue clothes, and specific pilgrimages are made for luck. The copihue — the flame-red climbing flower that is Chile's national emblem — is associated with good luck and love. Lapis lazuli, mined in northern Chile in the world's finest concentrations outside Afghanistan, is made into jewelry and amulets considered luck-attracting.",
    charmSlugs: [
      "milagros", "rosary-beads", "crucifix", "guardian-angel",
      "st-christopher-medal", "horseshoe", "four-leaf-clover", "lapis-lazuli",
    ],
  },
  {
    name: "Venezuela",
    slug: "venezuela",
    region: "Americas - South",
    flag: "🇻🇪",
    description:
      "Venezuela's charm tradition blends Spanish Catholic devotion with Indigenous Yanomami, Pemon, and other heritage, and a significant Afro-Venezuelan spiritual tradition. María Lionza — a distinctive Venezuelan spirit (Venezuelan mythology's most important figure, partly derived from an Indigenous water goddess) — is the center of an elaborate syncretic religion practiced across the country, in which her image is carried for luck and protection.\n\nThe evil eye (mal de ojo) is guarded against with the standard Latin American counter-measures: black jet beads, red ribbon on infants, and specific prayers. The Virgen de Coromoto (Venezuela's patron) is carried on medals for national protection. The ceibo tree is considered auspicious in several Venezuelan Indigenous traditions.",
    charmSlugs: [
      "evil-eye", "milagros", "rosary-beads", "crucifix", "guardian-angel",
      "horseshoe", "four-leaf-clover",
    ],
  },
  {
    name: "Ecuador",
    slug: "ecuador",
    region: "Americas - South",
    flag: "🇪🇨",
    description:
      "Ecuador's charm tradition is deeply shaped by its Kichwa, Shuar, and other Indigenous peoples alongside Spanish Catholic practice. The curandero (folk healer) tradition is exceptionally strong — a limpia (spiritual cleansing) using eggs, guinea pigs, herbs, and smoke is a standard treatment for mal de ojo and susto (fright-sickness) throughout Andean Ecuador. The Otavalo weavers of Imbabura incorporate protective cosmological motifs into their famous textiles.\n\nThe evil eye is universally feared: red coral beads and jet (azabache) are standard infant protection. The chakana appears in Ecuadorian folk art as an Andean protective symbol. Specific mountains — particularly Chimborazo and Cotapaxi — are treated as protective deities (apus) in Kichwa tradition, and offerings are made at their bases.",
    charmSlugs: [
      "evil-eye", "chakana-cross", "milagros", "rosary-beads", "crucifix",
      "guardian-angel", "copal-incense",
    ],
  },
  {
    name: "Bolivia",
    slug: "bolivia",
    region: "Americas - South",
    flag: "🇧🇴",
    description:
      "Bolivia has one of the most vibrant Indigenous charm traditions in the Americas, with the Aymara and Quechua cultures maintaining living cosmological practices. The ekeko — the squat, smiling figure hung with miniature goods — originated in the Tiahuanaco culture of Bolivia's Lake Titicaca region and is the Andean deity of abundance par excellence. The alasita fair in La Paz on January 24th is one of the most extraordinary charm ceremonies in the world: people buy miniature objects representing their wishes (houses, cars, diplomas, dollars) and have them blessed by an Aymara yatiri (wise person) to draw in the real thing.\n\nThe Pachamama (Mother Earth) is the supreme being of Andean cosmology, and offerings (ch'alla) poured to the earth at the August ritual for Pachamama are the most important luck-attracting ceremony of the Aymara year. The llama, torito de Pucará, and chakana are all specifically Andean lucky symbols.",
    charmSlugs: [
      "ekeko", "llama", "chakana-cross", "torito-de-pucara", "copal-incense",
      "peruvian-tumi", "rosary-beads", "crucifix", "milagros",
    ],
  },
  {
    name: "Paraguay",
    slug: "paraguay",
    region: "Americas - South",
    flag: "🇵🇾",
    description:
      "Paraguay is the only country in South America where an Indigenous language (Guaraní) is an official language spoken by the majority, and Guaraní spiritual concepts underpin the national charm culture. The Pombero — a nocturnal dwarf spirit — must be propitiated with tobacco and honey to avoid misfortune, and its image appears in folk-protective contexts. The ñandutí lace (spider's web lace) from Itauguá incorporates specifically Guaraní cosmological patterns.\n\nParaguayan Catholic practice is distinctive in its deep fusion with Guaraní beliefs — the Virgen de Caacupé (Our Lady of the Miracles) is the national patron and her festival draws hundreds of thousands of pilgrims. Milagros and rosary beads are standard protective objects. The tereré (cold yerba mate) sharing ritual has folk luck implications in Paraguayan friendship culture.",
    charmSlugs: [
      "milagros", "rosary-beads", "crucifix", "guardian-angel", "copal-incense",
      "horseshoe", "four-leaf-clover",
    ],
  },
  {
    name: "Uruguay",
    slug: "uruguay",
    region: "Americas - South",
    flag: "🇺🇾",
    description:
      "Uruguay is the most secular country in Latin America, but folk luck traditions persist beneath the rationalist surface. The figa (hand gesture amulet), the evil eye counter-measures (mal de ojo), and the horseshoe are all standard. The gaucho heritage of the interior has its own luck traditions around the knife (facón), the mate gourd, and specific equine practices.\n\nThe candombe tradition — the Afro-Uruguayan drumming and dance form of Montevideo's barrios Sur and Palermo — is both cultural practice and a collective luck-renewing ceremony. Milagros are left at Catholic churches. The lottery is perhaps the most actively luck-focused national institution — Uruguayans have elaborate rituals for selecting lucky numbers involving dreams, signs, and the Quini lottery tradition.",
    charmSlugs: [
      "evil-eye", "horseshoe", "four-leaf-clover", "lucky-penny", "milagros",
      "rosary-beads", "number-seven",
    ],
  },
  {
    name: "Guyana",
    slug: "guyana",
    region: "Americas - South",
    flag: "🇬🇾",
    description:
      "Guyana's extraordinary ethnic diversity — East Indian, Afro-Guyanese, Indigenous, Chinese, Portuguese, and other groups — creates one of the most layered charm cultures in the Americas. The large Indo-Guyanese community maintains Hindu traditions of Ganesha worship, diya lamps, and om symbols. The Afro-Guyanese community has preserved elements of West African protective traditions, including obeah (a Caribbean folk magic system).\n\nThe Chinese Guyanese community carries maneki-neko, red envelopes, and jade. Indigenous peoples maintain traditional healing and protective ceremonies. The rosary and Christian protective objects are widely used across communities. The tawa herb and specific bush teas are used in folk medicine and protection.",
    charmSlugs: [
      "ganesha", "om-symbol", "diya-lamp", "evil-eye", "maneki-neko",
      "red-envelope", "jade", "rosary-beads", "cowrie-shell",
    ],
  },
  {
    name: "Suriname",
    slug: "suriname",
    region: "Americas - South",
    flag: "🇸🇷",
    description:
      "Suriname's remarkable ethnic tapestry — Hindustani, Javanese, Creole (Afro-Surinamese), Maroon (Bush Negro), Chinese, Indigenous, and Dutch — has produced one of the world's most eclectic charm cultures. The Maroon peoples, descendants of escaped enslaved Africans who built free communities in the jungle, maintain one of the most intact West African-derived spiritual traditions in the Americas in the form of Winti, a religious system with specific amulet and protective practices.\n\nThe Hindustani community maintains Hindu traditions of Ganesha, diya lamps, and mala beads. The Javanese community brings keris daggers and Javanese protective practices. The Chinese community carries standard Chinese luck symbols. Winti protective objects (obiyas) are used across ethnic groups for specific life problems.",
    charmSlugs: [
      "ganesha", "om-symbol", "diya-lamp", "mala-beads", "keris-dagger",
      "lucky-bamboo", "maneki-neko", "cowrie-shell", "rosary-beads",
    ],
  },

  // ── AMERICAS - CARIBBEAN ───────────────────────────────────────────────────
  {
    name: "Cuba",
    slug: "cuba",
    region: "Americas - Caribbean",
    flag: "🇨🇺",
    description:
      "Cuba's most distinctive contribution to world amulet culture is Santería (Lucumí), the syncretic Afro-Cuban religion that equates Yoruba orishas with Catholic saints. The ilekes — sacred necklaces of beads in the specific colors of each orisha (blue-and-white for Yemayá, red-and-black for Elegguá, etc.) — are the primary amulets of Santería initiates. Elegguá, the orisha of crossroads and beginnings, is often represented by a cement head with cowrie eyes placed behind the door.\n\nCowrie shells are essential divination tools and decorative elements across Afro-Cuban practice. The evil eye (mal de ojo) is guarded against with the standard Caribbean practices. The Cuban cigar (tabaco) plays a role in Santería ceremonies as an offering to specific orishas. Catholic rosary beads and saint medals coexist with Santería objects in most Cuban homes.",
    charmSlugs: [
      "cowrie-shell", "evil-eye", "rosary-beads", "crucifix", "horseshoe",
      "four-leaf-clover", "lucky-penny",
    ],
  },
  {
    name: "Jamaica",
    slug: "jamaica",
    region: "Americas - Caribbean",
    flag: "🇯🇲",
    description:
      "Jamaica's charm tradition is shaped by its Afro-Caribbean heritage, Rastafari spiritual culture, and overlapping Christian denominations. Obeah — the system of West African-derived folk magic brought to Jamaica by enslaved people — involves specific objects, herbs, and rituals for protection, luck, and harm. While obeah is technically illegal in Jamaica, it remains a living folk practice. Specific roots, powders, and objects prepared by obeah practitioners provide targeted luck and protection.\n\nRastafari culture, while not primarily concerned with physical amulets, has specific symbolic objects: the colors red-gold-green and black, the lion of Judah (representing Haile Selassie), and specific herbs (particularly cannabis used sacramentally) carry spiritual protective meaning. The duppy (Jamaican ghost) must be placated or avoided, and specific folk practices protect against harm from the restless dead.",
    charmSlugs: [
      "cowrie-shell", "rosary-beads", "crucifix", "evil-eye", "horseshoe",
      "four-leaf-clover",
    ],
  },
  {
    name: "Haiti",
    slug: "haiti",
    region: "Americas - Caribbean",
    flag: "🇭🇹",
    description:
      "Haiti is the birthplace of Vodou (voodoo), the syncretic Afro-Caribbean religion that was born from the encounter of West African Fon and Yoruba spiritual traditions with French Catholicism among enslaved people. Haitian Vodou involves a complex pantheon of spirits (lwa) each with specific colors, symbols, days, and protective functions. The vévé — geometric symbols drawn on the ground in cornmeal to summon specific lwa — are among the most beautiful and potent protective symbols in the Americas.\n\nThe gris-gris bag (wanga or mojo), containing specific objects for attraction or protection, is a standard Haitian Vodou tool. The protective lwa Marasa (sacred twins), Ogou (warrior), and Ezili Freda (love) are invoked through specific objects and colors. Catholic prayer beads and crucifixes coexist with Vodou objects in most Haitian homes, the saints identified with specific lwa.",
    charmSlugs: [
      "cowrie-shell", "gris-gris", "mojo-hand", "rosary-beads", "crucifix",
      "evil-eye",
    ],
  },
  {
    name: "Dominican Republic",
    slug: "dominican-republic",
    region: "Americas - Caribbean",
    flag: "🇩🇴",
    description:
      "The Dominican Republic's charm tradition combines its Taino Indigenous heritage, Spanish Catholic practice, and Afro-Dominican religious tradition. Vudú dominicano (Dominican Voodoo, also called 21 Divisiones) is a living syncretic religion that equates African orishas with Catholic saints and Dominican folk spirits. The protective actions of specific spirits (luases) are sought through rituals involving colored objects, offerings, and specific foods.\n\nThe evil eye (mal de ojo) is universally feared and guarded against with jet (azabache) beads pinned to infants and specific prayers. The Dominican Republic has a particularly strong devotion to the Virgen de las Mercedes (patron of the country) and the Virgin of Altagracia whose medals are carried for protection. The Amber from the Dominican Republic's northern coast — including some of the world's finest fossil amber — is made into protective jewelry.",
    charmSlugs: [
      "cowrie-shell", "evil-eye", "rosary-beads", "crucifix", "guardian-angel",
      "milagros", "amber",
    ],
  },
  {
    name: "Puerto Rico",
    slug: "puerto-rico",
    region: "Americas - Caribbean",
    flag: "🇵🇷",
    description:
      "Puerto Rico's charm tradition blends Taino, Spanish Catholic, and Afro-Puerto Rican Espiritismo (Spiritism) influences. The azabache — black jet carved into fist or hand shapes — is the quintessential Puerto Rican baby amulet, pinned to infant clothing to protect against the evil eye (mal de ojo). These are given at baptisms as standard protective gifts. The mano de azabache is so central to Puerto Rican culture that it is a national symbol.\n\nEspiritismo — the Puerto Rican form of Spiritism mixed with African Lucumí and Santería elements — involves specific objects including candles, statues of saints and protectors, and specific herbal preparations. The rosary, crucifix, and saint medals of Catholic practice are universal. The coquí frog, endemic to Puerto Rico and producing its distinctive call through the tropical night, is considered the supreme luck-symbol of Puerto Rican identity.",
    charmSlugs: [
      "evil-eye", "rosary-beads", "crucifix", "guardian-angel",
      "st-christopher-medal", "milagros", "horseshoe", "four-leaf-clover",
    ],
  },
  {
    name: "Trinidad and Tobago",
    slug: "trinidad-and-tobago",
    region: "Americas - Caribbean",
    flag: "🇹🇹",
    description:
      "Trinidad and Tobago's extraordinary cultural diversity — African, East Indian, Chinese, European, Syrian, and Indigenous mixtures — creates one of the Caribbean's most layered charm cultures. Obeah (West African-derived protective magic) is practiced alongside Hindu puja, Muslim du'a, and Catholic novenas. The large Indian-Trinidadian community maintains strong Hindu traditions of Ganesha worship, diya lamps, mala beads, and om symbols.\n\nThe Orisha (Shango) tradition, a West African-derived religion particularly strong in Trinidad, involves specific protective objects associated with each orisha. The evil eye is guarded against across all communities. Carnival — Trinidad's supreme cultural event — involves specific preparations and protective actions, and the steel pan (invented in Trinidad) carries associations of collective joyful protection.",
    charmSlugs: [
      "ganesha", "om-symbol", "diya-lamp", "mala-beads", "cowrie-shell",
      "evil-eye", "rosary-beads", "crucifix", "tasbih",
    ],
  },
  {
    name: "Bahamas",
    slug: "bahamas",
    region: "Americas - Caribbean",
    flag: "🇧🇸",
    description:
      "The Bahamas' charm tradition draws from its Afro-Caribbean heritage and strong Protestant Christianity. Obeah — the system of West African-derived folk magic — is present but less public than in some Caribbean islands. Specific plants, roots, and sea objects (particularly from the extraordinary sea around the islands) carry protective associations in Bahamian folk belief.\n\nThe sea and fishing are central to Bahamian life, and maritime lucky objects — the anchor, the shell (particularly the queen conch shell, the national symbol), and specific seafarer's charms — are important. The junkanoo parade involves costumes and drumming with roots in African spiritual practice. Standard Caribbean Catholic and Protestant protective objects — crosses, rosary beads, and prayer books — are widely used.",
    charmSlugs: [
      "anchor-charm", "cowrie-shell", "rosary-beads", "crucifix",
      "evil-eye", "horseshoe",
    ],
  },
  {
    name: "Barbados",
    slug: "barbados",
    region: "Americas - Caribbean",
    flag: "🇧🇧",
    description:
      "Barbados's charm tradition reflects its Afro-Caribbean heritage and deeply Protestant British colonial influence. The folk practice of obeah, though officially discouraged, has shaped a tradition of protective herbal bundles, specific rituals for protection against duppies (spirits), and folk healers known as doktors. The flying fish — the national symbol of Barbados and the most common food fish — is considered a lucky animal.\n\nThe sea is central to Barbadian identity and maritime lucky objects including anchors and specific shells carry meaning. Protestant Christian practice — particularly Anglican — is dominant, and Bible verses, crosses, and prayer are the primary protective tools. The specific tradition of Crop Over (the harvest festival) involves collective luck-renewing ceremonies.",
    charmSlugs: [
      "anchor-charm", "cowrie-shell", "rosary-beads", "crucifix",
      "horseshoe", "four-leaf-clover",
    ],
  },

  // ── OCEANIA ────────────────────────────────────────────────────────────────
  {
    name: "Australia",
    slug: "australia",
    region: "Oceania",
    flag: "🇦🇺",
    description:
      "Australia's charm culture has two distinct strands: the extraordinary Indigenous spiritual tradition and the adopted European/global charm practices of settlers and migrants. Aboriginal Australians have one of the world's oldest continuing spiritual traditions, in which tjurunga (sacred objects), dot-art paintings encoding songline maps, and totem animals carry profound protective power available to the initiated. The boomerang — the returning object — carries inherent lucky symbolism: what you send out returns to you.\n\nThe broader Australian settler culture adopted British and European charm traditions: the horseshoe, four-leaf clover, and lucky penny are standard. The opal — mined in Australia's outback in the finest quality in the world — is the national gemstone and carries both lucky and unlucky associations (unlucky only for those not born in October, according to a Victorian-era gem trade myth). The kangaroo and emu — national animals — appear on lucky charms.",
    charmSlugs: [
      "boomerang", "aboriginal-dot-art", "horseshoe", "four-leaf-clover",
      "ladybug", "lucky-penny", "number-seven", "key", "acorn",
      "anchor-charm", "opal",
    ],
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    region: "Oceania",
    flag: "🇳🇿",
    description:
      "New Zealand's most distinctive lucky charms come from Māori culture, one of the world's most vital and living Indigenous traditions. The hei-tiki — a carved greenstone (pounamu) pendant in the form of a human figure with a tilted head — is the quintessential New Zealand amulet, representing ancestral spirits and conferring protection. Pounamu (New Zealand jade/nephrite/greenstone) is the sacred stone of the South Island Māori, and any object carved from it carries ancestral protection.\n\nThe hei-matau (fish hook pendant) represents prosperity, good fortune over water, and safe sea passage — an essential charm for the great Polynesian voyagers. The koru (unfurling fern frond) represents new beginnings and hope. The pikorua (twist/figure eight) represents the joining of two forces. New Zealand's settler culture brought the British charm traditions of horseshoe, lucky penny, and four-leaf clover.",
    charmSlugs: [
      "hei-tiki", "pounamu", "maori-koru", "hei-matau", "pikorua",
      "horseshoe", "four-leaf-clover", "ladybug", "lucky-penny", "number-seven",
      "anchor-charm",
    ],
  },

  // ── PACIFIC ────────────────────────────────────────────────────────────────
  {
    name: "Fiji",
    slug: "fiji",
    region: "Pacific",
    flag: "🇫🇯",
    description:
      "Fiji's charm tradition blends Melanesian Indigenous practice with the traditions brought by the large Indo-Fijian community (descendants of Indian indentured laborers). The iTaukei (indigenous Fijian) tradition involves ancestral protection through yaqona (kava) ceremonies in which spirits are appeased and blessing is collectively sought. Specific ancestral objects (yau) and totem clans maintain ceremonial protective roles.\n\nThe large Indo-Fijian Hindu community maintains traditions of Ganesha worship, diya lamps, mala beads, and om symbols, giving Fiji an unusual dual Pacific-Hindu character. The sea turtle is a deeply auspicious creature in Fijian culture, representing longevity and wisdom. The tabua (polished sperm whale tooth) is the most prestigious gift object in traditional Fijian culture, given at births, marriages, deaths, and diplomatic meetings as a blessing object of enormous power.",
    charmSlugs: [
      "ganesha", "om-symbol", "diya-lamp", "mala-beads", "cowrie-shell",
      "rosary-beads",
    ],
  },
  {
    name: "Samoa",
    slug: "samoa",
    region: "Pacific",
    flag: "🇼🇸",
    description:
      "Samoa's fa'a Samoa ('the Samoan way') is one of the Pacific's most intact traditional cultures, in which protective spiritual practice is embedded in daily social structure. The pe'a and malu (traditional full-body tattoos for men and women respectively) are not merely decorative — they are transformative protective ceremonies marking the recipient as an adult member of the community with ancestral protection. The tattoo is itself a living amulet.\n\nThe fue (fly whisk) and to'oto'o (staff) carried by orators (tulafale) are symbols of authority and protective ancestral power. The shell jewelry, particularly necklaces made from whale teeth and shells, carries traditional status and protection. Christian faith is extraordinarily strong in Samoa — the phrase 'Samoa is founded on God' is the national motto — and crosses, rosary beads, and prayer are daily protective tools.",
    charmSlugs: [
      "cowrie-shell", "rosary-beads", "crucifix", "anchor-charm",
    ],
  },
  {
    name: "Tonga",
    slug: "tonga",
    region: "Pacific",
    flag: "🇹🇴",
    description:
      "Tonga, the only remaining monarchy in the Pacific, maintains a traditional social structure with strong protective ceremonial practice. Tongan kava (ʻava) ceremonies are the central ritual for seeking ancestral blessing and protective guidance. The tabua (polished sperm whale tooth) is Tonga's most precious ceremonial object, exchanged at births, marriages, funerals, and diplomatic events as a supreme gift of blessing.\n\nTongan barkcloth (ngatu), painted with specific geometric designs, is given as a prestige gift at major life ceremonies and carries the accumulated blessing of the women who made it. Christianity is deeply embedded — Tongan Methodist faith is particularly strong — and crosses, prayer books, and rosary beads are standard protective objects. The shark, considered an ancestor of certain clans, carries protective associations for those clans.",
    charmSlugs: [
      "cowrie-shell", "rosary-beads", "crucifix", "anchor-charm",
    ],
  },
  {
    name: "Papua New Guinea",
    slug: "papua-new-guinea",
    region: "Pacific",
    flag: "🇵🇬",
    description:
      "Papua New Guinea has the world's most linguistically and culturally diverse small territory — over 800 languages and thousands of distinct cultural traditions. Protective amulets vary dramatically from one valley to the next. The bilum (string bag) woven by Highland women is not merely functional but encodes protective patterns in its weave. Specific shell valuables — kina (pearlshell), toea (conus shell) — are the primary prestige and protective objects across much of the country.\n\nAncestral spirits (masalai) must be properly propitiated to avoid misfortune, and specific objects, plants, and ritual actions serve this purpose. The spectacular sing-sing ceremonial gatherings involve costumes incorporating protective bird feathers, shells, and pig tusks. Christianity is now widespread and crosses and rosary beads are standard protective objects. The bird of paradise — the national symbol — carries associations of supernatural beauty and divine favor.",
    charmSlugs: [
      "cowrie-shell", "feather", "rosary-beads", "crucifix",
    ],
  },
];
