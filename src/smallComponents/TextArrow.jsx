import React from 'react';
import { useRouter } from 'next/router';

const TextArrow = ({ buttonText, iconName, path, center }) => {
  const router = useRouter();
  console.log({center})
  const handleClick = () => {
    router.push(path);
  };

  return (
    <div className={`textButtonWrapper cursor-pointer flex items-center justify-center`}>
      <button onClick={handleClick} className="textButton mundial-regular  uppercase">
        {buttonText}
      </button>
      <span className="material-symbols-outlined" onClick={handleClick}>
        {iconName}
      </span>
    </div>
  );
};

export default TextArrow;
