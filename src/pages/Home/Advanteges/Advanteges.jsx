import React from 'react';
import "./advanteges.scss"



const Advanteges = () => {
    return (
        <section className='advantages'>
            <div className="advantages__block">
                <div className="advantages__block-first">
                    <div className="advantages__block-first-info">
                        <h2 className="advantages__block-first-info-title">What do we offer</h2>
                        <p className="advantages__block-first-info-desc">For many years we have been offering our customers the best original products from Apple. We are one of the official representatives of their products</p>
                    </div>
                </div>

                <div className="advantages__block-second">
                    <div className="advantages__block-second-info">
                        <h2 className="advantages__block-second-info-title">Find your dream here</h2>
                        <p className="advantages__block-second-info-desc">From smartphones and laptops to headphones, we have a wide selection of top-quality electronics at unbeatable prices. Plus, our fast and reliable shipping ensures you'll receive your order in no time.</p>
                    </div>
                </div>

                <div className="advantages__block-third">
                    <div className="advantages__block-third-info">
                        <h2 className="advantages__block-third-info-title">How we started</h2>
                        <p className="advantages__block-third-info-desc">Our online electronics store was founded with one goal in mind: to provide customers with a seamless shopping experience for all their electronic needs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advanteges;