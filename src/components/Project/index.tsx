import React, { useMemo, useContext } from 'react';
import ImageItem from '../ImageItem';
import { I18nContext } from '../../locales';

const Project = () => {
  const { translate } = useContext(I18nContext);
  const data: any = translate('project');
  // setModalVisible(true, item.id)
  return useMemo(
    () => (
      <section className="image-list scroll fade-in">
        {data.map((item: any) => (
          <div
            key={item.id}
            className="item"
            // onClick={}
          >
            {/* <ImageItem data={item.cover} /> */}
            <div className="hover-cover">
              <div className="wrapper">
                <p className="title">{item.contentList.name}</p>
                {item.containLink && <p className="tag"></p>}
                {item.containCode && <p className="tag"></p>}
              </div>
            </div>
          </div>
        ))}
      </section>
    ),
    [data]
  );
};

export default Project;
