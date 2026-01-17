import emailjs from '@emailjs/browser';

// Constants for EmailJS
// Ideally these should be in environment variables, but for simplicity/user setup we can keep them here or guide user to envs
// Service ID: 'service_gmail' (example)
// Template ID: 'template_confirmation' (example)
// Public Key: 'user_public_key' (example)

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (templateId, templateParams) => {
    try {
        if (!SERVICE_ID || !templateId || !PUBLIC_KEY) {
            console.warn('EmailJS credentials or Template ID are missing.');
            return { success: false, error: 'Misconfigured' };
        }

        const response = await emailjs.send(SERVICE_ID, templateId, templateParams, PUBLIC_KEY);
        console.log('SUCCESS!', response.status, response.text);
        return { success: true };
    } catch (error) {
        console.error('FAILED...', error);
        return { success: false, error };
    }
};
