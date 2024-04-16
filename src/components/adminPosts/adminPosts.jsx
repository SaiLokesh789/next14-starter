import { Post } from '@/lib/models';
import style from './adminPosts.module.css'
import { getPosts } from '@/lib/data';
import Image from 'next/image'

const AdminPosts =async () => {

  const posts =await getPosts();

  return (
    <div className={style.container}>
      <h1>Posts</h1>
      {
        posts.map(post=>(
          <div className={style.post} key={post.id}>
            <div className={style.detail}>
              <Image src={post.img?post.img:'/EmptyPostImg.jpeg'} height={30} width={30} />
              <span>{post.title}</span>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default AdminPosts; 