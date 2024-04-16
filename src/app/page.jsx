import Link from 'next/link';
import style from './Home.module.css'
import Image from 'next/image';

const Home = () => {
  return <div className={style.container}>
    <div className={style.textContainer}>
      <h1 className={style.title}>Creative Thoughts Agency.</h1>
      <p className={style.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis adipisci minima reiciendis a autem assumenda dolore.</p>
      <div className={style.buttons}>
        <Link href="/about" className={style.button}>Learn More</Link>
        <Link href="/contact" className={style.button}>Contact</Link>
      </div>
    </div>
    <div className={style.imageContainer}>
      <Image src="/hero.gif" alt="Image" fill className={style.heroImage} />
    </div>
  </div>;
}

export default Home;