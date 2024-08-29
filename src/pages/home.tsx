import UserForm from '../components/user/user-form'
import UserTable from '../components/user/user-table'

const HomePage = () => {
  return (
    <div style={{ margin: '20px 3rem' }}>
      <UserForm />
      <UserTable />
    </div>
  )
}

export default HomePage
