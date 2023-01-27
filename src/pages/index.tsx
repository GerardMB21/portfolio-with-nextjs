
import { useEffect, useState } from "react"
import CarruselImgs from "@/components/CarruselImgs"
import ImageContainer from "@/components/ImageContainer"
import { imgElement } from "@/interfaces/imgsTypes"
import emailjs from '@emailjs/browser';
import styles from '@/styles/Index.module.css'
import foto from '../../imgs/foto.jpg'
import html from '../../imgs/html.png'
import css from '../../imgs/css.png'
import js from '../../imgs/js.png'
import typescript from '../../imgs/typescript.png'
import react from '../../imgs/react.png'
import reactNative from '../../imgs/react-native.png'
import nextjs from '../../imgs/nextjs.png'
import nodejs from '../../imgs/nodejs.png'
import nestjs from '../../imgs/nestjs.png'
import ecommerce from '../../imgs/ecommerce.png'
import game from '../../imgs/game.png'
import frases from '../../imgs/frases.png'
import weather from '../../imgs/weather.png'
import rickandmorty from '../../imgs/rickandmorty.png'
import pokedex from '../../imgs/pokedex.png'
import ecommerceReact from '../../imgs/ecommerce-react.png'
import invitation from '../../imgs/invitation.png'
import invitationWork from '../../imgs/invitation-work.png'
import Swal from "sweetalert2";

const { skillsImg, worksImg } = styles

const skillsImgs: imgElement[] = [
  {
    id: 0,
    name: "HTML",
    url: html,
    clase: skillsImg,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    id: 1,
    name: "CSS",
    url: css,
    clase: skillsImg,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    id: 2,
    name: "JavaScript",
    url: js,
    clase: skillsImg,
    link: "https://www.javascript.com/"
  },
  {
    id: 3,
    name: "TypeScript",
    url: typescript,
    clase: skillsImg,
    link: "https://www.typescriptlang.org/"
  },
  {
    id: 4,
    name: "React",
    url: react,
    clase: skillsImg,
    link: "https://reactjs.org/"
  },
  {
    id: 5,
    name: "React Native",
    url: reactNative,
    clase: skillsImg,
    link: "https://reactnative.dev/"
  },
  {
    id: 6,
    name: "NextsJS",
    url: nextjs,
    clase: skillsImg,
    link: "https://nextjs.org/"
  },
  {
    id: 7,
    name: "NodeJs",
    url: nodejs,
    clase: skillsImg,
    link: "https://nodejs.org/"
  },
  {
    id: 8,
    name: "NestJS",
    url: nestjs,
    clase: skillsImg,
    link: "https://nestjs.com/"
  },
]

const worksImgs: imgElement[] = [
  {
    id: 0,
    name: "Ecommerce Dalu",
    url: ecommerce,
    clase: worksImg,
    link: "https://ecommerce-dalu.netlify.app/"
  },
  {
    id: 1,
    name: "Game Piedra - Papel - Tijeras",
    url: game,
    clase: worksImg,
    link: "https://yan-ken-po.netlify.app/"
  },
  {
    id: 2,
    name: "Frases aleatorias",
    url: frases,
    clase: worksImg,
    link: "https://aleatory-frases.netlify.app/"
  },
  {
    id: 3,
    name: "Clima",
    url: weather,
    clase: worksImg,
    link: "https://weather-app-by-gerard.netlify.app/"
  },
  {
    id: 4,
    name: "Rick and Morty Wiki",
    url: rickandmorty,
    clase: worksImg,
    link: "https://rick-and-morty-wiki-by-gerard.netlify.app/"
  },
  {
    id: 5,
    name: "Pokedex",
    url: pokedex,
    clase: worksImg,
    link: "https://pokedex-by-gerard.netlify.app/"
  },
  {
    id: 6,
    name: "Ecommerce con Reactjs",
    url: ecommerceReact,
    clase: worksImg,
    link: "https://e-commerce-with-react.netlify.app/"
  },
  {
    id: 7,
    name: "Invitacion 15 Años",
    url: invitation,
    clase: worksImg,
    link: "https://invitation-danna.netlify.app/"
  },
  {
    id: 8,
    name: "Invitacion fiesta de cumpleaños",
    url: invitationWork,
    clase: worksImg,
    link: "https://invitation-luisa.netlify.app/"
  },
]

