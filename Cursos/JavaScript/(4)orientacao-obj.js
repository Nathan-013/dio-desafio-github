//ORIENTAÇÃO A OBJETOS: CLASSES

class Conta {
  constructor (agencia, num, tipo, saldo=0) {
    this.agencia = agencia
    this.numero = num
    this.tipo = tipo
    this.saldo = saldo
  }

  get saldo() {
    return this._saldo
  }

  set saldo(valor) {
    this._saldo = valor
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return 'Operação Negada'
    }
    
    return this._saldo -= valor
  }

  depositar(valor) {
    return this._saldo += valor
  }
}

class ContaCorrente extends Conta {
  constructor(agencia, numero, saldo, cartaoCredito){
    super(agencia, numero, saldo)
    this.tipo = 'Corrente'
    this.cartaoCredito = cartaoCredito
  }

  get cartaoCredito() {
    return this._cartaoCredito
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor
  }
}

class ContaPoupanca extends Conta {
  constructor(agencia, numero, saldo){
    super(agencia, numero, saldo)
    this.tipo = 'Poupança'
  }
}

class ContaUniversitaria extends Conta {
  constructor(agencia, numero, saldo){
    super(agencia, numero, saldo)
    this.tipo = 'Universitária'
  }

  sacar(valor) {
    if (valor > 500){
      return 'Operação Negada'
    }

    return this._saldo -= valor
  }
}


