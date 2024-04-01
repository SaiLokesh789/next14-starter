import style from './PostCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = async ({ post }) => {

  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imageContainer}>
          <Image src="https://images.pexels.com/photos/16293663/pexels-photo-16293663/free-photo-of-easter-decor-with-eggs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' fill className={style.img} />
        </div>
        <span className={style.date}>01.10.2004</span>
      </div>
      <div className={style.bottom}>
        <h1 className={style.title}>{post.title.substring(0, 20)}...</h1>
        <p className={style.desc}>{post.body.substring(0, 120)}...</p>
        <Link href={`/blog/${post.id}`} className={style.link}>Read More</Link>
      </div>
    </div>
  )
}

export default PostCard