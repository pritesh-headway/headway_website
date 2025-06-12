import React, { useRef, useState, useEffect } from 'react';

const UpdatedAnimatedComponent = (OriginalComponent) => {
    const NewComponent = (props) => {

        const titleRef = useRef(null);
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                if (titleRef.current) {
                    const top = titleRef.current.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    setIsVisible(top < windowHeight);
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
        // return <OriginalComponent titleRef={titleRef} isVisible={isVisible} />
        // return (
        //     <div style={{ overflowX: 'hidden' }}>
        //         <OriginalComponent titleRef={titleRef} isVisible={isVisible} />
        //     </div>
        // );
        // return (props) => {
            // return <WrappedComponent {...props} />;
              return (
             <div style={{ overflowX: 'hidden' }}>
                 <OriginalComponent titleRef={titleRef} isVisible={isVisible} {...props} />
             </div>
         );
        // };
    }
    return NewComponent;
};

export default UpdatedAnimatedComponent;
