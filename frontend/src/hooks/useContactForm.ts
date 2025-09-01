import { useState } from 'react';
import axios from 'axios';
import type { ContactFormData } from '../types';

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    serviceCategory: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [responseMessage, setResponseMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const API_URL =
    import.meta.env.MODE === 'prod'
      ? import.meta.env.VITE_API_URL_PROD
      : import.meta.env.VITE_API_URL_DEV;

  // client side validation
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    else if (formData.firstName.trim().length < 2) newErrors.firstName = 'First name must be at least 2 characters';

    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    else if (formData.lastName.trim().length < 2) newErrors.lastName = 'Last name must be at least 2 characters';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';

    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be exactly 10 digits';

    if (formData.company && formData.company.length > 100) newErrors.company = 'Company name cannot exceed 100 characters';

    if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    else if (formData.message.trim().length > 1000) newErrors.message = 'Message cannot exceed 1000 characters';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  // Helper to check if form is valid
  const isFormValid = () => {
    const validationErrors = validate();
    return Object.keys(validationErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Validate field on change
    setErrors((prev) => {
      const newErrors = { ...prev };
      const fieldErrors = validate();
      newErrors[field] = fieldErrors[field] || '';
      return newErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setResponseMessage(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setResponseMessage({
        type: 'error',
        text: 'Please correct the errors above before submitting.',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(`${API_URL}/contact`, formData);
      console.log("response--", response)
      setIsSuccess(true);
      setResponseMessage({
        type: 'success',
        text: 'Your message has been sent successfully!',
      });
    } catch (error: unknown) {
      let errorMessage = 'Failed to send message. Try again later.';
      if (axios.isAxiosError(error) && error.response?.data) {
        const errData = error.response.data;
        if (errData.message) {
          errorMessage = errData.message;
        }
        if (errData.errors) {
          setErrors(errData.errors);
        }
      }
      setResponseMessage({
        type: 'error',
        text: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      company: '',
      serviceCategory: '',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
    setResponseMessage(null);
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    responseMessage,
    handleInputChange,
    handleSubmit,
    resetForm,
    isFormValid,
  };
};
