import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Message } from 'primereact/message';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../hooks/useUsers';

// Validation schema with Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name cannot exceed 50 characters')
    .required('First name is required'),
  lastName: Yup.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(100, 'Last name cannot exceed 100 characters')
    .required('Last name is required'),
  rut: Yup.string()
    .matches(/^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/, 'Invalid RUT format (e.g: 12.345.678-9)')
    .required('RUT is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\+?[\d\s\-\(\)]+$/, 'Invalid phone format')
    .min(8, 'Phone must be at least 8 digits')
    .required('Phone is required'),
  address: Yup.string()
    .min(10, 'Address must be at least 10 characters')
    .max(200, 'Address cannot exceed 200 characters')
    .required('Address is required'),
});

const AppointmentFormPage: React.FC = () => {
  const navigate = useNavigate();
  const { createUser, createLoading } = useUsers();

  const initialValues = {
    firstName: '',
    lastName: '',
    rut: '',
    email: '',
    phone: '',
    address: '',
  };

  const handleSubmit = async (values: typeof initialValues, { setSubmitting, resetForm }: any) => {
    try {
      const result = await createUser({
        firstName: values.firstName,
        lastName: values.lastName,
        rut: values.rut,
        email: values.email,
        phone: values.phone,
        address: values.address
      });

      if (result.success) {
        alert('Form submitted successfully! We will contact you soon.');
        resetForm();
      } else {
        alert('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-6">
          <Button
            label="Back to Home"
            icon="pi pi-arrow-left"
            className="p-button-text p-button-secondary"
            onClick={() => navigate('/')}
          />
        </div>
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Schedule Your Free Appointment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete the following form to schedule your first psychological session 
            completely free. We will contact you to confirm the appointment.
          </p>
        </div>
        {/* Form */}
        <Card className="shadow-sm border border-gray-200 bg-white">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
              <Form className="space-y-6">
                {/* Personal Information */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    <i className="pi pi-user mr-2 text-gray-600"></i>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name *
                      </label>
                      <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                          <i className="pi pi-user"></i>
                        </span>
                        <InputText
                          id="firstName"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full ${errors.firstName && touched.firstName ? 'p-invalid' : ''}`}
                          placeholder="Enter your first name"
                        />
                      </div>
                      {errors.firstName && touched.firstName && (
                        <Message severity="error" text={errors.firstName} className="text-sm" />
                      )}
                    </div>
                    {/* Last Name */}
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name *
                      </label>
                      <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                          <i className="pi pi-user"></i>
                        </span>
                        <InputText
                          id="lastName"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full ${errors.lastName && touched.lastName ? 'p-invalid' : ''}`}
                          placeholder="Enter your last name"
                        />
                      </div>
                      {errors.lastName && touched.lastName && (
                        <Message severity="error" text={errors.lastName} className="text-sm" />
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
                {/* Contact Information */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    <i className="pi pi-envelope mr-2 text-gray-600"></i>
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                          <i className="pi pi-envelope"></i>
                        </span>
                        <InputText
                          id="email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full ${errors.email && touched.email ? 'p-invalid' : ''}`}
                          placeholder="your@email.com"
                        />
                      </div>
                      {errors.email && touched.email && (
                        <Message severity="error" text={errors.email} className="text-sm" />
                      )}
                    </div>
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone *
                      </label>
                      <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                          <i className="pi pi-phone"></i>
                        </span>
                        <InputText
                          id="phone"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full ${errors.phone && touched.phone ? 'p-invalid' : ''}`}
                          placeholder="+56 9 1234 5678"
                        />
                      </div>
                      {errors.phone && touched.phone && (
                        <Message severity="error" text={errors.phone} className="text-sm" />
                      )}
                    </div>
                  </div>
                </div>
                {/* Address */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    <i className="pi pi-map-marker mr-2 text-gray-600"></i>
                    Address
                  </h3>
                  <div className="space-y-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Complete Address *
                    </label>
                    <div className="p-inputgroup">
                      <span className="p-inputgroup-addon">
                        <i className="pi pi-map-marker"></i>
                      </span>
                      <InputText
                        id="address"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full ${errors.address && touched.address ? 'p-invalid' : ''}`}
                        placeholder="Street, number, commune, city"
                      />
                    </div>
                    {errors.address && touched.address && (
                      <Message severity="error" text={errors.address} className="text-sm" />
                    )}
                  </div>
                </div>
                {/* Additional Information */}
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                    <i className="pi pi-info-circle mr-2"></i>
                    Important Information
                  </h3>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• Your first session is completely free</li>
                    <li>• We will contact you within the next 24 hours</li>
                    <li>• All your data is protected and will be treated confidentially</li>
                    <li>• You can cancel or reschedule your appointment at no cost</li>
                  </ul>
                </div>
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    type="submit"
                    label={isSubmitting || createLoading ? "Submitting..." : "Schedule Free Appointment"}
                    icon={isSubmitting || createLoading ? "pi pi-spinner pi-spin" : "pi pi-calendar-plus"}
                    className="p-button-lg p-button-success flex-1"
                    disabled={isSubmitting || createLoading}
                    size="large"
                  />
                  <Button
                    type="button"
                    label="Clear Form"
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
        {/* Informational footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Do you have any questions? Contact us at{' '}
            <a href="tel:+56912345678" className="text-blue-600 hover:text-blue-800 font-semibold">
              +56 9 1234 5678
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentFormPage; 