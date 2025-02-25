import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features21 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features21-layout349 thq-section-padding">
        <div className="features21-max-width thq-section-max-width thq-grid-auto-300">
          <div className="features21-container1 thq-card thq-flex-column">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features21-image1 thq-img-round thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.feature1Title ?? (
                <Fragment>
                  <span className="features21-text23">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_6czSI0'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features21-text11 thq-body-small">
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features21-text24">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_2fUmi-'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features21-container2 thq-card thq-flex-column">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features21-image2 thq-img-round thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.feature2Title ?? (
                <Fragment>
                  <span className="features21-text21">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_5u1ghH'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features21-text13 thq-body-small">
              {props.feature2Description ?? (
                <Fragment>
                  <span className="features21-text25">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_QJa_kx'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features21-container3 thq-card thq-flex-column">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features21-image3 thq-img-round thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.feature3Title ?? (
                <Fragment>
                  <span className="features21-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ZOGBi2'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features21-text15 thq-body-small">
              {props.feature3Description ?? (
                <Fragment>
                  <span className="features21-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_QWnjtZ'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features21-container4 thq-card thq-flex-column">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features21-image4 thq-img-round thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.feature4Title ?? (
                <Fragment>
                  <span className="features21-text20">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_F3kWGg'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features21-text17 thq-body-small">
              {props.feature4Description ?? (
                <Fragment>
                  <span className="features21-text22">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_MsKm_E'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features21-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .features21-max-width {
            display: flex;
            align-items: center;
          }
          .features21-container1 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .features21-image1 {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .features21-text11 {
            text-align: center;
          }
          .features21-container2 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary2);
          }
          .features21-image2 {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .features21-text13 {
            text-align: center;
          }
          .features21-container3 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .features21-image3 {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .features21-text15 {
            text-align: center;
          }
          .features21-container4 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary2);
          }
          .features21-image4 {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .features21-text17 {
            text-align: center;
          }
          .features21-text18 {
            display: inline-block;
          }
          .features21-text19 {
            display: inline-block;
          }
          .features21-text20 {
            display: inline-block;
          }
          .features21-text21 {
            display: inline-block;
          }
          .features21-text22 {
            display: inline-block;
          }
          .features21-text23 {
            display: inline-block;
          }
          .features21-text24 {
            display: inline-block;
          }
          .features21-text25 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features21-max-width {
              gap: var(--dl-space-space-twounits);
              flex-direction: column-reverse;
            }
          }
          @media (max-width: 767px) {
            .features21-container1 {
              width: 100%;
            }
            .features21-container2 {
              width: 100%;
            }
            .features21-container3 {
              width: 100%;
            }
            .features21-container4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features21.defaultProps = {
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1569144157591-c60f3f82f137?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
  feature3Title: undefined,
  feature4ImageAlt: 'image',
  feature3Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1599134842279-fe807d23316e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDYxOHww&ixlib=rb-4.0.3&w=1400',
  feature2ImageAlt: 'image',
  feature4Title: undefined,
  feature1ImageAlt: 'image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1602145461313-26c587cc0ca9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
  feature2Title: undefined,
  feature4Description: undefined,
  feature3ImageAlt: 'image',
  feature1Title: undefined,
  feature1Description: undefined,
  feature2Description: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1603322199363-14380ec2ba31?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDYxOHww&ixlib=rb-4.0.3&w=1400',
}

Features21.propTypes = {
  feature3ImageSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature4Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature4Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
}

export default Features21
