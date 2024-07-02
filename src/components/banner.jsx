import { useEffect, useRef } from 'react';

export default function Banner({ keyAD, height, width }) {
  const banner = useRef();

  useEffect(() => {
    if (banner.current) {

      const existingScript = document.querySelector(`script[src="//www.topcreativeformat.com/${keyAD}/invoke.js"]`);
      if (existingScript) {
        existingScript.remove();
      }


      const conf = document.createElement('script');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `//www.topcreativeformat.com/${keyAD}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify({ key: keyAD, format: 'iframe', height, width, params: {} })}`;


      banner.current.innerHTML = '';

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [keyAD, height, width]);

  const bannerStyle = {
    height: `${height}px`,
    width: `${width}px`
  };

  return <div className={'banner'} ref={banner} style={bannerStyle}></div>;
}
