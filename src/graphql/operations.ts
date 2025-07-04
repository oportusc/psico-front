import { gql } from '@apollo/client';

// GraphQL types for users
export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    firstName
    lastName
    rut
    email
    phone
    address
    createdAt
    updatedAt
  }
`;

// Query to get users
export const GET_USERS = gql`
  query GetUsers {
    users {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

// Query to get a user by ID
export const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    user(id: $id) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

// Mutation to create a user
export const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

// Mutation to update a user
export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

// Mutation to delete a user
export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

// TypeScript types for operations
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  rut: string;
  email: string;
  phone: string;
  address?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserInput {
  firstName: string;
  lastName: string;
  rut: string;
  email: string;
  phone: string;
  address?: string;
}

export interface UpdateUserInput {
  firstName?: string;
  lastName?: string;
  rut?: string;
  email?: string;
  phone?: string;
  address?: string;
}

// Operation responses
export interface GetUsersResponse {
  users: User[];
}

export interface GetUserByIdResponse {
  user: User;
}

export interface CreateUserResponse {
  createUser: User;
}

export interface UpdateUserResponse {
  updateUser: User;
}

export interface DeleteUserResponse {
  deleteUser: {
    id: string;
  };
} 