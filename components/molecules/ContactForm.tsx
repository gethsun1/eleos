'use client';

import React, { useState } from 'react';
import { Input } from '@/components/atoms/Input';
import { Textarea } from '@/components/atoms/Textarea';
import { Button } from '@/components/atoms/Button';
import { Send, CheckCircle, Shield } from 'lucide-react';

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
        <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-3xl mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Message Sent Successfully!</h3>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Thank you for reaching out to us. We've received your message and will respond within 24 hours.
        </p>
        <p className="text-sm text-gray-500">
          If this is a crisis situation, please call our 24/7 crisis line: <span className="font-semibold text-[#a8996e]">(555) 911-HELP</span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Service Interest *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#a8996e] focus:border-[#a8996e] transition-all duration-300 bg-white"
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
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Urgency Level
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="flex items-center p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-[#a8996e]/30 transition-all duration-300">
            <input
              type="radio"
              name="urgency"
              value="normal"
              checked={formData.urgency === 'normal'}
              onChange={handleChange}
              className="sr-only"
            />
            <div className={`w-5 h-5 rounded-full border-2 mr-3 transition-all duration-300 ${
              formData.urgency === 'normal' ? 'border-[#a8996e] bg-[#a8996e]' : 'border-gray-300'
            }`}>
              {formData.urgency === 'normal' && (
                <div className="w-2.5 h-2.5 bg-white rounded-full mx-auto mt-0.5"></div>
              )}
            </div>
            <span className="text-sm font-medium">Normal (2-3 days)</span>
          </label>
          
          <label className="flex items-center p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-orange-400/30 transition-all duration-300">
            <input
              type="radio"
              name="urgency"
              value="priority"
              checked={formData.urgency === 'priority'}
              onChange={handleChange}
              className="sr-only"
            />
            <div className={`w-5 h-5 rounded-full border-2 mr-3 transition-all duration-300 ${
              formData.urgency === 'priority' ? 'border-orange-500 bg-orange-500' : 'border-gray-300'
            }`}>
              {formData.urgency === 'priority' && (
                <div className="w-2.5 h-2.5 bg-white rounded-full mx-auto mt-0.5"></div>
              )}
            </div>
            <span className="text-sm font-medium">Priority (24 hours)</span>
          </label>
          
          <label className="flex items-center p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-red-400/30 transition-all duration-300">
            <input
              type="radio"
              name="urgency"
              value="urgent"
              checked={formData.urgency === 'urgent'}
              onChange={handleChange}
              className="sr-only"
            />
            <div className={`w-5 h-5 rounded-full border-2 mr-3 transition-all duration-300 ${
              formData.urgency === 'urgent' ? 'border-red-500 bg-red-500' : 'border-gray-300'
            }`}>
              {formData.urgency === 'urgent' && (
                <div className="w-2.5 h-2.5 bg-white rounded-full mx-auto mt-0.5"></div>
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
      
      <div className="bg-gradient-to-r from-[#a8996e]/5 to-[#a8996e]/10 border-2 border-[#a8996e]/20 rounded-xl p-6 text-sm text-gray-700">
        <div className="flex items-start mb-4">
          <Shield className="w-5 h-5 text-[#a8996e] mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-gray-800 mb-2">
              Confidentiality Notice:
            </p>
            <p className="mb-3">
              All information shared in this form is confidential and protected under HIPAA regulations.
            </p>
            <p className="font-semibold text-gray-800 mb-2">
              Crisis Support:
            </p>
            <p>
              If you're experiencing a mental health crisis, please call our 24/7 crisis line at 
              <span className="font-bold text-[#a8996e]"> (555) 911-HELP</span> 
              or contact emergency services at 911.
            </p>
          </div>
        </div>
      </div>
      
      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-[#a8996e] hover:bg-[#8b7d5a] shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
            Sending Message...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-3" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};