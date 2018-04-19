// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

document.querySelector('#rolar').addEventListener('click', () => {
	document.querySelector('#recipienteResultados').classList.remove('oculto')
	const results = document.querySelector('#resultado')
	results.innerHTML = ''
	let sum = 0
	document.querySelectorAll('input').forEach(input => {
		const size = input.id.slice(11) // remove quantidadeD from ID
		for(let i = 0; i < input.value; i ++) {
			const number = Math.ceil(Math.random()*size)
			sum += number
			results.innerHTML += `${number} + `
		}
	})
	results.innerHTML = results.innerHTML === '' ? '0' : `${results.innerHTML.slice(0, results.innerHTML.length - 3)} = ${sum}`
})
