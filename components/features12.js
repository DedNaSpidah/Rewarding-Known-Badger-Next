import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features12 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features12-layout349 thq-section-padding">
        <div className="features12-max-width thq-section-max-width">
          <div className="features12-section-title">
            <span className="features12-text1 thq-body-small">
              {props.featureSlogan ?? (
                <Fragment>
                  <span className="features12-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_5k0hcO'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="thq-flex-column">
              <h2 className="features12-text2 thq-heading-2">
                {props.featureTitle ?? (
                  <Fragment>
                    <span className="features12-text7">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_FVOk1j'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="features12-text3 thq-body-large">
                {props.featureDescription ?? (
                  <Fragment>
                    <span className="features12-text8">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_XGeydu'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="features12-actions thq-flex-row">
              <button className="thq-button-filled features12-button1">
                <span className="thq-body-small">
                  {props.mainAction ?? (
                    <Fragment>
                      <span className="features12-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_RjC_m5'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline features12-button2">
                <span className="thq-body-small">
                  {props.secondaryAction ?? (
                    <Fragment>
                      <span className="features12-text6">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_hRucQ_'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features12-layout349 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features12-max-width {
            gap: var(--dl-space-space-threeunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features12-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features12-text1 {
            align-self: center;
            text-align: center;
          }
          .features12-text2 {
            align-self: center;
            text-align: center;
          }
          .features12-text3 {
            align-self: center;
            text-align: center;
          }
          .features12-actions {
            align-self: center;
          }
          .features12-text4 {
            display: inline-block;
          }
          .features12-text5 {
            display: inline-block;
          }
          .features12-text6 {
            display: inline-block;
          }
          .features12-text7 {
            display: inline-block;
          }
          .features12-text8 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features12-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .features12-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .features12-actions {
              width: 100%;
              flex-direction: column;
            }
            .features12-button1 {
              width: 100%;
            }
            .features12-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features12.defaultProps = {
  mainAction: undefined,
  featureSlogan: undefined,
  secondaryAction: undefined,
  featureTitle: undefined,
  featureDescription: undefined,
}

Features12.propTypes = {
  mainAction: PropTypes.element,
  featureSlogan: PropTypes.element,
  secondaryAction: PropTypes.element,
  featureTitle: PropTypes.element,
  featureDescription: PropTypes.element,
}

export default Features12
