import React, { useMemo, useContext, useCallback, useState, FC } from 'react';
import { Modal } from 'antd';
import ImageItem from '../ImageItem';
import { projectType } from '../../constants/index';
import { I18nContext } from '../../locales';

import './index.scss';

interface Project {
  id: number;
  type: string;
  name: string;
}

const Project: FC = () => {
  const { translate } = useContext(I18nContext);
  const data = translate('project');
  const [visible, setVisible] = useState(false);
  const [detailData, setDetailData] = useState<Project | null>(null);
  const onClick = useCallback((id) => {
    setDetailData(data.find((item: Project) => item.id === id));
    setVisible(true);
  }, []);
  const onClose = useCallback(() => {
    setVisible(false);
    setDetailData(null);
  }, []);

  return useMemo(
    () => (
      <>
        <section className="section-container project-container scroll fade-in">
          {data.map((item: any) => (
            <div
              key={item.id}
              className="item"
              onClick={() => onClick(item.id)}
            >
              <ImageItem data={item.cover} />
              <div className="hover-cover">
                <div className="wrapper">
                  <p className="title">{item.name}</p>
                  <p className="type">
                    {
                      projectType.find((type) => item?.type == type.id + '')
                        ?.name
                    }
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
        {console.log(detailData)}
        {visible && (
          <Modal
            className="detail"
            title={
              projectType.find((type) => detailData?.type == type.id + '')?.name
            }
            visible={visible}
            onCancel={onClose}
            footer={''}
          >
            {detailData?.name}
          </Modal>
        )}
      </>
    ),
    [data, visible, detailData]
  );
};

export default Project;
