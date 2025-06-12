import React, { useEffect } from 'react'
import Layout from '../../Layout';
import * as Images from '../../../assets';
import Contact_us from '../../Home/ContactUs';
import FourLinkSectionone from '../../ReusableComp/FourLinkSectionone';
import BlogDetailContent from './BlogDetailContent';

const BlogDetailPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <FourLinkSectionone
                src={Images.blogdetail_intro}
                title={'Blogs'}
                link_to2={'/'}
                link_name2={'Our Company'}
                link_to3={'/blogs'}
                link_name3={'Blogs'}
                link_to4={'/blog_detail'}
                link_name4={'Blog Detail'}
            />
            <div className="py-16 flex flex-col max-w-full w-[1296px] mx-auto max-lg:px-5 max-lg:py-10">
                <BlogDetailContent />
            </div>
        </Layout>
    )
}

export default BlogDetailPage