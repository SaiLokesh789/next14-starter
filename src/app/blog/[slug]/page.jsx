import style from './SinglePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/PostUser';
import { Suspense } from 'react';


// FETCH DATA WITH API
const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

const SinglePostPage = async ({ params }) => {

  const { slug } = params;

  const post = await getData(slug);

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image className={style.img} src="https://images.pexels.com/photos/16293663/pexels-photo-16293663/free-photo-of-easter-decor-with-eggs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='image' fill />
      </div>
      <div className={style.textContainer}>
        <h1 className={style.title}>{post.title}</h1>
        <div className={style.detail}>
          <Image className={style.avatar} src="https://images.pexels.com/photos/16293663/pexels-photo-16293663/free-photo-of-easter-decor-with-eggs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='image' width={50} height={50} />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={style.detailText}>
            <span className={style.detailTitle}>Publisher</span>
            <span className={style.detailValue}>01.10.2004</span>
          </div>
        </div>
        <div className={style.content}>{post.body}</div>
      </div>
    </div>
  )
}

export default SinglePostPage