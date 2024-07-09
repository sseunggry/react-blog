import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';

type wrapperProps = {
    header?: boolean;
    footer?: boolean;
    children?: React.ReactNode;
};

const Wrapper = ({ header = true, footer = true, children }: wrapperProps) => {
    return (
        <div className="wrap">
            {header && <Header />}

            <div className="container">{children}</div>

            {footer && <Footer />}
        </div>
    );
};

export default Wrapper;
