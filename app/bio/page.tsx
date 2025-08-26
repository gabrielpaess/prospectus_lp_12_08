"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineCalendar, AiOutlineWhatsApp, AiFillFacebook, AiOutlineInstagram, AiOutlineBars } from 'react-icons/ai';
import logo from '../../public/capsula.webp';
import './biolink.css';

const Page = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const shareButtons = document.querySelectorAll('.tile-share-button');

    async function copyText(e: Event) {
      e.preventDefault();
      const link = (e.currentTarget as HTMLElement).getAttribute('data-link');
      try {
        if (link) {
          await navigator.clipboard.writeText(link);
          showAlert('Copied the text: ' + link);
        }
      } catch (err) {
        console.error(err);
      }
    }

    shareButtons.forEach(shareButton =>
      shareButton.addEventListener('click', copyText)
    );

    return () => {
      shareButtons.forEach(shareButton =>
        shareButton.removeEventListener('click', copyText)
      );
    };
  }, []);

  const showAlert = (message: string) => {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  };

  const phoneNumber = "5551997766970";
  const message = "Olá, quero ser um parceiro da Prospectus NBN! Por onde começo?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className='body hero-bg'>
      {alertVisible && <div className='alert'>Link copiado!</div>}
      <div className='header'>
        <div className='tile-share-button' data-link='https://prospectusnbn.com.br/bio'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16"> <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /> </svg>
        </div>
      </div>
      <div className='container'>
        <div className='image-container'>
          <Image
            src={logo}
            alt="Prospectus NBN região metropolitana porto alegre"
            width={200}
            height={200}
          />
        </div>
        <h1>@ProspectusNBN</h1>

        <a className='tile' href='/' target="_blank" rel="noopener noreferrer">
        <div className="icon">
            <AiOutlineBars
              style={{ color: 'rgb(166, 70, 43)', fontSize: '3rem' }}
            />
          </div>
          <p>Nossa página</p>
          <div className='tile-share-button' data-link='https://prospectusnbn.com.br/'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16"> <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /> </svg>
          </div>
        </a>

        <a className='tile' href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <div className="icon">
            <AiOutlineWhatsApp
              style={{ color: 'rgb(166, 70, 43)', fontSize: '3rem' }}
            />
          </div>
          <p>WhatsApp</p>
          <div className='tile-share-button' data-link={whatsappLink}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16"> <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /> </svg>
          </div>
        </a>

        <a className='tile' href='https://www.facebook.com/prospectusnbn' target="_blank" rel="noopener noreferrer">
        <div className="icon">
            <AiFillFacebook
              style={{ color: 'rgb(166, 70, 43)', fontSize: '3rem' }}
            />
          </div>
          <p>Facebook</p>
          <div className='tile-share-button' data-link='https://www.facebook.com/prospectusnbn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16"> <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /> </svg>
          </div>
        </a>

        <a className='tile' href='https://www.instagram.com/prospectusnbn' target="_blank" rel="noopener noreferrer">
          <div className="icon">
            <AiOutlineInstagram
              style={{ color: 'rgb(166, 70, 43)', fontSize: '3rem' }}
            />
          </div>
          <p>Instagram</p>
          <div className='tile-share-button' data-link='https://www.instagram.com/prospectusnbn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16"> <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /> </svg>
          </div>
        </a>

      </div>
      <div className='footer'>
        <h3 className='font-archivo text-center text-sm font-medium'>Todos os direitos Reservados®PNBN</h3>
      </div>
    </div>
  )
}

export default Page