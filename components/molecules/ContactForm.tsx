'use client';

import React, { useState } from 'react';
import { Input } from '@/components/atoms/Input';
import { Textarea } from '@/components/atoms/Textarea';
import { Button } from '@/components/atoms/Button';
import { Send, CheckCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: 'normal',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        urgency: 'normal',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for reaching out to us. We've received your message and will respond within 24 hours.
        </p>
        <p className="text-sm text-gray-500">
          If this is a crisis situation, please call our 24/7 crisis line: <span className="font-semibold">(555) 911-HELP</span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name *"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
        <Input
          label="Email Address *"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Interest *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Select a service</option>
            <option value="mental-health">Mental Health Services</option>
            <option value="addiction">Addiction Recovery</option>
            <option value="family-therapy">Family & Marriage Therapy</option>
            <option value="wellness">Wellness Programs</option>
            <option value="corporate">Corporate Wellness</option>
            <option value="retreats">Therapeutic Retreats</option>
            <option value="community">Community Outreach</option>
            <option value="consultation">General Consultation</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Urgency Level
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="radio"
              name="urgency"
              value="normal"
              checked={formData.urgency === 'normal'}
              onChange={handleChange}
              className="sr-only"
            />
            <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
              formData.urgency === 'normal' ? 'border-teal-500 bg-teal-500' : 'border-gray-300'
            }`}>
              {formData.urgency === 'normal' && (
                <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
              )}
            </div>
            <span className="text-sm font-medium">Normal (2-3 days)</span>
          </label>
          
          <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="radio"
              name="urgency"
              value="priority"
              checked={formData.urgency === 'priority'}
              onChange={handleChange}
              className="sr-only"
            />
            <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
              formData.urgency === 'priority' ? 'border-orange-500 bg-orange-500' : 'border-gray-300'
            }`}>
              {formData.urgency === 'priority' && (
                <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
              )}
            </div>
            <span className="text-sm font-medium">Priority (24 hours)</span>
          </label>
          
          <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="radio"
              name="urgency"
              value="urgent"
              checked={formData.urgency === 'urgent'}
              onChange={handleChange}
              className="sr-only"
            />
            <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
              formData.urgency === 'urgent' ? 'border-red-500 bg-red-500' : 'border-gray-300'
            }`}>
              {formData.urgency === 'urgent' && (
                <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
              )}
            </div>
            <span className="text-sm font-medium">Urgent (4 hours)</span>
          </label>
        </div>
      </div>
      
      <Textarea
        label="Message *"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Please tell us about your needs, concerns, or questions. The more details you provide, the better we can assist you..."
        required
        className="min-h-[150px]"
      />
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
        <p className="mb-2">
          <strong>Confidentiality Notice:</strong> All information shared in this form is confidential 
          and protected under HIPAA regulations.
        </p>
        <p>
          <strong>Crisis Support:</strong> If you're experiencing a mental health crisis, 
          please call our 24/7 crisis line at <span className="font-semibold">(555) 911-HELP</span> 
          or contact emergency services at 911.
        </p>
      </div>
      
      <Button 
        type="submit" 
        size="lg" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Sending Message...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};