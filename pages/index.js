import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features21 from '../components/features21'
import Testimonial17 from '../components/testimonial17'
import Footer4 from '../components/footer4'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Rewarding Known Badger</title>
          <meta property="og:title" content="Rewarding Known Badger" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kJBVM3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_f7oHQr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7JcFU_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Inn0sI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PUum07'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oklQ5K'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LiAxn0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kQKMrJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DzVk_x'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DbnuAp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          logoSrc="https://i.pinimg.com/736x/86/ee/38/86ee38b37493a59aa5fdcbb87175b45d.jpg"
          link1Url="https://vk.com/club229535421"
          link2Url="https://vk.com/club229535346"
          link3Url="https://vk.com/club229535346"
          page1Description={
            <Fragment>
              <span className="home-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rmGFaU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0MwV_x'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lXafUg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1AgM2l'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Navbar8>
        <Hero17
          action1={
            <Fragment>
              <span className="home-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lHpRv5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hmxV1O'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gbtdts'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          image1Src="https://i.pinimg.com/736x/98/91/b5/9891b5df22f2f375d12ffc570faef5e5.jpg"
          image2Src="https://i.pinimg.com/736x/f9/f4/ec/f9f4ec652d0f1bae0f7bec198141da88.jpg"
          image3Src="https://i.pinimg.com/736x/21/11/41/21114144c228de5155ea4d8fbc5ab9eb.jpg"
          image4Src="https://i.pinimg.com/736x/70/c6/6a/70c66a715521e41d5606666328ae90ef.jpg"
          image5Src="https://i.pinimg.com/736x/3f/ee/79/3fee79a3a220882d221600901222f3df.jpg"
          image6Src="https://i.pinimg.com/736x/73/ad/e0/73ade07d8cd3d1c4e281e347afd56289.jpg"
        ></Hero17>
        <Features24
          feature1Title={
            <Fragment>
              <span className="home-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Vp-eDK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_o7TaSL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VpNHjE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1ImgSrc="https://img.freepik.com/premium-vector/child-exploring-nature-from-open-book-vector-illustration_1323048-71226.jpg?w=740"
          feature2ImgSrc="https://img.freepik.com/free-vector/people-playing-with-virtual-reality-technology_18591-52127.jpg?t=st=1740491407~exp=1740495007~hmac=93bc032dcf4049c9bd403da171190b4410fab46c96972a214b46c21c36ad08ed&amp;w=826"
          feature3ImgSrc="https://img.freepik.com/free-vector/illustration-social-media-concept_53876-28646.jpg?t=st=1740491505~exp=1740495105~hmac=9e06864cc02a178f2b411cbf315b3d5c2de755c2aeeaaaed0f0b5bff7de2a701&amp;w=740"
          feature1Description={
            <Fragment>
              <span className="home-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CJjIAs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4p_u57'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LsqgQ0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features24>
        <CTA26
          action1={
            <Fragment>
              <span className="home-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mgmhOw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_swZ-eJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vzW_hB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="cta26root-class-name"
        ></CTA26>
        <Features21
          feature1Title={
            <Fragment>
              <span className="home-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YU4hs_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wImgf4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_spO0Dj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature4Title={
            <Fragment>
              <span className="home-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_i4FFuh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature1ImageSrc="https://i.pinimg.com/736x/42/8e/82/428e82c5682c1127fc77ccaac77c1aed.jpg"
          feature2ImageSrc="https://i.pinimg.com/736x/2d/f5/34/2df5345a23fb053b0f743a2e57abf07a.jpg"
          feature3ImageSrc="https://i.pinimg.com/736x/c4/e6/61/c4e6611dbfe9d8b05be73c33ac854f86.jpg"
          feature4ImageSrc="https://i.pinimg.com/736x/03/f4/f6/03f4f6f5f2a171c9c12cc836cb6e48a6.jpg"
          feature1Description={
            <Fragment>
              <span className="home-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YVxXTl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wDcaq1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GNkjDt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          feature4Description={
            <Fragment>
              <span className="home-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pzl8Q-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Features21>
        <div className="home-history thq-section-padding">
          <div className="home-max-width thq-section-max-width">
            <div className="home-container2 thq-grid-2">
              <div className="home-section-header">
                <h2 className="thq-heading-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_NtaRpZ'),
                    }}
                  ></span>
                </h2>
                <p className="thq-body-large">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_OZ-Ppw'),
                    }}
                  ></span>
                </p>
                <div className="home-actions">
                  <button className="thq-button-filled thq-button-animated home-button">
                    <span className="thq-body-small">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_YHN72w'),
                        }}
                      ></span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="home-container3">
                <div className="home-container4 thq-card">
                  <h2 className="thq-heading-2">Великая Отечественная война</h2>
                  <span className="home-text48 thq-body-small">
                    Мария Ивановна рассказывает, как в годы войны она ждала
                    своего отца с фронта. С теплом и слезами вспоминает, как
                    встречала его, когда он вернулся домой.
                  </span>
                  <label className="home-text49 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_jL8e8U'),
                      }}
                    ></span>
                  </label>
                </div>
                <div className="home-container5 thq-card">
                  <h2 className="thq-heading-2">Перестройка</h2>
                  <span className="home-text51 thq-body-small">
                    Владимир Петрович делится своими воспоминаниями о том, как
                    перемены в стране повлияли на жизнь обычных людей. Открытия
                    и трудности, которые они пережили в эти нелегкие годы.
                  </span>
                  <label className="home-text52 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_rvP-po'),
                      }}
                    ></span>
                  </label>
                </div>
                <div className="home-container6 thq-card">
                  <h2 className="thq-heading-2">Полет Гагарина</h2>
                  <span className="home-text54 thq-body-small">
                    Нина Сергеевна помнит, как в 1961 году она смотрела на
                    первый полет человека в космос. Радость и гордость за
                    страну, когда услышала, что Юрий Гагарин стал первым
                    человеком в космосе.
                  </span>
                  <label className="home-text55 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_buOyRi'),
                      }}
                    ></span>
                  </label>
                </div>
                <div className="home-container7 thq-card">
                  <h2 className="thq-heading-2">90-е годы</h2>
                  <span className="home-text57 thq-body-small">
                    Екатерина Викторовна вспоминает, как изменился её мир в
                    90-е, когда начала развиваться рыночная экономика. Череда
                    трудностей, но также и возможностей для многих найти новые
                    пути в жизни.
                  </span>
                  <label className="home-text58 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_icyQYW'),
                      }}
                    ></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text59">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IiNxo-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text60">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_I9J5Fc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text61">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jGC66D'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text62">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VIlYA6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text63">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0A-Pux'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text64">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fZ6q_0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text65">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_20rezX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text66">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rLhua5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text67">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__xeeFl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Testimonial17>
        <Footer4
          link1={
            <Fragment>
              <span className="home-text68">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_v8rMBl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text69">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_P0ANpc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text70">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bDkVH1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text71">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VQALyU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text72">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ggeZTB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text73">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8s8YVI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text74">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_licfVU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text75">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hDIdm9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-history {
            width: 100%;
            height: 1363px;
            display: grid;
            position: relative;
            padding-top: var(--dl-space-space-fiveunits);
            place-items: center;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-max-width {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container2 {
            width: 100%;
            height: 1207px;
            align-items: start;
          }
          .home-section-header {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .home-container3 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .home-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .home-text48 {
            color: var(--dl-color-theme-neutral-dark);
            box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px,
              rgb(212, 212, 212) 5px 5px 10px 0px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text49 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .home-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .home-text51 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text52 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .home-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .home-text54 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text55 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .home-container7 {
            top: 10%;
            height: 229px;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .home-text57 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text58 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .home-text59 {
            display: inline-block;
          }
          .home-text60 {
            display: inline-block;
          }
          .home-text61 {
            display: inline-block;
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text63 {
            display: inline-block;
          }
          .home-text64 {
            display: inline-block;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text66 {
            display: inline-block;
          }
          .home-text67 {
            display: inline-block;
          }
          .home-text68 {
            display: inline-block;
          }
          .home-text69 {
            display: inline-block;
          }
          .home-text70 {
            display: inline-block;
          }
          .home-text71 {
            display: inline-block;
          }
          .home-text72 {
            display: inline-block;
          }
          .home-text73 {
            display: inline-block;
          }
          .home-text74 {
            display: inline-block;
          }
          .home-text75 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .home-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .home-section-header {
              position: static;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-actions {
              width: 100%;
              align-self: flex-start;
            }
            .home-container4 {
              width: 100%;
            }
            .home-container5 {
              width: 100%;
            }
            .home-container6 {
              width: 100%;
            }
            .home-container7 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
