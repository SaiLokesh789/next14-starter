import { getPosts } from '@/lib/data'
import style from './BlogPage.module.css'
import PostCard from '@/components/postCard/PostCard'

// FETCH WITH API
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Something went wrong wile fetching post");
  }

  return res.json();
}

const BlogPage = async () => {

  const posts = await getData();

  //GET DATA WITHOUT API
  // const posts=await getPosts();

  return (
    <div className={style.container}>
      {
        posts.map(post => (
          <div className={style.post} key={post.title}>
            <PostCard post={post} />
          </div>
        ))
      }
    </div>
  )
}

export default BlogPage