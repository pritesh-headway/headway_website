import React, { useEffect } from 'react'
import Layout from '../Layout'
import GallerySectionone from './GallerySectionone'
import GalleryIntro from './GalleryIntro'
import GalleryBlogPost from './GalleryBlogPost'
import GallerySectionfour from './GallerySectionfour'
import OurGallerySection from './OurGallerySection'
import AllSectionone from '../ReusableComp/Sectionone';
import * as Images from '../../assets';
import ComingSoon from '../BlogPage/ComingSoon'

const Gallery = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <Layout>
        {/* <GallerySectionone/>  */}
        <AllSectionone
        // src={Images.make_my_business_bg}
        src={Images.gallery_bg_new}
        title={'Gallery'}
        // link_to2={'/about_us'}
        // link_name2={'About Us'}
        link_to2={'/'}
        link_name2={'Our Company'}
        link_to3={'/gallery'}
        link_name3={'Gallery'}
        />
        <ComingSoon/>
        {/* <GalleryIntro/>
        <OurGallerySection/>
        <GallerySectionfour/>
        <GalleryBlogPost/> */}
    </Layout>
  )
}

export default Gallery