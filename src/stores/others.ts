import { defineStore } from "pinia";

export const Others = defineStore('others', {
  state: () => {
    return ({
      Natures: {
        adamant: { name: "Adamant", plus: "atk", minus: "spa" },
        bashful: { name: "Bashful" },
        bold: { name: "Bold", plus: "def", minus: "atk" },
        brave: { name: "Brave", plus: "atk", minus: "spe" },
        calm: { name: "Calm", plus: "spd", minus: "atk" },
        careful: { name: "Careful", plus: "spd", minus: "spa" },
        docile: { name: "Docile" },
        gentle: { name: "Gentle", plus: "spd", minus: "def" },
        hardy: { name: "Hardy" },
        hasty: { name: "Hasty", plus: "spe", minus: "def" },
        impish: { name: "Impish", plus: "def", minus: "spa" },
        jolly: { name: "Jolly", plus: "spe", minus: "spa" },
        lax: { name: "Lax", plus: "def", minus: "spd" },
        lonely: { name: "Lonely", plus: "atk", minus: "def" },
        mild: { name: "Mild", plus: "spa", minus: "def" },
        modest: { name: "Modest", plus: "spa", minus: "atk" },
        naive: { name: "Naive", plus: "spe", minus: "spd" },
        naughty: { name: "Naughty", plus: "atk", minus: "spd" },
        quiet: { name: "Quiet", plus: "spa", minus: "spe" },
        quirky: { name: "Quirky" },
        rash: { name: "Rash", plus: "spa", minus: "spd" },
        relaxed: { name: "Relaxed", plus: "def", minus: "spe" },
        sassy: { name: "Sassy", plus: "spd", minus: "spe" },
        serious: { name: "Serious" },
        timid: { name: "Timid", plus: "spe", minus: "atk" },
      },
      Items: [
        {
          name: "Ability Shield",
          num: 1881,
          isNonstandard: undefined
        },
        {
          name: "Abomasite",
          num: 674,
          isNonstandard: "Past"
        },
        {
          name: "Absolite",
          num: 677,
          isNonstandard: "Past"
        },
        {
          name: "Absorb Bulb",
          num: 545,
          isNonstandard: undefined
        },
        {
          name: "Adamant Orb",
          num: 135,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Adrenaline Orb",
          num: 846,
          isNonstandard: undefined
        },
        {
          name: "Aerodactylite",
          num: 672,
          isNonstandard: "Past"
        },
        {
          name: "Aggronite",
          num: 667,
          isNonstandard: "Past"
        },
        {
          name: "Aguav Berry",
          num: 162,
          isNonstandard: undefined
        },
        {
          name: "Air Balloon",
          num: 541,
          isNonstandard: undefined
        },
        {
          name: "Alakazite",
          num: 679,
          isNonstandard: "Past"
        },
        {
          name: "Aloraichium Z",
          num: 803,
          isNonstandard: "Past"
        },
        {
          name: "Altarianite",
          num: 755,
          isNonstandard: "Past"
        },
        {
          name: "Ampharosite",
          num: 658,
          isNonstandard: "Past"
        },
        {
          name: "Apicot Berry",
          num: 205,
          isNonstandard: undefined
        },
        {
          name: "Armor Fossil",
          num: 104,
          isNonstandard: "Past"
        },
        {
          name: "Aspear Berry",
          num: 153,
          isNonstandard: undefined
        },
        {
          name: "Assault Vest",
          num: 640,
          isNonstandard: undefined
        },
        {
          name: "Audinite",
          num: 757,
          isNonstandard: "Past"
        },
        {
          name: "Auspicious Armor",
          num: 2344,
          isNonstandard: undefined
        },
        {
          name: "Babiri Berry",
          num: 199,
          isNonstandard: undefined
        },
        {
          name: "Banettite",
          num: 668,
          isNonstandard: "Past"
        },
        {
          name: "Beast Ball",
          num: 851,
          isNonstandard: undefined
        },
        {
          name: "Beedrillite",
          num: 770,
          isNonstandard: "Past"
        },
        {
          name: "Belue Berry",
          num: 183,
          isNonstandard: "Past"
        },
        {
          name: "Berry Juice",
          num: 43,
          isNonstandard: "Past"
        },
        {
          name: "Berry Sweet",
          num: 1111,
          isNonstandard: undefined
        },
        {
          name: "Big Root",
          num: 296,
          isNonstandard: undefined
        },
        {
          name: "Binding Band",
          num: 544,
          isNonstandard: undefined
        },
        {
          name: "Black Belt",
          num: 241,
          isNonstandard: undefined
        },
        {
          name: "Black Sludge",
          num: 281,
          isNonstandard: undefined
        },
        {
          name: "Black Glasses",
          num: 240,
          isNonstandard: undefined
        },
        {
          name: "Blastoisinite",
          num: 661,
          isNonstandard: "Past"
        },
        {
          name: "Blazikenite",
          num: 664,
          isNonstandard: "Past"
        },
        {
          name: "Blue Orb",
          num: 535,
          isNonstandard: "Past"
        },
        {
          name: "Bluk Berry",
          num: 165,
          isNonstandard: undefined
        },
        {
          name: "Blunder Policy",
          num: 1121,
          isNonstandard: undefined
        },
        {
          name: "Booster Energy",
          num: 1880,
          isNonstandard: undefined
        },
        {
          name: "Bottle Cap",
          num: 795,
          isNonstandard: undefined
        },
        {
          name: "Bright Powder",
          num: 213,
          isNonstandard: undefined
        },
        {
          name: "Bug Gem",
          num: 558,
          isNonstandard: "Past"
        },
        {
          name: "Bug Memory",
          num: 909,
          isNonstandard: "Past"
        },
        {
          name: "Buginium Z",
          num: 787,
          isNonstandard: "Past"
        },
        {
          name: "Burn Drive",
          num: 118,
          isNonstandard: "Past"
        },
        {
          name: "Cameruptite",
          num: 767,
          isNonstandard: "Past"
        },
        {
          name: "Cell Battery",
          num: 546,
          isNonstandard: undefined
        },
        {
          name: "Charcoal",
          num: 249,
          isNonstandard: undefined
        },
        {
          name: "Charizardite X",
          num: 660,
          isNonstandard: "Past"
        },
        {
          name: "Charizardite Y",
          num: 678,
          isNonstandard: "Past"
        },
        {
          name: "Charti Berry",
          num: 195,
          isNonstandard: undefined
        },
        {
          name: "Cheri Berry",
          num: 149,
          isNonstandard: undefined
        },
        {
          name: "Cherish Ball",
          num: 16,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Chesto Berry",
          num: 150,
          isNonstandard: undefined
        },
        {
          name: "Chilan Berry",
          num: 200,
          isNonstandard: undefined
        },
        {
          name: "Chill Drive",
          num: 119,
          isNonstandard: "Past"
        },
        {
          name: "Chipped Pot",
          num: 1254,
          isNonstandard: undefined
        },
        {
          name: "Choice Band",
          num: 220,
          isNonstandard: undefined
        },
        {
          name: "Choice Scarf",
          num: 287,
          isNonstandard: undefined
        },
        {
          name: "Choice Specs",
          num: 297,
          isNonstandard: undefined
        },
        {
          name: "Chople Berry",
          num: 189,
          isNonstandard: undefined
        },
        {
          name: "Claw Fossil",
          num: 100,
          isNonstandard: "Past"
        },
        {
          name: "Clear Amulet",
          num: 1882,
          isNonstandard: undefined
        },
        {
          name: "Clover Sweet",
          num: 1112,
          isNonstandard: undefined
        },
        {
          name: "Coba Berry",
          num: 192,
          isNonstandard: undefined
        },
        {
          name: "Colbur Berry",
          num: 198,
          isNonstandard: undefined
        },
        {
          name: "Cornn Berry",
          num: 175,
          isNonstandard: "Past"
        },
        {
          name: "Cover Fossil",
          num: 572,
          isNonstandard: "Past"
        },
        {
          name: "Covert Cloak",
          num: 1885,
          isNonstandard: undefined
        },
        {
          name: "Cracked Pot",
          num: 1253,
          isNonstandard: undefined
        },
        {
          name: "Custap Berry",
          num: 210,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Damp Rock",
          num: 285,
          isNonstandard: undefined
        },
        {
          name: "Dark Gem",
          num: 562,
          isNonstandard: "Past"
        },
        {
          name: "Dark Memory",
          num: 919,
          isNonstandard: "Past"
        },
        {
          name: "Darkinium Z",
          num: 791,
          isNonstandard: "Past"
        },
        {
          name: "Dawn Stone",
          num: 109,
          isNonstandard: undefined
        },
        {
          name: "Decidium Z",
          num: 798,
          isNonstandard: "Past"
        },
        {
          name: "Deep Sea Scale",
          num: 227,
          isNonstandard: "Past"
        },
        {
          name: "Deep Sea Tooth",
          num: 226,
          isNonstandard: "Past"
        },
        {
          name: "Destiny Knot",
          num: 280,
          isNonstandard: undefined
        },
        {
          name: "Diancite",
          num: 764,
          isNonstandard: "Past"
        },
        {
          name: "Dive Ball",
          num: 7,
          isNonstandard: undefined
        },
        {
          name: "Dome Fossil",
          num: 102,
          isNonstandard: "Past"
        },
        {
          name: "Douse Drive",
          num: 116,
          isNonstandard: "Past"
        },
        {
          name: "Draco Plate",
          num: 311,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Dragon Fang",
          num: 250,
          isNonstandard: undefined
        },
        {
          name: "Dragon Gem",
          num: 561,
          isNonstandard: "Past"
        },
        {
          name: "Dragon Memory",
          num: 918,
          isNonstandard: "Past"
        },
        {
          name: "Dragon Scale",
          num: 235,
          isNonstandard: "Past"
        },
        {
          name: "Dragonium Z",
          num: 790,
          isNonstandard: "Past"
        },
        {
          name: "Dread Plate",
          num: 312,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Dream Ball",
          num: 576,
          isNonstandard: undefined
        },
        {
          name: "Dubious Disc",
          num: 324,
          isNonstandard: "Past"
        },
        {
          name: "Durin Berry",
          num: 182,
          isNonstandard: "Past"
        },
        {
          name: "Dusk Ball",
          num: 13,
          isNonstandard: undefined
        },
        {
          name: "Dusk Stone",
          num: 108,
          isNonstandard: undefined
        },
        {
          name: "Earth Plate",
          num: 305,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Eevium Z",
          num: 805,
          isNonstandard: "Past"
        },
        {
          name: "Eject Button",
          num: 547,
          isNonstandard: undefined
        },
        {
          name: "Eject Pack",
          num: 1119,
          isNonstandard: undefined
        },
        {
          name: "Electirizer",
          num: 322,
          isNonstandard: "Past"
        },
        {
          name: "Electric Gem",
          num: 550,
          isNonstandard: "Past"
        },
        {
          name: "Electric Memory",
          num: 915,
          isNonstandard: "Past"
        },
        {
          name: "Electric Seed",
          num: 881,
          isNonstandard: undefined
        },
        {
          name: "Electrium Z",
          num: 779,
          isNonstandard: "Past"
        },
        {
          name: "Energy Powder",
          num: 34,
          isNonstandard: undefined
        },
        {
          name: "Enigma Berry",
          num: 208,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Eviolite",
          num: 538,
          isNonstandard: undefined
        },
        {
          name: "Expert Belt",
          num: 268,
          isNonstandard: undefined
        },
        {
          name: "Fairium Z",
          num: 793,
          isNonstandard: "Past"
        },
        {
          name: "Fairy Gem",
          num: 715,
          isNonstandard: "Past"
        },
        {
          name: "Fairy Memory",
          num: 920,
          isNonstandard: "Past"
        },
        {
          name: "Fast Ball",
          num: 492,
          isNonstandard: undefined
        },
        {
          name: "Fighting Gem",
          num: 553,
          isNonstandard: "Past"
        },
        {
          name: "Fighting Memory",
          num: 904,
          isNonstandard: "Past"
        },
        {
          name: "Fightinium Z",
          num: 782,
          isNonstandard: "Past"
        },
        {
          name: "Figy Berry",
          num: 159,
          isNonstandard: undefined
        },
        {
          name: "Fire Gem",
          num: 548,
          isNonstandard: "Past"
        },
        {
          name: "Fire Memory",
          num: 912,
          isNonstandard: "Past"
        },
        {
          name: "Fire Stone",
          num: 82,
          isNonstandard: undefined
        },
        {
          name: "Firium Z",
          num: 777,
          isNonstandard: "Past"
        },
        {
          name: "Fist Plate",
          num: 303,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Flame Orb",
          num: 273,
          isNonstandard: undefined
        },
        {
          name: "Flame Plate",
          num: 298,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Float Stone",
          num: 539,
          isNonstandard: undefined
        },
        {
          name: "Flower Sweet",
          num: 1113,
          isNonstandard: undefined
        },
        {
          name: "Flying Gem",
          num: 556,
          isNonstandard: "Past"
        },
        {
          name: "Flying Memory",
          num: 905,
          isNonstandard: "Past"
        },
        {
          name: "Flyinium Z",
          num: 785,
          isNonstandard: "Past"
        },
        {
          name: "Focus Band",
          num: 230,
          isNonstandard: undefined
        },
        {
          name: "Focus Sash",
          num: 275,
          isNonstandard: undefined
        },
        {
          name: "Fossilized Bird",
          num: 1105,
          isNonstandard: "Past"
        },
        {
          name: "Fossilized Dino",
          num: 1108,
          isNonstandard: "Past"
        },
        {
          name: "Fossilized Drake",
          num: 1107,
          isNonstandard: "Past"
        },
        {
          name: "Fossilized Fish",
          num: 1106,
          isNonstandard: "Past"
        },
        {
          name: "Friend Ball",
          num: 497,
          isNonstandard: undefined
        },
        {
          name: "Full Incense",
          num: 316,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Galarica Cuff",
          num: 1582,
          isNonstandard: "Past"
        },
        {
          name: "Galarica Wreath",
          num: 1592,
          isNonstandard: "Past"
        },
        {
          name: "Galladite",
          num: 756,
          isNonstandard: "Past"
        },
        {
          name: "Ganlon Berry",
          num: 202,
          isNonstandard: undefined
        },
        {
          name: "Garchompite",
          num: 683,
          isNonstandard: "Past"
        },
        {
          name: "Gardevoirite",
          num: 657,
          isNonstandard: "Past"
        },
        {
          name: "Gengarite",
          num: 656,
          isNonstandard: "Past"
        },
        {
          name: "Ghost Gem",
          num: 560,
          isNonstandard: "Past"
        },
        {
          name: "Ghost Memory",
          num: 910,
          isNonstandard: "Past"
        },
        {
          name: "Ghostium Z",
          num: 789,
          isNonstandard: "Past"
        },
        {
          name: "Glalitite",
          num: 763,
          isNonstandard: "Past"
        },
        {
          name: "Gold Bottle Cap",
          num: 796,
          isNonstandard: undefined
        },
        {
          name: "Grass Gem",
          num: 551,
          isNonstandard: "Past"
        },
        {
          name: "Grass Memory",
          num: 914,
          isNonstandard: "Past"
        },
        {
          name: "Grassium Z",
          num: 780,
          isNonstandard: "Past"
        },
        {
          name: "Grassy Seed",
          num: 884,
          isNonstandard: undefined
        },
        {
          name: "Great Ball",
          num: 3,
          isNonstandard: undefined
        },
        {
          name: "Grepa Berry",
          num: 173,
          isNonstandard: undefined
        },
        {
          name: "Grip Claw",
          num: 286,
          isNonstandard: undefined
        },
        {
          name: "Griseous Orb",
          num: 112,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Ground Gem",
          num: 555,
          isNonstandard: "Past"
        },
        {
          name: "Ground Memory",
          num: 907,
          isNonstandard: "Past"
        },
        {
          name: "Groundium Z",
          num: 784,
          isNonstandard: "Past"
        },
        {
          name: "Gyaradosite",
          num: 676,
          isNonstandard: "Past"
        },
        {
          name: "Haban Berry",
          num: 197,
          isNonstandard: undefined
        },
        {
          name: "Hard Stone",
          num: 238,
          isNonstandard: undefined
        },
        {
          name: "Heal Ball",
          num: 14,
          isNonstandard: undefined
        },
        {
          name: "Heat Rock",
          num: 284,
          isNonstandard: undefined
        },
        {
          name: "Heavy Ball",
          num: 495,
          isNonstandard: undefined
        },
        {
          name: "Heavy-Duty Boots",
          num: 1120,
          isNonstandard: undefined
        },
        {
          name: "Helix Fossil",
          num: 101,
          isNonstandard: "Past"
        },
        {
          name: "Heracronite",
          num: 680,
          isNonstandard: "Past"
        },
        {
          name: "Hondew Berry",
          num: 172,
          isNonstandard: undefined
        },
        {
          name: "Houndoominite",
          num: 666,
          isNonstandard: "Past"
        },
        {
          name: "Iapapa Berry",
          num: 163,
          isNonstandard: undefined
        },
        {
          name: "Ice Gem",
          num: 552,
          isNonstandard: "Past"
        },
        {
          name: "Ice Memory",
          num: 917,
          isNonstandard: "Past"
        },
        {
          name: "Ice Stone",
          num: 849,
          isNonstandard: undefined
        },
        {
          name: "Icicle Plate",
          num: 302,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Icium Z",
          num: 781,
          isNonstandard: "Past"
        },
        {
          name: "Icy Rock",
          num: 282,
          isNonstandard: undefined
        },
        {
          name: "Incinium Z",
          num: 799,
          isNonstandard: "Past"
        },
        {
          name: "Insect Plate",
          num: 308,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Iron Ball",
          num: 278,
          isNonstandard: undefined
        },
        {
          name: "Iron Plate",
          num: 313,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Jaboca Berry",
          num: 211,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Jaw Fossil",
          num: 710,
          isNonstandard: "Past"
        },
        {
          name: "Kasib Berry",
          num: 196,
          isNonstandard: undefined
        },
        {
          name: "Kebia Berry",
          num: 190,
          isNonstandard: undefined
        },
        {
          name: "Kee Berry",
          num: 687,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Kelpsy Berry",
          num: 170,
          isNonstandard: undefined
        },
        {
          name: "Kangaskhanite",
          num: 675,
          isNonstandard: "Past"
        },
        {
          name: "King's Rock",
          num: 221,
          isNonstandard: undefined
        },
        {
          name: "Kommonium Z",
          num: 926,
          isNonstandard: "Past"
        },
        {
          name: "Lagging Tail",
          num: 279,
          isNonstandard: undefined
        },
        {
          name: "Lansat Berry",
          num: 206,
          isNonstandard: undefined
        },
        {
          name: "Latiasite",
          num: 684,
          isNonstandard: "Past"
        },
        {
          name: "Latiosite",
          num: 685,
          isNonstandard: "Past"
        },
        {
          name: "Lax Incense",
          num: 255,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Leaf Stone",
          num: 85,
          isNonstandard: undefined
        },
        {
          name: "Leek",
          num: 259,
          isNonstandard: "Past"
        },
        {
          name: "Leftovers",
          num: 234,
          isNonstandard: undefined
        },
        {
          name: "Leppa Berry",
          num: 154,
          isNonstandard: undefined
        },
        {
          name: "Level Ball",
          num: 493,
          isNonstandard: undefined
        },
        {
          name: "Liechi Berry",
          num: 201,
          isNonstandard: undefined
        },
        {
          name: "Life Orb",
          num: 270,
          isNonstandard: undefined
        },
        {
          name: "Light Ball",
          num: 236,
          isNonstandard: undefined
        },
        {
          name: "Light Clay",
          num: 269,
          isNonstandard: undefined
        },
        {
          name: "Loaded Dice",
          num: 1886,
          isNonstandard: undefined
        },
        {
          name: "Lopunnite",
          num: 768,
          isNonstandard: "Past"
        },
        {
          name: "Love Ball",
          num: 496,
          isNonstandard: undefined
        },
        {
          name: "Love Sweet",
          num: 1110,
          isNonstandard: undefined
        },
        {
          name: "Lucarionite",
          num: 673,
          isNonstandard: "Past"
        },
        {
          name: "Lucky Punch",
          num: 256,
          isNonstandard: "Past"
        },
        {
          name: "Lum Berry",
          num: 157,
          isNonstandard: undefined
        },
        {
          name: "Luminous Moss",
          num: 648,
          isNonstandard: undefined
        },
        {
          name: "Lunalium Z",
          num: 922,
          isNonstandard: "Past"
        },
        {
          name: "Lure Ball",
          num: 494,
          isNonstandard: undefined
        },
        {
          name: "Lustrous Orb",
          num: 136,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Luxury Ball",
          num: 11,
          isNonstandard: undefined
        },
        {
          name: "Lycanium Z",
          num: 925,
          isNonstandard: "Past"
        },
        {
          name: "Macho Brace",
          num: 215,
          isNonstandard: undefined
        },
        {
          name: "Magmarizer",
          num: 323,
          isNonstandard: undefined
        },
        {
          name: "Magnet",
          num: 242,
          isNonstandard: undefined
        },
        {
          name: "Mago Berry",
          num: 161,
          isNonstandard: undefined
        },
        {
          name: "Magost Berry",
          num: 176,
          isNonstandard: "Past"
        },
        {
          name: "Mail",
          num: 137,
          isNonstandard: "Past"
        },
        {
          name: "Malicious Armor",
          num: 1861,
          isNonstandard: undefined
        },
        {
          name: "Manectite",
          num: 682,
          isNonstandard: "Past"
        },
        {
          name: "Maranga Berry",
          num: 688,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Marshadium Z",
          num: 802,
          isNonstandard: "Past"
        },
        {
          name: "Master Ball",
          num: 1,
          isNonstandard: undefined
        },
        {
          name: "Mawilite",
          num: 681,
          isNonstandard: "Past"
        },
        {
          name: "Meadow Plate",
          num: 301,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Medichamite",
          num: 665,
          isNonstandard: "Past"
        },
        {
          name: "Mental Herb",
          num: 219,
          isNonstandard: undefined
        },
        {
          name: "Metagrossite",
          num: 758,
          isNonstandard: "Past"
        },
        {
          name: "Metal Coat",
          num: 233,
          isNonstandard: undefined
        },
        {
          name: "Metal Powder",
          num: 257,
          isNonstandard: undefined
        },
        {
          name: "Metronome",
          num: 277,
          isNonstandard: undefined
        },
        {
          name: "Mewnium Z",
          num: 806,
          isNonstandard: "Past"
        },
        {
          name: "Mewtwonite X",
          num: 662,
          isNonstandard: "Past"
        },
        {
          name: "Mewtwonite Y",
          num: 663,
          isNonstandard: "Past"
        },
        {
          name: "Micle Berry",
          num: 209,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Mimikium Z",
          num: 924,
          isNonstandard: "Past"
        },
        {
          name: "Mind Plate",
          num: 307,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Miracle Seed",
          num: 239,
          isNonstandard: undefined
        },
        {
          name: "Mirror Herb",
          num: 1883,
          isNonstandard: undefined
        },
        {
          name: "Misty Seed",
          num: 883,
          isNonstandard: undefined
        },
        {
          name: "Moon Ball",
          num: 498,
          isNonstandard: undefined
        },
        {
          name: "Moon Stone",
          num: 81,
          isNonstandard: undefined
        },
        {
          name: "Muscle Band",
          num: 266,
          isNonstandard: undefined
        },
        {
          name: "Mystic Water",
          num: 243,
          isNonstandard: undefined
        },
        {
          name: "Nanab Berry",
          num: 166,
          isNonstandard: "Past"
        },
        {
          name: "Nest Ball",
          num: 8,
          isNonstandard: undefined
        },
        {
          name: "Net Ball",
          num: 6,
          isNonstandard: undefined
        },
        {
          name: "Never-Melt Ice",
          num: 246,
          isNonstandard: undefined
        },
        {
          name: "Nomel Berry",
          num: 178,
          isNonstandard: "Past"
        },
        {
          name: "Normal Gem",
          num: 564,
          isNonstandard: undefined
        },
        {
          name: "Normalium Z",
          num: 776,
          isNonstandard: "Past"
        },
        {
          name: "Occa Berry",
          num: 184,
          isNonstandard: undefined
        },
        {
          name: "Odd Incense",
          num: 314,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Old Amber",
          num: 103,
          isNonstandard: "Past"
        },
        {
          name: "Oran Berry",
          num: 155,
          isNonstandard: undefined
        },
        {
          name: "Oval Stone",
          num: 110,
          isNonstandard: undefined
        },
        {
          name: "Pamtre Berry",
          num: 180,
          isNonstandard: "Past"
        },
        {
          name: "Park Ball",
          num: 500,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Passho Berry",
          num: 185,
          isNonstandard: undefined
        },
        {
          name: "Payapa Berry",
          num: 193,
          isNonstandard: undefined
        },
        {
          name: "Pecha Berry",
          num: 151,
          isNonstandard: undefined
        },
        {
          name: "Persim Berry",
          num: 156,
          isNonstandard: undefined
        },
        {
          name: "Petaya Berry",
          num: 204,
          isNonstandard: undefined
        },
        {
          name: "Pidgeotite",
          num: 762,
          isNonstandard: "Past"
        },
        {
          name: "Pikanium Z",
          num: 794,
          isNonstandard: "Past"
        },
        {
          name: "Pikashunium Z",
          num: 836,
          isNonstandard: "Past"
        },
        {
          name: "Pinap Berry",
          num: 168,
          isNonstandard: undefined
        },
        {
          name: "Pinsirite",
          num: 671,
          isNonstandard: "Past"
        },
        {
          name: "Pixie Plate",
          num: 644,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Plume Fossil",
          num: 573,
          isNonstandard: "Past"
        },
        {
          name: "Poison Barb",
          num: 245,
          isNonstandard: undefined
        },
        {
          name: "Poison Gem",
          num: 554,
          isNonstandard: "Past"
        },
        {
          name: "Poison Memory",
          num: 906,
          isNonstandard: "Past"
        },
        {
          name: "Poisonium Z",
          num: 783,
          isNonstandard: "Past"
        },
        {
          name: "Poke Ball",
          num: 4,
          isNonstandard: undefined
        },
        {
          name: "Pomeg Berry",
          num: 169,
          isNonstandard: undefined
        },
        {
          name: "Power Anklet",
          num: 293,
          isNonstandard: undefined
        },
        {
          name: "Power Band",
          num: 292,
          isNonstandard: undefined
        },
        {
          name: "Power Belt",
          num: 290,
          isNonstandard: undefined
        },
        {
          name: "Power Bracer",
          num: 289,
          isNonstandard: undefined
        },
        {
          name: "Power Herb",
          num: 271,
          isNonstandard: undefined
        },
        {
          name: "Power Lens",
          num: 291,
          isNonstandard: undefined
        },
        {
          name: "Power Weight",
          num: 294,
          isNonstandard: undefined
        },
        {
          name: "Premier Ball",
          num: 12,
          isNonstandard: undefined
        },
        {
          name: "Primarium Z",
          num: 800,
          isNonstandard: "Past"
        },
        {
          name: "Prism Scale",
          num: 537,
          isNonstandard: "Past"
        },
        {
          name: "Protective Pads",
          num: 880,
          isNonstandard: undefined
        },
        {
          name: "Protector",
          num: 321,
          isNonstandard: "Past"
        },
        {
          name: "Psychic Gem",
          num: 557,
          isNonstandard: "Past"
        },
        {
          name: "Psychic Memory",
          num: 916,
          isNonstandard: "Past"
        },
        {
          name: "Psychic Seed",
          num: 882,
          isNonstandard: undefined
        },
        {
          name: "Psychium Z",
          num: 786,
          isNonstandard: "Past"
        },
        {
          name: "Punching Glove",
          num: 1884,
          isNonstandard: undefined
        },
        {
          name: "Qualot Berry",
          num: 171,
          isNonstandard: undefined
        },
        {
          name: "Quick Ball",
          num: 15,
          isNonstandard: undefined
        },
        {
          name: "Quick Claw",
          num: 217,
          isNonstandard: undefined
        },
        {
          name: "Quick Powder",
          num: 274,
          isNonstandard: undefined
        },
        {
          name: "Rabuta Berry",
          num: 177,
          isNonstandard: "Past"
        },
        {
          name: "Rare Bone",
          num: 106,
          isNonstandard: undefined
        },
        {
          name: "Rawst Berry",
          num: 152,
          isNonstandard: undefined
        },
        {
          name: "Razor Claw",
          num: 326,
          isNonstandard: undefined
        },
        {
          name: "Razor Fang",
          num: 327,
          isNonstandard: "Past"
        },
        {
          name: "Razz Berry",
          num: 164,
          isNonstandard: "Past"
        },
        {
          name: "Reaper Cloth",
          num: 325,
          isNonstandard: "Past"
        },
        {
          name: "Red Card",
          num: 542,
          isNonstandard: undefined
        },
        {
          name: "Red Orb",
          num: 534,
          isNonstandard: "Past"
        },
        {
          name: "Repeat Ball",
          num: 9,
          isNonstandard: undefined
        },
        {
          name: "Ribbon Sweet",
          num: 1115,
          isNonstandard: undefined
        },
        {
          name: "Rindo Berry",
          num: 187,
          isNonstandard: undefined
        },
        {
          name: "Ring Target",
          num: 543,
          isNonstandard: undefined
        },
        {
          name: "Rock Gem",
          num: 559,
          isNonstandard: "Past"
        },
        {
          name: "Rock Incense",
          num: 315,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Rock Memory",
          num: 908,
          isNonstandard: "Past"
        },
        {
          name: "Rockium Z",
          num: 788,
          isNonstandard: "Past"
        },
        {
          name: "Rocky Helmet",
          num: 540,
          isNonstandard: undefined
        },
        {
          name: "Room Service",
          num: 1122,
          isNonstandard: undefined
        },
        {
          name: "Root Fossil",
          num: 99,
          isNonstandard: "Past"
        },
        {
          name: "Rose Incense",
          num: 318,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Roseli Berry",
          num: 686,
          isNonstandard: undefined
        },
        {
          name: "Rowap Berry",
          num: 212,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Rusted Shield",
          num: 1104,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Rusted Sword",
          num: 1103,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Sablenite",
          num: 754,
          isNonstandard: "Past"
        },
        {
          name: "Sachet",
          num: 647,
          isNonstandard: "Past"
        },
        {
          name: "Safari Ball",
          num: 5,
          isNonstandard: undefined
        },
        {
          name: "Safety Goggles",
          num: 650,
          isNonstandard: undefined
        },
        {
          name: "Sail Fossil",
          num: 711,
          isNonstandard: "Past"
        },
        {
          name: "Salac Berry",
          num: 203,
          isNonstandard: undefined
        },
        {
          name: "Salamencite",
          num: 769,
          isNonstandard: "Past"
        },
        {
          name: "Sceptilite",
          num: 753,
          isNonstandard: "Past"
        },
        {
          name: "Scizorite",
          num: 670,
          isNonstandard: "Past"
        },
        {
          name: "Scope Lens",
          num: 232,
          isNonstandard: undefined
        },
        {
          name: "Sea Incense",
          num: 254,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Sharp Beak",
          num: 244,
          isNonstandard: undefined
        },
        {
          name: "Sharpedonite",
          num: 759,
          isNonstandard: "Past"
        },
        {
          name: "Shed Shell",
          num: 295,
          isNonstandard: undefined
        },
        {
          name: "Shell Bell",
          num: 253,
          isNonstandard: undefined
        },
        {
          name: "Shiny Stone",
          num: 107,
          isNonstandard: undefined
        },
        {
          name: "Shock Drive",
          num: 117,
          isNonstandard: "Past"
        },
        {
          name: "Shuca Berry",
          num: 191,
          isNonstandard: undefined
        },
        {
          name: "Silk Scarf",
          num: 251,
          isNonstandard: undefined
        },
        {
          name: "Silver Powder",
          num: 222,
          isNonstandard: undefined
        },
        {
          name: "Sitrus Berry",
          num: 158,
          isNonstandard: undefined
        },
        {
          name: "Skull Fossil",
          num: 105,
          isNonstandard: "Past"
        },
        {
          name: "Sky Plate",
          num: 306,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Slowbronite",
          num: 760,
          isNonstandard: "Past"
        },
        {
          name: "Smooth Rock",
          num: 283,
          isNonstandard: undefined
        },
        {
          name: "Snorlium Z",
          num: 804,
          isNonstandard: "Past"
        },
        {
          name: "Snowball",
          num: 649,
          isNonstandard: undefined
        },
        {
          name: "Soft Sand",
          num: 237,
          isNonstandard: undefined
        },
        {
          name: "Solganium Z",
          num: 921,
          isNonstandard: "Past"
        },
        {
          name: "Soul Dew",
          num: 225,
          isNonstandard: "Past"
        },
        {
          name: "Spell Tag",
          num: 247,
          isNonstandard: undefined
        },
        {
          name: "Spelon Berry",
          num: 179,
          isNonstandard: "Past"
        },
        {
          name: "Splash Plate",
          num: 299,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Spooky Plate",
          num: 310,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Sport Ball",
          num: 499,
          isNonstandard: undefined
        },
        {
          name: "Starf Berry",
          num: 207,
          isNonstandard: undefined
        },
        {
          name: "Star Sweet",
          num: 1114,
          isNonstandard: undefined
        },
        {
          name: "Steelixite",
          num: 761,
          isNonstandard: "Past"
        },
        {
          name: "Steel Gem",
          num: 563,
          isNonstandard: "Past"
        },
        {
          name: "Steel Memory",
          num: 911,
          isNonstandard: "Past"
        },
        {
          name: "Steelium Z",
          num: 792,
          isNonstandard: "Past"
        },
        {
          name: "Stick",
          num: 259,
          isNonstandard: "Past"
        },
        {
          name: "Sticky Barb",
          num: 288,
          isNonstandard: undefined
        },
        {
          name: "Stone Plate",
          num: 309,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Strawberry Sweet",
          num: 1109,
          isNonstandard: undefined
        },
        {
          name: "Sun Stone",
          num: 80,
          isNonstandard: undefined
        },
        {
          name: "Swampertite",
          num: 752,
          isNonstandard: "Past"
        },
        {
          name: "Sweet Apple",
          num: 1116,
          isNonstandard: undefined
        },
        {
          name: "Tamato Berry",
          num: 174,
          isNonstandard: undefined
        },
        {
          name: "Tanga Berry",
          num: 194,
          isNonstandard: undefined
        },
        {
          name: "Tapunium Z",
          num: 801,
          isNonstandard: "Past"
        },
        {
          name: "Tart Apple",
          num: 1117,
          isNonstandard: undefined
        },
        {
          name: "Terrain Extender",
          num: 879,
          isNonstandard: undefined
        },
        {
          name: "Thick Club",
          num: 258,
          isNonstandard: "Past"
        },
        {
          name: "Throat Spray",
          num: 1118,
          isNonstandard: undefined
        },
        {
          name: "Thunder Stone",
          num: 83,
          isNonstandard: undefined
        },
        {
          name: "Timer Ball",
          num: 10,
          isNonstandard: undefined
        },
        {
          name: "Toxic Orb",
          num: 272,
          isNonstandard: undefined
        },
        {
          name: "Toxic Plate",
          num: 304,
          isNonstandard: "Unobtainable"
        },
        {
          name: "TR00",
          num: 1130,
          isNonstandard: "Past"
        },
        {
          name: "TR01",
          num: 1131,
          isNonstandard: "Past"
        },
        {
          name: "TR02",
          num: 1132,
          isNonstandard: "Past"
        },
        {
          name: "TR03",
          num: 1133,
          isNonstandard: "Past"
        },
        {
          name: "TR04",
          num: 1134,
          isNonstandard: "Past"
        },
        {
          name: "TR05",
          num: 1135,
          isNonstandard: "Past"
        },
        {
          name: "TR06",
          num: 1136,
          isNonstandard: "Past"
        },
        {
          name: "TR07",
          num: 1137,
          isNonstandard: "Past"
        },
        {
          name: "TR08",
          num: 1138,
          isNonstandard: "Past"
        },
        {
          name: "TR09",
          num: 1139,
          isNonstandard: "Past"
        },
        {
          name: "TR10",
          num: 1140,
          isNonstandard: "Past"
        },
        {
          name: "TR11",
          num: 1141,
          isNonstandard: "Past"
        },
        {
          name: "TR12",
          num: 1142,
          isNonstandard: "Past"
        },
        {
          name: "TR13",
          num: 1143,
          isNonstandard: "Past"
        },
        {
          name: "TR14",
          num: 1144,
          isNonstandard: "Past"
        },
        {
          name: "TR15",
          num: 1145,
          isNonstandard: "Past"
        },
        {
          name: "TR16",
          num: 1146,
          isNonstandard: "Past"
        },
        {
          name: "TR17",
          num: 1147,
          isNonstandard: "Past"
        },
        {
          name: "TR18",
          num: 1148,
          isNonstandard: "Past"
        },
        {
          name: "TR19",
          num: 1149,
          isNonstandard: "Past"
        },
        {
          name: "TR20",
          num: 1150,
          isNonstandard: "Past"
        },
        {
          name: "TR21",
          num: 1151,
          isNonstandard: "Past"
        },
        {
          name: "TR22",
          num: 1152,
          isNonstandard: "Past"
        },
        {
          name: "TR23",
          num: 1153,
          isNonstandard: "Past"
        },
        {
          name: "TR24",
          num: 1154,
          isNonstandard: "Past"
        },
        {
          name: "TR25",
          num: 1155,
          isNonstandard: "Past"
        },
        {
          name: "TR26",
          num: 1156,
          isNonstandard: "Past"
        },
        {
          name: "TR27",
          num: 1157,
          isNonstandard: "Past"
        },
        {
          name: "TR28",
          num: 1158,
          isNonstandard: "Past"
        },
        {
          name: "TR29",
          num: 1159,
          isNonstandard: "Past"
        },
        {
          name: "TR30",
          num: 1160,
          isNonstandard: "Past"
        },
        {
          name: "TR31",
          num: 1161,
          isNonstandard: "Past"
        },
        {
          name: "TR32",
          num: 1162,
          isNonstandard: "Past"
        },
        {
          name: "TR33",
          num: 1163,
          isNonstandard: "Past"
        },
        {
          name: "TR34",
          num: 1164,
          isNonstandard: "Past"
        },
        {
          name: "TR35",
          num: 1165,
          isNonstandard: "Past"
        },
        {
          name: "TR36",
          num: 1166,
          isNonstandard: "Past"
        },
        {
          name: "TR37",
          num: 1167,
          isNonstandard: "Past"
        },
        {
          name: "TR38",
          num: 1168,
          isNonstandard: "Past"
        },
        {
          name: "TR39",
          num: 1169,
          isNonstandard: "Past"
        },
        {
          name: "TR40",
          num: 1170,
          isNonstandard: "Past"
        },
        {
          name: "TR41",
          num: 1171,
          isNonstandard: "Past"
        },
        {
          name: "TR42",
          num: 1172,
          isNonstandard: "Past"
        },
        {
          name: "TR43",
          num: 1173,
          isNonstandard: "Past"
        },
        {
          name: "TR44",
          num: 1174,
          isNonstandard: "Past"
        },
        {
          name: "TR45",
          num: 1175,
          isNonstandard: "Past"
        },
        {
          name: "TR46",
          num: 1176,
          isNonstandard: "Past"
        },
        {
          name: "TR47",
          num: 1177,
          isNonstandard: "Past"
        },
        {
          name: "TR48",
          num: 1178,
          isNonstandard: "Past"
        },
        {
          name: "TR49",
          num: 1179,
          isNonstandard: "Past"
        },
        {
          name: "TR50",
          num: 1180,
          isNonstandard: "Past"
        },
        {
          name: "TR51",
          num: 1181,
          isNonstandard: "Past"
        },
        {
          name: "TR52",
          num: 1182,
          isNonstandard: "Past"
        },
        {
          name: "TR53",
          num: 1183,
          isNonstandard: "Past"
        },
        {
          name: "TR54",
          num: 1184,
          isNonstandard: "Past"
        },
        {
          name: "TR55",
          num: 1185,
          isNonstandard: "Past"
        },
        {
          name: "TR56",
          num: 1186,
          isNonstandard: "Past"
        },
        {
          name: "TR57",
          num: 1187,
          isNonstandard: "Past"
        },
        {
          name: "TR58",
          num: 1188,
          isNonstandard: "Past"
        },
        {
          name: "TR59",
          num: 1189,
          isNonstandard: "Past"
        },
        {
          name: "TR60",
          num: 1190,
          isNonstandard: "Past"
        },
        {
          name: "TR61",
          num: 1191,
          isNonstandard: "Past"
        },
        {
          name: "TR62",
          num: 1192,
          isNonstandard: "Past"
        },
        {
          name: "TR63",
          num: 1193,
          isNonstandard: "Past"
        },
        {
          name: "TR64",
          num: 1194,
          isNonstandard: "Past"
        },
        {
          name: "TR65",
          num: 1195,
          isNonstandard: "Past"
        },
        {
          name: "TR66",
          num: 1196,
          isNonstandard: "Past"
        },
        {
          name: "TR67",
          num: 1197,
          isNonstandard: "Past"
        },
        {
          name: "TR68",
          num: 1198,
          isNonstandard: "Past"
        },
        {
          name: "TR69",
          num: 1199,
          isNonstandard: "Past"
        },
        {
          name: "TR70",
          num: 1200,
          isNonstandard: "Past"
        },
        {
          name: "TR71",
          num: 1201,
          isNonstandard: "Past"
        },
        {
          name: "TR72",
          num: 1202,
          isNonstandard: "Past"
        },
        {
          name: "TR73",
          num: 1203,
          isNonstandard: "Past"
        },
        {
          name: "TR74",
          num: 1204,
          isNonstandard: "Past"
        },
        {
          name: "TR75",
          num: 1205,
          isNonstandard: "Past"
        },
        {
          name: "TR76",
          num: 1206,
          isNonstandard: "Past"
        },
        {
          name: "TR77",
          num: 1207,
          isNonstandard: "Past"
        },
        {
          name: "TR78",
          num: 1208,
          isNonstandard: "Past"
        },
        {
          name: "TR79",
          num: 1209,
          isNonstandard: "Past"
        },
        {
          name: "TR80",
          num: 1210,
          isNonstandard: "Past"
        },
        {
          name: "TR81",
          num: 1211,
          isNonstandard: "Past"
        },
        {
          name: "TR82",
          num: 1212,
          isNonstandard: "Past"
        },
        {
          name: "TR83",
          num: 1213,
          isNonstandard: "Past"
        },
        {
          name: "TR84",
          num: 1214,
          isNonstandard: "Past"
        },
        {
          name: "TR85",
          num: 1215,
          isNonstandard: "Past"
        },
        {
          name: "TR86",
          num: 1216,
          isNonstandard: "Past"
        },
        {
          name: "TR87",
          num: 1217,
          isNonstandard: "Past"
        },
        {
          name: "TR88",
          num: 1218,
          isNonstandard: "Past"
        },
        {
          name: "TR89",
          num: 1219,
          isNonstandard: "Past"
        },
        {
          name: "TR90",
          num: 1220,
          isNonstandard: "Past"
        },
        {
          name: "TR91",
          num: 1221,
          isNonstandard: "Past"
        },
        {
          name: "TR92",
          num: 1222,
          isNonstandard: "Past"
        },
        {
          name: "TR93",
          num: 1223,
          isNonstandard: "Past"
        },
        {
          name: "TR94",
          num: 1224,
          isNonstandard: "Past"
        },
        {
          name: "TR95",
          num: 1225,
          isNonstandard: "Past"
        },
        {
          name: "TR96",
          num: 1226,
          isNonstandard: "Past"
        },
        {
          name: "TR97",
          num: 1227,
          isNonstandard: "Past"
        },
        {
          name: "TR98",
          num: 1228,
          isNonstandard: "Past"
        },
        {
          name: "TR99",
          num: 1229,
          isNonstandard: "Past"
        },
        {
          name: "Twisted Spoon",
          num: 248,
          isNonstandard: undefined
        },
        {
          name: "Tyranitarite",
          num: 669,
          isNonstandard: "Past"
        },
        {
          name: "Ultra Ball",
          num: 2,
          isNonstandard: undefined
        },
        {
          name: "Ultranecrozium Z",
          num: 923,
          isNonstandard: "Past"
        },
        {
          name: "Up-Grade",
          num: 252,
          isNonstandard: "Past"
        },
        {
          name: "Utility Umbrella",
          num: 1123,
          isNonstandard: undefined
        },
        {
          name: "Venusaurite",
          num: 659,
          isNonstandard: "Past"
        },
        {
          name: "Wacan Berry",
          num: 186,
          isNonstandard: undefined
        },
        {
          name: "Water Gem",
          num: 549,
          isNonstandard: "Past"
        },
        {
          name: "Water Memory",
          num: 913,
          isNonstandard: "Past"
        },
        {
          name: "Water Stone",
          num: 84,
          isNonstandard: undefined
        },
        {
          name: "Waterium Z",
          num: 778,
          isNonstandard: "Past"
        },
        {
          name: "Watmel Berry",
          num: 181,
          isNonstandard: "Past"
        },
        {
          name: "Wave Incense",
          num: 317,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Weakness Policy",
          num: 639,
          isNonstandard: undefined
        },
        {
          name: "Wepear Berry",
          num: 167,
          isNonstandard: "Past"
        },
        {
          name: "Whipped Dream",
          num: 646,
          isNonstandard: "Past"
        },
        {
          name: "White Herb",
          num: 214,
          isNonstandard: undefined
        },
        {
          name: "Wide Lens",
          num: 265,
          isNonstandard: undefined
        },
        {
          name: "Wiki Berry",
          num: 160,
          isNonstandard: undefined
        },
        {
          name: "Wise Glasses",
          num: 267,
          isNonstandard: undefined
        },
        {
          name: "Yache Berry",
          num: 188,
          isNonstandard: undefined
        },
        {
          name: "Zap Plate",
          num: 300,
          isNonstandard: "Unobtainable"
        },
        {
          name: "Zoom Lens",
          num: 276,
          isNonstandard: undefined
        },
        {
          name: "Berserk Gene",
          num: 0,
          isNonstandard: "Past"
        },
        {
          name: "Berry",
          num: 155,
          isNonstandard: "Past"
        },
        {
          name: "Bitter Berry",
          num: 156,
          isNonstandard: "Past"
        },
        {
          name: "Burnt Berry",
          num: 153,
          isNonstandard: "Past"
        },
        {
          name: "Gold Berry",
          num: 158,
          isNonstandard: "Past"
        },
        {
          name: "Ice Berry",
          num: 152,
          isNonstandard: "Past"
        },
        {
          name: "Mint Berry",
          num: 150,
          isNonstandard: "Past"
        },
        {
          name: "Miracle Berry",
          num: 157,
          isNonstandard: "Past"
        },
        {
          name: "Mystery Berry",
          num: 154,
          isNonstandard: "Past"
        },
        {
          name: "Pink Bow",
          num: 251,
          isNonstandard: "Past"
        },
        {
          name: "Polkadot Bow",
          num: 251,
          isNonstandard: "Past"
        },
        {
          name: "PRZ Cure Berry",
          num: 149,
          isNonstandard: "Past"
        },
        {
          name: "PSN Cure Berry",
          num: 151,
          isNonstandard: "Past"
        },
      ],
      Types: [
        'Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel',
        'Water'
      ],
      Status: {
        'Paralyzed': 'par',
        'Poisoned': 'psn',
        'Badly Poisoned': 'tox',
        'Burned': 'brn',
        'Asleep': 'slp',
        'Frozen': 'frz'
      },
      Terrain: {
        'Electric' : '电气场地',
        'Grassy': '青草场地',
        'Misty': '薄雾场地',
        'Psychic': '超能场地'
      },
      Weather: {
        'Sun': '大晴天',
        'Rain': '下雨',
        'Sand': '沙暴',
        'Snow': '下雪'
      },
      Moves: [
        {
          name: "10,000,000 Volt Thunderbolt",
          num: 719,
          isNonstandard: "Past",
        },
        {
          name: "Absorb",
          num: 71,
          isNonstandard: undefined,
        },
        {
          name: "Accelerock",
          num: 709,
          isNonstandard: undefined,
        },
        {
          name: "Acid",
          num: 51,
          isNonstandard: undefined,
        },
        {
          name: "Acid Armor",
          num: 151,
          isNonstandard: undefined,
        },
        {
          name: "Acid Downpour",
          num: 628,
          isNonstandard: "Past",
        },
        {
          name: "Acid Spray",
          num: 491,
          isNonstandard: undefined,
        },
        {
          name: "Acrobatics",
          num: 512,
          isNonstandard: undefined,
        },
        {
          name: "Acupressure",
          num: 367,
          isNonstandard: undefined,
        },
        {
          name: "Aerial Ace",
          num: 332,
          isNonstandard: undefined,
        },
        {
          name: "Aeroblast",
          num: 177,
          isNonstandard: "Past",
        },
        {
          name: "After You",
          num: 495,
          isNonstandard: undefined,
        },
        {
          name: "Agility",
          num: 97,
          isNonstandard: undefined,
        },
        {
          name: "Air Cutter",
          num: 314,
          isNonstandard: undefined,
        },
        {
          name: "Air Slash",
          num: 403,
          isNonstandard: undefined,
        },
        {
          name: "All-Out Pummeling",
          num: 624,
          isNonstandard: "Past",
        },
        {
          name: "Ally Switch",
          num: 502,
          isNonstandard: undefined,
        },
        {
          name: "Amnesia",
          num: 133,
          isNonstandard: undefined,
        },
        {
          name: "Anchor Shot",
          num: 677,
          isNonstandard: "Past",
        },
        {
          name: "Ancient Power",
          num: 246,
          isNonstandard: undefined,
        },
        {
          name: "Apple Acid",
          num: 787,
          isNonstandard: undefined,
        },
        {
          name: "Aqua Cutter",
          num: 895,
          isNonstandard: undefined,
        },
        {
          name: "Aqua Jet",
          num: 453,
          isNonstandard: undefined,
        },
        {
          name: "Aqua Ring",
          num: 392,
          isNonstandard: undefined,
        },
        {
          name: "Aqua Step",
          num: 872,
          isNonstandard: undefined,
        },
        {
          name: "Aqua Tail",
          num: 401,
          isNonstandard: undefined,
        },
        {
          name: "Armor Cannon",
          num: 890,
          isNonstandard: undefined,
        },
        {
          name: "Arm Thrust",
          num: 292,
          isNonstandard: undefined,
        },
        {
          name: "Aromatherapy",
          num: 312,
          isNonstandard: "Past",
        },
        {
          name: "Aromatic Mist",
          num: 597,
          isNonstandard: undefined,
        },
        {
          name: "Assist",
          num: 274,
          isNonstandard: "Past",
        },
        {
          name: "Assurance",
          num: 372,
          isNonstandard: undefined,
        },
        {
          name: "Astonish",
          num: 310,
          isNonstandard: undefined,
        },
        {
          name: "Astral Barrage",
          num: 825,
          isNonstandard: undefined,
        },
        {
          name: "Attack Order",
          num: 454,
          isNonstandard: undefined,
        },
        {
          name: "Attract",
          num: 213,
          isNonstandard: undefined,
        },
        {
          name: "Aura Sphere",
          num: 396,
          isNonstandard: undefined,
        },
        {
          name: "Aura Wheel",
          num: 783,
          isNonstandard: "Past",
        },
        {
          name: "Aurora Beam",
          num: 62,
          isNonstandard: undefined,
        },
        {
          name: "Aurora Veil",
          num: 694,
          isNonstandard: undefined,
        },
        {
          name: "Autotomize",
          num: 475,
          isNonstandard: "Past",
        },
        {
          name: "Avalanche",
          num: 419,
          isNonstandard: undefined,
        },
        {
          name: "Axe Kick",
          num: 853,
          isNonstandard: undefined,
        },
        {
          name: "Baby-Doll Eyes",
          num: 608,
          isNonstandard: undefined,
        },
        {
          name: "Baddy Bad",
          num: 737,
          isNonstandard: "LGPE",
        },
        {
          name: "Baneful Bunker",
          num: 661,
          isNonstandard: undefined,
        },
        {
          name: "Barb Barrage",
          num: 839,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Barrage",
          num: 140,
          isNonstandard: "Past",
        },
        {
          name: "Barrier",
          num: 112,
          isNonstandard: "Past",
        },
        {
          name: "Baton Pass",
          num: 226,
          isNonstandard: undefined,
        },
        {
          name: "Beak Blast",
          num: 690,
          isNonstandard: "Past",
        },
        {
          name: "Beat Up",
          num: 251,
          isNonstandard: undefined,
        },
        {
          name: "Behemoth Bash",
          num: 782,
          isNonstandard: undefined,
        },
        {
          name: "Behemoth Blade",
          num: 781,
          isNonstandard: undefined,
        },
        {
          name: "Belch",
          num: 562,
          isNonstandard: undefined,
        },
        {
          name: "Belly Drum",
          num: 187,
          isNonstandard: undefined,
        },
        {
          name: "Bestow",
          num: 516,
          isNonstandard: "Past",
        },
        {
          name: "Bide",
          num: 117,
          isNonstandard: "Past",
        },
        {
          name: "Bind",
          num: 20,
          isNonstandard: undefined,
        },
        {
          name: "Bite",
          num: 44,
          isNonstandard: undefined,
        },
        {
          name: "Bitter Blade",
          num: 891,
          isNonstandard: undefined,
        },
        {
          name: "Bitter Malice",
          num: 841,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Black Hole Eclipse",
          num: 654,
          isNonstandard: "Past",
        },
        {
          name: "Blast Burn",
          num: 307,
          isNonstandard: undefined,
        },
        {
          name: "Blaze Kick",
          num: 299,
          isNonstandard: undefined,
        },
        {
          name: "Blazing Torque",
          num: 896,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Bleakwind Storm",
          num: 846,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Blizzard",
          num: 59,
          isNonstandard: undefined,
        },
        {
          name: "Block",
          num: 335,
          isNonstandard: undefined,
        },
        {
          name: "Bloom Doom",
          num: 644,
          isNonstandard: "Past",
        },
        {
          name: "Blue Flare",
          num: 551,
          isNonstandard: "Past",
        },
        {
          name: "Body Press",
          num: 776,
          isNonstandard: undefined,
        },
        {
          name: "Body Slam",
          num: 34,
          isNonstandard: undefined,
        },
        {
          name: "Bolt Beak",
          num: 754,
          isNonstandard: "Past",
        },
        {
          name: "Bolt Strike",
          num: 550,
          isNonstandard: "Past",
        },
        {
          name: "Bone Club",
          num: 125,
          isNonstandard: "Past",
        },
        {
          name: "Bonemerang",
          num: 155,
          isNonstandard: "Past",
        },
        {
          name: "Bone Rush",
          num: 198,
          isNonstandard: undefined,
        },
        {
          name: "Boomburst",
          num: 586,
          isNonstandard: undefined,
        },
        {
          name: "Bounce",
          num: 340,
          isNonstandard: undefined,
        },
        {
          name: "Bouncy Bubble",
          num: 733,
          isNonstandard: "LGPE",
        },
        {
          name: "Branch Poke",
          num: 785,
          isNonstandard: undefined,
        },
        {
          name: "Brave Bird",
          num: 413,
          isNonstandard: undefined,
        },
        {
          name: "Breaking Swipe",
          num: 784,
          isNonstandard: undefined,
        },
        {
          name: "Breakneck Blitz",
          num: 622,
          isNonstandard: "Past",
        },
        {
          name: "Brick Break",
          num: 280,
          isNonstandard: undefined,
        },
        {
          name: "Brine",
          num: 362,
          isNonstandard: undefined,
        },
        {
          name: "Brutal Swing",
          num: 693,
          isNonstandard: undefined,
        },
        {
          name: "Bubble",
          num: 145,
          isNonstandard: "Past",
        },
        {
          name: "Bubble Beam",
          num: 61,
          isNonstandard: undefined,
        },
        {
          name: "Bug Bite",
          num: 450,
          isNonstandard: undefined,
        },
        {
          name: "Bug Buzz",
          num: 405,
          isNonstandard: undefined,
        },
        {
          name: "Bulk Up",
          num: 339,
          isNonstandard: undefined,
        },
        {
          name: "Bulldoze",
          num: 523,
          isNonstandard: undefined,
        },
        {
          name: "Bullet Punch",
          num: 418,
          isNonstandard: undefined,
        },
        {
          name: "Bullet Seed",
          num: 331,
          isNonstandard: undefined,
        },
        {
          name: "Burning Jealousy",
          num: 807,
          isNonstandard: undefined,
        },
        {
          name: "Burn Up",
          num: 682,
          isNonstandard: undefined,
        },
        {
          name: "Buzzy Buzz",
          num: 734,
          isNonstandard: "LGPE",
        },
        {
          name: "Calm Mind",
          num: 347,
          isNonstandard: undefined,
        },
        {
          name: "Camouflage",
          num: 293,
          isNonstandard: "Past",
        },
        {
          name: "Captivate",
          num: 445,
          isNonstandard: "Past",
        },
        {
          name: "Catastropika",
          num: 658,
          isNonstandard: "Past",
        },
        {
          name: "Ceaseless Edge",
          num: 845,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Celebrate",
          num: 606,
          isNonstandard: undefined,
        },
        {
          name: "Charge",
          num: 268,
          isNonstandard: undefined,
        },
        {
          name: "Charge Beam",
          num: 451,
          isNonstandard: undefined,
        },
        {
          name: "Charm",
          num: 204,
          isNonstandard: undefined,
        },
        {
          name: "Chatter",
          num: 448,
          isNonstandard: "Past",
        },
        {
          name: "Chilling Water",
          num: 886,
          isNonstandard: undefined,
        },
        {
          name: "Chilly Reception",
          num: 881,
          isNonstandard: undefined,
        },
        {
          name: "Chip Away",
          num: 498,
          isNonstandard: "Past",
        },
        {
          name: "Chloroblast",
          num: 835,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Circle Throw",
          num: 509,
          isNonstandard: undefined,
        },
        {
          name: "Clamp",
          num: 128,
          isNonstandard: "Past",
        },
        {
          name: "Clanging Scales",
          num: 691,
          isNonstandard: "Past",
        },
        {
          name: "Clangorous Soul",
          num: 775,
          isNonstandard: "Past",
        },
        {
          name: "Clangorous Soulblaze",
          num: 728,
          isNonstandard: "Past",
        },
        {
          name: "Clear Smog",
          num: 499,
          isNonstandard: undefined,
        },
        {
          name: "Close Combat",
          num: 370,
          isNonstandard: undefined,
        },
        {
          name: "Coaching",
          num: 811,
          isNonstandard: undefined,
        },
        {
          name: "Coil",
          num: 489,
          isNonstandard: undefined,
        },
        {
          name: "Collision Course",
          num: 878,
          isNonstandard: undefined,
        },
        {
          name: "Combat Torque",
          num: 899,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Comet Punch",
          num: 4,
          isNonstandard: "Past",
        },
        {
          name: "Comeuppance",
          num: 894,
          isNonstandard: undefined,
        },
        {
          name: "Confide",
          num: 590,
          isNonstandard: undefined,
        },
        {
          name: "Confuse Ray",
          num: 109,
          isNonstandard: undefined,
        },
        {
          name: "Confusion",
          num: 93,
          isNonstandard: undefined,
        },
        {
          name: "Constrict",
          num: 132,
          isNonstandard: "Past",
        },
        {
          name: "Continental Crush",
          num: 632,
          isNonstandard: "Past",
        },
        {
          name: "Conversion",
          num: 160,
          isNonstandard: "Past",
        },
        {
          name: "Conversion 2",
          num: 176,
          isNonstandard: "Past",
        },
        {
          name: "Copycat",
          num: 383,
          isNonstandard: undefined,
        },
        {
          name: "Core Enforcer",
          num: 687,
          isNonstandard: "Past",
        },
        {
          name: "Corkscrew Crash",
          num: 638,
          isNonstandard: "Past",
        },
        {
          name: "Corrosive Gas",
          num: 810,
          isNonstandard: undefined,
        },
        {
          name: "Cosmic Power",
          num: 322,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Cotton Guard",
          num: 538,
          isNonstandard: undefined,
        },
        {
          name: "Cotton Spore",
          num: 178,
          isNonstandard: undefined,
        },
        {
          name: "Counter",
          num: 68,
          isNonstandard: undefined,
        },
        {
          name: "Court Change",
          num: 756,
          isNonstandard: undefined,
        },
        {
          name: "Covet",
          num: 343,
          isNonstandard: undefined,
        },
        {
          name: "Crabhammer",
          num: 152,
          isNonstandard: undefined,
        },
        {
          name: "Crafty Shield",
          num: 578,
          isNonstandard: "Past",
        },
        {
          name: "Cross Chop",
          num: 238,
          isNonstandard: undefined,
        },
        {
          name: "Cross Poison",
          num: 440,
          isNonstandard: undefined,
        },
        {
          name: "Crunch",
          num: 242,
          isNonstandard: undefined,
        },
        {
          name: "Crush Claw",
          num: 306,
          isNonstandard: undefined,
        },
        {
          name: "Crush Grip",
          num: 462,
          isNonstandard: "Past",
        },
        {
          name: "Curse",
          num: 174,
          isNonstandard: undefined,
        },
        {
          name: "Cut",
          num: 15,
          isNonstandard: undefined,
        },
        {
          name: "Darkest Lariat",
          num: 663,
          isNonstandard: undefined,
        },
        {
          name: "Dark Pulse",
          num: 399,
          isNonstandard: undefined,
        },
        {
          name: "Dark Void",
          num: 464,
          isNonstandard: "Past",
        },
        {
          name: "Dazzling Gleam",
          num: 605,
          isNonstandard: undefined,
        },
        {
          name: "Decorate",
          num: 777,
          isNonstandard: "Past",
        },
        {
          name: "Defend Order",
          num: 455,
          isNonstandard: undefined,
        },
        {
          name: "Defense Curl",
          num: 111,
          isNonstandard: undefined,
        },
        {
          name: "Defog",
          num: 432,
          isNonstandard: undefined,
        },
        {
          name: "Destiny Bond",
          num: 194,
          isNonstandard: undefined,
        },
        {
          name: "Detect",
          num: 197,
          isNonstandard: undefined,
        },
        {
          name: "Devastating Drake",
          num: 652,
          isNonstandard: "Past",
        },
        {
          name: "Diamond Storm",
          num: 591,
          isNonstandard: undefined,
        },
        {
          name: "Dig",
          num: 91,
          isNonstandard: undefined,
        },
        {
          name: "Disable",
          num: 50,
          isNonstandard: undefined,
        },
        {
          name: "Disarming Voice",
          num: 574,
          isNonstandard: undefined,
        },
        {
          name: "Discharge",
          num: 435,
          isNonstandard: undefined,
        },
        {
          name: "Dire Claw",
          num: 827,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Dive",
          num: 291,
          isNonstandard: undefined,
        },
        {
          name: "Dizzy Punch",
          num: 146,
          isNonstandard: "Past",
        },
        {
          name: "Doodle",
          num: 867,
          isNonstandard: undefined,
        },
        {
          name: "Doom Desire",
          num: 353,
          isNonstandard: "Past",
        },
        {
          name: "Double-Edge",
          num: 38,
          isNonstandard: undefined,
        },
        {
          name: "Double Hit",
          num: 458,
          isNonstandard: undefined,
        },
        {
          name: "Double Iron Bash",
          num: 742,
          isNonstandard: "Past",
        },
        {
          name: "Double Kick",
          num: 24,
          isNonstandard: undefined,
        },
        {
          name: "Double Shock",
          num: 892,
          isNonstandard: undefined,
        },
        {
          name: "Double Slap",
          num: 3,
          isNonstandard: "Past",
        },
        {
          name: "Double Team",
          num: 104,
          isNonstandard: undefined,
        },
        {
          name: "Draco Meteor",
          num: 434,
          isNonstandard: undefined,
        },
        {
          name: "Dragon Ascent",
          num: 620,
          isNonstandard: undefined,
        },
        {
          name: "Dragon Breath",
          num: 225,
          isNonstandard: undefined,
        },
        {
          name: "Dragon Claw",
          num: 337,
          isNonstandard: undefined,
        },
        {
          name: "Dragon Dance",
          num: 349,
          isNonstandard: undefined,
        },
        {
          name: "Dragon Darts",
          num: 751,
          isNonstandard: undefined,
        },
        {
          name: "Dragon Energy",
          num: 820,
          isNonstandard: undefined,
        },
        {
          name: "Dragon Hammer",
          num: 692,
          isNonstandard: "Past",
        },
        {
          name: "Dragon Pulse",
          num: 406,
          isNonstandard: undefined,
        },
        {
          name: "Dragon Rage",
          num: 82,
          isNonstandard: "Past",
        },
        {
          name: "Dragon Rush",
          num: 407,
          isNonstandard: undefined,
        },
        {
          name: "Dragon Tail",
          num: 525,
          isNonstandard: undefined,
        },
        {
          name: "Draining Kiss",
          num: 577,
          isNonstandard: undefined,
        },
        {
          name: "Drain Punch",
          num: 409,
          isNonstandard: undefined,
        },
        {
          name: "Dream Eater",
          num: 138,
          isNonstandard: undefined,
        },
        {
          name: "Drill Peck",
          num: 65,
          isNonstandard: undefined,
        },
        {
          name: "Drill Run",
          num: 529,
          isNonstandard: undefined,
        },
        {
          name: "Drum Beating",
          num: 778,
          isNonstandard: undefined,
        },
        {
          name: "Dual Chop",
          num: 530,
          isNonstandard: "Past",
        },
        {
          name: "Dual Wingbeat",
          num: 814,
          isNonstandard: undefined,
        },
        {
          name: "Dynamax Cannon",
          num: 744,
          isNonstandard: undefined,
        },
        {
          name: "Dynamic Punch",
          num: 223,
          isNonstandard: undefined,
        },
        {
          name: "Earth Power",
          num: 414,
          isNonstandard: undefined,
        },
        {
          name: "Earthquake",
          num: 89,
          isNonstandard: undefined,
        },
        {
          name: "Echoed Voice",
          num: 497,
          isNonstandard: undefined,
        },
        {
          name: "Eerie Impulse",
          num: 598,
          isNonstandard: undefined,
        },
        {
          name: "Eerie Spell",
          num: 826,
          isNonstandard: undefined,
        },
        {
          name: "Egg Bomb",
          num: 121,
          isNonstandard: "Past",
        },
        {
          name: "Electric Terrain",
          num: 604,
          isNonstandard: undefined,
        },
        {
          name: "Electrify",
          num: 582,
          isNonstandard: "Past",
        },
        {
          name: "Electro Ball",
          num: 486,
          isNonstandard: undefined,
        },
        {
          name: "Electro Drift",
          num: 879,
          isNonstandard: undefined,
        },
        {
          name: "Electroweb",
          num: 527,
          isNonstandard: undefined,
        },
        {
          name: "Embargo",
          num: 373,
          isNonstandard: "Past",
        },
        {
          name: "Ember",
          num: 52,
          isNonstandard: undefined,
        },
        {
          name: "Encore",
          num: 227,
          isNonstandard: undefined,
        },
        {
          name: "Endeavor",
          num: 283,
          isNonstandard: undefined,
        },
        {
          name: "Endure",
          num: 203,
          isNonstandard: undefined,
        },
        {
          name: "Energy Ball",
          num: 412,
          isNonstandard: undefined,
        },
        {
          name: "Entrainment",
          num: 494,
          isNonstandard: undefined,
        },
        {
          name: "Eruption",
          num: 284,
          isNonstandard: undefined,
        },
        {
          name: "Esper Wing",
          num: 840,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Eternabeam",
          num: 795,
          isNonstandard: "Past",
        },
        {
          name: "Expanding Force",
          num: 797,
          isNonstandard: undefined,
        },
        {
          name: "Explosion",
          num: 153,
          isNonstandard: undefined,
        },
        {
          name: "Extrasensory",
          num: 326,
          isNonstandard: undefined,
        },
        {
          name: "Extreme Evoboost",
          num: 702,
          isNonstandard: "Past",
        },
        {
          name: "Extreme Speed",
          num: 245,
          isNonstandard: undefined,
        },
        {
          name: "Facade",
          num: 263,
          isNonstandard: undefined,
        },
        {
          name: "Fairy Lock",
          num: 587,
          isNonstandard: undefined,
        },
        {
          name: "Fairy Wind",
          num: 584,
          isNonstandard: undefined,
        },
        {
          name: "Fake Out",
          num: 252,
          isNonstandard: undefined,
        },
        {
          name: "Fake Tears",
          num: 313,
          isNonstandard: undefined,
        },
        {
          name: "False Surrender",
          num: 793,
          isNonstandard: undefined,
        },
        {
          name: "False Swipe",
          num: 206,
          isNonstandard: undefined,
        },
        {
          name: "Feather Dance",
          num: 297,
          isNonstandard: undefined,
        },
        {
          name: "Feint",
          num: 364,
          isNonstandard: undefined,
        },
        {
          name: "Feint Attack",
          num: 185,
          isNonstandard: "Past",
        },
        {
          name: "Fell Stinger",
          num: 565,
          isNonstandard: undefined,
        },
        {
          name: "Fiery Dance",
          num: 552,
          isNonstandard: undefined,
        },
        {
          name: "Fiery Wrath",
          num: 822,
          isNonstandard: undefined,
        },
        {
          name: "Fillet Away",
          num: 868,
          isNonstandard: undefined,
        },
        {
          name: "Final Gambit",
          num: 515,
          isNonstandard: undefined,
        },
        {
          name: "Fire Blast",
          num: 126,
          isNonstandard: undefined,
        },
        {
          name: "Fire Fang",
          num: 424,
          isNonstandard: undefined,
        },
        {
          name: "Fire Lash",
          num: 680,
          isNonstandard: undefined,
        },
        {
          name: "Fire Pledge",
          num: 519,
          isNonstandard: undefined,
        },
        {
          name: "Fire Punch",
          num: 7,
          isNonstandard: undefined,
        },
        {
          name: "Fire Spin",
          num: 83,
          isNonstandard: undefined,
        },
        {
          name: "First Impression",
          num: 660,
          isNonstandard: undefined,
        },
        {
          name: "Fishious Rend",
          num: 755,
          isNonstandard: "Past",
        },
        {
          name: "Fissure",
          num: 90,
          isNonstandard: undefined,
        },
        {
          name: "Flail",
          num: 175,
          isNonstandard: undefined,
        },
        {
          name: "Flame Burst",
          num: 481,
          isNonstandard: "Past",
        },
        {
          name: "Flame Charge",
          num: 488,
          isNonstandard: undefined,
        },
        {
          name: "Flame Wheel",
          num: 172,
          isNonstandard: undefined,
        },
        {
          name: "Flamethrower",
          num: 53,
          isNonstandard: undefined,
        },
        {
          name: "Flare Blitz",
          num: 394,
          isNonstandard: undefined,
        },
        {
          name: "Flash",
          num: 148,
          isNonstandard: "Past",
        },
        {
          name: "Flash Cannon",
          num: 430,
          isNonstandard: undefined,
        },
        {
          name: "Flatter",
          num: 260,
          isNonstandard: undefined,
        },
        {
          name: "Fleur Cannon",
          num: 705,
          isNonstandard: undefined,
        },
        {
          name: "Fling",
          num: 374,
          isNonstandard: undefined,
        },
        {
          name: "Flip Turn",
          num: 812,
          isNonstandard: undefined,
        },
        {
          name: "Floaty Fall",
          num: 731,
          isNonstandard: "LGPE",
        },
        {
          name: "Floral Healing",
          num: 666,
          isNonstandard: "Past",
        },
        {
          name: "Flower Shield",
          num: 579,
          isNonstandard: "Past",
        },
        {
          name: "Flower Trick",
          num: 870,
          isNonstandard: undefined,
        },
        {
          name: "Fly",
          num: 19,
          isNonstandard: undefined,
        },
        {
          name: "Flying Press",
          num: 560,
          isNonstandard: undefined,
        },
        {
          name: "Focus Blast",
          num: 411,
          isNonstandard: undefined,
        },
        {
          name: "Focus Energy",
          num: 116,
          isNonstandard: undefined,
        },
        {
          name: "Focus Punch",
          num: 264,
          isNonstandard: undefined,
        },
        {
          name: "Follow Me",
          num: 266,
          isNonstandard: undefined,
        },
        {
          name: "Force Palm",
          num: 395,
          isNonstandard: undefined,
        },
        {
          name: "Foresight",
          num: 193,
          isNonstandard: "Past",
        },
        {
          name: "Forest's Curse",
          num: 571,
          isNonstandard: "Past",
        },
        {
          name: "Foul Play",
          num: 492,
          isNonstandard: undefined,
        },
        {
          name: "Freeze-Dry",
          num: 573,
          isNonstandard: undefined,
        },
        {
          name: "Freeze Shock",
          num: 553,
          isNonstandard: "Past",
        },
        {
          name: "Freezing Glare",
          num: 821,
          isNonstandard: undefined,
        },
        {
          name: "Freezy Frost",
          num: 739,
          isNonstandard: "LGPE",
        },
        {
          name: "Frenzy Plant",
          num: 338,
          isNonstandard: undefined,
        },
        {
          name: "Frost Breath",
          num: 524,
          isNonstandard: undefined,
        },
        {
          name: "Frustration",
          num: 218,
          isNonstandard: "Past",
        },
        {
          name: "Fury Attack",
          num: 31,
          isNonstandard: undefined,
        },
        {
          name: "Fury Cutter",
          num: 210,
          isNonstandard: undefined,
        },
        {
          name: "Fury Swipes",
          num: 154,
          isNonstandard: undefined,
        },
        {
          name: "Fusion Bolt",
          num: 559,
          isNonstandard: "Past",
        },
        {
          name: "Fusion Flare",
          num: 558,
          isNonstandard: "Past",
        },
        {
          name: "Future Sight",
          num: 248,
          isNonstandard: undefined,
        },
        {
          name: "Gastro Acid",
          num: 380,
          isNonstandard: undefined,
        },
        {
          name: "Gear Grind",
          num: 544,
          isNonstandard: "Past",
        },
        {
          name: "Gear Up",
          num: 674,
          isNonstandard: "Past",
        },
        {
          name: "Genesis Supernova",
          num: 703,
          isNonstandard: "Past",
        },
        {
          name: "Geomancy",
          num: 601,
          isNonstandard: "Past",
        },
        {
          name: "Giga Drain",
          num: 202,
          isNonstandard: undefined,
        },
        {
          name: "Giga Impact",
          num: 416,
          isNonstandard: undefined,
        },
        {
          name: "Gigaton Hammer",
          num: 893,
          isNonstandard: undefined,
        },
        {
          name: "Gigavolt Havoc",
          num: 646,
          isNonstandard: "Past",
        },
        {
          name: "Glacial Lance",
          num: 824,
          isNonstandard: undefined,
        },
        {
          name: "Glaciate",
          num: 549,
          isNonstandard: "Past",
        },
        {
          name: "Glaive Rush",
          num: 862,
          isNonstandard: undefined,
        },
        {
          name: "Glare",
          num: 137,
          isNonstandard: undefined,
        },
        {
          name: "Glitzy Glow",
          num: 736,
          isNonstandard: "LGPE",
        },
        {
          name: "G-Max Befuddle",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Cannonade",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Centiferno",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Chi Strike",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Cuddle",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Depletion",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Drum Solo",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Finale",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Fireball",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Foam Burst",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Gold Rush",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Gravitas",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Hydrosnipe",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Malodor",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Meltdown",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max One Blow",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Rapid Flow",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Replenish",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Resonance",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Sandblast",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Smite",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Snooze",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Steelsurge",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Stonesurge",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Stun Shock",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Sweetness",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Tartness",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Terror",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Vine Lash",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Volcalith",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Volt Crash",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Wildfire",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "G-Max Wind Rage",
          num: 1000,
          isNonstandard: "Gigantamax",
        },
        {
          name: "Grass Knot",
          num: 447,
          isNonstandard: undefined,
        },
        {
          name: "Grass Pledge",
          num: 520,
          isNonstandard: undefined,
        },
        {
          name: "Grass Whistle",
          num: 320,
          isNonstandard: "Past",
        },
        {
          name: "Grassy Glide",
          num: 803,
          isNonstandard: undefined,
        },
        {
          name: "Grassy Terrain",
          num: 580,
          isNonstandard: undefined,
        },
        {
          name: "Grav Apple",
          num: 788,
          isNonstandard: undefined,
        },
        {
          name: "Gravity",
          num: 356,
          isNonstandard: undefined,
        },
        {
          name: "Growl",
          num: 45,
          isNonstandard: undefined,
        },
        {
          name: "Growth",
          num: 74,
          isNonstandard: undefined,
        },
        {
          name: "Grudge",
          num: 288,
          isNonstandard: "Past",
        },
        {
          name: "Guardian of Alola",
          num: 698,
          isNonstandard: "Past",
        },
        {
          name: "Guard Split",
          num: 470,
          isNonstandard: undefined,
        },
        {
          name: "Guard Swap",
          num: 385,
          isNonstandard: undefined,
        },
        {
          name: "Guillotine",
          num: 12,
          isNonstandard: undefined,
        },
        {
          name: "Gunk Shot",
          num: 441,
          isNonstandard: undefined,
        },
        {
          name: "Gust",
          num: 16,
          isNonstandard: undefined,
        },
        {
          name: "Gyro Ball",
          num: 360,
          isNonstandard: undefined,
        },
        {
          name: "Hail",
          num: 258,
          isNonstandard: "Past",
        },
        {
          name: "Hammer Arm",
          num: 359,
          isNonstandard: undefined,
        },
        {
          name: "Happy Hour",
          num: 603,
          isNonstandard: undefined,
        },
        {
          name: "Harden",
          num: 106,
          isNonstandard: undefined,
        },
        {
          name: "Haze",
          num: 114,
          isNonstandard: undefined,
        },
        {
          name: "Headbutt",
          num: 29,
          isNonstandard: undefined,
        },
        {
          name: "Head Charge",
          num: 543,
          isNonstandard: "Past",
        },
        {
          name: "Headlong Rush",
          num: 838,
          isNonstandard: undefined,
        },
        {
          name: "Head Smash",
          num: 457,
          isNonstandard: undefined,
        },
        {
          name: "Heal Bell",
          num: 215,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Heal Block",
          num: 377,
          isNonstandard: "Past",
        },
        {
          name: "Healing Wish",
          num: 361,
          isNonstandard: undefined,
        },
        {
          name: "Heal Order",
          num: 456,
          isNonstandard: "Past",
        },
        {
          name: "Heal Pulse",
          num: 505,
          isNonstandard: undefined,
        },
        {
          name: "Heart Stamp",
          num: 531,
          isNonstandard: "Past",
        },
        {
          name: "Heart Swap",
          num: 391,
          isNonstandard: undefined,
        },
        {
          name: "Heat Crash",
          num: 535,
          isNonstandard: undefined,
        },
        {
          name: "Heat Wave",
          num: 257,
          isNonstandard: undefined,
        },
        {
          name: "Heavy Slam",
          num: 484,
          isNonstandard: undefined,
        },
        {
          name: "Helping Hand",
          num: 270,
          isNonstandard: undefined,
        },
        {
          name: "Hex",
          num: 506,
          isNonstandard: undefined,
        },
        {
          name: "Hidden Power",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Bug",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Dark",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Dragon",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Electric",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Fighting",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Fire",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Flying",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Ghost",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Grass",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Ground",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Ice",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Poison",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Psychic",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Rock",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Steel",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "Hidden Power Water",
          num: 237,
          isNonstandard: "Past",
        },
        {
          name: "High Horsepower",
          num: 667,
          isNonstandard: undefined,
        },
        {
          name: "High Jump Kick",
          num: 136,
          isNonstandard: undefined,
        },
        {
          name: "Hold Back",
          num: 610,
          isNonstandard: undefined,
        },
        {
          name: "Hold Hands",
          num: 607,
          isNonstandard: undefined,
        },
        {
          name: "Hone Claws",
          num: 468,
          isNonstandard: undefined,
        },
        {
          name: "Horn Attack",
          num: 30,
          isNonstandard: undefined,
        },
        {
          name: "Horn Drill",
          num: 32,
          isNonstandard: undefined,
        },
        {
          name: "Horn Leech",
          num: 532,
          isNonstandard: undefined,
        },
        {
          name: "Howl",
          num: 336,
          isNonstandard: undefined,
        },
        {
          name: "Hurricane",
          num: 542,
          isNonstandard: undefined,
        },
        {
          name: "Hydro Cannon",
          num: 308,
          isNonstandard: undefined,
        },
        {
          name: "Hydro Pump",
          num: 56,
          isNonstandard: undefined,
        },
        {
          name: "Hydro Vortex",
          num: 642,
          isNonstandard: "Past",
        },
        {
          name: "Hyper Beam",
          num: 63,
          isNonstandard: undefined,
        },
        {
          name: "Hyper Drill",
          num: 887,
          isNonstandard: undefined,
        },
        {
          name: "Hyper Fang",
          num: 158,
          isNonstandard: "Past",
        },
        {
          name: "Hyperspace Fury",
          num: 621,
          isNonstandard: undefined,
        },
        {
          name: "Hyperspace Hole",
          num: 593,
          isNonstandard: undefined,
        },
        {
          name: "Hyper Voice",
          num: 304,
          isNonstandard: undefined,
        },
        {
          name: "Hypnosis",
          num: 95,
          isNonstandard: undefined,
        },
        {
          name: "Ice Ball",
          num: 301,
          isNonstandard: "Past",
        },
        {
          name: "Ice Beam",
          num: 58,
          isNonstandard: undefined,
        },
        {
          name: "Ice Burn",
          num: 554,
          isNonstandard: "Past",
        },
        {
          name: "Ice Fang",
          num: 423,
          isNonstandard: undefined,
        },
        {
          name: "Ice Hammer",
          num: 665,
          isNonstandard: undefined,
        },
        {
          name: "Ice Punch",
          num: 8,
          isNonstandard: undefined,
        },
        {
          name: "Ice Shard",
          num: 420,
          isNonstandard: undefined,
        },
        {
          name: "Ice Spinner",
          num: 861,
          isNonstandard: undefined,
        },
        {
          name: "Icicle Crash",
          num: 556,
          isNonstandard: undefined,
        },
        {
          name: "Icicle Spear",
          num: 333,
          isNonstandard: undefined,
        },
        {
          name: "Icy Wind",
          num: 196,
          isNonstandard: undefined,
        },
        {
          name: "Imprison",
          num: 286,
          isNonstandard: undefined,
        },
        {
          name: "Incinerate",
          num: 510,
          isNonstandard: undefined,
        },
        {
          name: "Infernal Parade",
          num: 844,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Inferno",
          num: 517,
          isNonstandard: undefined,
        },
        {
          name: "Inferno Overdrive",
          num: 640,
          isNonstandard: "Past",
        },
        {
          name: "Infestation",
          num: 611,
          isNonstandard: undefined,
        },
        {
          name: "Ingrain",
          num: 275,
          isNonstandard: undefined,
        },
        {
          name: "Instruct",
          num: 689,
          isNonstandard: undefined,
        },
        {
          name: "Ion Deluge",
          num: 569,
          isNonstandard: "Past",
        },
        {
          name: "Iron Defense",
          num: 334,
          isNonstandard: undefined,
        },
        {
          name: "Iron Head",
          num: 442,
          isNonstandard: undefined,
        },
        {
          name: "Iron Tail",
          num: 231,
          isNonstandard: undefined,
        },
        {
          name: "Jaw Lock",
          num: 746,
          isNonstandard: undefined,
        },
        {
          name: "Jet Punch",
          num: 857,
          isNonstandard: undefined,
        },
        {
          name: "Judgment",
          num: 449,
          isNonstandard: undefined,
        },
        {
          name: "Jump Kick",
          num: 26,
          isNonstandard: "Past",
        },
        {
          name: "Jungle Healing",
          num: 816,
          isNonstandard: undefined,
        },
        {
          name: "Karate Chop",
          num: 2,
          isNonstandard: "Past",
        },
        {
          name: "Kinesis",
          num: 134,
          isNonstandard: "Past",
        },
        {
          name: "King's Shield",
          num: 588,
          isNonstandard: "Past",
        },
        {
          name: "Knock Off",
          num: 282,
          isNonstandard: undefined,
        },
        {
          name: "Kowtow Cleave",
          num: 869,
          isNonstandard: undefined,
        },
        {
          name: "Land's Wrath",
          num: 616,
          isNonstandard: "Past",
        },
        {
          name: "Laser Focus",
          num: 673,
          isNonstandard: "Past",
        },
        {
          name: "Lash Out",
          num: 808,
          isNonstandard: undefined,
        },
        {
          name: "Last Resort",
          num: 387,
          isNonstandard: undefined,
        },
        {
          name: "Last Respects",
          num: 854,
          isNonstandard: undefined,
        },
        {
          name: "Lava Plume",
          num: 436,
          isNonstandard: undefined,
        },
        {
          name: "Leafage",
          num: 670,
          isNonstandard: undefined,
        },
        {
          name: "Leaf Blade",
          num: 348,
          isNonstandard: undefined,
        },
        {
          name: "Leaf Storm",
          num: 437,
          isNonstandard: undefined,
        },
        {
          name: "Leaf Tornado",
          num: 536,
          isNonstandard: "Past",
        },
        {
          name: "Leech Life",
          num: 141,
          isNonstandard: undefined,
        },
        {
          name: "Leech Seed",
          num: 73,
          isNonstandard: undefined,
        },
        {
          name: "Leer",
          num: 43,
          isNonstandard: undefined,
        },
        {
          name: "Let's Snuggle Forever",
          num: 726,
          isNonstandard: "Past",
        },
        {
          name: "Lick",
          num: 122,
          isNonstandard: undefined,
        },
        {
          name: "Life Dew",
          num: 791,
          isNonstandard: undefined,
        },
        {
          name: "Light of Ruin",
          num: 617,
          isNonstandard: "Past",
        },
        {
          name: "Light Screen",
          num: 113,
          isNonstandard: undefined,
        },
        {
          name: "Light That Burns the Sky",
          num: 723,
          isNonstandard: "Past",
        },
        {
          name: "Liquidation",
          num: 710,
          isNonstandard: undefined,
        },
        {
          name: "Lock-On",
          num: 199,
          isNonstandard: undefined,
        },
        {
          name: "Lovely Kiss",
          num: 142,
          isNonstandard: "Past",
        },
        {
          name: "Low Kick",
          num: 67,
          isNonstandard: undefined,
        },
        {
          name: "Low Sweep",
          num: 490,
          isNonstandard: undefined,
        },
        {
          name: "Lucky Chant",
          num: 381,
          isNonstandard: "Past",
        },
        {
          name: "Lumina Crash",
          num: 855,
          isNonstandard: undefined,
        },
        {
          name: "Lunar Blessing",
          num: 849,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Lunar Dance",
          num: 461,
          isNonstandard: undefined,
        },
        {
          name: "Lunge",
          num: 679,
          isNonstandard: undefined,
        },
        {
          name: "Luster Purge",
          num: 295,
          isNonstandard: "Past",
        },
        {
          name: "Mach Punch",
          num: 183,
          isNonstandard: undefined,
        },
        {
          name: "Magical Leaf",
          num: 345,
          isNonstandard: undefined,
        },
        {
          name: "Magical Torque",
          num: 900,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Magic Coat",
          num: 277,
          isNonstandard: "Past",
        },
        {
          name: "Magic Powder",
          num: 750,
          isNonstandard: undefined,
        },
        {
          name: "Magic Room",
          num: 478,
          isNonstandard: undefined,
        },
        {
          name: "Magma Storm",
          num: 463,
          isNonstandard: undefined,
        },
        {
          name: "Magnet Bomb",
          num: 443,
          isNonstandard: "Past",
        },
        {
          name: "Magnetic Flux",
          num: 602,
          isNonstandard: undefined,
        },
        {
          name: "Magnet Rise",
          num: 393,
          isNonstandard: undefined,
        },
        {
          name: "Magnitude",
          num: 222,
          isNonstandard: "Past",
        },
        {
          name: "Make It Rain",
          num: 874,
          isNonstandard: undefined,
        },
        {
          name: "Malicious Moonsault",
          num: 696,
          isNonstandard: "Past",
        },
        {
          name: "Mat Block",
          num: 561,
          isNonstandard: "Past",
        },
        {
          name: "Max Airstream",
          num: 766,
          isNonstandard: "Past",
        },
        {
          name: "Max Darkness",
          num: 772,
          isNonstandard: "Past",
        },
        {
          name: "Max Flare",
          num: 757,
          isNonstandard: "Past",
        },
        {
          name: "Max Flutterby",
          num: 758,
          isNonstandard: "Past",
        },
        {
          name: "Max Geyser",
          num: 765,
          isNonstandard: "Past",
        },
        {
          name: "Max Guard",
          num: 743,
          isNonstandard: "Past",
        },
        {
          name: "Max Hailstorm",
          num: 763,
          isNonstandard: "Past",
        },
        {
          name: "Max Knuckle",
          num: 761,
          isNonstandard: "Past",
        },
        {
          name: "Max Lightning",
          num: 759,
          isNonstandard: "Past",
        },
        {
          name: "Max Mindstorm",
          num: 769,
          isNonstandard: "Past",
        },
        {
          name: "Max Ooze",
          num: 764,
          isNonstandard: "Past",
        },
        {
          name: "Max Overgrowth",
          num: 773,
          isNonstandard: "Past",
        },
        {
          name: "Max Phantasm",
          num: 762,
          isNonstandard: "Past",
        },
        {
          name: "Max Quake",
          num: 771,
          isNonstandard: "Past",
        },
        {
          name: "Max Rockfall",
          num: 770,
          isNonstandard: "Past",
        },
        {
          name: "Max Starfall",
          num: 767,
          isNonstandard: "Past",
        },
        {
          name: "Max Steelspike",
          num: 774,
          isNonstandard: "Past",
        },
        {
          name: "Max Strike",
          num: 760,
          isNonstandard: "Past",
        },
        {
          name: "Max Wyrmwind",
          num: 768,
          isNonstandard: "Past",
        },
        {
          name: "Mean Look",
          num: 212,
          isNonstandard: undefined,
        },
        {
          name: "Meditate",
          num: 96,
          isNonstandard: "Past",
        },
        {
          name: "Me First",
          num: 382,
          isNonstandard: "Past",
        },
        {
          name: "Mega Drain",
          num: 72,
          isNonstandard: undefined,
        },
        {
          name: "Megahorn",
          num: 224,
          isNonstandard: undefined,
        },
        {
          name: "Mega Kick",
          num: 25,
          isNonstandard: undefined,
        },
        {
          name: "Mega Punch",
          num: 5,
          isNonstandard: undefined,
        },
        {
          name: "Memento",
          num: 262,
          isNonstandard: undefined,
        },
        {
          name: "Menacing Moonraze Maelstrom",
          num: 725,
          isNonstandard: "Past",
        },
        {
          name: "Metal Burst",
          num: 368,
          isNonstandard: undefined,
        },
        {
          name: "Metal Claw",
          num: 232,
          isNonstandard: undefined,
        },
        {
          name: "Metal Sound",
          num: 319,
          isNonstandard: undefined,
        },
        {
          name: "Meteor Assault",
          num: 794,
          isNonstandard: "Past",
        },
        {
          name: "Meteor Beam",
          num: 800,
          isNonstandard: undefined,
        },
        {
          name: "Meteor Mash",
          num: 309,
          isNonstandard: undefined,
        },
        {
          name: "Metronome",
          num: 118,
          isNonstandard: undefined,
        },
        {
          name: "Milk Drink",
          num: 208,
          isNonstandard: undefined,
        },
        {
          name: "Mimic",
          num: 102,
          isNonstandard: undefined,
        },
        {
          name: "Mind Blown",
          num: 720,
          isNonstandard: "Past",
        },
        {
          name: "Mind Reader",
          num: 170,
          isNonstandard: "Past",
        },
        {
          name: "Minimize",
          num: 107,
          isNonstandard: undefined,
        },
        {
          name: "Miracle Eye",
          num: 357,
          isNonstandard: "Past",
        },
        {
          name: "Mirror Coat",
          num: 243,
          isNonstandard: undefined,
        },
        {
          name: "Mirror Move",
          num: 119,
          isNonstandard: "Past",
        },
        {
          name: "Mirror Shot",
          num: 429,
          isNonstandard: "Past",
        },
        {
          name: "Mist",
          num: 54,
          isNonstandard: undefined,
        },
        {
          name: "Mist Ball",
          num: 296,
          isNonstandard: "Past",
        },
        {
          name: "Misty Explosion",
          num: 802,
          isNonstandard: undefined,
        },
        {
          name: "Misty Terrain",
          num: 581,
          isNonstandard: undefined,
        },
        {
          name: "Moonblast",
          num: 585,
          isNonstandard: undefined,
        },
        {
          name: "Moongeist Beam",
          num: 714,
          isNonstandard: "Past",
        },
        {
          name: "Moonlight",
          num: 236,
          isNonstandard: undefined,
        },
        {
          name: "Morning Sun",
          num: 234,
          isNonstandard: undefined,
        },
        {
          name: "Mortal Spin",
          num: 866,
          isNonstandard: undefined,
        },
        {
          name: "Mountain Gale",
          num: 836,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Mud Bomb",
          num: 426,
          isNonstandard: "Past",
        },
        {
          name: "Mud Shot",
          num: 341,
          isNonstandard: undefined,
        },
        {
          name: "Mud-Slap",
          num: 189,
          isNonstandard: undefined,
        },
        {
          name: "Mud Sport",
          num: 300,
          isNonstandard: "Past",
        },
        {
          name: "Muddy Water",
          num: 330,
          isNonstandard: undefined,
        },
        {
          name: "Multi-Attack",
          num: 718,
          isNonstandard: "Past",
        },
        {
          name: "Mystical Fire",
          num: 595,
          isNonstandard: undefined,
        },
        {
          name: "Mystical Power",
          num: 832,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Nasty Plot",
          num: 417,
          isNonstandard: undefined,
        },
        {
          name: "Natural Gift",
          num: 363,
          isNonstandard: "Past",
        },
        {
          name: "Nature Power",
          num: 267,
          isNonstandard: "Past",
        },
        {
          name: "Nature's Madness",
          num: 717,
          isNonstandard: "Past",
        },
        {
          name: "Needle Arm",
          num: 302,
          isNonstandard: "Past",
        },
        {
          name: "Never-Ending Nightmare",
          num: 636,
          isNonstandard: "Past",
        },
        {
          name: "Night Daze",
          num: 539,
          isNonstandard: undefined,
        },
        {
          name: "Nightmare",
          num: 171,
          isNonstandard: "Past",
        },
        {
          name: "Night Shade",
          num: 101,
          isNonstandard: undefined,
        },
        {
          name: "Night Slash",
          num: 400,
          isNonstandard: undefined,
        },
        {
          name: "Noble Roar",
          num: 568,
          isNonstandard: undefined,
        },
        {
          name: "No Retreat",
          num: 748,
          isNonstandard: undefined,
        },
        {
          name: "Noxious Torque",
          num: 898,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Nuzzle",
          num: 609,
          isNonstandard: undefined,
        },
        {
          name: "Oblivion Wing",
          num: 613,
          isNonstandard: "Past",
        },
        {
          name: "Obstruct",
          num: 792,
          isNonstandard: "Past",
        },
        {
          name: "Oceanic Operetta",
          num: 697,
          isNonstandard: "Past",
        },
        {
          name: "Octazooka",
          num: 190,
          isNonstandard: "Past",
        },
        {
          name: "Octolock",
          num: 753,
          isNonstandard: "Past",
        },
        {
          name: "Odor Sleuth",
          num: 316,
          isNonstandard: "Past",
        },
        {
          name: "Ominous Wind",
          num: 466,
          isNonstandard: "Past",
        },
        {
          name: "Order Up",
          num: 856,
          isNonstandard: undefined,
        },
        {
          name: "Origin Pulse",
          num: 618,
          isNonstandard: undefined,
        },
        {
          name: "Outrage",
          num: 200,
          isNonstandard: undefined,
        },
        {
          name: "Overdrive",
          num: 786,
          isNonstandard: undefined,
        },
        {
          name: "Overheat",
          num: 315,
          isNonstandard: undefined,
        },
        {
          name: "Pain Split",
          num: 220,
          isNonstandard: undefined,
        },
        {
          name: "Paleo Wave",
          num: 0,
          isNonstandard: "CAP",
        },
        {
          name: "Parabolic Charge",
          num: 570,
          isNonstandard: undefined,
        },
        {
          name: "Parting Shot",
          num: 575,
          isNonstandard: undefined,
        },
        {
          name: "Payback",
          num: 371,
          isNonstandard: undefined,
        },
        {
          name: "Pay Day",
          num: 6,
          isNonstandard: undefined,
        },
        {
          name: "Peck",
          num: 64,
          isNonstandard: undefined,
        },
        {
          name: "Perish Song",
          num: 195,
          isNonstandard: undefined,
        },
        {
          name: "Petal Blizzard",
          num: 572,
          isNonstandard: undefined,
        },
        {
          name: "Petal Dance",
          num: 80,
          isNonstandard: undefined,
        },
        {
          name: "Phantom Force",
          num: 566,
          isNonstandard: undefined,
        },
        {
          name: "Photon Geyser",
          num: 722,
          isNonstandard: "Past",
        },
        {
          name: "Pika Papow",
          num: 732,
          isNonstandard: "LGPE",
        },
        {
          name: "Pin Missile",
          num: 42,
          isNonstandard: undefined,
        },
        {
          name: "Plasma Fists",
          num: 721,
          isNonstandard: "Past",
        },
        {
          name: "Play Nice",
          num: 589,
          isNonstandard: undefined,
        },
        {
          name: "Play Rough",
          num: 583,
          isNonstandard: undefined,
        },
        {
          name: "Pluck",
          num: 365,
          isNonstandard: undefined,
        },
        {
          name: "Poison Fang",
          num: 305,
          isNonstandard: undefined,
        },
        {
          name: "Poison Gas",
          num: 139,
          isNonstandard: undefined,
        },
        {
          name: "Poison Jab",
          num: 398,
          isNonstandard: undefined,
        },
        {
          name: "Poison Powder",
          num: 77,
          isNonstandard: undefined,
        },
        {
          name: "Poison Sting",
          num: 40,
          isNonstandard: undefined,
        },
        {
          name: "Poison Tail",
          num: 342,
          isNonstandard: undefined,
        },
        {
          name: "Pollen Puff",
          num: 676,
          isNonstandard: undefined,
        },
        {
          name: "Poltergeist",
          num: 809,
          isNonstandard: undefined,
        },
        {
          name: "Population Bomb",
          num: 860,
          isNonstandard: undefined,
        },
        {
          name: "Pounce",
          num: 884,
          isNonstandard: undefined,
        },
        {
          name: "Pound",
          num: 1,
          isNonstandard: undefined,
        },
        {
          name: "Powder",
          num: 600,
          isNonstandard: "Past",
        },
        {
          name: "Powder Snow",
          num: 181,
          isNonstandard: undefined,
        },
        {
          name: "Power Gem",
          num: 408,
          isNonstandard: undefined,
        },
        {
          name: "Power Shift",
          num: 829,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Power Split",
          num: 471,
          isNonstandard: undefined,
        },
        {
          name: "Power Swap",
          num: 384,
          isNonstandard: undefined,
        },
        {
          name: "Power Trick",
          num: 379,
          isNonstandard: undefined,
        },
        {
          name: "Power Trip",
          num: 681,
          isNonstandard: undefined,
        },
        {
          name: "Power-Up Punch",
          num: 612,
          isNonstandard: "Past",
        },
        {
          name: "Power Whip",
          num: 438,
          isNonstandard: undefined,
        },
        {
          name: "Precipice Blades",
          num: 619,
          isNonstandard: undefined,
        },
        {
          name: "Present",
          num: 217,
          isNonstandard: undefined,
        },
        {
          name: "Prismatic Laser",
          num: 711,
          isNonstandard: "Past",
        },
        {
          name: "Protect",
          num: 182,
          isNonstandard: undefined,
        },
        {
          name: "Psybeam",
          num: 60,
          isNonstandard: undefined,
        },
        {
          name: "Psych Up",
          num: 244,
          isNonstandard: undefined,
        },
        {
          name: "Psychic",
          num: 94,
          isNonstandard: undefined,
        },
        {
          name: "Psychic Fangs",
          num: 706,
          isNonstandard: undefined,
        },
        {
          name: "Psychic Terrain",
          num: 678,
          isNonstandard: undefined,
        },
        {
          name: "Psycho Boost",
          num: 354,
          isNonstandard: "Past",
        },
        {
          name: "Psycho Cut",
          num: 427,
          isNonstandard: undefined,
        },
        {
          name: "Psycho Shift",
          num: 375,
          isNonstandard: "Past",
        },
        {
          name: "Psyshield Bash",
          num: 828,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Psyshock",
          num: 473,
          isNonstandard: undefined,
        },
        {
          name: "Psystrike",
          num: 540,
          isNonstandard: undefined,
        },
        {
          name: "Psywave",
          num: 149,
          isNonstandard: "Past",
        },
        {
          name: "Pulverizing Pancake",
          num: 701,
          isNonstandard: "Past",
        },
        {
          name: "Punishment",
          num: 386,
          isNonstandard: "Past",
        },
        {
          name: "Purify",
          num: 685,
          isNonstandard: "Past",
        },
        {
          name: "Pursuit",
          num: 228,
          isNonstandard: "Past",
        },
        {
          name: "Pyro Ball",
          num: 780,
          isNonstandard: undefined,
        },
        {
          name: "Quash",
          num: 511,
          isNonstandard: undefined,
        },
        {
          name: "Quick Attack",
          num: 98,
          isNonstandard: undefined,
        },
        {
          name: "Quick Guard",
          num: 501,
          isNonstandard: undefined,
        },
        {
          name: "Quiver Dance",
          num: 483,
          isNonstandard: undefined,
        },
        {
          name: "Rage",
          num: 99,
          isNonstandard: "Past",
        },
        {
          name: "Rage Fist",
          num: 889,
          isNonstandard: undefined,
        },
        {
          name: "Rage Powder",
          num: 476,
          isNonstandard: undefined,
        },
        {
          name: "Raging Bull",
          num: 873,
          isNonstandard: undefined,
        },
        {
          name: "Raging Fury",
          num: 833,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Rain Dance",
          num: 240,
          isNonstandard: undefined,
        },
        {
          name: "Rapid Spin",
          num: 229,
          isNonstandard: undefined,
        },
        {
          name: "Razor Leaf",
          num: 75,
          isNonstandard: undefined,
        },
        {
          name: "Razor Shell",
          num: 534,
          isNonstandard: undefined,
        },
        {
          name: "Razor Wind",
          num: 13,
          isNonstandard: "Past",
        },
        {
          name: "Recover",
          num: 105,
          isNonstandard: undefined,
        },
        {
          name: "Recycle",
          num: 278,
          isNonstandard: undefined,
        },
        {
          name: "Reflect",
          num: 115,
          isNonstandard: undefined,
        },
        {
          name: "Reflect Type",
          num: 513,
          isNonstandard: undefined,
        },
        {
          name: "Refresh",
          num: 287,
          isNonstandard: "Past",
        },
        {
          name: "Relic Song",
          num: 547,
          isNonstandard: undefined,
        },
        {
          name: "Rest",
          num: 156,
          isNonstandard: undefined,
        },
        {
          name: "Retaliate",
          num: 514,
          isNonstandard: undefined,
        },
        {
          name: "Return",
          num: 216,
          isNonstandard: "Past",
        },
        {
          name: "Revelation Dance",
          num: 686,
          isNonstandard: undefined,
        },
        {
          name: "Revenge",
          num: 279,
          isNonstandard: "Past",
        },
        {
          name: "Reversal",
          num: 179,
          isNonstandard: undefined,
        },
        {
          name: "Revival Blessing",
          num: 863,
          isNonstandard: undefined,
        },
        {
          name: "Rising Voltage",
          num: 804,
          isNonstandard: undefined,
        },
        {
          name: "Roar",
          num: 46,
          isNonstandard: undefined,
        },
        {
          name: "Roar of Time",
          num: 459,
          isNonstandard: undefined,
        },
        {
          name: "Rock Blast",
          num: 350,
          isNonstandard: undefined,
        },
        {
          name: "Rock Climb",
          num: 431,
          isNonstandard: "Past",
        },
        {
          name: "Rock Polish",
          num: 397,
          isNonstandard: undefined,
        },
        {
          name: "Rock Slide",
          num: 157,
          isNonstandard: undefined,
        },
        {
          name: "Rock Smash",
          num: 249,
          isNonstandard: undefined,
        },
        {
          name: "Rock Throw",
          num: 88,
          isNonstandard: undefined,
        },
        {
          name: "Rock Tomb",
          num: 317,
          isNonstandard: undefined,
        },
        {
          name: "Rock Wrecker",
          num: 439,
          isNonstandard: "Past",
        },
        {
          name: "Role Play",
          num: 272,
          isNonstandard: undefined,
        },
        {
          name: "Rolling Kick",
          num: 27,
          isNonstandard: "Past",
        },
        {
          name: "Rollout",
          num: 205,
          isNonstandard: undefined,
        },
        {
          name: "Roost",
          num: 355,
          isNonstandard: undefined,
        },
        {
          name: "Rototiller",
          num: 563,
          isNonstandard: "Past",
        },
        {
          name: "Round",
          num: 496,
          isNonstandard: undefined,
        },
        {
          name: "Ruination",
          num: 877,
          isNonstandard: undefined,
        },
        {
          name: "Sacred Fire",
          num: 221,
          isNonstandard: "Past",
        },
        {
          name: "Sacred Sword",
          num: 533,
          isNonstandard: undefined,
        },
        {
          name: "Safeguard",
          num: 219,
          isNonstandard: undefined,
        },
        {
          name: "Salt Cure",
          num: 864,
          isNonstandard: undefined,
        },
        {
          name: "Sand Attack",
          num: 28,
          isNonstandard: undefined,
        },
        {
          name: "Sandsear Storm",
          num: 848,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Sandstorm",
          num: 201,
          isNonstandard: undefined,
        },
        {
          name: "Sand Tomb",
          num: 328,
          isNonstandard: undefined,
        },
        {
          name: "Sappy Seed",
          num: 738,
          isNonstandard: "LGPE",
        },
        {
          name: "Savage Spin-Out",
          num: 634,
          isNonstandard: "Past",
        },
        {
          name: "Scald",
          num: 503,
          isNonstandard: undefined,
        },
        {
          name: "Scale Shot",
          num: 799,
          isNonstandard: undefined,
        },
        {
          name: "Scary Face",
          num: 184,
          isNonstandard: undefined,
        },
        {
          name: "Scorching Sands",
          num: 815,
          isNonstandard: undefined,
        },
        {
          name: "Scratch",
          num: 10,
          isNonstandard: undefined,
        },
        {
          name: "Screech",
          num: 103,
          isNonstandard: undefined,
        },
        {
          name: "Searing Shot",
          num: 545,
          isNonstandard: "Past",
        },
        {
          name: "Searing Sunraze Smash",
          num: 724,
          isNonstandard: "Past",
        },
        {
          name: "Secret Power",
          num: 290,
          isNonstandard: "Past",
        },
        {
          name: "Secret Sword",
          num: 548,
          isNonstandard: "Past",
        },
        {
          name: "Seed Bomb",
          num: 402,
          isNonstandard: undefined,
        },
        {
          name: "Seed Flare",
          num: 465,
          isNonstandard: "Past",
        },
        {
          name: "Seismic Toss",
          num: 69,
          isNonstandard: undefined,
        },
        {
          name: "Self-Destruct",
          num: 120,
          isNonstandard: undefined,
        },
        {
          name: "Shadow Ball",
          num: 247,
          isNonstandard: undefined,
        },
        {
          name: "Shadow Bone",
          num: 708,
          isNonstandard: "Past",
        },
        {
          name: "Shadow Claw",
          num: 421,
          isNonstandard: undefined,
        },
        {
          name: "Shadow Force",
          num: 467,
          isNonstandard: undefined,
        },
        {
          name: "Shadow Punch",
          num: 325,
          isNonstandard: undefined,
        },
        {
          name: "Shadow Sneak",
          num: 425,
          isNonstandard: undefined,
        },
        {
          name: "Shadow Strike",
          num: 0,
          isNonstandard: "CAP",
        },
        {
          name: "Sharpen",
          num: 159,
          isNonstandard: "Past",
        },
        {
          name: "Shattered Psyche",
          num: 648,
          isNonstandard: "Past",
        },
        {
          name: "Shed Tail",
          num: 880,
          isNonstandard: undefined,
        },
        {
          name: "Sheer Cold",
          num: 329,
          isNonstandard: undefined,
        },
        {
          name: "Shell Side Arm",
          num: 801,
          isNonstandard: undefined,
        },
        {
          name: "Shell Smash",
          num: 504,
          isNonstandard: undefined,
        },
        {
          name: "Shell Trap",
          num: 704,
          isNonstandard: "Past",
        },
        {
          name: "Shelter",
          num: 842,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Shift Gear",
          num: 508,
          isNonstandard: undefined,
        },
        {
          name: "Shock Wave",
          num: 351,
          isNonstandard: undefined,
        },
        {
          name: "Shore Up",
          num: 659,
          isNonstandard: undefined,
        },
        {
          name: "Signal Beam",
          num: 324,
          isNonstandard: "Past",
        },
        {
          name: "Silk Trap",
          num: 852,
          isNonstandard: undefined,
        },
        {
          name: "Silver Wind",
          num: 318,
          isNonstandard: "Past",
        },
        {
          name: "Simple Beam",
          num: 493,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Sing",
          num: 47,
          isNonstandard: undefined,
        },
        {
          name: "Sinister Arrow Raid",
          num: 695,
          isNonstandard: "Past",
        },
        {
          name: "Sizzly Slide",
          num: 735,
          isNonstandard: "LGPE",
        },
        {
          name: "Sketch",
          num: 166,
          isNonstandard: "Past",
        },
        {
          name: "Skill Swap",
          num: 285,
          isNonstandard: undefined,
        },
        {
          name: "Skitter Smack",
          num: 806,
          isNonstandard: undefined,
        },
        {
          name: "Skull Bash",
          num: 130,
          isNonstandard: "Past",
        },
        {
          name: "Sky Attack",
          num: 143,
          isNonstandard: undefined,
        },
        {
          name: "Sky Drop",
          num: 507,
          isNonstandard: "Past",
        },
        {
          name: "Sky Uppercut",
          num: 327,
          isNonstandard: "Past",
        },
        {
          name: "Slack Off",
          num: 303,
          isNonstandard: undefined,
        },
        {
          name: "Slam",
          num: 21,
          isNonstandard: undefined,
        },
        {
          name: "Slash",
          num: 163,
          isNonstandard: undefined,
        },
        {
          name: "Sleep Powder",
          num: 79,
          isNonstandard: undefined,
        },
        {
          name: "Sleep Talk",
          num: 214,
          isNonstandard: undefined,
        },
        {
          name: "Sludge",
          num: 124,
          isNonstandard: undefined,
        },
        {
          name: "Sludge Bomb",
          num: 188,
          isNonstandard: undefined,
        },
        {
          name: "Sludge Wave",
          num: 482,
          isNonstandard: undefined,
        },
        {
          name: "Smack Down",
          num: 479,
          isNonstandard: undefined,
        },
        {
          name: "Smart Strike",
          num: 684,
          isNonstandard: undefined,
        },
        {
          name: "Smelling Salts",
          num: 265,
          isNonstandard: "Past",
        },
        {
          name: "Smog",
          num: 123,
          isNonstandard: undefined,
        },
        {
          name: "Smokescreen",
          num: 108,
          isNonstandard: undefined,
        },
        {
          name: "Snap Trap",
          num: 779,
          isNonstandard: "Past",
        },
        {
          name: "Snarl",
          num: 555,
          isNonstandard: undefined,
        },
        {
          name: "Snatch",
          num: 289,
          isNonstandard: "Past",
        },
        {
          name: "Snipe Shot",
          num: 745,
          isNonstandard: undefined,
        },
        {
          name: "Snore",
          num: 173,
          isNonstandard: undefined,
        },
        {
          name: "Snowscape",
          num: 883,
          isNonstandard: undefined,
        },
        {
          name: "Soak",
          num: 487,
          isNonstandard: undefined,
        },
        {
          name: "Soft-Boiled",
          num: 135,
          isNonstandard: undefined,
        },
        {
          name: "Solar Beam",
          num: 76,
          isNonstandard: undefined,
        },
        {
          name: "Solar Blade",
          num: 669,
          isNonstandard: undefined,
        },
        {
          name: "Sonic Boom",
          num: 49,
          isNonstandard: "Past",
        },
        {
          name: "Soul-Stealing 7-Star Strike",
          num: 699,
          isNonstandard: "Past",
        },
        {
          name: "Spacial Rend",
          num: 460,
          isNonstandard: undefined,
        },
        {
          name: "Spark",
          num: 209,
          isNonstandard: undefined,
        },
        {
          name: "Sparkling Aria",
          num: 664,
          isNonstandard: "Past",
        },
        {
          name: "Sparkly Swirl",
          num: 740,
          isNonstandard: "LGPE",
        },
        {
          name: "Spectral Thief",
          num: 712,
          isNonstandard: "Past",
        },
        {
          name: "Speed Swap",
          num: 683,
          isNonstandard: undefined,
        },
        {
          name: "Spicy Extract",
          num: 858,
          isNonstandard: undefined,
        },
        {
          name: "Spider Web",
          num: 169,
          isNonstandard: "Past",
        },
        {
          name: "Spike Cannon",
          num: 131,
          isNonstandard: "Past",
        },
        {
          name: "Spikes",
          num: 191,
          isNonstandard: undefined,
        },
        {
          name: "Spiky Shield",
          num: 596,
          isNonstandard: undefined,
        },
        {
          name: "Spin Out",
          num: 859,
          isNonstandard: undefined,
        },
        {
          name: "Spirit Break",
          num: 789,
          isNonstandard: undefined,
        },
        {
          name: "Spirit Shackle",
          num: 662,
          isNonstandard: undefined,
        },
        {
          name: "Spit Up",
          num: 255,
          isNonstandard: undefined,
        },
        {
          name: "Spite",
          num: 180,
          isNonstandard: undefined,
        },
        {
          name: "Splash",
          num: 150,
          isNonstandard: undefined,
        },
        {
          name: "Splintered Stormshards",
          num: 727,
          isNonstandard: "Past",
        },
        {
          name: "Splishy Splash",
          num: 730,
          isNonstandard: "LGPE",
        },
        {
          name: "Spore",
          num: 147,
          isNonstandard: undefined,
        },
        {
          name: "Spotlight",
          num: 671,
          isNonstandard: "Past",
        },
        {
          name: "Springtide Storm",
          num: 831,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Stealth Rock",
          num: 446,
          isNonstandard: undefined,
        },
        {
          name: "Steam Eruption",
          num: 592,
          isNonstandard: undefined,
        },
        {
          name: "Steamroller",
          num: 537,
          isNonstandard: "Past",
        },
        {
          name: "Steel Beam",
          num: 796,
          isNonstandard: undefined,
        },
        {
          name: "Steel Roller",
          num: 798,
          isNonstandard: undefined,
        },
        {
          name: "Steel Wing",
          num: 211,
          isNonstandard: undefined,
        },
        {
          name: "Sticky Web",
          num: 564,
          isNonstandard: undefined,
        },
        {
          name: "Stockpile",
          num: 254,
          isNonstandard: undefined,
        },
        {
          name: "Stoked Sparksurfer",
          num: 700,
          isNonstandard: "Past",
        },
        {
          name: "Stomp",
          num: 23,
          isNonstandard: undefined,
        },
        {
          name: "Stomping Tantrum",
          num: 707,
          isNonstandard: undefined,
        },
        {
          name: "Stone Axe",
          num: 830,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Stone Edge",
          num: 444,
          isNonstandard: undefined,
        },
        {
          name: "Stored Power",
          num: 500,
          isNonstandard: undefined,
        },
        {
          name: "Storm Throw",
          num: 480,
          isNonstandard: "Past",
        },
        {
          name: "Strange Steam",
          num: 790,
          isNonstandard: "Past",
        },
        {
          name: "Strength",
          num: 70,
          isNonstandard: undefined,
        },
        {
          name: "Strength Sap",
          num: 668,
          isNonstandard: undefined,
        },
        {
          name: "String Shot",
          num: 81,
          isNonstandard: undefined,
        },
        {
          name: "Struggle",
          num: 165,
          isNonstandard: undefined,
        },
        {
          name: "Struggle Bug",
          num: 522,
          isNonstandard: undefined,
        },
        {
          name: "Stuff Cheeks",
          num: 747,
          isNonstandard: undefined,
        },
        {
          name: "Stun Spore",
          num: 78,
          isNonstandard: undefined,
        },
        {
          name: "Submission",
          num: 66,
          isNonstandard: "Past",
        },
        {
          name: "Substitute",
          num: 164,
          isNonstandard: undefined,
        },
        {
          name: "Subzero Slammer",
          num: 650,
          isNonstandard: "Past",
        },
        {
          name: "Sucker Punch",
          num: 389,
          isNonstandard: undefined,
        },
        {
          name: "Sunny Day",
          num: 241,
          isNonstandard: undefined,
        },
        {
          name: "Sunsteel Strike",
          num: 713,
          isNonstandard: "Past",
        },
        {
          name: "Super Fang",
          num: 162,
          isNonstandard: undefined,
        },
        {
          name: "Superpower",
          num: 276,
          isNonstandard: undefined,
        },
        {
          name: "Supersonic",
          num: 48,
          isNonstandard: undefined,
        },
        {
          name: "Supersonic Skystrike",
          num: 626,
          isNonstandard: "Past",
        },
        {
          name: "Surf",
          num: 57,
          isNonstandard: undefined,
        },
        {
          name: "Surging Strikes",
          num: 818,
          isNonstandard: undefined,
        },
        {
          name: "Swagger",
          num: 207,
          isNonstandard: undefined,
        },
        {
          name: "Swallow",
          num: 256,
          isNonstandard: undefined,
        },
        {
          name: "Sweet Kiss",
          num: 186,
          isNonstandard: undefined,
        },
        {
          name: "Sweet Scent",
          num: 230,
          isNonstandard: undefined,
        },
        {
          name: "Swift",
          num: 129,
          isNonstandard: undefined,
        },
        {
          name: "Switcheroo",
          num: 415,
          isNonstandard: undefined,
        },
        {
          name: "Swords Dance",
          num: 14,
          isNonstandard: undefined,
        },
        {
          name: "Synchronoise",
          num: 485,
          isNonstandard: "Past",
        },
        {
          name: "Synthesis",
          num: 235,
          isNonstandard: undefined,
        },
        {
          name: "Tackle",
          num: 33,
          isNonstandard: undefined,
        },
        {
          name: "Tail Glow",
          num: 294,
          isNonstandard: "Past",
        },
        {
          name: "Tail Slap",
          num: 541,
          isNonstandard: undefined,
        },
        {
          name: "Tail Whip",
          num: 39,
          isNonstandard: undefined,
        },
        {
          name: "Tailwind",
          num: 366,
          isNonstandard: undefined,
        },
        {
          name: "Take Down",
          num: 36,
          isNonstandard: undefined,
        },
        {
          name: "Take Heart",
          num: 850,
          isNonstandard: "Past",
        },
        {
          name: "Tar Shot",
          num: 749,
          isNonstandard: undefined,
        },
        {
          name: "Taunt",
          num: 269,
          isNonstandard: undefined,
        },
        {
          name: "Tearful Look",
          num: 715,
          isNonstandard: undefined,
        },
        {
          name: "Teatime",
          num: 752,
          isNonstandard: undefined,
        },
        {
          name: "Techno Blast",
          num: 546,
          isNonstandard: "Past",
        },
        {
          name: "Tectonic Rage",
          num: 630,
          isNonstandard: "Past",
        },
        {
          name: "Teeter Dance",
          num: 298,
          isNonstandard: undefined,
        },
        {
          name: "Telekinesis",
          num: 477,
          isNonstandard: "Past",
        },
        {
          name: "Teleport",
          num: 100,
          isNonstandard: undefined,
        },
        {
          name: "Tera Blast",
          num: 851,
          isNonstandard: undefined,
        },
        {
          name: "Terrain Pulse",
          num: 805,
          isNonstandard: undefined,
        },
        {
          name: "Thief",
          num: 168,
          isNonstandard: undefined,
        },
        {
          name: "Thousand Arrows",
          num: 614,
          isNonstandard: "Past",
        },
        {
          name: "Thousand Waves",
          num: 615,
          isNonstandard: "Past",
        },
        {
          name: "Thrash",
          num: 37,
          isNonstandard: undefined,
        },
        {
          name: "Throat Chop",
          num: 675,
          isNonstandard: undefined,
        },
        {
          name: "Thunder",
          num: 87,
          isNonstandard: undefined,
        },
        {
          name: "Thunderbolt",
          num: 85,
          isNonstandard: undefined,
        },
        {
          name: "Thunder Cage",
          num: 819,
          isNonstandard: undefined,
        },
        {
          name: "Thunder Fang",
          num: 422,
          isNonstandard: undefined,
        },
        {
          name: "Thunderous Kick",
          num: 823,
          isNonstandard: undefined,
        },
        {
          name: "Thunder Punch",
          num: 9,
          isNonstandard: undefined,
        },
        {
          name: "Thunder Shock",
          num: 84,
          isNonstandard: undefined,
        },
        {
          name: "Thunder Wave",
          num: 86,
          isNonstandard: undefined,
        },
        {
          name: "Tickle",
          num: 321,
          isNonstandard: undefined,
        },
        {
          name: "Tidy Up",
          num: 882,
          isNonstandard: undefined,
        },
        {
          name: "Topsy-Turvy",
          num: 576,
          isNonstandard: "Past",
        },
        {
          name: "Torch Song",
          num: 871,
          isNonstandard: undefined,
        },
        {
          name: "Torment",
          num: 259,
          isNonstandard: undefined,
        },
        {
          name: "Toxic",
          num: 92,
          isNonstandard: undefined,
        },
        {
          name: "Toxic Spikes",
          num: 390,
          isNonstandard: undefined,
        },
        {
          name: "Toxic Thread",
          num: 672,
          isNonstandard: "Past",
        },
        {
          name: "Trailblaze",
          num: 885,
          isNonstandard: undefined,
        },
        {
          name: "Transform",
          num: 144,
          isNonstandard: undefined,
        },
        {
          name: "Tri Attack",
          num: 161,
          isNonstandard: undefined,
        },
        {
          name: "Trick",
          num: 271,
          isNonstandard: undefined,
        },
        {
          name: "Trick-or-Treat",
          num: 567,
          isNonstandard: "Past",
        },
        {
          name: "Trick Room",
          num: 433,
          isNonstandard: undefined,
        },
        {
          name: "Triple Arrows",
          num: 843,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Triple Axel",
          num: 813,
          isNonstandard: undefined,
        },
        {
          name: "Triple Dive",
          num: 865,
          isNonstandard: undefined,
        },
        {
          name: "Triple Kick",
          num: 167,
          isNonstandard: "Past",
        },
        {
          name: "Trop Kick",
          num: 688,
          isNonstandard: undefined,
        },
        {
          name: "Trump Card",
          num: 376,
          isNonstandard: "Past",
        },
        {
          name: "Twin Beam",
          num: 888,
          isNonstandard: undefined,
        },
        {
          name: "Twineedle",
          num: 41,
          isNonstandard: "Past",
        },
        {
          name: "Twinkle Tackle",
          num: 656,
          isNonstandard: "Past",
        },
        {
          name: "Twister",
          num: 239,
          isNonstandard: undefined,
        },
        {
          name: "U-turn",
          num: 369,
          isNonstandard: undefined,
        },
        {
          name: "Uproar",
          num: 253,
          isNonstandard: undefined,
        },
        {
          name: "Vacuum Wave",
          num: 410,
          isNonstandard: undefined,
        },
        {
          name: "V-create",
          num: 557,
          isNonstandard: undefined,
        },
        {
          name: "Veevee Volley",
          num: 741,
          isNonstandard: "LGPE",
        },
        {
          name: "Venom Drench",
          num: 599,
          isNonstandard: "Past",
        },
        {
          name: "Venoshock",
          num: 474,
          isNonstandard: undefined,
        },
        {
          name: "Victory Dance",
          num: 837,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Vine Whip",
          num: 22,
          isNonstandard: undefined,
        },
        {
          name: "Vise Grip",
          num: 11,
          isNonstandard: undefined,
        },
        {
          name: "Vital Throw",
          num: 233,
          isNonstandard: "Past",
        },
        {
          name: "Volt Switch",
          num: 521,
          isNonstandard: undefined,
        },
        {
          name: "Volt Tackle",
          num: 344,
          isNonstandard: undefined,
        },
        {
          name: "Wake-Up Slap",
          num: 358,
          isNonstandard: "Past",
        },
        {
          name: "Waterfall",
          num: 127,
          isNonstandard: undefined,
        },
        {
          name: "Water Gun",
          num: 55,
          isNonstandard: undefined,
        },
        {
          name: "Water Pledge",
          num: 518,
          isNonstandard: undefined,
        },
        {
          name: "Water Pulse",
          num: 352,
          isNonstandard: undefined,
        },
        {
          name: "Water Shuriken",
          num: 594,
          isNonstandard: undefined,
        },
        {
          name: "Water Sport",
          num: 346,
          isNonstandard: "Past",
        },
        {
          name: "Water Spout",
          num: 323,
          isNonstandard: undefined,
        },
        {
          name: "Wave Crash",
          num: 834,
          isNonstandard: undefined,
        },
        {
          name: "Weather Ball",
          num: 311,
          isNonstandard: undefined,
        },
        {
          name: "Whirlpool",
          num: 250,
          isNonstandard: undefined,
        },
        {
          name: "Whirlwind",
          num: 18,
          isNonstandard: undefined,
        },
        {
          name: "Wicked Blow",
          num: 817,
          isNonstandard: undefined,
        },
        {
          name: "Wicked Torque",
          num: 897,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Wide Guard",
          num: 469,
          isNonstandard: undefined,
        },
        {
          name: "Wildbolt Storm",
          num: 847,
          isNonstandard: "Unobtainable",
        },
        {
          name: "Wild Charge",
          num: 528,
          isNonstandard: undefined,
        },
        {
          name: "Will-O-Wisp",
          num: 261,
          isNonstandard: undefined,
        },
        {
          name: "Wing Attack",
          num: 17,
          isNonstandard: undefined,
        },
        {
          name: "Wish",
          num: 273,
          isNonstandard: undefined,
        },
        {
          name: "Withdraw",
          num: 110,
          isNonstandard: undefined,
        },
        {
          name: "Wonder Room",
          num: 472,
          isNonstandard: undefined,
        },
        {
          name: "Wood Hammer",
          num: 452,
          isNonstandard: undefined,
        },
        {
          name: "Work Up",
          num: 526,
          isNonstandard: undefined,
        },
        {
          name: "Worry Seed",
          num: 388,
          isNonstandard: undefined,
        },
        {
          name: "Wrap",
          num: 35,
          isNonstandard: undefined,
        },
        {
          name: "Wring Out",
          num: 378,
          isNonstandard: "Past",
        },
        {
          name: "X-Scissor",
          num: 404,
          isNonstandard: undefined,
        },
        {
          name: "Yawn",
          num: 281,
          isNonstandard: undefined,
        },
        {
          name: "Zap Cannon",
          num: 192,
          isNonstandard: undefined,
        },
        {
          name: "Zen Headbutt",
          num: 428,
          isNonstandard: undefined,
        },
        {
          name: "Zing Zap",
          num: 716,
          isNonstandard: undefined,
        },
        {
          name: "Zippy Zap",
          num: 729,
          isNonstandard: "LGPE",
        },
      ]
    })
  }
})