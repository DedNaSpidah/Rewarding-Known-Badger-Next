import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Pricing14 = (props) => {
  const translate = useTranslations()
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <div className="pricing14-pricing23 thq-section-padding">
        <div className="pricing14-max-width thq-section-max-width">
          <div className="pricing14-section-title">
            <span className="pricing14-text100 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="pricing14-text186">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_DjtLFG'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="pricing14-content">
              <h2 className="pricing14-text101 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="pricing14-text196">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-M0ICB'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="pricing14-text102 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="pricing14-text159">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ze22ce'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="pricing14-tabs">
            {isMonthly && (
              <button
                onClick={() => setIsMonthly(true)}
                className="pricing14-button10 thq-button-filled thq-button-animated"
              >
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_YpAsla'),
                    }}
                  ></span>
                </span>
              </button>
            )}
            {!isMonthly && (
              <button
                onClick={() => setIsMonthly(true)}
                className="pricing14-button11 thq-button-animated thq-button-outline"
              >
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_0degTQ'),
                    }}
                  ></span>
                </span>
              </button>
            )}
            {!isMonthly && (
              <button
                onClick={() => setIsMonthly(false)}
                className="pricing14-button12 thq-button-filled thq-button-animated"
              >
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_js2zRa'),
                    }}
                  ></span>
                </span>
              </button>
            )}
            {isMonthly && (
              <button
                onClick={() => setIsMonthly(false)}
                className="pricing14-button13 thq-button-animated thq-button-outline"
              >
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_vbn5LT'),
                    }}
                  ></span>
                </span>
              </button>
            )}
          </div>
          {isMonthly && (
            <div className="pricing14-container1">
              <div className="pricing14-column1 thq-card">
                <div className="pricing14-price10">
                  <div className="pricing14-price11">
                    <p className="pricing14-text107 thq-body-large">
                      {props.plan1 ?? (
                        <Fragment>
                          <span className="pricing14-text183">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_93OypY'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text108 thq-heading-3">
                      {props.plan1Price ?? (
                        <Fragment>
                          <span className="pricing14-text182">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_pzO4st'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan1Yearly ?? (
                        <Fragment>
                          <span className="pricing14-text166">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_iUrqH7'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-list1">
                    <div className="pricing14-list-item10">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text199">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_dakaJ6'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item11">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text197">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_2eY3FN'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item12">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature3 ?? (
                          <Fragment>
                            <span className="pricing14-text178">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_kW4OlI'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button14 thq-button-animated thq-button-outline">
                  <span className="thq-body-small">
                    {props.plan1Action ?? (
                      <Fragment>
                        <span className="pricing14-text167">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_QklrY9'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column2 thq-card">
                <div className="pricing14-price12">
                  <div className="pricing14-price13">
                    <p className="pricing14-text114 thq-body-large">
                      {props.plan2 ?? (
                        <Fragment>
                          <span className="pricing14-text174">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_858L3f'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text115 thq-heading-3">
                      {props.plan2Price ?? (
                        <Fragment>
                          <span className="pricing14-text175">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ffnNKj'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan2Yearly ?? (
                        <Fragment>
                          <span className="pricing14-text184">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_IEieHs'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-list2">
                    <div className="pricing14-list-item13">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text179">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_5baDdi'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item14">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text165">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_j6hZxN'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item15">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature3 ?? (
                          <Fragment>
                            <span className="pricing14-text187">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_gJjETj'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item16">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature4 ?? (
                          <Fragment>
                            <span className="pricing14-text204">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_SzkKM3'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button15 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan2Action ?? (
                      <Fragment>
                        <span className="pricing14-text162">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_5RqLco'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column3 thq-card">
                <div className="pricing14-price14">
                  <div className="pricing14-price15">
                    <p className="pricing14-text122 thq-body-large">
                      {props.plan3 ?? (
                        <Fragment>
                          <span className="pricing14-text190">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_xBUup3'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text123 thq-heading-3">
                      {props.plan3Price ?? (
                        <Fragment>
                          <span className="pricing14-text205">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_qEJnzC'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan3Yearly ?? (
                        <Fragment>
                          <span className="pricing14-text163">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_WMb_En'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-list3">
                    <div className="pricing14-list-item17">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text170">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_nYG0YG'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item18">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text158">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_k2BzVl'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item19">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature3 ?? (
                          <Fragment>
                            <span className="pricing14-text195">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_T0s2gF'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item20">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature4 ?? (
                          <Fragment>
                            <span className="pricing14-text202">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_7MFxz2'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item21">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature5 ?? (
                          <Fragment>
                            <span className="pricing14-text181">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_OXtR8J'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button16 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan3Action ?? (
                      <Fragment>
                        <span className="pricing14-text193">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_NeiwRQ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
          {!isMonthly && (
            <div className="pricing14-container2">
              <div className="pricing14-column4 thq-card">
                <div className="pricing14-price16">
                  <div className="pricing14-price17">
                    <span className="pricing14-text131 thq-body-large">
                      {props.plan11 ?? (
                        <Fragment>
                          <span className="pricing14-text172">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_6ezXPu'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text132 thq-heading-3">
                      {props.plan1Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text198">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_UTeTI9'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan1Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text157">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Oz2uSN'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list4">
                    <div className="pricing14-list-item22">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text173">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_fi6EFD'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item23">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text161">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_tETPB0'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item24">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text189">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_7oLTmM'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button17 thq-button-animated thq-button-outline">
                  <span className="thq-body-small">
                    {props.plan1Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text180">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_kVKdMd'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column5 thq-card">
                <div className="pricing14-price18">
                  <div className="pricing14-price19">
                    <span className="pricing14-text138 thq-body-large">
                      {props.plan21 ?? (
                        <Fragment>
                          <span className="pricing14-text185">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_LPySSP'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text139 thq-heading-3">
                      {props.plan2Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text201">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_BGc9ej'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan2Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text194">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_DXmy_L'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list5">
                    <div className="pricing14-list-item25">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text155">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_95S-Y9'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item26">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text177">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_fDYv6b'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item27">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text188">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_24VbbV'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item28">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature41 ?? (
                          <Fragment>
                            <span className="pricing14-text192">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_Osxz9y'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button18 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan2Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text171">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_8y9U3q'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column6 thq-card">
                <div className="pricing14-price20">
                  <div className="pricing14-price21">
                    <span className="pricing14-text146 thq-body-large">
                      {props.plan31 ?? (
                        <Fragment>
                          <span className="pricing14-text203">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_mWtJGn'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text147 thq-heading-3">
                      {props.plan3Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text164">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_kuGAif'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan3Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text156">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_HXRkmI'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list6">
                    <div className="pricing14-list-item29">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text160">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_aM4Z_A'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item30">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text200">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text__Lw6_9'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item31">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text191">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_Yb5ZmU'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item32">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature41 ?? (
                          <Fragment>
                            <span className="pricing14-text168">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_VEJMAt'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item33">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature51 ?? (
                          <Fragment>
                            <span className="pricing14-text169">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_SDx4qI'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button19 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan3Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text176">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_-JtV_D'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .pricing14-pricing23 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing14-max-width {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-section-title {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing14-text100 {
            text-align: center;
          }
          .pricing14-content {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text101 {
            text-align: center;
          }
          .pricing14-text102 {
            text-align: center;
          }
          .pricing14-tabs {
            display: flex;
            align-items: flex-start;
          }
          .pricing14-button10 {
            gap: var(--dl-space-space-halfunit);
            color: var(--dl-color-theme-neutral-light);
            width: 120px;
            height: 60px;
            border-top-left-radius: var(--dl-radius-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-radius-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .pricing14-button11 {
            gap: var(--dl-space-space-halfunit);
            width: 120px;
            height: 60px;
            border-style: solid;
            border-top-left-radius: var(--dl-radius-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-radius-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .pricing14-button12 {
            gap: var(--dl-space-space-halfunit);
            color: var(--dl-color-theme-neutral-light);
            width: 120px;
            height: 60px;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-radius-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-radius-radius-buttonradius);
          }
          .pricing14-button13 {
            gap: var(--dl-space-space-halfunit);
            width: 120px;
            height: 60px;
            border-style: solid;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-radius-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-radius-radius-buttonradius);
          }
          .pricing14-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing14-column1 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing14-price10 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price11 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text107 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text108 {
            font-size: 48px;
          }
          .pricing14-list1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item11 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button14 {
            width: 100%;
          }
          .pricing14-column2 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing14-price12 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price13 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text114 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text115 {
            font-size: 48px;
          }
          .pricing14-list2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item13 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item15 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button15 {
            width: 100%;
          }
          .pricing14-column3 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing14-price14 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price15 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text122 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text123 {
            font-size: 48px;
          }
          .pricing14-list3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item17 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item19 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item20 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item21 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button16 {
            width: 100%;
          }
          .pricing14-container2 {
            gap: 32px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing14-column4 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing14-price16 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price17 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text131 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text132 {
            font-size: 48px;
          }
          .pricing14-list4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item22 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item23 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item24 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button17 {
            width: 100%;
          }
          .pricing14-column5 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing14-price18 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price19 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text138 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text139 {
            font-size: 48px;
          }
          .pricing14-list5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item25 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item26 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item27 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item28 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button18 {
            width: 100%;
          }
          .pricing14-column6 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing14-price20 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price21 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text146 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text147 {
            font-size: 48px;
          }
          .pricing14-list6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item29 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item30 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item31 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item32 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item33 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button19 {
            width: 100%;
          }
          .pricing14-text155 {
            display: inline-block;
          }
          .pricing14-text156 {
            display: inline-block;
          }
          .pricing14-text157 {
            display: inline-block;
          }
          .pricing14-text158 {
            display: inline-block;
          }
          .pricing14-text159 {
            display: inline-block;
          }
          .pricing14-text160 {
            display: inline-block;
          }
          .pricing14-text161 {
            display: inline-block;
          }
          .pricing14-text162 {
            display: inline-block;
          }
          .pricing14-text163 {
            display: inline-block;
          }
          .pricing14-text164 {
            display: inline-block;
          }
          .pricing14-text165 {
            display: inline-block;
          }
          .pricing14-text166 {
            display: inline-block;
          }
          .pricing14-text167 {
            display: inline-block;
          }
          .pricing14-text168 {
            display: inline-block;
          }
          .pricing14-text169 {
            display: inline-block;
          }
          .pricing14-text170 {
            display: inline-block;
          }
          .pricing14-text171 {
            display: inline-block;
          }
          .pricing14-text172 {
            display: inline-block;
          }
          .pricing14-text173 {
            display: inline-block;
          }
          .pricing14-text174 {
            display: inline-block;
          }
          .pricing14-text175 {
            display: inline-block;
          }
          .pricing14-text176 {
            display: inline-block;
          }
          .pricing14-text177 {
            display: inline-block;
          }
          .pricing14-text178 {
            display: inline-block;
          }
          .pricing14-text179 {
            display: inline-block;
          }
          .pricing14-text180 {
            display: inline-block;
          }
          .pricing14-text181 {
            display: inline-block;
          }
          .pricing14-text182 {
            display: inline-block;
          }
          .pricing14-text183 {
            display: inline-block;
          }
          .pricing14-text184 {
            display: inline-block;
          }
          .pricing14-text185 {
            display: inline-block;
          }
          .pricing14-text186 {
            display: inline-block;
          }
          .pricing14-text187 {
            display: inline-block;
          }
          .pricing14-text188 {
            display: inline-block;
          }
          .pricing14-text189 {
            display: inline-block;
          }
          .pricing14-text190 {
            display: inline-block;
          }
          .pricing14-text191 {
            display: inline-block;
          }
          .pricing14-text192 {
            display: inline-block;
          }
          .pricing14-text193 {
            display: inline-block;
          }
          .pricing14-text194 {
            display: inline-block;
          }
          .pricing14-text195 {
            display: inline-block;
          }
          .pricing14-text196 {
            display: inline-block;
          }
          .pricing14-text197 {
            display: inline-block;
          }
          .pricing14-text198 {
            display: inline-block;
          }
          .pricing14-text199 {
            display: inline-block;
          }
          .pricing14-text200 {
            display: inline-block;
          }
          .pricing14-text201 {
            display: inline-block;
          }
          .pricing14-text202 {
            display: inline-block;
          }
          .pricing14-text203 {
            display: inline-block;
          }
          .pricing14-text204 {
            display: inline-block;
          }
          .pricing14-text205 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .pricing14-container1 {
              flex-direction: column;
            }
            .pricing14-column3 {
              width: 100%;
            }
            .pricing14-container2 {
              flex-direction: column;
            }
            .pricing14-column6 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .pricing14-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Pricing14.defaultProps = {
  plan2Feature11: undefined,
  plan3Yearly1: undefined,
  plan1Yearly1: undefined,
  plan3Feature2: undefined,
  content2: undefined,
  plan3Feature11: undefined,
  plan1Feature21: undefined,
  plan2Action: undefined,
  plan3Yearly: undefined,
  plan3Price1: undefined,
  plan2Feature2: undefined,
  plan1Yearly: undefined,
  plan1Action: undefined,
  plan3Feature41: undefined,
  plan3Feature51: undefined,
  plan3Feature1: undefined,
  plan2Action1: undefined,
  plan11: undefined,
  plan1Feature11: undefined,
  plan2: undefined,
  plan2Price: undefined,
  plan3Action1: undefined,
  plan2Feature21: undefined,
  plan1Feature3: undefined,
  plan2Feature1: undefined,
  plan1Action1: undefined,
  plan3Feature5: undefined,
  plan1Price: undefined,
  plan1: undefined,
  plan2Yearly: undefined,
  plan21: undefined,
  content1: undefined,
  plan2Feature3: undefined,
  plan2Feature31: undefined,
  plan1Feature31: undefined,
  plan3: undefined,
  plan3Feature31: undefined,
  plan2Feature41: undefined,
  plan3Action: undefined,
  plan2Yearly1: undefined,
  plan3Feature3: undefined,
  heading1: undefined,
  plan1Feature2: undefined,
  plan1Price1: undefined,
  plan1Feature1: undefined,
  plan3Feature21: undefined,
  plan2Price1: undefined,
  plan3Feature4: undefined,
  plan31: undefined,
  plan2Feature4: undefined,
  plan3Price: undefined,
}

Pricing14.propTypes = {
  plan2Feature11: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan3Feature2: PropTypes.element,
  content2: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan2Action: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan1Action: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan11: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan2: PropTypes.element,
  plan2Price: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan3Feature5: PropTypes.element,
  plan1Price: PropTypes.element,
  plan1: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan21: PropTypes.element,
  content1: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan3: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan3Action: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan3Feature3: PropTypes.element,
  heading1: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan3Feature4: PropTypes.element,
  plan31: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan3Price: PropTypes.element,
}

export default Pricing14
