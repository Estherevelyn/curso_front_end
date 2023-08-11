programa {
  inclua biblioteca Matematica --> mat


  funcao calcula_porcentagem(real numero_porcento, real porcentagem){
    retorne (numero_porcento * porcentagem)/100
  }
  funcao multiplicacao(real numero, real numer2){
    retorne numero * numero2
  }
  funcao divisao(real numero, real numer2){
    retorne numero / numero2
  }
  funcao raiz_quadrada(inteiro numero) {
    retorne mat.raiz(numero, 2)
  }


  funcao valor_de_pi(){
    retorne mat.PI
  }


  funcao menu(){
   escreva("Informe o que deseja fazer: \n")
    escreva("01 - soma \n")
    escreva("02 - subtração \n")
    escreva("03 - multiplicação \n")
    escreva("04 - divisão \n")
    escreva("05 - raiz quadrada \n")
    escreva("06 - porcetagem \n")
    escreva("07 - valor de PI \n")
    escreva("99 - Sair \n")
    leia(opcao)
  }


  funcao inicio() {
    inteiro opcao
    real numero_porcento, porcentagem, numero, numero2, numero_somado = 0, numero_dividido
   
    enquanto(opcao != 99)
    menu()
    leia(opcao)


    se (opcao == 01){
       enquanto (numero != 00){
       escreva("Informe o número a ser somado: ")
       leia(numero)
       numero_somado += numero
       escreva(numero_somado, "\n")
       }
    }
    senao se (opcao == 03){
      limpa()
      escreva("Informe o número a ser multiplicado: ")
      leia(numero)
      escreva("Informe o multiplicador: ")
      leia(numero2)
      limpa()
      escreva(multiplicacao(numero, numero2))
      leia(numero2)
    }
    senao se (opcao == 04){
      limpa()
      escreva("Informe o número a ser dividido: ")
      leia(numero)
      escreva("Informe o divisor: ")
      leia(numero2)
      limpa()
      escreva(divisao(numero, numero2))
      leia(numero2)
      limpa()
      se (numero == 0 ou numero2 == 0){
        escreva("Não é possivel divisões com 0")
      }
      senao {
        escreva(divisao(numero, numero2))
      }
    }
    senao se (opcao == 05){
       limpa()
      escreva("Informe o valorque deseja saber a raiz: ")
      leia(numero)
      limpa()
      escreva(raiz_quadrada(numero))
    }
    senao se ( opcao == 06){
      limpa()
      escreva("Informe o número desejado: ")
      leia(numero_porcento)
      escreva("\n Quanto porcento? ")
      leia(porcentagem)
      limpa()
      escreva(calcula_porcentagem(numero_porcento, porcentagem))


    }
     se (opcao == 07) {
       limpa()
      escreva(valor_de_pi())
    }
    senao {
      limpa()
    escreva("Informe uma opçõa valida! \n")
    }
  }


