import { useMutation, useQuery, useApolloClient } from '@apollo/client';
import { 
  CREATE_USER, 
  UPDATE_USER, 
  DELETE_USER, 
  GET_USERS, 
  GET_USER_BY_ID,
  type CreateUsuarioInput,
  type UpdateUsuarioInput,
  type CreateUsuarioResponse,
  type UpdateUsuarioResponse,
  type DeleteUsuarioResponse,
  type GetUsuariosResponse,
  type GetUsuarioByIdResponse
} from '../graphql/operations';

export const useUsuarios = () => {
  const client = useApolloClient();

  // Query para obtener todos los usuarios
  const { data: usuariosData, loading: usuariosLoading, error: usuariosError, refetch: refetchUsuarios } = useQuery<GetUsuariosResponse>(GET_USERS);

  // Query para obtener un usuario por ID
  const getUsuarioById = (id: string) => {
    return useQuery<GetUsuarioByIdResponse>(GET_USER_BY_ID, {
      variables: { id },
      skip: !id
    });
  };

  // Mutación para crear usuario
  const [createUsuarioMutation, { loading: createLoading }] = useMutation<CreateUsuarioResponse, { createUsuarioInput: CreateUsuarioInput }>(CREATE_USER, {
    onCompleted: (data) => {
      client.cache.modify({
        fields: {
          usuarios(existingUsuarios = []) {
            const newUsuarioRef = client.cache.writeFragment({
              data: data.createUsuario,
              fragment: CREATE_USER
            });
            return [...existingUsuarios, newUsuarioRef];
          }
        }
      });
    },
    onError: (error) => {
      console.error('Error al crear usuario:', error);
    }
  });

  // Mutación para actualizar usuario
  const [updateUsuarioMutation, { loading: updateLoading }] = useMutation<UpdateUsuarioResponse, { id: string; input: UpdateUsuarioInput }>(UPDATE_USER, {
    onCompleted: (data) => {
      client.cache.modify({
        id: client.cache.identify({ __typename: 'Usuario', id: data.updateUsuario.id }),
        fields: {
          nombre: () => data.updateUsuario.nombre,
          apellidos: () => data.updateUsuario.apellidos,
          rut: () => data.updateUsuario.rut,
          correo: () => data.updateUsuario.correo,
          telefono: () => data.updateUsuario.telefono,
          direccion: () => data.updateUsuario.direccion,
          updatedAt: () => data.updateUsuario.updatedAt
        }
      });
    },
    onError: (error) => {
      console.error('Error al actualizar usuario:', error);
    }
  });

  // Mutación para eliminar usuario
  const [deleteUsuarioMutation, { loading: deleteLoading }] = useMutation<DeleteUsuarioResponse, { id: string }>(DELETE_USER, {
    onCompleted: (data) => {
      client.cache.evict({ id: client.cache.identify({ __typename: 'Usuario', id: data.deleteUsuario.id }) });
      client.cache.gc();
    },
    onError: (error) => {
      console.error('Error al eliminar usuario:', error);
    }
  });

  // Funciones para manejar las operaciones
  const createUsuario = async (usuarioData: CreateUsuarioInput) => {
    try {
      const result = await createUsuarioMutation({
        variables: { createUsuarioInput: usuarioData }
      });
      return { success: true, data: result.data?.createUsuario };
    } catch (error) {
      return { success: false, error };
    }
  };

  const updateUsuario = async (id: string, usuarioData: UpdateUsuarioInput) => {
    try {
      const result = await updateUsuarioMutation({
        variables: { id, input: usuarioData }
      });
      return { success: true, data: result.data?.updateUsuario };
    } catch (error) {
      return { success: false, error };
    }
  };

  const deleteUsuario = async (id: string) => {
    try {
      const result = await deleteUsuarioMutation({
        variables: { id }
      });
      return { success: true, data: result.data?.deleteUsuario };
    } catch (error) {
      return { success: false, error };
    }
  };

  return {
    // Data
    usuarios: usuariosData?.usuarios || [],
    usuariosLoading,
    usuariosError,
    
    // Operations
    createUsuario,
    updateUsuario,
    deleteUsuario,
    getUsuarioById,
    refetchUsuarios,
    
    // Loading states
    createLoading,
    updateLoading,
    deleteLoading
  };
}; 