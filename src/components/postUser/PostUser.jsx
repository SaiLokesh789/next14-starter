import style from './PostUser.module.css'
import axios from 'axios';

const getUser = async (userId) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: 'no-store' });

  return res.data;
}

const PostUser = async ({ userId }) => {

  const user = await getUser(userId);

  return (
    <div className={style.container}>
      <span className={style.title}>Author</span>
      <span className={style.userName}>{user.name}</span>
    </div>
  )
}

export default PostUser