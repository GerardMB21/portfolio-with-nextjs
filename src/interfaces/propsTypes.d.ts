import { functionVoid } from "./functionsTypes"
import { imgElement } from "./imgsTypes"

export interface layoutProps {
  children: JSX.Element
}

export interface imageContainerProps {
  clase: string
  src: any
  alt: string
}

export interface carruselImgsProps {
  elements: imgElement[]
  clasePrincipal: string
  claseBx: string
  onSlideChange: functionVoid
  onSwiper: functionVoid
  spaceBetween: number
  slidesPerView: number
  navigation: boolean
  speed: number
  loop: boolean
  draggable: boolean,
  effect: "slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards" | undefined
}