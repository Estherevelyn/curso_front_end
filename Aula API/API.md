# Aula API 


## O que é API?

-O significado de API é application Programming Interface, traduzido é interface de programação de aplicação

-É um sistema que facilita a comunição entre o usuário e o software 

-Por meio de uma API é possível fazer o envio de forma ágil, simples e segura 

-O API  funciona como uma espécie de “mensageira”, que recebe requisições de um cliente e transmite até um servidor, onde será processada e devolvida.

## O que são requsições? 

-ação ou efeito de requisitar; pedido, exigência

## O que são as funçoes assincronas?
 
-o ato de executar uma tarefa em "segundo plano", sem nosso controle direto disso. Sem explicitamente trabalhar com threads e coordená-las. Escrevendo basicamente da forma tradicional que temos. Porém, é importante frisar o comportamento do JavaScript de "executar uma coisa por vez". Com isso em mente o assíncrono no JavaScript vai separar seu código em duas partes: coisas que rodam agora, coisas que vão rodar depois de algo acontecer... Calma. Vai ficar mais fácil de entender.

## O que é um fetch? 

-A Fetch API resolve esses problemas oferecendo uma API mais simples e limpa para fazer requisições assíncronas. Além disso, a Fetch API fornece suporte para promessas, o que significa que os desenvolvedores podem usar o método then() para manipular a resposta da requisição e o método catch() para lidar com erros.

-A API Fetch oferece uma variedade de métodos para personalizar uma requisição, como headers personalizados, tipos de dados, autenticação, entre outros. Por exemplo, um desenvolvedor pode usar o método fetch() para solicitar um arquivo JSON do servidor e, em seguida, usar o método then() para manipular os dados recebidos.

## O que promises?

-Promises têm um método chamado .then(), que recebe uma função callback e retorna um "objeto-promessa". Não é um retorno dos dados, é a promessa do retorno destes dados.

-Assim, podemos escrever o código do que irá acontecer em seguida, com os dados recebidos pela Promise, e o JavaScript vai aguardar a resolução da Promise sem pausar o fluxo do programa.

-O resultado pode ou não estar pronto ainda, e não há forma de pegar o valor de uma Promise de modo síncrono; Só é possível requisitar à Promise que execute uma função quando o resultado estiver disponível - seja ele o que foi solicitado (os dados da API, por exemplo), ou uma mensagem de erro caso algo tenha dado errado com a requisição (o servidor pode estar fora do ar, por exemplo).

-No exemplo acima: ao iniciarmos uma cadeia de promessas - no caso, para fazer uma requisição HTTP - enquanto a resposta está pendente ela retorna um Promise object. O objeto, por sua vez, define uma instância do método .then(). Ao invés de passar o retorno da função callback diretamente para a função inicial, ela é passada para .then(). Quando o resultado da requisição HTTP chega, o corpo da requisição é convertido para JSON e este valor convertido é passado para o próximo método .then().

