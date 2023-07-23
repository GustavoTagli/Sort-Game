# SortGame

SortGame é um aplicativo web que apresenta um jogo onde o objetivo é organizar tubos coloridos de maneira correta. O jogo é construído em JavaScript e possui três classes principais: `Game`, `Tube` e `Component`. Cada tubo pode conter até 5 componentes coloridos. O jogador deve organizar as cores para que todos os tubos contenham os componentes da mesma cor e em quantidade igual a 5.

## Como Jogar

1. Abra o arquivo `index.html` em seu navegador.

2. O jogo começa automaticamente, e você verá 8 tubos na tela, numerados de 0 a 7. O objetivo é organizar os componentes coloridos nos tubos de forma que todos os tubos contenham 5 componentes da mesma cor.

3. Clique em um tubo para selecionar o componente colorido que deseja mover. Em seguida, clique em outro tubo vazio para mover o componente selecionado para esse tubo.

4. Você pode mover mais de um componente de uma vez, desde que os componentes a serem movidos sejam da mesma cor e estejam empilhados no mesmo tubo.

5. O jogo termina assim que todos os 6 tubos contiverem componentes da mesma cor e em quantidade igual a 5.

## Tecnologias Utilizadas

- **JavaScript** (JS): Responsável pela lógica do jogo e interações do usuário.
- **HTML**: Fornece a estrutura da página da web e a interface do jogo.
- **CSS**: Realiza a estilização dos tubos e cores.

## Como Funciona

O SortGame é composto por três classes principais:

1. **Game**: Responsável pelo gerenciamento do jogo. Controla o início do jogo, a criação dos tubos e componentes coloridos, além de adicionar eventos aos tubos para permitir a interação do usuário.

2. **Tube**: Representa cada tubo do jogo. Cada tubo pode conter até 5 componentes coloridos, e a classe `Tube` possui métodos para adicionar e remover componentes, além de verificar se está cheio ou se contém a combinação correta de componentes.

3. **Component**: Representa cada componente colorido. Cada componente possui uma cor e é renderizado na tela dentro dos tubos.

O jogo é iniciado com componentes coloridos distribuídos aleatoriamente nos tubos. O jogador deve mover os componentes entre os tubos para organizá-los corretamente.

## Contribuindo

Se você encontrar algum problema ou tiver ideias para melhorar o SortGame, sinta-se à vontade para contribuir! Você pode relatar problemas, sugerir melhorias ou enviar solicitações de pull para o repositório no GitHub.
