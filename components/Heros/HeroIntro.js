import styles from "@/components/Heros/HeroIntro.module.css"
import AboutWave from "@/components/Plugs/AboutWave"
import Image from "next/image"
import Fade from "react-reveal/Fade"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { IoIosArrowDown } from "react-icons/io"

export default function About() {
  return (
    <div className={styles.container}>
      <div className="relative z-10 flex flex-col items-start justify-center w-full max-w-5xl px-6 mx-auto text-left md:px-4">
        <Fade duration={2200}>
          <h1 className="w-full mx-auto mb-3 text-3xl text-gray-100 md:text-6xl ">
            Simplificamos <br /> la tecnologías
          </h1>
        </Fade>
        <Fade bottom delay={600} duration={1200}>
          <h2 className="w-full max-w-md my-3 text-xl text-left text-gray-100 md:text-2xl">
            Expertos en tecnología para negocios y organizaciones gubernamentales.
          </h2>
        </Fade>
        <Fade bottom delay={900} duration={1200}>
          <AnchorLink
            className="flex items-center justify-center px-6 py-1 mx-auto mt-3 font-sans text-lg font-bold text-gray-800 transition-all duration-500 transform bg-white border-b-2 border-transparent rounded shadow-md hover:border-blue-500 hover:text-blue-600"
            href="#about"
          >
            <span className="mr-3">Conocenos</span>
            <IoIosArrowDown className="animate-pulse "/>
          </AnchorLink>
        </Fade>
      </div>
      <div className="absolute inset-0 z-0 bg-blue-900 bg-opacity-10 ">
        <div className="opacity-40 ">
          <Image
            src="/static/images/contacto.jpg"
            layout="fill"
            objectFit="cover"
            alt="Diseño de servicios"
          />
        </div>
      </div>
      <AboutWave />
    </div>
  )
}
