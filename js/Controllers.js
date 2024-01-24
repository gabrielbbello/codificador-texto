export class Controllers{

  setRules() {
    let ruleE = document.querySelector('#rule-e').value
    let ruleI = document.querySelector('#rule-i').value
    let ruleA = document.querySelector('#rule-a').value
    let ruleO = document.querySelector('#rule-o').value
    let ruleU = document.querySelector('#rule-u').value

    if (this.textVerify(ruleE) ||
    this.textVerify(ruleI) ||
    this.textVerify(ruleA) ||
    this.textVerify(ruleO) ||
    this.textVerify(ruleU)) {
    return null
}

    return {
      ruleE,
      ruleI,
      ruleA,
      ruleO,
      ruleU
    }
  }

  encrypt(str) {
    const {
      ruleE,
      ruleI,
      ruleA,
      ruleO,
      ruleU
    } = this.setRules()

    const substitutionRules = {
      'e': ruleE,
      'i': ruleI,
      'a': ruleA,
      'o': ruleO,
      'u': ruleU
    }

    function substitute(match) {
      return substitutionRules[match] || match
    }

    let result = str.replace(/[eioua]/g, substitute)

    return result
  }

  decrypt(criptoStr) {
    const {
      ruleE,
      ruleI,
      ruleA,
      ruleO,
      ruleU
    } = this.setRules()

    const substitutionRules = {
      [ruleE]: 'e',
      [ruleI]: 'i',
      [ruleA]: 'a',
      [ruleO]: 'o',
      [ruleU]: 'u'
    }

    function substitute(match) {
      return substitutionRules[match] || match
    }

    let result = criptoStr.replace(new RegExp(`${ruleE}|${ruleI}|${ruleA}|${ruleO}|${ruleU}`, 'g'), substitute)

    return result
  }

  textVerify(value) {
    if (/[A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/.test(value)) {
      alert('Por favor, utilize apenas letras minúsculas e sem acentuações')
      return true
    }
  }

  copyToClipboard(result) {
    navigator.clipboard.writeText(result).then(() => {
      alert("O texto foi copiado!")
    })
  }

}