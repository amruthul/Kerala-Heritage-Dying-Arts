// Central asset + content registry. Swap any image here for a verified photograph.
import theyyamHero from "@/assets/theyyam-hero.jpg";
import theyyamField from "@/assets/theyyam-field.jpg";
import theyyamPortrait from "@/assets/theyyam-portrait.jpg";
import theyyamForest from "@/assets/theyyam-forest.jpg";
import theyyamFace from "@/assets/theyyam-face.jpg";
import kathakali from "@/assets/kathakali.jpg";
import kalari from "@/assets/kalari.jpg";
import prep from "@/assets/prep.jpg";
import metal from "@/assets/craft-metal.jpg";
import loom from "@/assets/craft-loom.jpg";
import wood from "@/assets/craft-wood.jpg";
import mural from "@/assets/craft-mural.jpg";
import lamps from "@/assets/lamps.jpg";

export const img = { theyyamHero, theyyamField, theyyamPortrait, theyyamForest, theyyamFace, kathakali, kalari, prep, metal, loom, wood, mural, lamps };

export const chapters = [
  { id: "beginning", n: "01", title: "The Beginning" },
  { id: "rituals", n: "02", title: "Rituals & Fire" },
  { id: "faces", n: "03", title: "The Language of Faces" },
  { id: "movement", n: "04", title: "The Art of Movement" },
  { id: "hands", n: "05", title: "Hands That Remember" },
  { id: "archive", n: "06", title: "The Living Archive" },
  { id: "legacy", n: "07", title: "Preserve the Legacy" },
] as const;

export const tagline =
  "Much of Kerala's art forms are so unique to the land's folklores and culture. They are inspired by age-old traditions, customs, and even the diverse ways of life of the people. A short list of some of the best recommendations for you is given here. Enrich yourself with these once-in-a-lifetime experiences. Be blessed abundantly by the God's Own Country.";

// North Malabar cultural chronicle — Kannur, Kasaragod and Kozhikode.
export const chronicle = [
  { name: "Theyyam", region: "Kannur & Kasaragod", image: theyyamField, text: "The season's centrepiece: ritual performances in kavus, sacred groves and family courtyards, held through an annual season that runs roughly from October to May." },
  { name: "Thidambu Nritham", region: "North Malabar temples", image: theyyamPortrait, text: "A ritual dance in which performers carry the thidambu — a decorated replica of the deity — on their heads, moving to percussion rhythms." },
  { name: "Poorakkali", region: "Bhagavathy temple villages", image: lamps, text: "A vigorous ritual dance performed by men around the nilavilakku during Onam, accompanied by songs narrating epic stories." },
  { name: "Kolkali & Duff Muttu", region: "The Malabar coast", image: prep, text: "Group dance-and-percussion forms of Malabar's Muslim communities — dancers circle with sticks and drums, keeping one shared rhythm." },
  { name: "Beypore Uru", region: "Beypore, Kozhikode", image: wood, text: "Wooden dhow shipbuilding at one of the world's oldest working shipyards; the uru holds a Geographical Indication tag." },
  { name: "Vadakkan Kalari", region: "North Malabar kalaris", image: kalari, text: "The northern style of Kalaripayattu — agile footwork, weapon forms and lineage-based training, still taught in village kalaris." },
];

export const theyyamElements = [
  { name: "The Face", image: theyyamFace, text: "Face painting (mukhathezhuthu) is done by hand with natural pigments, often over several hours. Each pattern is associated with a specific deity or figure, so the designs are learned and preserved precisely." },
  { name: "The Costume", image: theyyamPortrait, text: "Costumes and headdresses are built from tender coconut leaves, areca sheaths, wood, cloth and metal. Many are made fresh for each performance by the community that hosts it." },
  { name: "The Ritual Space", image: theyyamForest, text: "Theyyam is performed in shrines (kavu), sacred groves and family courtyards across northern Kerala, mostly in the Kannur and Kasaragod regions, during an annual season." },
  { name: "The Music", image: theyyamHero, text: "Drums such as the chenda, with cymbals and wind instruments, set the rhythm. Songs called thottam narrate the story of the figure being invoked." },
  { name: "The Community", image: prep, text: "Performers come from hereditary communities who pass on the knowledge within families. Theyyam is sustained by local devotees, families and shrine committees." },
];

