import { useMutation, useQuery, useApolloClient } from '@apollo/client';
import { 
  CREATE_USER, 
  UPDATE_USER, 
  DELETE_USER, 
  GET_USERS, 
  GET_USER_BY_ID,
  type CreateUserInput,
  type UpdateUserInput,
  type CreateUserResponse,
  type UpdateUserResponse,
  type DeleteUserResponse,
  type GetUsersResponse,
  type GetUserByIdResponse
} from '../graphql/operations';

export const useUsers = () => {
  const client = useApolloClient();

  // Query to get all users
  const { data: usersData, loading: usersLoading, error: usersError, refetch: refetchUsers } = useQuery<GetUsersResponse>(GET_USERS);

  // Query to get a user by ID
  const getUserById = (id: string) => {
    return useQuery<GetUserByIdResponse>(GET_USER_BY_ID, {
      variables: { id },
      skip: !id
    });
  };

  // Mutation to create user
  const [createUserMutation, { loading: createLoading }] = useMutation<CreateUserResponse, { createUserInput: CreateUserInput }>(CREATE_USER, {
    onCompleted: (data) => {
      client.cache.modify({
        fields: {
          users(existingUsers = []) {
            const newUserRef = client.cache.writeFragment({
              data: data.createUser,
              fragment: CREATE_USER
            });
            return [...existingUsers, newUserRef];
          }
        }
      });
    },
    onError: (error) => {
      console.error('Error creating user:', error);
    }
  });

  // Mutation to update user
  const [updateUserMutation, { loading: updateLoading }] = useMutation<UpdateUserResponse, { id: string; input: UpdateUserInput }>(UPDATE_USER, {
    onCompleted: (data) => {
      client.cache.modify({
        id: client.cache.identify({ __typename: 'User', id: data.updateUser.id }),
        fields: {
          firstName: () => data.updateUser.firstName,
          lastName: () => data.updateUser.lastName,
          rut: () => data.updateUser.rut,
          email: () => data.updateUser.email,
          phone: () => data.updateUser.phone,
          address: () => data.updateUser.address,
          updatedAt: () => data.updateUser.updatedAt
        }
      });
    },
    onError: (error) => {
      console.error('Error updating user:', error);
    }
  });

  // Mutation to delete user
  const [deleteUserMutation, { loading: deleteLoading }] = useMutation<DeleteUserResponse, { id: string }>(DELETE_USER, {
    onCompleted: (data) => {
      client.cache.evict({ id: client.cache.identify({ __typename: 'User', id: data.deleteUser.id }) });
      client.cache.gc();
    },
    onError: (error) => {
      console.error('Error deleting user:', error);
    }
  });

  // Functions to handle operations
  const createUser = async (userData: CreateUserInput) => {
    try {
      const result = await createUserMutation({
        variables: { createUserInput: userData }
      });
      return { success: true, data: result.data?.createUser };
    } catch (error) {
      return { success: false, error };
    }
  };

  const updateUser = async (id: string, userData: UpdateUserInput) => {
    try {
      const result = await updateUserMutation({
        variables: { id, input: userData }
      });
      return { success: true, data: result.data?.updateUser };
    } catch (error) {
      return { success: false, error };
    }
  };

  const deleteUser = async (id: string) => {
    try {
      const result = await deleteUserMutation({
        variables: { id }
      });
      return { success: true, data: result.data?.deleteUser };
    } catch (error) {
      return { success: false, error };
    }
  };

  return {
    // Data
    users: usersData?.users || [],
    usersLoading,
    usersError,
    
    // Operations
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    refetchUsers,
    
    // Loading states
    createLoading,
    updateLoading,
    deleteLoading
  };
}; 