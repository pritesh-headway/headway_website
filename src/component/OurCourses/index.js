import React, { useEffect } from 'react'
import Layout from '../Layout'
import OurCoursesSectionone from './OurCoursesSectionone'
import Contact_us from '../Home/ContactUs'
import OurCoursesInstructors from './OurCoursesInstructors'
import OurCoursesSectionthree from './OurCoursesSectionthree'
import OurCoursesSectionTwo from './OurCoursesSectionTwo'
import AllSectionone from '../ReusableComp/Sectionone';
import * as Images from '../../assets';

const OurCourses = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <Layout>
      {/* <OurCoursesSectionone /> */}
      <AllSectionone
        src={Images.courses_bg_new}
        title={'Our Courses'}
        link_to2={'/our_services'}
        link_name2={'Our Services'}
        link_to3={'/our_courses'}
        link_name3={'Our Courses'}
      />
      <OurCoursesSectionTwo />
      <OurCoursesSectionthree />

      {/* <Contact_us /> */}
    </Layout>
  )
}

export default OurCourses