// User types
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'patient' | 'psychologist' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

// Appointment types
export interface Appointment {
  id: string;
  patientId: string;
  psychologistId: string;
  date: Date;
  duration: number; // in minutes
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled';
  type: 'individual' | 'couple' | 'family' | 'child';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Service types
export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
  category: 'individual' | 'couple' | 'family' | 'child';
  isActive: boolean;
}

// Contact form types
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Pagination types
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Formulario de agendamiento de citas
export interface FormularioAgendamiento {
  nombre: string;
  apellidos: string;
  rut: string;
  email: string;
  telefono: string;
  direccion: string;
}

// Appointment booking form types
export interface AppointmentBookingForm {
  firstName: string;
  lastName: string;
  rut: string;
  email: string;
  phone: string;
  address: string;
} 