export const makeup = [
  { name: "Pacha", filter: "none", desc: "Green ('pacha') faces generally portray noble, heroic and virtuous characters such as kings and gods. The red-and-white chutti frames the jaw." },
  { name: "Kathi", filter: "hue-rotate(-75deg) saturate(1.3)", desc: "'Kathi' (knife) characters keep a green base but add red upturned marks and a white knob on the nose, conventionally for arrogant or villainous heroes such as Ravana." },
  { name: "Thadi", filter: "hue-rotate(-95deg) saturate(1.6) contrast(1.1)", desc: "'Thadi' means beard. Red beards (chuvanna thadi) mark fierce characters, white beards often superhuman beings such as Hanuman, and black beards hunters or forest dwellers." },
  { name: "Kari", filter: "grayscale(1) brightness(.55) contrast(1.4)", desc: "'Kari' means black. Black faces typically represent demonesses and forest-dwelling characters, often with exaggerated features." },
  { name: "Minukku", filter: "sepia(.9) hue-rotate(-15deg) saturate(1.4) brightness(1.15)", desc: "'Minukku' (radiant) is a softer saffron-yellow make-up used for women, sages and Brahmins, conveying gentleness and refinement." },
];

export const kalariTabs = [
  { key: "MOVEMENT", text: "Training begins with meipayattu, body-conditioning sequences of stances (vadivu), kicks, leaps and turns, many named after animals. Flexibility and balance come before any weapon." },
  { key: "TRAINING", text: "Practice traditionally takes place in a kalari, a sunken earthen hall. Students progress from body exercises to wooden weapons (kolthari), then metal weapons (ankathari) and finally empty-hand techniques (verumkai)." },
  { key: "LEGACY", text: "The art was restricted under colonial rule and revived in the early 20th century. Today gurus (gurukkal) still teach in kalaris across Kerala, alongside traditional healing knowledge." },
];

export type Craft = { name: string; region: string; line: string; image: string; history: string; materials: string; process: string; importance: string; challenges: string; span: string };

export const crafts: Craft[] = [
  { name: "Aranmula Kannadi", region: "Aranmula, Pathanamthitta", line: "A mirror made of metal, not glass.", image: metal, span: "md:col-span-5 md:row-span-2", history: "Made by a small group of hereditary families in Aranmula. It received a Geographical Indication (GI) tag in 2004/05.", materials: "A copper–tin alloy whose exact proportions are a closely held family secret.", process: "The alloy is cast in clay moulds, then polished by hand for days until it reflects like glass.", importance: "Considered auspicious and part of the traditional valkannadi in Kerala households.", challenges: "Very few families hold the knowledge, and the process is slow and hard to scale." },
  { name: "Kasavu Handloom", region: "Balaramapuram & Kuthampully", line: "Cream cotton, golden borders, woven by hand.", image: loom, span: "md:col-span-7", history: "Balaramapuram weaving dates to weavers settled near Thiruvananthapuram by the Travancore rulers. Balaramapuram saris and fabrics hold a GI tag.", materials: "Fine cotton yarn and zari (gold-coloured thread) for the border.", process: "Yarn is prepared, sized and set on pit or frame looms; borders are woven in with the body by hand.", importance: "Worn at Onam, weddings and festivals; part of Kerala's visual identity.", challenges: "Competition from power-loom copies and fewer young weavers." },
  { name: "Wood Carving", region: "Across Kerala", line: "Temple ceilings and doors carved in teak and jackwood.", image: wood, span: "md:col-span-4", history: "Kerala's temples, palaces and nalukettu homes are known for richly carved wooden ceilings, brackets and doors.", materials: "Teak, rosewood, jackwood and other hardwoods.", process: "Designs are marked by hand and carved with chisels and mallets, following traditional proportions.", importance: "Integral to Kerala's architectural heritage and temple art.", challenges: "Scarcity of quality timber and declining commissions for traditional work." },
  { name: "Kerala Mural", region: "Temples & palaces", line: "Stories painted in five natural colours.", image: mural, span: "md:col-span-3", history: "Surviving examples in temples and palaces such as Mattancherry span several centuries.", materials: "Natural pigments from minerals and plants on lime-plastered walls.", process: "Painted in a tradition of panchavarna (five colours), with strict iconographic rules.", importance: "Preserves religious narratives and a distinctive visual style.", challenges: "Original murals are fragile and many have suffered from damp and neglect." },
];

