import PostTable from '../components/post/post-table'
import PostForm from '../components/user/user-form'

const PostPage = () => {
  return (
    <div style={{ margin: '20px 3rem' }}>
      <PostForm />
      <PostTable />
    </div>
  )
}

export default PostPage
