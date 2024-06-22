import React from 'react'

export default function Footer() {
  return (
    <>
      {/* <!-- BEGIN STEPS --> */}
      <div className="steps-block steps-block-red">
        <div className="container">
          <div className="row">
            <div className="col-md-4 steps-block-col">
              <i className="fa fa-truck"></i>
              <div>
                <h2>Free shipping</h2>
                <em>Express delivery withing 3 days</em>
              </div>
              <span>&nbsp;</span>
            </div>
            <div className="col-md-4 steps-block-col">
              <i className="fa fa-gift"></i>
              <div>
                <h2>Daily Gifts</h2>
                <em>3 Gifts daily for lucky customers</em>
              </div>
              <span>&nbsp;</span>
            </div>
            <div className="col-md-4 steps-block-col">
              <i className="fa fa-phone"></i>
              <div>
                <h2>477 505 8877</h2>
                <em>24/7 customer care available</em>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END STEPS --> */}
      {/* BEGIN PRE-FOOTER */}
      <div className="pre-footer">
        <div className="container">
          <div className="row">
            {/* BEGIN BOTTOM ABOUT BLOCK */}
            <div className="col-md-3 col-sm-6 pre-footer-col">
              <h2>About us</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam sit nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquarm erat sit volutpat. Nostrud exerci tation ullamcorper suscipit lobortis nisl
                aliquip commodo consequat. </p>
              <p>Duis autem vel eum iriure dolor vulputate velit esse molestie at dolore.</p>
            </div>
            {/* END BOTTOM ABOUT BLOCK */}
            {/* BEGIN BOTTOM INFO BLOCK */}
            <div className="col-md-3 col-sm-6 pre-footer-col">
              <h2>Information</h2>
              <ul className="list-unstyled">
                <li><i className="fa fa-angle-right"></i> <a href="#">Delivery Information</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Customer Service</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Order Tracking</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Shipping &amp; Returns</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="contacts.html">Contact Us</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Careers</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Payment Methods</a></li>
              </ul>
            </div>
            {/* END INFO BLOCK */}

            {/* BEGIN TWITTER BLOCK */}
            <div className="col-md-3 col-sm-6 pre-footer-col">
              <h2 className="margin-bottom-0">Latest Tweets</h2>
              <a className="twitter-timeline" href="https://twitter.com/twitterapi" data-tweet-limit="2" data-theme="dark"
                data-link-color="#57C8EB" data-widget-id="455411516829736961"
                data-chrome="noheader nofooter noscrollbar noborders transparent">Loading tweets by @keenthemes...</a>
            </div>
            {/* END TWITTER BLOCK */}

            {/* BEGIN BOTTOM CONTACTS */}
            <div className="col-md-3 col-sm-6 pre-footer-col">
              <h2>Our Contacts</h2>
              {/* <div> <address className="margin-bottom-40">
                35, Lorem Lis Street, Park Ave<br>
                  California, US<br>
                    Phone: 300 323 3456<br>
                      Fax: 300 323 1456<br>
                        Email: <a href="mailto:info@metronic.com">info@metronic.com</a><br>
                          Skype: <a href="skype:metronic">metronic</a>
                        </address></div>
                    </div> */}
              {/* END BOTTOM CONTACTS */}
            </div>
            <hr />
            <div className="row">
              {/* BEGIN SOCIAL ICONS */}
              <div className="col-md-6 col-sm-6">
                <ul className="social-icons">
                  <li><a className="rss" data-original-title="rss" href="#"></a></li>
                  <li><a className="facebook" data-original-title="facebook" href="#"></a></li>
                  <li><a className="twitter" data-original-title="twitter" href="#"></a></li>
                  <li><a className="googleplus" data-original-title="googleplus" href="#"></a></li>
                  <li><a className="linkedin" data-original-title="linkedin" href="#"></a></li>
                  <li><a className="youtube" data-original-title="youtube" href="#"></a></li>
                  <li><a className="vimeo" data-original-title="vimeo" href="#"></a></li>
                  <li><a className="skype" data-original-title="skype" href="#"></a></li>
                </ul>
              </div>
              {/* END SOCIAL ICONS */}
              {/* BEGIN NEWLETTER */}
              <div className="col-md-6 col-sm-6">
                <div className="pre-footer-subscribe-box pull-right">
                  <h2>Newsletter</h2>
                  <form action="#">
                    <div className="input-group">
                      <input type="text" placeholder="youremail@mail.com" className="form-control" />
                      <span className="input-group-btn" >
                        <button className="btn btn-primary" type="submit">Subscribe</button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              {/* END NEWLETTER */}
            </div>
          </div>
        </div>
        {/* END PRE-FOOTER */}

        {/* BEGIN FOOTER */}
        <div className="footer">
          <div className="container">
            <div className="row">
              {/* BEGIN COPYRIGHT */}
              <div className="col-md-4 col-sm-4 padding-top-10">
                2015 © Keenthemes. ALL Rights Reserved.
              </div>
              {/* END COPYRIGHT */}
              {/* BEGIN PAYMENTS */}
              <div className="col-md-4 col-sm-4">
                <ul className="list-unstyled list-inline pull-right">
                  <li><img src="assets/corporate/img/payments/western-union.jpg" alt="We accept Western Union"
                    title="We accept Western Union" /></li>
                  <li><img src="assets/corporate/img/payments/american-express.jpg" alt="We accept American Express"
                    title="We accept American Express" /></li>
                  <li><img src="assets/corporate/img/payments/MasterCard.jpg" alt="We accept MasterCard"
                    title="We accept MasterCard" /></li>
                  <li><img src="assets/corporate/img/payments/PayPal.jpg" alt="We accept PayPal" title="We accept PayPal" />
                  </li>
                  <li><img src="assets/corporate/img/payments/visa.jpg" alt="We accept Visa" title="We accept Visa" /></li>
                </ul>
              </div>
              {/* END PAYMENTS */}
              {/* BEGIN POWERED */}
              <div className="col-md-4 col-sm-4 text-right">
                <p className="powered">Powered by: <a href="http://www.keenthemes.com/">KeenThemes.com</a></p>
              </div>
              {/* END POWERED */}
            </div>
          </div>
        </div>
        {/* END FOOTER */}

        {/* BEGIN fast view of a product */}
        <div id="product-pop-up" style={{ display: 'none', width: '700px' }}>
          <div className="product-page product-pop-up">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-3">
                <div className="product-main-image">
                  <img src="assets/pages/img/products/model7.jpg" alt="Cool green dress with red bell" className="img-responsive" />
                </div>
                <div className="product-other-images">
                  <a href="#" className="active"><img alt="Berry Lace Dress"
                    src="assets/pages/img/products/model3.jpg" /></a>
                  <a href="#"><img alt="Berry Lace Dress" src="assets/pages/img/products/model4.jpg" /></a>
                  <a href="#"><img alt="Berry Lace Dress" src="assets/pages/img/products/model5.jpg" /></a>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-9">
                <h2>Cool green dress with red bell</h2>
                <div className="price-availability-block clearfix">
                  <div className="price">
                    <strong><span>$</span>47.00</strong>
                    <em>$<span>62.00</span></em>
                  </div>
                  <div className="availability">
                    Availability: <strong>In Stock</strong>
                  </div>
                </div>
                <div className="description">
                  <p>Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna
                    aliquarm erat volutpat Nostrud duis molestie at dolore.</p>
                </div>
                <div className="product-page-options">
                  <div className="pull-left">
                    <label className="control-label">Size:</label>
                    <select className="form-control input-sm">
                      <option>L</option>
                      <option>M</option>
                      <option>XL</option>
                    </select>
                  </div>
                  <div className="pull-left">
                    <label className="control-label">Color:</label>
                    <select className="form-control input-sm">
                      <option>Red</option>
                      <option>Blue</option>
                      <option>Black</option>
                    </select>
                  </div>
                </div>
                <div className="product-page-cart">
                  <div className="product-quantity">
                    <input id="product-quantity" type="text" value="1" readOnly name="product-quantity"
                      className="form-control input-sm" />
                  </div>
                  <button className="btn btn-primary" type="submit">Add to cart</button>
                  <a href="shop-item.html" className="btn btn-default">More details</a>
                </div>
              </div>

              <div className="sticker sticker-sale"></div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}