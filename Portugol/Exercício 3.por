programa {
    real  consumo_medio, combustivel_gasto
    inteiro distancia_total
	funcao inicio() {
		
		escreva("Qual a distância total percorrida (KM): ")
		leia(distancia_total)
		
		escreva("total de combustivel gasto: ")
		leia(combustivel_gasto)
		
		consumo_medio = combustivel_gasto / distancia_total 
		
		escreva(" \n O consumo médio foi de: " , consumo_medio)
	}
}
