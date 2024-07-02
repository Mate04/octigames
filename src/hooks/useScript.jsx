import { useEffect } from 'react';

const useScript = (keyAD, height, width, ref) => {
  useEffect(() => {
    if (ref.current && !ref.current.firstChild) {
      const conf = document.createElement('script');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `//www.topcreativeformat.com/${keyAD}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify({ key: keyAD, format: 'iframe', height, width, params: {} })}`;

      ref.current.append(conf);
      ref.current.append(script);
    }
  }, [keyAD, height, width, ref]);
};

export default useScript;
