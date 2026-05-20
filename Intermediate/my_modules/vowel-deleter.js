export default function deleteVowels(word) {
    const vowels = new Set(["a", "e", "i", "o", "u"])
    const consonants = []

    for (const character of word) {
        if (!vowels.has(character.toLowerCase())) {
            consonants.push(character.toUpperCase())
        }
    }

    return consonants.join("")
}