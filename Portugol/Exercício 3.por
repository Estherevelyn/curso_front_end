programa {
    real  consumo_medio, combustivel_gasto
    inteiro distancia_total
	funcao inicio() {
		
		escreva("Qual a dist�ncia total percorrida (KM): ")
		leia(distancia_total)
		
		escreva("total de combustivel gasto: ")
		leia(combustivel_gasto)
		
		consumo_medio = combustivel_gasto / distancia_total 
		
		escreva(" \n O consumo m�dio foi de: " , consumo_medio)
	}
}
