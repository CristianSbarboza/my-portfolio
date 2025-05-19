import React, { useRef, FormEvent } from 'react';
import emailjs from 'emailjs-com';

import style from './Form.module.css'

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const now = new Date().toLocaleString();
    const timeInput = form.current.querySelector('input[name="time"]') as HTMLInputElement;
    if (timeInput) timeInput.value = now;

    emailjs.sendForm(
      'service_mfjcx5x',     
      'template_inxu7y9',    
      form.current,
      'bXi07C0MohdYXRevl'  
    )
    .then(() => {
      alert('Mensagem enviada com sucesso!');
      form.current?.reset();
    })
    .catch((error) => {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar mensagem.');
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={style.FormContainer}>
      <input type="text" name="name" placeholder="Seu nome" required className={style.FormInput}/>
      <input type="email" name="user_email" placeholder="Seu e-mail" required className={style.FormInput}/>
      <textarea name="message" placeholder="Sua mensagem" required className={style.FormTextArea}/>

      <input type="hidden" name="time" />

      <button type="submit" className={style.FormButton}>Enviar</button>
    </form>
  );
};

export default ContactForm;

