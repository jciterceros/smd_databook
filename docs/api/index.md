# Documentação da API

Esta pasta contém a documentação da API REST do SMD Databook.

## Estrutura da Documentação

A documentação da API será organizada da seguinte forma:

- `endpoints/` - Documentação detalhada de cada endpoint
- `schemas/` - Esquemas de dados e modelos
- `examples/` - Exemplos de requisições e respostas

## Endpoints Principais

### Componentes
- `GET /api/components` - Lista todos os componentes
- `GET /api/components/:id` - Obtém detalhes de um componente
- `POST /api/components` - Cria um novo componente
- `PUT /api/components/:id` - Atualiza um componente
- `DELETE /api/components/:id` - Remove um componente

### Fabricantes
- `GET /api/manufacturers` - Lista todos os fabricantes
- `GET /api/manufacturers/:id` - Obtém detalhes de um fabricante
- `POST /api/manufacturers` - Cria um novo fabricante
- `PUT /api/manufacturers/:id` - Atualiza um fabricante
- `DELETE /api/manufacturers/:id` - Remove um fabricante

## Autenticação

A API utiliza autenticação JWT. Para acessar endpoints protegidos:

1. Obtenha um token através do endpoint de login
2. Inclua o token no header `Authorization: Bearer <token>`

## Convenções

- Use JSON para todas as requisições e respostas
- Inclua códigos de status HTTP apropriados
- Documente todos os parâmetros e respostas
- Forneça exemplos de uso 