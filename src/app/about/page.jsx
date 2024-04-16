import style from './About.module.css'
import Image from "next/image"

export const metadata = {
  title: "About Page",
  description: "About Description",
}

const AboutPage = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h2 className={style.subTitle}>About Agency</h2>
        <h1 className={style.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p>We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibility and precission We're world's Our Special Team best consulting & finance solution provider. Wide range of web and software development services.</p>
        <div className={style.boxes}>
          <div className={style.box}>
            <h3>10 K+</h3>
            <p>Year of experience</p>
          </div>
          <div className={style.box}>
            <h3>234 K+</h3>
            <p>People reached</p>
          </div>
          <div className={style.box}>
            <h3>5K+</h3>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={style.imageContainer}>
        <Image src="/about.png" alt='about img' fill className={style.img}/>
      </div>
    </div>
  )
}

export default AboutPage