import React from 'react'

export default function Slider() {
    return (
        <>
            {/*<!-- BEGIN SLIDER --> */}
            <div className="page-slider margin-bottom-35">
                <div id="carousel-example-generic" className="carousel slide carousel-slider">
                    {/*<!-- Indicators --> */}
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                    </ol>

                    {/*<!-- Wrapper for slides --> */}
                    <div className="carousel-inner" role="listbox">
                        {/*<!-- First slide --> */}
                        <div className="item carousel-item-four active">
                            <div className="container">
                                <div className="carousel-position-four text-center">
                                    <h2 className="margin-bottom-20 animate-delay carousel-title-v3 border-bottom-title text-uppercase"
                                        data-animation="animated fadeInDown">
                                        Tones of <br /><span className="color-red-v2">Shop UI Features</span><br /> designed
                                    </h2>
                                    <p className="carousel-subtitle-v2" data-animation="animated fadeInUp">Lorem ipsum dolor sit amet
                                        constectetuer diam <br />
                                        adipiscing elit euismod ut laoreet dolore.</p>
                                </div>
                            </div>
                        </div>

                        {/*<!-- Second slide --> */}
                        <div className="item carousel-item-five">
                            <div className="container">
                                <div className="carousel-position-four text-center">
                                    <h2 className="animate-delay carousel-title-v4" data-animation="animated fadeInDown">
                                        Unlimted
                                    </h2>
                                    <p className="carousel-subtitle-v2" data-animation="animated fadeInDown">
                                        Layout Options
                                    </p>
                                    <p className="carousel-subtitle-v3 margin-bottom-30" data-animation="animated fadeInUp">
                                        Fully Responsive
                                    </p>
                                    <a className="carousel-btn" href="#" data-animation="animated fadeInUp">See More Details</a>
                                </div>
                                <img className="carousel-position-five animate-delay hidden-sm hidden-xs"
                                    src="assets/pages/img/shop-slider/slide2/price.png" alt="Price" data-animation="animated zoomIn" />
                            </div>
                        </div>

                        {/*<!-- Third slide --> */}
                        <div className="item carousel-item-six">
                            <div className="container">
                                <div className="carousel-position-four text-center">
                                    <span className="carousel-subtitle-v3 margin-bottom-15" data-animation="animated fadeInDown">
                                        Full Admin &amp; Frontend
                                    </span>
                                    <p className="carousel-subtitle-v4" data-animation="animated fadeInDown">
                                        eCommerce UI
                                    </p>
                                    <p className="carousel-subtitle-v3" data-animation="animated fadeInDown">
                                        Is Ready For Your Project
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/*<!-- Fourth slide --> */}
                        <div className="item carousel-item-seven">
                            <div className="center-block">
                                <div className="center-block-wrap">
                                    <div className="center-block-body">
                                        <h2 className="carousel-title-v1 margin-bottom-20" data-animation="animated fadeInDown">
                                            The most <br />
                                            wanted bijouterie
                                        </h2>
                                        <a className="carousel-btn" href="#" data-animation="animated fadeInUp">But It Now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<!-- Controls --> */}
                    <a className="left carousel-control carousel-control-shop" href="#carousel-example-generic" role="button"
                        data-slide="prev">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </a>
                    <a className="right carousel-control carousel-control-shop" href="#carousel-example-generic" role="button"
                        data-slide="next">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            {/*<!-- END SLIDER --> */}


        </>
    )
}
