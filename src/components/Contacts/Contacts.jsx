import React, { useState ,useRef} from 'react';
import { motion } from 'framer-motion';
import Title from '../reusable/Title';
import Button from '../reusable/Button';
import { fadeInUp, staggerContainer } from '../About/animations';
import emailjs from '@emailjs/browser'

export default function Contacts() {
    const form=useRef()
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    emailjs
      .sendForm('service_61mmuha', 'template_8xgecg8', form.current, {
        publicKey: 'OGoF6aHZoedL3ZWDZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully')
          setFormData({from_name:'',from_email:'',message:''})
        },
        (error) => {
          console.log('FAILED...', error.text);
            alert('failed to send ,message')
        },
      );

    };

    const fields = [
        { id: 'name', name: 'from_name', label: 'Name', type: 'text', value: formData.name },
        { id: 'email', name: 'from_email', label: 'Email', type: 'email', value: formData.email },
        { id: 'message', name: 'message', label: 'Message', type: 'textarea', value: formData.message },
    ];

    return (
        <section id="contact" className="min-h-screen relative z-[9999] py-20 px-6 sm:px-12 xl:px-16">
            <Title label="Get In Touch" />
            <div className="flex justify-center mt-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={staggerContainer}
                    className="w-full max-w-2xl bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-8 border border-white border-opacity-20 shadow-lg"
                >
                    <motion.form onSubmit={handleSubmit} ref={form} variants={staggerContainer} className="space-y-6">
                        {fields.map((field) => (
                            <motion.div key={field.id} variants={fadeInUp} className="relative">
                                {field.type === 'textarea' ? (
                                    <textarea
                                        id={field.id}
                                        name={field.name}
                                        value={field.value}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-transparent border border-white border-opacity-20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-pink-500 peer resize-none"
                                        placeholder={`Enter ${field.label}`}
                                        rows={5}
                                        required
                                    />
                                ) : (
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        id={field.id}
                                        value={field.value}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-transparent border border-white border-opacity-20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-pink-500 peer"
                                        placeholder={`Enter ${field.label}`}
                                        required
                                    />
                                )}
                                <label
                                    htmlFor={field.id}
                                    className="absolute left-4 -top-3 bg-secondary rounded px-1 text-sm text-white transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-white"
                                >
                                    {field.label}
                                </label>
                            </motion.div>
                        ))}

                        <Button>Send Message</Button>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
}
