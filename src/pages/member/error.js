import React from 'react'
import { useRouter } from 'next/router';

const Error = () => {
    const router = useRouter();
    const { error } = router.query;
  
    return (
      <div>
        <h1>Error</h1>
        {error === "CredentialsSignin" && <p>Invalid login credentials.</p>}
        {error && <p>{error}</p>}
      </div>
    );
}

export default Error