# Projeto Currículo

Projeto desenvolvido para a disciplina de **Programação Web Front-end**.

Aplicação web que permite ao usuário preencher um formulário com seus dados pessoais, foto, objetivo e descrição profissional, visualizando em tempo real o currículo sendo montado — e, ao final, gerando um arquivo PDF pronto para download.

## Descrição do projeto

O site é composto por duas páginas principais:

- **Home (`index.html`)**: página inicial de apresentação do sistema, com uma breve descrição do projeto e uma galeria destacando os recursos disponíveis.
- **Criar Currículo (`criar_curriculo.html`)**: página com um formulário de preenchimento ao lado de uma pré-visualização do currículo, atualizada em tempo real conforme o usuário digita. Ao final, o currículo pode ser exportado como **PDF**.

### Funcionalidades

- Preenchimento de dados pessoais e de contato (nome, sobrenome, endereço, cidade, estado, CEP, telefone e e-mail) com atualização instantânea do preview do currículo.
- Máscara automática de formatação para o campo de telefone.
- Upload de foto com pré-visualização tanto no formulário quanto no currículo.
- Preenchimento de campos de **Objetivo** e **Descrição Profissional**.
- Geração e download do currículo em **PDF**, utilizando a biblioteca html2pdf.js.
- Validação de campos obrigatórios do formulário.

## Estrutura do projeto

```
projeto_curriculo/
├── index.html                # Página inicial (Home) do site
├── criar_curriculo.html      # Página com formulário e preview/geração do currículo
├── css/
│   ├── style.css              # Estilos da página inicial (Home)
│   └── criar_curriculo.css    # Estilos do formulário e do cartão/preview do currículo
├── js/
│   └── script.js              # Vincula os campos do formulário ao preview do currículo em tempo real
├── icons/
│   ├── home.ico                # Ícone do menu "Home"
│   └── docs.ico                # Ícone do menu "Criar Currículo"
├── img/
│   ├── foto_perfil.jpg         # Foto padrão do currículo
│   ├── escritorio.avif         # Imagem ilustrativa da Home
│   └── tecnologia.avif         # Imagem ilustrativa da Home
└── README.md
```

### Descrição dos arquivos

Arquivo Responsabilidade
`index.html` - Página inicial (Home) do site, com apresentação do projeto e seus recursos 
`criar_curriculo.html` - Formulário de preenchimento dos dados, preview do currículo e lógica de geração do PDF (função `gerarPdf()`, além da máscara de telefone)
`css/style.css` - Estilização da página inicial (Home)
`css/criar_curriculo.css` - Estilização do formulário e do cartão/preview do currículo
`js/script.js` - Sincroniza os campos do formulário com o preview do currículo em tempo real e trata o upload da foto

## Como executar

1. Faça o download ou clone este repositório.
2. Abra o arquivo `index.html` diretamente no navegador de sua preferência — essa é a página inicial do projeto.
3. Pelo menu de navegação, acesse **"Criar Currículo"**.
4. Preencha os campos do formulário para ver o currículo sendo montado em tempo real.
5. Clique em **"Criar Currículo"** para gerar e baixar o currículo em PDF.

Não é necessário nenhum servidor ou instalação de dependências — o projeto é feito em **HTML, CSS e JavaScript puro (vanilla)**, com apenas uma biblioteca externa (html2pdf.js) carregada via CDN.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- biblioteca html2pdf

## Integrantes

- Igor Rafael Pitoli
- Ghabriel Jun Aizawa
- Eduardo de Souza Oller
