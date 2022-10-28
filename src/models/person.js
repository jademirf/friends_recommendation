

export class Person {
  constructor(data) {
    const { name, cpf } = data

    if (!name || !cpf) {
      throw new Error('Please inform name and cpf')
    }
    if(typeof cpf != 'number') {
      throw new Error('CPF must be an number')
    }
    if (cpf.toString().length != 11) {
      throw new Error('CPF size must be equals 11')
    }
    this.name = name;
    this.cpf = cpf;
  }

  alreadyExists() {
    return personList.some(p => p.cpf == this.cpf)
  }

  save() {
    personList.push(this)
  }

}