import React, { useEffect, useRef } from 'react';

interface AdsterraProps {
  keyAD: string;
  width?: number;
  height?: number;
}

const getId = (keyAD: string) => `atContainer-${keyAD}`;

const Adsterra = ({ keyAD, width, height }: AdsterraProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>();
  
  useEffect(() => {
    if (!ref.current.firstChild && keyAD) {
      const atAsyncOptions = {
        key: keyAD,
        width: width,
        height: height,
        format: 'iframe',
      };

      const conf = document.createElement('script');
      conf.innerHTML = `
        if (typeof atAsyncOptions !== 'object') var atAsyncOptions = [];
        atAsyncOptions.push(${JSON.stringify(atAsyncOptions, null, 2)});
      `;
      conf.type = 'text/javascript';

      const script = document.createElement('script');
      script.async = true;
      script.src = `//www.topcreativeformat.com/${keyAD}/invoke.js`;
      script.type = 'text/javascript';

      if (ref.current) {
        ref.current.append(conf);
        ref.current.append(script);
      }
    }
  }, [keyAD]);

  return (
    <>
      <div {...{ ref }} />
      <div id={getId(keyAD)} />
    </>
  );
};

export default Adsterra;