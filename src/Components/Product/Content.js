import React from 'react'
import CartUtility from '../Utility/CartUtility'

export default function Content({ prodDetData }) {
    const { AddToCart } = CartUtility();
    return (
        <>

            {/* <p>{prodDetData.thumbnail}Testing....
                <pre>{JSON.stringify(prodDetData, null, 2)}</pre></p> */}
            <div className="row margin-bottom-40">

                { /* <!-- BEGIN CONTENT --> */}
                {prodDetData && (
                    <div className="col-md-12 col-sm-12">
                        <div className="product-page">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    {prodDetData.thumbnail && (
                                        <div className="product-main-image">
                                            <img src={`${prodDetData.thumbnail}`} alt={prodDetData.title}
                                                className="img-responsive" data-bigimgsrc="assets/pages/img/products/model7.jpg" />
                                        </div>
                                    )}
                                    {prodDetData.image && (
                                        <div className="product-main-image">
                                            <img src={`${prodDetData.image}`} alt="Cool green dress with red bell"
                                                className="img-responsive" data-bigimgsrc="assets/pages/img/products/model7.jpg" />
                                        </div>
                                    )}
                                    {prodDetData.images && (<div className="product-other-images">

                                        {
                                            prodDetData.images.map((img, i) => {
                                                return (
                                                    <a key={i} href="#" className="fancybox-button" rel="photos-lib" > <img alt="Berry Lace Dress" src={`${img}`} /></a>
                                                )
                                            })
                                        }

                                    </div>)}



                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <h1>{prodDetData.title}</h1>
                                    <div className="price-availability-block clearfix">
                                        <div className="price">
                                            <strong><span>$</span>{prodDetData.price}</strong>
                                            <em>$<span>{(prodDetData.price + 5).toFixed(2)}</span></em>
                                        </div>
                                        <div className="availability">
                                            Availability: <strong>In Stock</strong>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <p>{prodDetData.description}.</p>
                                    </div>
                                    <div className="product-page-options">
                                        <div className="pull-left">
                                            <label className="control-label">Size:</label>
                                            <select className="form-control input-sm" onChange={() => console.log("")}>
                                                <option>L</option>
                                                <option>M</option>
                                                <option>XL</option>
                                            </select>
                                        </div>
                                        <div className="pull-left">
                                            <label className="control-label">Color:</label>
                                            <select className="form-control input-sm" onChange={() => console.log("")}>
                                                <option>Red</option>
                                                <option>Blue</option>
                                                <option>Black</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="product-page-cart">
                                        <div className="product-quantity">
                                            <input id="product-quantity" type="text" className="form-control input-sm" />
                                        </div>
                                        <button onClick={() => AddToCart(prodDetData)} className="btn btn-primary" type="submit">Add to cart</button>
                                    </div>
                                    {/* <div className="review">
                                            <input type="range" step="0.25" id="backing4" />
                                            <div className="rateit" data-rateit-backingfld="#backing4" data-rateit-resetable="false" data-rateit-ispreset="true" data-rateit-min="0" data-rateit-max="5">
                                            </div>
                                            <a href="#">7 reviews</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Write a review</a>
                                        </div> */}
                                    <ul className="social-icons">
                                        <li><a className="facebook" data-original-title="facebook" href="#"></a></li>
                                        <li><a className="twitter" data-original-title="twitter" href="#"></a></li>
                                        <li><a className="googleplus" data-original-title="googleplus" href="#"></a></li>
                                        <li><a className="evernote" data-original-title="evernote" href="#"></a></li>
                                        <li><a className="tumblr" data-original-title="tumblr" href="#"></a></li>
                                    </ul>
                                </div>

                                <div className="product-page-content">
                                    <ul id="myTab" className="nav nav-tabs">
                                        <li><a href="#Description" data-toggle="tab">Description</a></li>
                                        <li><a href="#Information" data-toggle="tab">Information</a></li>
                                        <li className="active"><a href="#Reviews" data-toggle="tab">Reviews (2)</a></li>
                                    </ul>
                                    <div id="myTabContent" className="tab-content">
                                        <div className="tab-pane fade" id="Description">
                                            <p>Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed sit nonumy nibh sed euismod laoreet dolore magna aliquarm erat sit volutpat Nostrud duis molestie at dolore. Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed sit nonumy nibh sed euismod laoreet dolore magna aliquarm erat sit volutpat Nostrud duis molestie at dolore. Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed sit nonumy nibh sed euismod laoreet dolore magna aliquarm erat sit volutpat Nostrud duis molestie at dolore. </p>
                                        </div>
                                        <div className="tab-pane fade" id="Information">
                                            <table className="datasheet">
                                                <tbody>
                                                    <tr>
                                                        <th colSpan="2">Additional features</th>
                                                    </tr>
                                                    <tr>
                                                        <td className="datasheet-features-type">Value 1</td>
                                                        <td>21 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="datasheet-features-type">Value 2</td>
                                                        <td>700 gr.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="datasheet-features-type">Value 3</td>
                                                        <td>10 person</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="datasheet-features-type">Value 4</td>
                                                        <td>14 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="datasheet-features-type">Value 5</td>
                                                        <td>plastic</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane fade in active" id="Reviews">
                                            { /* <!--<p>There are no reviews for this product.</p>--> */}
                                            <div className="review-item clearfix">
                                                <div className="review-item-submitted">
                                                    <strong>Bob</strong>
                                                    <em>30/12/2013 - 07:37</em>
                                                    <div className="rateit" data-rateit-value="5" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
                                                </div>
                                                <div className="review-item-content">
                                                    <p>Sed velit quam, auctor id semper a, hendrerit eget justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vel arcu pulvinar dolor tempus feugiat id in orci. Phasellus sed erat leo. Donec luctus, justo eget ultricies tristique, enim mauris bibendum orci, a sodales lectus purus ut lorem.</p>
                                                </div>
                                            </div>
                                            <div className="review-item clearfix">
                                                <div className="review-item-submitted">
                                                    <strong>Mary</strong>
                                                    <em>13/12/2013 - 17:49</em>
                                                    <div className="rateit" data-rateit-value="2.5" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
                                                </div>
                                                <div className="review-item-content">
                                                    <p>Sed velit quam, auctor id semper a, hendrerit eget justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vel arcu pulvinar dolor tempus feugiat id in orci. Phasellus sed erat leo. Donec luctus, justo eget ultricies tristique, enim mauris bibendum orci, a sodales lectus purus ut lorem.</p>
                                                </div>
                                            </div>

                                            { /* <!-- BEGIN FORM--> */}
                                            {/* <form action="#" className="reviews-form" role="form">
                                                    <h2>Write a review</h2>
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name <span className="require">*</span></label>
                                                        <input type="text" className="form-control" id="name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email</label>
                                                        <input type="text" className="form-control" id="email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="review">Review <span className="require">*</span></label>
                                                        <textarea className="form-control" rows="8" id="review"></textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="email">Rating</label>
                                                        <input type="range" value="4" step="0.25" id="backing5" />
                                                        <div className="rateit" data-rateit-backingfld="#backing5" data-rateit-resetable="false" data-rateit-ispreset="true" data-rateit-min="0" data-rateit-max="5">
                                                        </div>
                                                    </div>
                                                    <div className="padding-top-20">
                                                        <button type="submit" className="btn btn-primary">Send</button>
                                                    </div>
                                                </form> */}
                                            { /* <!-- END FORM--> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="sticker sticker-sale"></div>
                            </div>
                        </div>
                    </div >
                )
                }

                { /* <!-- END CONTENT --> */}
            </div >
        </>
    )
}
