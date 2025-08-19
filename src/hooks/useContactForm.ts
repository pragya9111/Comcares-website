import { useState, useCallback } from 'react';
import type { FormData } from '../types';

interface UseContactFormReturn {
  formData: FormData;
  errors: Partial<FormData>;
  isSubmitting: boolean;
  isSuccess: boolean;
  handleInputChange: (name: keyof FormData, value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
  validateField: (name: keyof FormData, value: string) => string | undefined;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  company: '',
  serviceCategory: '',
  message: ''
};

// Validation rules
const validationRules = {
  firstName: (value: string) => {
    if (!value.trim()) return 'First name is required';
    if (value.trim().length < 2) return 'First name must be at least 2 characters';
    return undefined;
  },
  lastName: (value: string) => {
    if (!value.trim()) return 'Last name is required';
    if (value.trim().length < 2) return 'Last name must be at least 2 characters';
    return undefined;
  },
  email: (value: string) => {
    if (!value.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return undefined;
  },
  phone: (value: string) => {
    if (!value.trim()) return 'Phone number is required';
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(value.replace(/[\s\-()]/g, ''))) {
      return 'Please enter a valid phone number';
    }
    return undefined;
  },
  company: () => {
    // Optional field, no validation needed
    return undefined;
  },
  serviceCategory: () => {
    // Optional field, no validation needed
    return undefined;
  },
  message: (value: string) => {
    if (!value.trim()) return 'Message is required';
    if (value.trim().length < 10) return 'Message must be at least 10 characters';
    if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
    return undefined;
  }
};

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validate single field
  const validateField = useCallback((name: keyof FormData, value: string): string | undefined => {
    return validationRules[name](value);
  }, []);

  // Validate entire form
  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<FormData> = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData, validateField]);

  // Handle input changes with real-time validation
  const handleInputChange = useCallback((name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear success state when user starts editing
    if (isSuccess) setIsSuccess(false);

    // Real-time validation for better UX
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField, isSuccess]);

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Simulate API delay for demo
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSuccess(true);
      setFormData(initialFormData);

    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({
        message: 'Failed to send message. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  // Reset form
  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitting(false);
    setIsSuccess(false);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleInputChange,
    handleSubmit,
    resetForm,
    validateField
  };
};
