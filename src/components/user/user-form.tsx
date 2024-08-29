import { Button, Input } from 'antd'
import React, { useState } from 'react'

const UserForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = () => {
    console.log('fullname: ', fullName)
    console.log('email: ', email)
    console.log('password: ', password)
    console.log('phone: ', phone)
  }

  return (
    <div className='user-form'>
      <div style={{ display: 'flex', gap: '3rem', flexDirection: 'column' }}>
        <div>
          <span>FullName</span>
          <Input value={fullName} onChange={e => setFullName(e.target.value)} />
        </div>
        <div>
          <span>Email</span>
          <Input value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <span>Số điện thoại</span>
          <Input value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div>
          <Button type='primary' onClick={handleSubmit}>
            Create User
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserForm
