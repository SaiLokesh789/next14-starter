import style from './admin.module.css'
import AdminPostForm from '@/components/adminPostForm/adminPostForm'
import AdminPosts from '@/components/adminPosts/adminPosts'
import AdminUserForm from '@/components/adminUserForm/adminUserForm'
import AdminUsers from '@/components/adminUsers/adminUsers'
import { Suspense } from 'react'

const AdminPage = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={style.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPostForm />
          </Suspense>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={style.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUserForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default AdminPage