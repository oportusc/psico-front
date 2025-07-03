# Configuración de Conexión con Backend

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Configuración del backend
VITE_GRAPHQL_URL=http://localhost:3000/graphql
VITE_API_URL=http://localhost:3000
```

**Nota:** Solo necesitas `VITE_GRAPHQL_URL` para la funcionalidad actual. Las otras variables son opcionales.

## Esquema GraphQL Requerido

Tu backend de NestJS debe tener el siguiente esquema GraphQL para usuarios:

### Tipos
```graphql
type User {
  id: ID!
  nombre: String!
  apellidos: String!
  rut: String!
  email: String!
  telefono: String!
  direccion: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CreateUserInput {
  nombre: String!
  apellidos: String!
  rut: String!
  email: String!
  telefono: String!
  direccion: String!
}

input UpdateUserInput {
  nombre: String
  apellidos: String
  rut: String
  email: String
  telefono: String
  direccion: String
}
```

### Queries
```graphql
type Query {
  users: [User!]!
  user(id: ID!): User
}
```

### Mutations
```graphql
type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
  deleteUser(id: ID!): User!
}
```

## Configuración del Backend

1. **Asegúrate de que tu servidor GraphQL esté corriendo en el puerto 3000**
2. **Habilita CORS en tu backend de NestJS**:

```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configurar CORS
  app.enableCors({
    origin: 'http://localhost:5173', // URL de tu frontend
    credentials: true,
  });
  
  await app.listen(3000);
}
bootstrap();
```

## Pruebas

1. Inicia tu backend de NestJS
2. Inicia el frontend con `yarn dev`
3. Ve al formulario de agendamiento
4. Completa el formulario y envía
5. Verifica en la consola del navegador que no hay errores
6. Verifica en tu base de datos que se creó el usuario

## Troubleshooting

### Error de CORS
Si ves errores de CORS, asegúrate de que:
- El backend esté corriendo en el puerto correcto
- CORS esté habilitado en el backend
- La URL en `.env` sea correcta

### Error de GraphQL
Si ves errores de GraphQL, verifica que:
- El esquema GraphQL coincida con el esperado
- Las mutaciones y queries estén implementadas
- Los tipos de datos sean correctos

### Error de Conexión
Si no se puede conectar al backend:
- Verifica que el backend esté corriendo
- Verifica la URL en la configuración
- Revisa los logs del backend 