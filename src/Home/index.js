import React from 'react'
import s from './index.module.scss'
import { HashLink as Link } from 'react-router-hash-link'
import { Add, Faq, Find } from '../components/Icons'
import ContentWithSidebar from '../components/ContentWithSidebar'
import GroupSearch from '../components/GroupSearch'
import FaqNav from '../components/FaqNav'
import faq from '../data/faq'
import illustration from '../assets/images/vk-illustration.svg'
import Footer from '../components/Footer'
import ResourcesLink from '../components/ResourcesLink'
import wave from '../assets/images/wave.svg'

const scrollFocus = el => {
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  el.focus({ preventScroll: true })
}

export default () => {
  return (
    <>
      <div className={s.headerContainer}>
        <div className={s.header}>
          <h1>#ViralKindness</h1>
          <h2>We’re all in this together</h2>
          <p>
            #ViralKindness is a hub for the community care groups springing up
            across the country to support people in self-isolation during the
            coronavirus (COVID-19) crisis. Whether it’s shopping for food,
            picking up medicine or a regular check in call – there are lots of
            ways we can all work together, even when we’re apart!
          </p>
          <div className={s.links}>
            <Link to='/register' className={s.link}>
              <Add />
              <div>
                <div className={s.linkText}>Add a group</div>
                <div className={s.linkSubtext}>Add your local group</div>
              </div>
            </Link>
            <Link to='#groupSearch' scroll={scrollFocus} className={s.link}>
              <Find />
              <div>
                <div className={s.linkText}>Find a group</div>
                <div className={s.linkSubtext}>Search by your location</div>
              </div>
            </Link>
            <Link to='/faq' className={s.link}>
              <Faq />
              <div>
                <div className={s.linkText}>{faq.title}</div>
                <div className={s.linkSubtext}>{faq.subtitle}</div>
              </div>
            </Link>
          </div>
        </div>
        <div className={s.illustrationWrapper}>
          <img
            src={illustration}
            alt='Raised hands holding objects, offering help'
          />
        </div>
      </div>
      <div className={s.waveContainer}>
        <img src={wave} />
      </div>
      <ContentWithSidebar>
        <GroupSearch />
        <div className={s.sidebarContainer}>
          <Link to='/register' className={s.sidebarLink}>
            <h4 className={s.sidebarLinkHeader}>Add</h4>
            <div className={s.sidebarLinkSubtitle}>
              Adding a community care group in your local area is easy!
            </div>
          </Link>
          <ResourcesLink s={s} />
          <FaqNav />
        </div>
      </ContentWithSidebar>
      <Footer />
    </>
  )
}
