import React, { useMemo, useContext } from 'react';
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

        <div className="col-left">
          <div className="item">
            <div className="item-label">{translate('list.time')}</div>
            <div className="item-content">{data?.time}</div>
          </div>

          {data?.codeLink && (
            <div className="item">
              <div className="item-label">{translate('list.codeLink')}</div>
              <a href={data.codeLink} target="_blank" rel="noreferrer noopener">
                {data.codeLink}
              </a>
            </div>
          )}

          <div className="item">
            <div className="item-label">{translate('list.skill')}</div>
            <div className="item-content">
              {/* {data.skill.map((val) => {
          return (<span className="padding-r" key={val}>
            {isNaN(parseInt(val, 10)) ? val : key2value('skillType', val) }
          </span>)
        })} */}
            </div>
          </div>

          {/*my role*/}
          <div className="item">
            <div className="item-label">{translate('list.myRole')}</div>
            <div className="item-content">
              <ul>
                {data?.myRole?.map((item: string) => {
                  return (
                    <li key={item}>
                      {/* <FormattedMessage className="ul-name" id={`role.${key2value('roleType', val)}`}/> */}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/*team member*/}
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
                      <span className="padding-lr">{data.team[key]}</span>
                      {translate('list.unit')}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

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

        {/*imageList*/}
        <div className="detail-images">
          {data['detailImage']?.map((item: string) => (
            <img src={item} key={item} alt={item} />
          ))}
        </div>
      </div>
    ),
    [data]
  );
};

export default ProjectDetail;
