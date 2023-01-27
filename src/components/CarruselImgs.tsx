import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { Navigation, EffectFade } from 'swiper'
import ImageContainer from './ImageContainer'
import { carruselImgsProps } from '@/interfaces/propsTypes'
import Link from 'next/link'

export default function CarruselImgs({
  elements,
  clasePrincipal,
  claseBx,
  onSlideChange,
  onSwiper,
  spaceBetween,
  slidesPerView,
  navigation,
  speed,
  loop,
  draggable,
  effect
}: carruselImgsProps) {
  return (
    <Swiper
      modules={[ Navigation, EffectFade ]}
      className={clasePrincipal}
      spaceBetween={spaceBetween}
      navigation={navigation}
      speed={speed}
      loop={loop}
      scrollbar={{ draggable: draggable }}
      slidesPerView={slidesPerView}
      onSlideChange={onSlideChange}
      onSwiper={onSwiper}
      effect={effect}
    >
      {
        elements.map(element => {
            const { id, url, name, clase, link } = element

            return (
              <SwiperSlide
                className={ claseBx }
                key={ id }
                id={ `${id}` }
              >
                <Link
                  className={ claseBx }
                  href={ link }
                  target={ "_blank" }
                >
                  <ImageContainer clase={clase} src={ url } alt={ name }/>
                  <p>{ name }</p>
                </Link>
              </SwiperSlide>
            )
          }
        )
      }
    </Swiper>
  )
}
