import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Message } from 'primereact/message';
import { useNavigate } from 'react-router-dom';
import { useUsuarios } from '../hooks/useUsers';

// Esquema de validación con Yup
const esquemaValidacion = Yup.object().shape({
  nombre: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres')
    .required('El nombre es requerido'),
  apellidos: Yup.string()
    .min(2, 'Los apellidos deben tener al menos 2 caracteres')
    .max(100, 'Los apellidos no pueden exceder 100 caracteres')
    .required('Los apellidos son requeridos'),
  rut: Yup.string()
    .matches(/^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/, 'Formato de RUT inválido (ej: 12.345.678-9)')
    .required('El RUT es requerido'),
  correo: Yup.string()
    .email('Formato de correo inválido')
    .required('El correo es requerido'),
  telefono: Yup.string()
    .matches(/^\+?[\d\s\-\(\)]+$/, 'Formato de teléfono inválido')
    .min(8, 'El teléfono debe tener al menos 8 dígitos')
    .required('El teléfono es requerido'),
  direccion: Yup.string()
    .min(10, 'La dirección debe tener al menos 10 caracteres')
    .max(200, 'La dirección no puede exceder 200 caracteres')
    .required('La dirección es requerida'),
});

const FormularioAgendamientoPage: React.FC = () => {
  const navigate = useNavigate();
  const { createUsuario, createLoading } = useUsuarios();

  const valoresIniciales = {
    nombre: '',
    apellidos: '',
    rut: '',
    correo: '',
    telefono: '',
    direccion: '',
  };

  const manejarEnvio = async (valores: typeof valoresIniciales, { setSubmitting, resetForm }: any) => {
    try {
      const result = await createUsuario({
        nombre: valores.nombre,
        apellidos: valores.apellidos,
        rut: valores.rut,
        correo: valores.correo,
        telefono: valores.telefono,
        direccion: valores.direccion
      });

      if (result.success) {
        alert('¡Formulario enviado exitosamente! Nos pondremos en contacto contigo pronto.');
        resetForm();
      } else {
        alert('Error al enviar el formulario. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el formulario. Por favor, intenta nuevamente.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botón de regreso */}
        <div className="mb-6">
          <Button
            label="Volver al Inicio"
            icon="pi pi-arrow-left"
            className="p-button-text p-button-secondary"
            onClick={() => navigate('/')}
          />
        </div>
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Agenda tu Cita Gratuita
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Completa el siguiente formulario para agendar tu primera sesión psicológica 
            completamente gratuita. Nos pondremos en contacto contigo para confirmar la cita.
          </p>
        </div>
        {/* Formulario */}
        <Card className="shadow-sm border border-gray-200 bg-white">
          <Formik
            initialValues={valoresIniciales}
            validationSchema={esquemaValidacion}
            onSubmit={manejarEnvio}
          >
            {({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
              <Form className="space-y-6">
                {/* Información Personal */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    <i className="pi pi-user mr-2 text-gray-600"></i>
                    Información Personal
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Nombre */}
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                        Nombre *
                      </label>
                      <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                          <i className="pi pi-user"></i>
                        </span>
                        <InputText
                          id="nombre"
                          name="nombre"
                          value={values.nombre}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full ${errors.nombre && touched.nombre ? 'p-invalid' : ''}`}
                          placeholder="Ingresa tu nombre"
                        />
                      </div>
                      {errors.nombre && touched.nombre && (
                        <Message severity="error" text={errors.nombre} className="text-sm" />
                      )}
                    </div>
                    {/* Apellidos */}
                    <div className="space-y-2">
                      <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700">
                        Apellidos *
                      </label>
                      <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                          <i className="pi pi-user"></i>
                        </span>
                        <InputText
                          id="apellidos"
                          name="apellidos"
                          value={values.apellidos}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full ${errors.apellidos && touched.apellidos ? 'p-invalid' : ''}`}
                          placeholder="Ingresa tus apellidos"
                        />
                      </div>
                      {errors.apellidos && touched.apellidos && (
                        <Message severity="error" text={errors.apellidos} className="text-sm" />
                      )}
                    </div>
                  </div>
                  {/* RUT */}
                  <div className="mt-4 space-y-2">
                    <label htmlFor="rut" className="block text-sm font-medium text-gray-700">
                      RUT *
                    </label>
                    <div className="p-inputgroup">
                      <span className="p-inputgroup-addon">
                        <i className="pi pi-id-card"></i>
                      </span>
                      <InputText
                        id="rut"
                        name="rut"
                        value={values.rut}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full ${errors.rut && touched.rut ? 'p-invalid' : ''}`}
                        placeholder="12.345.678-9"
                      />
                    </div>
                    {errors.rut && touched.rut && (
                      <Message severity="error" text={errors.rut} className="text-sm" />
                    )}
                  </div>
                </div>
                {/* Información de Contacto */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    <i className="pi pi-envelope mr-2 text-gray-600"></i>
                    Información de Contacto
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Correo */}
                    <div className="space-y-2">
                      <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
                        Correo *
                      </label>
                      <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                          <i className="pi pi-envelope"></i>
                        </span>
                        <InputText
                          id="correo"
                          name="correo"
                          type="email"
                          value={values.correo}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full ${errors.correo && touched.correo ? 'p-invalid' : ''}`}
                          placeholder="tu@email.com"
                        />
                      </div>
                      {errors.correo && touched.correo && (
                        <Message severity="error" text={errors.correo} className="text-sm" />
                      )}
                    </div>
                    {/* Teléfono */}
                    <div className="space-y-2">
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                        Teléfono *
                      </label>
                      <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                          <i className="pi pi-phone"></i>
                        </span>
                        <InputText
                          id="telefono"
                          name="telefono"
                          value={values.telefono}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full ${errors.telefono && touched.telefono ? 'p-invalid' : ''}`}
                          placeholder="+56 9 1234 5678"
                        />
                      </div>
                      {errors.telefono && touched.telefono && (
                        <Message severity="error" text={errors.telefono} className="text-sm" />
                      )}
                    </div>
                  </div>
                </div>
                {/* Dirección */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    <i className="pi pi-map-marker mr-2 text-gray-600"></i>
                    Dirección
                  </h3>
                  <div className="space-y-2">
                    <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">
                      Dirección Completa *
                    </label>
                    <div className="p-inputgroup">
                      <span className="p-inputgroup-addon">
                        <i className="pi pi-map-marker"></i>
                      </span>
                      <InputText
                        id="direccion"
                        name="direccion"
                        value={values.direccion}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full ${errors.direccion && touched.direccion ? 'p-invalid' : ''}`}
                        placeholder="Calle, número, comuna, ciudad"
                      />
                    </div>
                    {errors.direccion && touched.direccion && (
                      <Message severity="error" text={errors.direccion} className="text-sm" />
                    )}
                  </div>
                </div>
                {/* Información Adicional */}
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                    <i className="pi pi-info-circle mr-2"></i>
                    Información Importante
                  </h3>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• Tu primera sesión es completamente gratuita</li>
                    <li>• Nos pondremos en contacto contigo en las próximas 24 horas</li>
                    <li>• Todos tus datos están protegidos y serán tratados con confidencialidad</li>
                    <li>• Puedes cancelar o reprogramar tu cita sin costo</li>
                  </ul>
                </div>
                {/* Botones */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    type="submit"
                    label={isSubmitting || createLoading ? "Enviando..." : "Agendar Cita Gratuita"}
                    icon={isSubmitting || createLoading ? "pi pi-spinner pi-spin" : "pi pi-calendar-plus"}
                    className="p-button-lg p-button-success flex-1"
                    disabled={isSubmitting || createLoading}
                    size="large"
                  />
                  <Button
                    type="button"
                    label="Limpiar Formulario"
                    icon="pi pi-refresh"
                    className="p-button-lg p-button-outlined p-button-secondary"
                    onClick={() => window.location.reload()}
                    size="large"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </Card>
        {/* Footer informativo */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            ¿Tienes alguna pregunta? Contáctanos al{' '}
            <a href="tel:+56912345678" className="text-blue-600 hover:text-blue-800 font-semibold">
              +56 9 1234 5678
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormularioAgendamientoPage; 