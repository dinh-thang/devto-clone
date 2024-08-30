import React from 'react';

const OAuthLoginForm = () => {
  const buttonStyle: string = 'w-full rounded p bg-red-500 m-[4px]'

  return (
    <form className='flex flex-col w-1/3 h-screen'>
      <button className={buttonStyle} type='submit' name='action' value='google'>
        Sign In with Google
      </button>
      <button className={buttonStyle} type='submit' name='action' value='github'>
        Sign In with Github
      </button>
    </form>
  );
};

export default OAuthLoginForm;