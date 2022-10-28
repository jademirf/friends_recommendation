

export class Friendship {
  constructor(data) {
    const { cpf1, cpf2 } = data
    if (!this.userExists(cpf1)) {
      throw new Error(`No user found for CPF1`)
    }
    if (!this.userExists(cpf2)) {
      throw new Error(`No user found for CPF2`)
    }
    this.cpf1 = cpf1;
    this.cpf2 = cpf2;
  }

  userExists(cpf) {
    return personList.some(p => p.cpf == cpf)
  }
  
  alreadExists() {
    return friendshipRelationships.some(p => p.cpf1 === this.cpf1 && p.cpf2 === this.cpf2)
  }

  save() {
    friendshipRelationships.push(this)
  }

}