// Periods only; no precise origin dates are claimed where evidence is uncertain.
export const timeline = [
  { period: "Ancient period", title: "Early Tamilakam", text: "Sangam-era literature describes communities of the region and early performance and ritual practices. Direct links to today's art forms are debated by historians.", image: theyyamForest },
  { period: "c. 10th century onward", title: "Temple theatre", text: "Koodiyattam, Sanskrit theatre performed in temples, is documented over many centuries. UNESCO proclaimed it a Masterpiece of Intangible Heritage in 2001.", image: lamps },
  { period: "Medieval period (uncertain)", title: "Kalari traditions", text: "Kalaripayattu's origins are not precisely dated. Written references and lineages become clearer in the medieval period.", image: kalari },
  { period: "17th century", title: "Kathakali emerges", text: "Kathakali is generally traced to the 17th century, developing from earlier forms such as Ramanattam and Krishnanattam.", image: kathakali },
  { period: "1930", title: "Kerala Kalamandalam", text: "The poet Vallathol Narayana Menon co-founded Kerala Kalamandalam, reviving Kathakali and other classical arts.", image: prep },
  { period: "2000s – today", title: "Documentation & preservation", text: "GI tags for crafts, UNESCO recognition, digital archives and community initiatives work to document and sustain these traditions.", image: metal },
];

export const motifs = [
  { key: "theyyam", label: "Theyyam", image: theyyamPortrait, fact: "Theyyam is performed in northern Kerala and is seen by communities as a living ritual, not just a show." },
  { key: "kathakali", label: "Pacha", image: kathakali, fact: "Green Pacha make-up conventionally marks noble and heroic characters in Kathakali." },
  { key: "face", label: "Mukhathezhuthu", image: theyyamFace, fact: "Theyyam face painting uses natural pigments and can take several hours." },
  { key: "mural", label: "Mural", image: mural, fact: "Kerala murals are painted in the panchavarna tradition of five colours." },
  { key: "lamp", label: "Nilavilakku", image: lamps, fact: "The brass nilavilakku lamp is lit before many performances and rituals." },
  { key: "mirror", label: "Aranmula", image: metal, fact: "The Aranmula Kannadi is a metal mirror with a GI tag." },
];

export const resources = [
  { name: "Kerala Kalamandalam", url: "https://www.kalamandalam.ac.in/", text: "Deemed university for Kerala's performing arts." },
  { name: "Sangeet Natak Akademi", url: "https://www.sangeetnatak.gov.in/", text: "India's national academy for music, dance and drama." },
  { name: "UNESCO — Koodiyattam", url: "https://ich.unesco.org/en/RL/kutiyattam-sanskrit-theatre-00010", text: "Kerala's temple theatre on the UNESCO list." },
  { name: "Kerala Tourism — Art Forms", url: "https://www.keralatourism.org/artforms/", text: "Overviews of Kerala's traditional art forms." },
];