export default function Home() {

  const {
    home,
    imgBx,
    img,
    description,
    skills,
    skillsBx,
    skillsItem,
    h2,
    works,
    worksBx,
    worksItem,
    contact,
    form,
    inputBx,
    input,
    label,
    button,
    textarea
  } = styles

  const [innerWidth, setInnerWidth] = useState(350)
  const [slidesPerView, setSlidesPerView] = useState(1)
  
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const cambiarSlidesPerView = () => {
    if (window.innerWidth >= 1024) {
      setSlidesPerView(3)
    } else {
      setSlidesPerView(1)
    }

    setInnerWidth(window.innerWidth)
  }

  const submit = (e: any) => {
    e.preventDefault()

    if (email.trim() && name.trim() &&  message.trim()) {
      emailjs.sendForm('service_ftvhfrg', 'template_fi9gds9', e.target, '9Y9bFfl7VWEo7d55L')
        .then((result) => {
          setEmail("")
          setName("")
          setMessage("")
          Swal.fire({
            title: 'Mensaje enviado',
            text: 'Me pondre en contacto con usted',
            icon: 'success',
            confirmButtonText: 'Listo'
          })
          console.log(result.text);
        }, (error) => {
          Swal.fire({
            title: 'Mensaje no enviado',
            text: 'Disculpe ocurrio un error',
            icon: 'error',
            confirmButtonText: 'Listo'
          })
          console.log(error.text);
        })
    }
  }

  useEffect(() => {
    window.addEventListener("resize", cambiarSlidesPerView )
    setInnerWidth(window.innerWidth)
    
    return () => {
      window.addEventListener("resize", cambiarSlidesPerView )
    }
  })

  useEffect(() => {
    if (innerWidth >= 1024) {
      setSlidesPerView(3)
    } else {
      setSlidesPerView(1)
    }
  }, [innerWidth])

  return (
    <div>
      <div className={ home } id={ "home" }>
        <div className={ description }>
          <h1>Soy Gerard Matos desarrollador Web Front-End y Back-End.</h1>
        </div>
        <div className={ imgBx }>
          <ImageContainer clase={ img } src={ foto } alt={ "Foto de Gerard Matos" }/>
        </div>
      </div>
      <div className={ skills } id={ "skills" }>
        <h2 className={ h2 }>SKILLS</h2>
        <CarruselImgs
          elements={ skillsImgs }
          clasePrincipal={ skillsBx }
          claseBx={ skillsItem }
          onSlideChange={() => { } }
          onSwiper={() => { } }
          spaceBetween={30}
          slidesPerView={slidesPerView}
          navigation={true}
          speed={0}
          loop={true}
          draggable={true}
          effect={undefined}
        />
      </div>
      <div className={ works } id={ "works" }>
        <h2 className={ h2 }>WORKS</h2>
        <CarruselImgs
          elements={ worksImgs }
          clasePrincipal={ worksBx }
          claseBx={ worksItem }
          onSlideChange={() => { } }
          onSwiper={() => { } }
          spaceBetween={30}
          slidesPerView={slidesPerView}
          navigation={true}
          speed={0}
          loop={true}
          draggable={true}
          effect={undefined}
        />
      </div>
      <div className={ contact }>
        <h2 className={ h2 }>Contactame</h2>
        <form className={ form } onSubmit={ (e) => submit(e) }>
          <div className={ inputBx }>
            <label htmlFor="name" className={ label }>Name:</label>
            <input type="text" id="name" name="user_name" className={ input } value={name} onChange={ (e) => setName(e.target.value) } />
          </div>
          <div className={ inputBx }>
            <label htmlFor="email" className={ label }>Email</label>
            <input type="email" id="email" name="user_email" className={ input } value={email} onChange={ (e) => setEmail(e.target.value) } />
          </div>
          <div className={ inputBx }>
            <label htmlFor="message" className={ label }>Mensaje</label>
            <textarea id="message" name="user_message" className={ textarea } value={message} onChange={ (e) => setMessage(e.target.value) } />
          </div>
          <button className={ button }>Enviar</button>
        </form>
      </div>
    </div>
  )
}
