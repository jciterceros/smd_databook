# SMD Databook

SMD Databook é uma aplicação em desenvolvimento para auxiliar na identificação e catalogação de componentes eletrônicos SMD (Surface Mount Device). Esta ferramenta está sendo criada para facilitar o trabalho de técnicos, engenheiros e entusiastas da eletrônica que precisam identificar e documentar componentes SMD.

## 🚧 Status do Projeto

O projeto está atualmente em fase de desenvolvimento. A primeira fase de implementação está focada no desenvolvimento do sistema de web scraping para coleta de dados de componentes SMD.

### Fase Atual (Em Andamento)
- ✅ Configuração inicial do projeto
- ✅ Implementação do sistema de scraping
- 🔄 Coleta de dados de componentes SMD
- ⏳ Processamento e organização dos dados coletados

## 🚀 Tecnologias Utilizadas

### Fase Inicial
- Node.js
- React
- Material-UI (para interface)

### Arquitetura Final Planejada

#### Backend
- NestJS (Framework Node.js)
- PostgreSQL (Banco de dados principal)
- TypeORM (ORM)
- JWT para autenticação
- Swagger para documentação da API

#### Frontend
- Angular v17
- Angular Material
- RxJS
- NgRx (Gerenciamento de estado)
- SCSS para estilização

#### DevOps & Infraestrutura
- Docker
- Docker Compose
- GitHub Actions (CI/CD)
- PostgreSQL (Containerizado)
- Nginx (Proxy reverso)

## 🗺️ Roadmap

### Fase 1 - Coleta de Dados (Em Andamento)
- [x] Configuração do ambiente de desenvolvimento
- [x] Implementação do sistema de scraping
- [x] Coleta de dados de múltiplas fontes
- [x] Validação e limpeza dos dados coletados
- [x] Estruturação do banco de dados
- [x] Documentação do banco de dados
- [x] Documentação da arquitetura
- [ ] Configuração inicial do PostgreSQL

### Fase 2 - Refatoração e Nova Arquitetura
- [ ] Migração do backend para NestJS
- [ ] Migração do frontend para Angular v17
- [ ] Implementação da nova estrutura de banco de dados
- [ ] Configuração do ambiente Docker
- [ ] Implementação de CI/CD com GitHub Actions
- [ ] Configuração de ambientes de desenvolvimento, staging e produção

### Fase 3 - Desenvolvimento da Interface
- [ ] Design da interface do usuário com Angular Material
- [ ] Implementação do sistema de busca
- [ ] Desenvolvimento do sistema de catalogação
- [ ] Criação de visualizações de dados
- [ ] Implementação de filtros e ordenação
- [ ] Sistema de autenticação e autorização

### Fase 4 - Funcionalidades Avançadas
- [ ] Sistema de exportação de dados
- [ ] API RESTful com NestJS
- [ ] Sistema de contribuição da comunidade
- [ ] Documentação técnica com Swagger
- [ ] Testes unitários e e2e
- [ ] Otimização de performance

### Fase 5 - Lançamento e Manutenção
- [ ] Beta testing
- [ ] Correção de bugs
- [ ] Lançamento da primeira versão
- [ ] Monitoramento e logging
- [ ] Coleta de feedback
- [ ] Implementação de melhorias contínuas

## 🎯 Objetivo

O objetivo principal do SMD Databook é fornecer uma base de dados organizada e de fácil acesso para componentes eletrônicos SMD, permitindo:

- Identificação rápida de componentes através de suas marcações
- Catalogação de novos componentes
- Consulta de especificações técnicas
- Compartilhamento de informações sobre componentes

## ✨ Funcionalidades

- **Busca de Componentes**: Encontre componentes através de suas marcações, tipo ou características
- **Catalogação**: Adicione novos componentes ao banco de dados
- **Especificações Técnicas**: Acesse informações detalhadas sobre cada componente
- **Interface Intuitiva**: Design amigável e fácil de usar
- **Exportação de Dados**: Exporte informações em diferentes formatos

## 📋 Pré-requisitos

### Desenvolvimento
- Node.js (versão 18 ou superior)
- npm ou yarn
- Git
- Docker e Docker Compose
- PostgreSQL (para desenvolvimento local)

### Produção
- Servidor com Docker
- PostgreSQL
- Nginx
- Certificado SSL

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/jciterceros/smd_databook.git
```

2. Entre no diretório do projeto:
```bash
cd smd_databook
```

3. Instale as dependências:
```bash
npm install
# ou
yarn install
```

4. Inicie a aplicação:
```bash
npm start
# ou
yarn start
```

## 💻 Como Usar

1. **Busca de Componentes**
   - Digite a marcação do componente na barra de busca
   - Selecione o tipo de componente desejado
   - Visualize os resultados encontrados

2. **Adicionar Novo Componente**
   - Clique no botão "Adicionar Componente"
   - Preencha as informações necessárias
   - Salve o novo componente

3. **Visualizar Detalhes**
   - Clique em um componente na lista
   - Veja todas as especificações técnicas
   - Acesse a documentação relacionada

## 📝 Estrutura do Projeto

```
smd_databook/
├── src/
│   ├── components/     # Componentes React
│   ├── database/       # Configuração e modelos do banco de dados
│   ├── utils/          # Funções utilitárias
│   └── main.js         # Ponto de entrada da aplicação
├── public/             # Arquivos estáticos
└── package.json        # Dependências e scripts
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

Se você tiver alguma dúvida ou sugestão, por favor abra uma issue no GitHub ou entre em contato através no meu linkedln: https://www.linkedin.com/in/fernando-flores-terceros-83486625/

## 🙏 Agradecimentos

- A todos os contribuidores que ajudaram no desenvolvimento
- À comunidade open source por fornecer as ferramentas necessárias
- Aos usuários que fornecem feedback e sugestões de melhorias 