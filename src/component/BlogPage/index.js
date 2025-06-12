import React, { useEffect } from 'react'
import Layout from '../Layout'
import BlogSectionone from './BlogSectionone'
import BlogIntro from './BlogIntro'
import AllBlogPosts from './AllBlogPosts';
import * as Images from '../../assets';
import BroucherSection from '../MakeMyBusiness/BroucherSection'
import Contact_us from '../Home/ContactUs'
import BlogBroucherSection from './BlogBroucherSection'
import SectiononeTwoLink from '../ReusableComp/SectiononeTwoLink'
import ComingSoon from './ComingSoon'
import AllSectionone from '../ReusableComp/Sectionone'

const BlogPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <Layout>
            {/* <BlogSectionone /> */}
            {/* <SectiononeTwoLink
                src={Images.blogs_bg_new}
                title={'Blogs'}
                link_to2={'/blogs'}
                link_name2={'Blogs'}
            /> */}
             <AllSectionone
        src={Images.blogs_bg_new}
        title={'Blogs'}
        // link_to2={'/about_us'}
        // link_name2={'About Us'}
        link_to2={'/'}
        link_name2={'Our Company'}
        link_to3={'/blogs'}
        link_name3={'Blogs'}
        />
            {/* <ComingSoon/>
            <BlogIntro /> */}

            <div>
                <div className="absolute ">
                    <img
                        src={Images.blog_into_bg}
                        alt=""
                        loading="lazy"
                        className="object-contain full-size self-stretch aspect-[2.9]"
                    />
                </div>
                <div className='z-10 '>
                    {/* <RecentBlogPosts /> */}
                    <AllBlogPosts />

                </div>
            </div>
            {/* <RecentBlogPosts />
            <AllBlogPosts /> */}
            {/* <BlogBroucherSection /> */}
            {/* <Contact_us /> */}
        </Layout>
    )
}

export default BlogPage