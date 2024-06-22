export const generateCode = () => {
  const getRandomChar = () => {
    const randomNumber = Math.floor(Math.random() * 62)

    // 0-9
    if (randomNumber < 10) {
      return String.fromCharCode(48 + randomNumber)
    }

    // A-Z
    if (randomNumber < 36) {
      return String.fromCharCode(65 + randomNumber - 10)
    }

    // a-z
    return String.fromCharCode(97 + randomNumber - 36)
  }

  const codeArray = Array.from({ length: 6 }, getRandomChar)
  const code = codeArray.join('')

  return code
}
