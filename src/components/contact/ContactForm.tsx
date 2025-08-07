import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Textarea from '../ui/Textarea';
import { SERVICE_CATEGORIES } from '../../utils/constants';
import { useContactForm } from '../../hooks/useContactForm';
import type { ContactFormProps } from '../../types';
import { useAppSelector, type RootState } from '../../store/store';

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleInputChange,
    handleSubmit,
    resetForm
  } = useContactForm();

  const currentTheme = useAppSelector((state: RootState) => state.theme.theme);

  const handleServiceCategorySelect = (category: string) => {
    handleInputChange('serviceCategory',
      formData.serviceCategory === category ? '' : category
    );
  };

  if (isSuccess) {
    return (
      <div className={`${className} text-center`}>
        <div className="bg-green-100 dark:bg-green-900/20 border border-green-500/30 rounded-lg p-8 mb-6">
          <div className="text-green-600 dark:text-green-400 text-5xl mb-4">✓</div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            Thank you for your message!
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We've received your inquiry and will get back to you within 24 hours.
          </p>
          <Button
            type="button"
            customvariant="outline"
            customsize="medium"
            onClick={resetForm}
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} text-gray-800 dark:text-white`}>
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            error={!!errors.firstName}
            helperText={errors.firstName}
            aria-label="First Name"
            required
            autoComplete="given-name"
          />
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            error={!!errors.lastName}
            helperText={errors.lastName}
            aria-label="Last Name"
            required
            autoComplete="family-name"
          />
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="tel"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            error={!!errors.phone}
            helperText={errors.phone}
            aria-label="Phone Number"
            required
            autoComplete="tel"
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            aria-label="Email Address"
            required
            autoComplete="email"
          />
        </div>

        {/* Company Field */}
        <Input
          type="text"
          placeholder="Company or organization"
          name="company"
          value={formData.company}
          onChange={(e) => handleInputChange('company', e.target.value)}
          aria-label="Company or Organization"
          autoComplete="organization"
        />

        {/* Service Category */}
        <div>
          <label className="block font-semibold my-4 text-gray-800 dark:text-white">
            Service Category
            <span className="text-gray-500 dark:text-gray-400 text-sm font-normal ml-2">(Optional)</span>
          </label>
          <div className="flex flex-wrap gap-3" role="group" aria-label="Service Categories">
            {SERVICE_CATEGORIES.map(category => (
              <Button
                key={category}
                type="button"
                customvariant={formData.serviceCategory === category ? "primary" : "outline"}
                mode={currentTheme}
                customsize="small"
                onClick={() => handleServiceCategorySelect(category)}
                aria-pressed={formData.serviceCategory === category}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Message */}
        <Textarea
          placeholder="Tell us about your project or idea..."
          name="message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          rows={5}
          error={!!errors.message}
          helperText={errors.message}
          aria-label="Message or Description"
          required
        />

        {/* Submit Button */}
        <div className="text-center pt-4">
          <Button
            type="submit"
            customvariant="primary"
            customsize="large"
            disabled={isSubmitting}
            className="min-w-[200px]"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-600 dark:border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </span>
            ) : (
              "Let's Talk"
            )}
          </Button>
        </div>

        {/* Global Error Message */}
        {errors.message && !formData.message && (
          <div className="text-center">
            <p className="text-red-500 dark:text-red-400 text-sm">
              Please fill in all required fields to continue.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;