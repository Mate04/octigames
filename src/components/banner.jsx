import { useEffect, useRef } from 'react';

export default function Banner({ keyAD, height, width }) {
  const banner = useRef();

  useEffect(() => {
    if (banner.current) {
      const scriptId = `script-${Math.random().toString(36).substr(2, 9)}`;


      const conf = document.createElement('script');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.id = scriptId;
      script.src = `//www.topcreativeformat.com/${keyAD}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify({ key: keyAD, format: 'iframe', height, width, params: {} })}`;


      banner.current.innerHTML = '';

      banner.current.append(conf);
      banner.current.append(script);

      console.log('banner: ', banner.current)

      return () => {
        const loadedScript = document.getElementById(scriptId);
        if (loadedScript) {
          loadedScript.remove();
        }
      };
    }
  }, [keyAD, height, width, banner]);

  const bannerStyle = {
    height: `${height}px`,
    width: `${width}px`
  };

  return <div className={'banner'} ref={banner} style={bannerStyle}></div>;
}
