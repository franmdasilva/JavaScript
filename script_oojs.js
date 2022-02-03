class contaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação negada."
        }
        this._saldo = this._saldo - valor;

        return console.log(this._saldo);
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return console.log(this._saldo);
    }

}


class contaPoupança extends contaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'poupança';
        this.saldo = saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
        this.saldo = saldo;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class contaUniversitaria extends contaCorrente {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo, cartaoCredito);
        this.tipo = 'universitária';
        this.cartaoCredito = cartaoCredito;
        this.saldo = saldo;
    }

    sacar(valor) {
        if (valor > 500 || valor > this._saldo) {
            return "Operação negada."
        }
        this._saldo = this._saldo - valor;

        return console.log(this._saldo);
    }
}