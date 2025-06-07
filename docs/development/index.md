# Documentação de Desenvolvimento

Esta pasta contém documentação técnica e guias relacionados ao desenvolvimento do SMD Databook.

## Arquivos

- `nestjs-structure.md`: Documentação detalhada da estrutura do projeto NestJS, incluindo:
  - Organização de diretórios
  - Padrões de código
  - Convenções de nomenclatura
  - Estrutura de módulos

## Guias de Desenvolvimento

### Estrutura do Projeto
O projeto segue a estrutura padrão do NestJS com algumas personalizações:

```
src/
├── app/
│   ├── components/    # Módulos de componentes
│   ├── common/        # Utilitários comuns
│   ├── config/        # Configurações
│   └── utils/         # Scripts utilitários
```

### Convenções
- Use TypeScript para todo o código
- Siga o padrão de nomenclatura do NestJS
- Documente todas as classes e métodos
- Mantenha os testes atualizados

## Próximos Passos
- Adicionar guias de configuração do ambiente
- Documentar processos de CI/CD
- Criar templates para novos componentes 