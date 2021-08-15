import React, { useMemo, useContext } from 'react';
import { roleType, MapType, projectType } from '../../constants';
import { I18nContext } from '../../locales';
import { nl2br } from '../../utils/string';

import './index.scss';

const ProjectDetail = ({ data }: any) => {
  const { translate } = useContext(I18nContext);

  return useMemo(
    () => (
      <div className="detail-content">
        <header>
          <h2>{data?.name}</h2>
          {data?.content && <div className="item">{data?.content}</div>}

          {data?.link && (
            <div className="item link">
              <a href={data?.link} target="_blank" rel="noreferrer noopener">
                {data?.link}
              </a>
            </div>
          )}
        </header>

        <div className="text-content">
          {/* type */}
          <div className="item">
            <div className="item-label">{translate('list.type')}</div>
            <div className="item-content">
              {
                projectType.find((item: MapType) => data?.type === item.id + '')
                  ?.name
              }
            </div>
          </div>
          {/* time */}
          <div className="item">
            <div className="item-label">{translate('list.time')}</div>
            <div className="item-content">{data?.time}</div>
          </div>
          {/* codeLink */}
          {data?.codeLink && (
            <div className="item">
              <div className="item-label">{translate('list.codeLink')}</div>
              <a href={data.codeLink} target="_blank" rel="noreferrer noopener">
                {data.codeLink}
              </a>
            </div>
          )}
          {/* skill */}
          <div className="item">
            <div className="item-label">{translate('list.skill')}</div>
            <div className="item-content">
              {data?.skill?.map((item: string, index: string) => (
                <span className="padding-r" key={index}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          {/* role */}
          <div className="item">
            <div className="item-label">{translate('list.myRole')}</div>
            <div className="item-content">
              <ul>
                {data?.myRole?.map((id: string) => {
                  return (
                    <li key={id} className="ul-name">
                      {translate(
                        `role.${
                          roleType.find((item) => item.id + '' === id)?.name
                        }`
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* team */}
          <div className="item">
            <div className="item-label">{translate('list.team')}</div>
            <div className="item-content">
              <ul>
                {Object.keys(data?.team).map((key) => {
                  return (
                    <li key={key}>
                      <span className="ul-name">
                        {translate(`team.${key}`)}
                      </span>
                      <span className="padding-lr font-bold">
                        {data.team[key]}
                      </span>
                      {translate('list.unit')}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* learned */}
          {data?.learned && (
            <div className="item">
              <div className="item-label">{translate('list.learned')}</div>
              <div
                className="item-content"
                dangerouslySetInnerHTML={{
                  __html: nl2br(data.learned)
                }}
              />
            </div>
          )}
        </div>
        <div className="image-content">
          {data['detailImage']?.map((item: string) => (
            <img src={item} key={item} alt={item} />
          ))}
        </div>
      </div>
    ),
    [data, translate]
  );
};

export default ProjectDetail;
