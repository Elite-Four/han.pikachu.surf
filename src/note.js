import kanaMap from './kana-map'

function nounce(letter) {
  if (letter === '-') {
    return '...'
  }
  if (letter === '.') {
    return '+'
  }
  return kanaMap[letter]
}

function note(word) {
  const result = [...word].map(nounce)
  return word + `（${result.join(' ')}）`
}

export default function (words) {
  if (!words) {
    return words
  }
  if (Array.isArray(words)) {
    return words.map(note)
  }
  return note(words)
}