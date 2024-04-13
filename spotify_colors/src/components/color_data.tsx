// method to get genre color by name and index
function getGenreColor(genre: string, index: number): string {
    switch (genre) {
        case "alternative":
            return AlternativeColors[index];
        case "ambient":
            return AmbientColors[index];
        case "blues":
            return BluesColors[index];
        case "classical":
            return ClassicalColors[index];
        case "country":
            return CountryColors[index];
        case "dance":
            return DanceColors[index];
        case "disco":
            return DiscoColors[index];
        case "hip-hop":
            return HipHopColors[index];
        case "jazz":
            return JazzColors[index];
        case "metal":
            return MetalColors[index];
        case "pop":
            return PopColors[index];
        case "reggae":
            return ReggaeColors[index];
        case "rock":
            return RockColors[index];
        case "soul":
            return SoulColors[index];
        case "techno":
            return TechnoColors[index];
        default:
            // return randomly generated color
            return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
}

enum GenreColors {
    alternative = "#FF0000",
    ambient = "#FFA500",
    blues = "#FFFF00",
    classical = "#008000",
    country = "#0000FF",
    dance = "#4B0082",
    disco = "#EE82EE",
    hipHop = "#FF1493",
    jazz = "#FFD700",
    metal = "#00FFFF",
    pop = "#00FF00",
    reggae = "#800080",
    rock = "#000000",
    soul = "#00FFA6",
    techno = "#C0C0C0",
}

const masterGenreList: Array<string> = ["alternative", "ambient", "blues", "classical", "country", "dance", "disco", "hip-hop", "jazz", "metal", "pop", "reggae", "rock", "soul", "techno"];

/* alternative colors - 10 shades of red */
const AlternativeColors: Array<string> = ["#FF0000", "#ff0000ce", "#c21616", "#a40f0f", "#7f0b0b", "#5a0707", "#9a4040", "#da7b7b", "#cf2626", "#f87373"]
/* ambient colors - 10 shades of orange */
const AmbientColors: Array<string> = ["#FFA500", "#ff9e00", "#c27f00", "#a46a00", "#7f4b00", "#5a2d00", "#9a6e00", "#daae00", "#cf9b00", "#f8d100"]
/* blues colors - 10 shades of yellow */
const BluesColors: Array<string> = ["#FFFF00", "#fffb00", "#c2c200", "#a4a400", "#7f7f00", "#5a5a00", "#9a9a00", "#dada00", "#cfcf00", "#f8f800"]
/* classical colors - 10 shades of green */
const ClassicalColors: Array<string> = ["#008000", "#00ce00", "#009b00", "#007f00", "#004b00", "#003500", "#409a40", "#7bda7b", "#26cf26", "#73f873"]
/* country colors - 10 shades of blue */
const CountryColors: Array<string> = ["#0000FF", "#0000ce", "#00009b", "#00007f", "#00004b", "#000035", "#40409a", "#7b7bda", "#2626cf", "#7373f8"]
/* dance colors - 10 shades of indigo */
const DanceColors: Array<string> = ["#4B0082", "#4b00ce", "#3f009b", "#3a007f", "#2b004b", "#1f0035", "#5a409a", "#9a7bda", "#3f26cf", "#8a73f8"]
/* disco colors - 10 shades of violet */
const DiscoColors: Array<string> = ["#EE82EE", "#ee00ce", "#9b009b", "#7f007f", "#4b004b", "#350035", "#9a409a", "#da7bda", "#cf26cf", "#f873f8"]
/* hip-hop colors - 10 shades of pink */
const HipHopColors: Array<string> = ["#FF1493", "#ff00ce", "#9b009b", "#7f007f", "#4b004b", "#350035", "#9a409a", "#da7bda", "#cf26cf", "#f873f8"]
/* jazz colors - 10 shades of gold */
const JazzColors: Array<string> = ["#FFD700", "#ffce00", "#9b9b00", "#7f7f00", "#4b4b00", "#353500", "#9a9a40", "#dada7b", "#cfcf26", "#f8f873"]
/* metal colors - 10 shades of cyan */
const MetalColors: Array<string> = ["#00FFFF", "#00E5E5", "#00CCCC", "#00B2B2", "#009999", "#007F7F", "#006666", "#004C4C", "#003333", "#001919"]
/* pop colors - 10 shades of lime */
const PopColors: Array<string> = ["#00FF00", "#00E500", "#00CC00", "#00B200", "#009900", "#007F00", "#006600", "#004C00", "#003300", "#001900"]
/* reggae colors - 10 shades of purple */
const ReggaeColors: Array<string> = ["#800080", "#730073", "#660066", "#590059", "#4C004C", "#3F003F", "#320032", "#260026", "#190019", "#0C000C"]
/* rock colors - 10 shades of black */
const RockColors: Array<string> = ["#000000", "#1A1A1A", "#333333", "#4D4D4D", "#666666", "#808080", "#999999", "#B3B3B3", "#CCCCCC", "#E6E6E6"]
/* soul colors - 10 shades of seafoam */
const SoulColors: Array<string> = ["#00FFA6", "#00E5A0", "#00CC99", "#00B28F", "#009986", "#007F7F", "#006666", "#004C4C", "#003333", "#001919"]
/* techno colors - 10 shades of silver */
const TechnoColors: Array<string> = ["#C0C0C0", "#B3B3B3", "#A6A6A6", "#999999", "#8C8C8C", "#808080", "#737373", "#666666", "#595959", "#4C4C4C"]

// export all
export { getGenreColor, GenreColors, masterGenreList, AlternativeColors, AmbientColors, BluesColors, ClassicalColors, 
        CountryColors, DanceColors, DiscoColors, HipHopColors, JazzColors, 
        MetalColors, PopColors, ReggaeColors, RockColors, SoulColors, TechnoColors };