const magicWord: string = "Abracadabra! ✨";

class WiseWizard {
  name: string;

  constructor(wizardName: string) {
    this.name = wizardName;
  }

  castSpell(): string {
    return `${this.name} Your code, bug-free! 🪄`;
  }
}

function giveAdvice(): string {
  return "Remember to take breaks and drink water! 💧";
}

const gandalf = new WiseWizard("Gandalf the Green");
console.log(magicWord);
console.log(gandalf.castSpell());
console.log(giveAdvice());
