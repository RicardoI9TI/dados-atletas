class Atleta{
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
    this.categoria = "";
    this.IMC = 0;
    this.mediaValida = 0;
  }

  calculaCategoria(){
    if(this.idade >=16 && this.idade <= 30){
      this.categoria = "Adulto";
    }else if(this.idade >= 14 && this.idade < 16){
      this.categoria = "Intermediário";
    }else if(this.idade >= 12 && this.idade < 14){
      this.categoria = "Juvenil";
    }else if(this.idade >= 9 && this.idade < 12){
      this.categoria = "Infantil";
    }else {
      this.categoria = "Sem categoria";
    }
  }

  calculaIMC(){
    this.IMC = this.peso / (this.altura * this.altura);
  }

  calculaMediaValida(){
    let notas = this.notas.sort((b, a) => a - b);
    notas = notas.slice(1,notas.length-1);
    let somaNota = notas.reduce(function(total, atual){
            return total + atual;
        }, 0);
        this.mediaValida = somaNota/notas.length;
  }

  obtemNomeAtleta(){
    return this.nome;
  }

  obtemIdadeAtleta(){
    return this.idade;
  }

  obtemPesoAtleta(){
    return this.peso;
  }

  obtemAlturaAtleta(){
    return this.altura;
  }

  obtemNotasAtleta(){
    return this.notas;
  }

  obtemCategoria(){
    this.calculaCategoria();
    return this.categoria;
  }

  obtemIMC(){
    this.calculaIMC();
    return this.IMC;
  }

  obtemMediaValida(){
    this.calculaMediaValida();
    return this.mediaValida;
  }
}

let atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()} anos`);
console.log(`Peso: ${atleta.obtemPesoAtleta()} Kg`);
console.log(`Altura: ${atleta.obtemAlturaAtleta()} m`);
console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média Válida: ${atleta.obtemMediaValida()}`);
