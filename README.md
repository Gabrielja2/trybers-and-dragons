# Bem vindos ao repositório do trybers-and-dragons

<details>
<summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />
    Para este projeto, foi aplicado os princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game).
</details>

# Orientações

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker

  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `trybers_and_dragons`.
  - A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybers_and_dragons bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

<img src="images/remote-container.png" width="800px" >  

---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  ✨ **Dica:** O avaliador espera que a versão do `node` utilizada seja a 16.

  <br/>
</details>

<details>
<summary><strong>Como ter acesso ao projeto e instalar as dependências</strong></summary><br />

    1. Entre na pasta do repositório que você acabou de clonar ou fazer o download do arquivo zip:
    * `cd pasta-do-repositório`

    2. Instale as dependências:
    *`npm install`

    3. Suba os imagens do servidor node e do banco de do docker-compose com o comando:
    *`docker-compose up -d`

    4. Após subir o container, roda as migrations com o comando:
    *`npm run db:reset`

    5. Por fim acesse o bash da imagem do node e deixe o aplicação rodando na porta 3001 com o comando abaixo, mas lembre-se de verificar se não existe outro processo rodando na mesma porta:
    *`npm run dev` 
</details>
