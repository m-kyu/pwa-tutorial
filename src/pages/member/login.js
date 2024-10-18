import { signIn } from 'next-auth/react'
import { useState } from 'react';
import React from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });
    
        if (result.ok) {
          // Redirect to a protected page or handle success
          console.log('Successfully signed in');
        } else {
          console.log('Error: ', result.error);
        }
      };
  return (
    <div>
       <h1>로그인</h1>
       <div>
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button type="submit">Sign In</button>
            </form>
       </div>
      <button onClick={() => signIn('google', { callbackUrl: '/' })}>Google로 로그인</button>
      <button onClick={() => signIn('kakao', { callbackUrl: '/' })}>Kakao로 로그인</button>
      <button onClick={() => signIn('naver', { callbackUrl: '/' })}>Naver로 로그인</button>
      <button onClick={() => signIn('github', { callbackUrl: '/' })}>Github로 로그인</button>
    </div>
  )
}

export default Login