import { getUser } from '@/lib/data';
import style from './PostUser.module.css'
import Image from 'next/image';

const PostUser = async ({ userId }) => {

  const user = await getUser(userId);

  return (
    <div className={style.container}>
      <Image className={style.avatar} src={user.img ? user.img : "/noavatar.svg.webp"} alt='image' width={50} height={50} />
      <div className={style.text}>
        <span className={style.title}>Author</span>
        <span className={style.userName}>{user.username}</span>
      </div>
    </div>
  )
}

export default PostUser