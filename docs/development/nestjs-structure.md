# Estrutura do Projeto NestJS

```
smd_databook/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── controllers/
│   │   │   │   ├── ComponentController.ts
│   │   │   │   ├── ManufacturerController.ts
│   │   │   │   └── PackageController.ts
│   │   │   ├── services/
│   │   │   │   ├── ComponentService.ts
│   │   │   │   ├── ManufacturerService.ts
│   │   │   │   └── PackageService.ts
│   │   │   ├── dto/
│   │   │   │   ├── ComponentDTO.ts
│   │   │   │   ├── ManufacturerDTO.ts
│   │   │   │   └── PackageDTO.ts
│   │   │   ├── entities/
│   │   │   │   ├── Component.entity.ts
│   │   │   │   ├── Manufacturer.entity.ts
│   │   │   │   └── Package.entity.ts
│   │   │   └── interfaces/
│   │   │       ├── IComponentService.ts
│   │   │       ├── IManufacturerService.ts
│   │   │       └── IPackageService.ts
│   │   ├── common/
│   │   │   ├── decorators/
│   │   │   ├── filters/
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   └── pipes/
│   │   ├── config/
│   │   │   ├── database.config.ts
│   │   │   └── app.config.ts
│   │   ├── docs/
│   │   │   ├── database.puml
│   │   │   └── class-diagram.puml
│   │   ├── json/
│   │   │   └── types/
│   │   │       ├── packages.json
│   │   │       ├── manufacturer.json
│   │   │       └── types.json
│   │   ├── utils/
│   │   │   ├── extractPackages.js
│   │   │   ├── extractManufacturers.js
│   │   │   └── extractTypes.js
│   │   ├── app.module.ts
│   │   ├── app.controller.ts
│   │   ├── app.service.ts
│   │   └── main.ts
│   └── test/
│       ├── e2e/
│       └── unit/
├── dist/
├── node_modules/
├── .env
├── .env.example
├── .gitignore
├── nest-cli.json
├── package.json
├── tsconfig.json
└── README.md
```

## Descrição dos Diretórios

### `/src/app/components`
Contém os módulos principais da aplicação:
- **controllers/**: Controladores REST para cada entidade
- **services/**: Lógica de negócios e operações com o banco de dados
- **dto/**: Data Transfer Objects para validação e transformação de dados
- **entities/**: Modelos de dados e definições de entidades
- **interfaces/**: Contratos e interfaces TypeScript

### `/src/app/common`
Componentes reutilizáveis e utilitários:
- **decorators/**: Decoradores personalizados
- **filters/**: Filtros de exceção
- **guards/**: Guardas de autenticação/autorização
- **interceptors/**: Interceptadores de requisição/resposta
- **pipes/**: Pipes de transformação de dados

### `/src/app/config`
Arquivos de configuração:
- **database.config.ts**: Configurações do banco de dados
- **app.config.ts**: Configurações gerais da aplicação

### `/src/app/docs`
Documentação do projeto:
- **database.puml**: Diagrama da estrutura do banco de dados
- **class-diagram.puml**: Diagrama de classes do projeto

### `/src/app/json`
Dados estruturados:
- **types/**: Arquivos JSON com dados de pacotes, fabricantes e tipos

### `/src/app/utils`
Scripts utilitários:
- **extractPackages.js**: Extração de dados de pacotes
- **extractManufacturers.js**: Extração de dados de fabricantes
- **extractTypes.js**: Extração de dados de tipos

### Arquivos Raiz
- **app.module.ts**: Módulo principal da aplicação
- **app.controller.ts**: Controlador principal
- **app.service.ts**: Serviço principal
- **main.ts**: Ponto de entrada da aplicação

### Arquivos de Configuração
- **.env**: Variáveis de ambiente
- **.env.example**: Exemplo de variáveis de ambiente
- **nest-cli.json**: Configuração do CLI do NestJS
- **package.json**: Dependências e scripts
- **tsconfig.json**: Configuração do TypeScript 