# Bem vindos ao repositório do trybers-and-dragons

<details>
<summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />
    Para este projeto, foi aplicado os princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game).
</details>


<details>
<summary><strong> ⚠️ Configurações mínimas para execução do projeto</strong></summary><br />

Na sua máquina você deve ter:
 - Node 
 - Docker
 - Docker-compose versão >=1.29.2
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
