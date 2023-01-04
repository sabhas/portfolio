import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current)
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID as string,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
          form.current,
          process.env.REACT_APP_EMAIL_ACCOUNT_ID as string
        )
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload()
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input placeholder='Name' type='text' name='name' required />
                </li>
                <li className='half'>
                  <input
                    placeholder='Email'
                    type='email'
                    name='reply_to'
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder='Subject'
                    type='text'
                    name='subject'
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder='Message'
                    name='message'
                    required
                  ></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Sabir Hassan,
          <br />
          Pakistan,
          <br />
          Punjab, Lahore <br />
          <br />
          <span>sabirbk06@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer
            center={[31.455732122860653, 74.26526591266453]}
            zoom={13}
          >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[31.455732122860653, 74.26526591266453]} />
          </MapContainer>
        </div>
      </div>
      <Loader type='pacman' active />
    </>
  )
}

export default Contact
