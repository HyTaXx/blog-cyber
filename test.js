// Désobfuscation Challenge 38

// 1. Premier bloc - décodage simple
console.log("=== Premier bloc ===");
let d = [1856, 1824, 1776, 1728, 1776, 1728, 1776];
let decoded1 = d.map(c => String.fromCharCode(c >> 4)).join('');
console.log("Premier message:", decoded1); // "trololo"

// 2. Fonction l33t
console.log("\n=== Fonction l33t ===");
console.log("vive le reverse d'AST");

// 3. Test de brute force pour trouver la bonne clé
console.log("\n=== BRUTE FORCE - Test de toutes les clés possibles ===");

let encodedArray = [
    65353704, 65353663, 65353663, 65353707, 65353680,
    65353701, 65353663, 65353709, 65353680, 65353706,
    65353710, 65353724, 65353718, 65353680, 65353707,
    65353706, 65353696, 65353709, 65353705, 65353722,
    65353724, 65353708, 65353710, 65353723, 65353702,
    65353696, 65353697
];

function isReadableText(text) {
    // Vérifie si le texte contient principalement des caractères ASCII imprimables
    let printable = 0;
    for (let char of text) {
        let code = char.charCodeAt(0);
        if ((code >= 32 && code <= 126) || code === 10 || code === 13) {
            printable++;
        }
    }
    return printable / text.length > 0.8; // Au moins 80% de caractères imprimables
}

function testKey(key, method = "xor") {
    let result = encodedArray.map(c => {
        let decoded;
        if (method === "xor") {
            decoded = (c ^ key) & 0xFF;
        } else if (method === "lsb") {
            decoded = c & 0xFF;
        } else if (method === "sub") {
            decoded = (c - key) & 0xFF;
        }
        return String.fromCharCode(decoded);
    }).join('');
    
    return result;
}

// Test avec XOR
console.log("=== Test XOR avec différentes clés ===");
for (let key = 0; key < 256; key++) {
    let result = testKey(key, "xor");
    if (isReadableText(result) || result.match(/[a-zA-Z]{5,}/)) {
        console.log(`Clé XOR ${key}: "${result}"`);
    }
}

// Test direct LSB
console.log("\n=== Test direct LSB ===");
let directResult = testKey(0, "lsb");
console.log(`Direct LSB: "${directResult}"`);

// Test soustraction
console.log("\n=== Test soustraction avec différentes clés ===");
for (let key = 65353600; key < 65353800; key += 10) {
    let result = encodedArray.map(c => {
        let decoded = (c - key) & 0xFF;
        return String.fromCharCode(decoded);
    }).join('');
    
    if (isReadableText(result) || result.match(/[a-zA-Z]{5,}/)) {
        console.log(`Clé SUB ${key}: "${result}"`);
    }
}

// Test avec la valeur de base commune
console.log("\n=== Test avec valeur de base commune ===");
let baseValue = 65353663; // La valeur la plus fréquente
let baseResult = encodedArray.map(c => {
    let decoded = (c - baseValue) & 0xFF;
    return String.fromCharCode(decoded);
}).join('');
console.log(`Base ${baseValue}: "${baseResult}"`);

// Analyse des valeurs
console.log("\n=== Analyse des patterns ===");
console.log("Valeurs uniques:", [...new Set(encodedArray)].sort((a,b) => a-b));
console.log("Différences avec la première valeur:");
encodedArray.forEach((val, i) => {
    let diff = val - encodedArray[0];
    console.log(`${i}: ${val} - ${encodedArray[0]} = ${diff} = '${String.fromCharCode(Math.abs(diff) & 0xFF)}'`);
});