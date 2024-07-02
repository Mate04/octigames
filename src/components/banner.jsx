import { useRef, useEffect } from 'react';

export default function Banner({ keyAD, height, width }) {
  const banner = useRef();

  useEffect(() => {
    const uniqueId = `banner-${Math.random().toString(36).substr(2, 9)}`;
    if (banner.current) {
      const conf = document.createElement('script');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `//www.topcreativeformat.com/${keyAD}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify({ key: keyAD, format: 'iframe', height, width, params: {} })}`;

      const div = document.createElement('div');
      div.id = uniqueId;
      banner.current.innerHTML = '';
      banner.current.append(div);
      div.append(conf);
      div.append(script);
    }
  }, [keyAD, height, width]);

  const bannerStyle = {
    height: `${height}px`,
    width: `${width}px`
  };

  return <div className={'banner'} ref={banner} style={bannerStyle}></div>;
}
