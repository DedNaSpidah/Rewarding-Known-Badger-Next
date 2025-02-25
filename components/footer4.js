import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer4 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <footer className="footer4-footer7 thq-section-padding">
        <div className="footer4-max-width thq-section-max-width">
          <div className="footer4-content">
            <div className="footer4-logo"></div>
            <div className="footer4-links">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small"
              >
                {props.link1 ?? (
                  <Fragment>
                    <span className="footer4-text15">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_BC3oM7'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small"
              >
                {props.link2 ?? (
                  <Fragment>
                    <span className="footer4-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_7HeFLu'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small"
              >
                {props.link3 ?? (
                  <Fragment>
                    <span className="footer4-text14">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_DuQSSh'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small"
              >
                {props.link4 ?? (
                  <Fragment>
                    <span className="footer4-text13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_gJLf4U'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small"
              >
                {props.link5 ?? (
                  <Fragment>
                    <span className="footer4-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_8ruVqn'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
          <div className="footer4-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer4-row">
              <div className="footer4-container"></div>
              <div className="footer4-footer-links">
                <span className="footer4-text10 thq-body-small">
                  {props.privacyLink ?? (
                    <Fragment>
                      <span className="footer4-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_cY4OLX'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.termsLink ?? (
                    <Fragment>
                      <span className="footer4-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_1xPfcN'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.cookiesLink ?? (
                    <Fragment>
                      <span className="footer4-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_1TLDtv'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer4-footer7 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer4-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-content {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-logo {
            gap: 24px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer4-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer4-credits {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer4-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer4-container {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .footer4-footer-links {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer4-text10 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          .footer4-text13 {
            display: inline-block;
          }
          .footer4-text14 {
            display: inline-block;
          }
          .footer4-text15 {
            display: inline-block;
          }
          .footer4-text16 {
            display: inline-block;
          }
          .footer4-text17 {
            display: inline-block;
          }
          .footer4-text18 {
            display: inline-block;
          }
          .footer4-text19 {
            display: inline-block;
          }
          .footer4-text20 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .footer4-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer4-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer4-links {
              flex-direction: column;
            }
            .footer4-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer4.defaultProps = {
  link4: undefined,
  link3: undefined,
  link1: undefined,
  cookiesLink: undefined,
  link2: undefined,
  link5: undefined,
  termsLink: undefined,
  privacyLink: undefined,
}

Footer4.propTypes = {
  link4: PropTypes.element,
  link3: PropTypes.element,
  link1: PropTypes.element,
  cookiesLink: PropTypes.element,
  link2: PropTypes.element,
  link5: PropTypes.element,
  termsLink: PropTypes.element,
  privacyLink: PropTypes.element,
}

export default Footer4
