import { getPosts } from '@/lib/data'
import style from './BlogPage.module.css'
import PostCard from '@/components/postCard/PostCard'

// FETCH WITH API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");

  if (!res.ok) {
    throw new Error("Something went wrong wile fetching posts!");
  }

  return res.json();
}

export const metadata = {
  title: "Blogs Page",
  description: "Blogs Description",
}

const BlogPage = async () => {

  //Fetch data with an api
  const posts = await getData();

  //GET DATA WITHOUT API
  // const posts = await getPosts();

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