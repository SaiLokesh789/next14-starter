import style from './SinglePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/PostUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';
import axios from 'axios';


//Fetch data with API
const getData = async (slug) => {
  const res = await axios.get(`http://localhost:3000/api/blog/${slug}`);
  return res.data;
}

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  }

}

const SinglePostPage = async ({ params }) => {

  const { slug } = params;

  //Fetch data with API
  const post = await getData(slug);

  //Fetch data with out API
  // const post = await getPost(slug);

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image className={style.img} src={post.img ? post.img : "/EmptyPostImg.jpeg"} alt='image' fill />
      </div>
      <div className={style.textContainer}>
        <h1 className={style.title}>{post.title}</h1>
        <div className={style.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={style.detailText}>
            <span className={style.detailTitle}>Publisher</span>
            <span className={style.detailValue}>{post.createdAt.toString().slice(0, 10)}</span>
          </div>
        </div>
        <div className={style.content}>{post.desc}</div>
      </div>
    </div>
  )
}

export default SinglePostPage