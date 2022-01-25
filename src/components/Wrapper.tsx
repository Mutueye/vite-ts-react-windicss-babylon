import React from 'react';

type Props = {
  className?: string;
};

// children isn’t defined in Props. Instead, it is already defined in the FC type.
const Wrapper: React.FC<Props> = ({ className, children }) => {
  const style = [
    'w-screen',
    'h-screen',
    'overflow-hidden',
    'bg-gray-700',
    'relative',
    className,
  ].join(' ');
  return <div className={style}>{children}</div>;
};

export default Wrapper;
