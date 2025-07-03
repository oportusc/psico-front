import { gql } from '@apollo/client';

// Tipos GraphQL para usuarios
export const USER_FRAGMENT = gql`
  fragment UserFragment on Usuario {
    id
    nombre
    apellidos
    rut
    correo
    telefono
    direccion
    createdAt
    updatedAt
  }
`;

// Query para obtener usuarios
export const GET_USERS = gql`
  query GetUsuarios {
    usuarios {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

// Query para obtener un usuario por ID
export const GET_USER_BY_ID = gql`
  query GetUsuarioById($id: ID!) {
    usuario(id: $id) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

// Mutación para crear un usuario
export const CREATE_USER = gql`
  mutation CreateUsuario($createUsuarioInput: CreateUsuarioInput!) {
    createUsuario(createUsuarioInput: $createUsuarioInput) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

// Mutación para actualizar un usuario
export const UPDATE_USER = gql`
  mutation UpdateUsuario($id: ID!, $input: UpdateUsuarioInput!) {
    updateUsuario(id: $id, input: $input) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

// Mutación para eliminar un usuario
export const DELETE_USER = gql`
  mutation DeleteUsuario($id: ID!) {
    deleteUsuario(id: $id) {
      id
    }
  }
`;

// Tipos TypeScript para las operaciones
export interface Usuario {
  id: string;
  nombre: string;
  apellidos: string;
  rut: string;
  correo: string;
  telefono: string;
  direccion?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUsuarioInput {
  nombre: string;
  apellidos: string;
  rut: string;
  correo: string;
  telefono: string;
  direccion?: string;
}

export interface UpdateUsuarioInput {
  nombre?: string;
  apellidos?: string;
  rut?: string;
  correo?: string;
  telefono?: string;
  direccion?: string;
}

// Respuestas de las operaciones
export interface GetUsuariosResponse {
  usuarios: Usuario[];
}

export interface GetUsuarioByIdResponse {
  usuario: Usuario;
}

export interface CreateUsuarioResponse {
  createUsuario: Usuario;
}

export interface UpdateUsuarioResponse {
  updateUsuario: Usuario;
}

export interface DeleteUsuarioResponse {
  deleteUsuario: {
    id: string;
  };
} 