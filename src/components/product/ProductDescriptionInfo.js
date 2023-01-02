import PropTypes from "prop-types";
import React from "react";

const ProductDescriptionInfo = ({
  product
}) => {
  return (
    <div className="product-details-content ml-70">
      <h2 style={{ fontWeight: 500 }}>{product?.productName}</h2>
      <div className="pro-details-list">
        <h4>{product?.title}</h4>
      </div>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />

      <div className="pro-details-meta pt-20">
        <h4>Categories : <span style={{ color: 'black' }}>{product?.categoryName?.name}</span></h4>
      </div>

      {product?.tags ? (
        <div className="pro-details-meta">
          <h4>Tags : <span style={{ color: 'black' }}>{product?.tags?.replaceAll(',', ' , ')}</span></h4>
        </div>
      ) : ("")}

      <div className="pro-details-social">
        <ul>
          <li>
            <a href="//facebook.com">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="//dribbble.com">
              <i className="fa fa-dribbble" />
            </a>
          </li>
          <li>
            <a href="//pinterest.com">
              <i className="fa fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="//twitter.com">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="//linkedin.com">
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div >
  );
};

ProductDescriptionInfo.propTypes = {
  product: PropTypes.object,
};

export default ProductDescriptionInfo;
