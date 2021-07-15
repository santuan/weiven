import Head from "next/head"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import NextLink from "next/link"
import Offcanvas from "@/components/Offcanvas/Offcanvas"
import Footer from "@/components/Footer"
import Headroom from "react-headroom"
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiLightBulb } from "react-icons/hi"
import { MdLightbulbOutline } from "react-icons/md"
import Image from "next/image"

export default function Container(props) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: "Weiven",
    description: `Simplificamos la tecnología.`,
    image:
      "https://res.cloudinary.com/santuan/image/upload/v1625517740/weiven/static/w0xrqakdkujw3vdug93i.png",
    type: "website",
    ...customMeta,
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://weiven.ar${router.asPath}`} />
        <link rel="canonical" href={`https://weiven.ar${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Weiven" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Weiven" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Offcanvas />
      <button
        aria-label="Cambiar de blanco a negro"
        type="button"
        className="opacity-0 theme-switch"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {mounted && (
          <div className="p-4 pr-5 text-xl text-gray-800 dark:text-gray-200">
            {resolvedTheme === "dark" ? <MdLightbulbOutline /> : <HiLightBulb />}
          </div>
        )}
      </button>
      <Headroom disableInlineStyles>
        <div className="max-w-full px-4 mx-auto lg:max-w-5xl">
          <nav className="flex items-center justify-between w-full py-4 md:py-6 lg:py-0 ">
            <a href="#skip" className="sr-only skip-nav">
              Skip to content
            </a>
            <div className="ml-0 text-xl font-bold tracking-wider ">
              <NextLink href="/">
                <a className="block mt-1 hover:opacity-80">
                  <Image src="/logo.svg" width="150" height="30" alt="Weiven" />
                </a>
              </NextLink>
            </div>
            <div className="justify-end hidden uppercase lg:flex">
              <NextLink href="/servicios">
                <a className="p-1 font-sans text-sm font-bold text-gray-900 sm:py-4 sm:pl-6 dark:text-gray-100">
                  Servicios
                </a>
              </NextLink>
              <NextLink href="/quienes-somos">
                <a className="p-1 font-sans text-sm font-bold text-gray-900 sm:py-4 sm:pl-6 dark:text-gray-100">
                  Quienes Somos
                </a>
              </NextLink>
              <NextLink href="/contacto">
                <a className="p-1 font-sans text-sm font-bold text-gray-900 sm:py-4 sm:pl-6 dark:text-gray-100">
                  Contacto
                </a>
              </NextLink>
            </div>
          </nav>
        </div>
      </Headroom>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        key={router.route}
        transition={{ type: "spring", duration: 0.8 }}
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <main
          id="skip"
          className="flex flex-col justify-center pt-16 bg-white md:pt-12 dark:bg-gray-900"
        >
          {children}
          <Footer />
        </main>
      </motion.div>
    </div>
  )
}
