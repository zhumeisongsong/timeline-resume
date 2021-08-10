import React, { useMemo, useCallback, useState } from 'react';

import './index.scss';

const ImageItem = ({ data }: any) => {
  const [state, setState] = useState({
    smallImageLoaded: false,
    largeImageLoaded: false
  });
  const onSmallImageLoad = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      smallImageLoaded: true
    }));
  }, []);
  const onLargeImageLoad = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      largeImageLoaded: true
    }));
  }, []);

  return useMemo(
    () => (
      <div className="placeholder">
        <img
          src={data.thumbnail}
          className={'img-small' + (state?.smallImageLoaded ? ' loaded' : '')}
          onLoad={onSmallImageLoad}
          alt={data.text}
        />
        <div className="inner" />
        <img
          src={data.image}
          className={state?.largeImageLoaded ? ' loaded' : ''}
          onLoad={onLargeImageLoad}
          alt={data.text}
        />
      </div>
    ),
    [data, state]
  );
};

export default ImageItem;
