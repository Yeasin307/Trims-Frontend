import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import Paginator from 'react-hooks-paginator';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import ShopTopbar from '../../wrappers/product/ShopTopbar';
import ShopProducts from '../../wrappers/product/ShopProducts';
import { getProductsByCategory } from "../../redux/actions/productsActions";

const ShopGridStandard = ({ location }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [layout, setLayout] = useState('grid three-column');
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const { products } = useSelector((state) => state.productsData);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { pathname } = location;
    const pageLimit = 6;

    useEffect(() => {
        setIsLoading(true);
        dispatch(getProductsByCategory(id))
            .then(() => {
                setIsLoading(false);
            })
    }, [dispatch, id])

    useEffect(() => {
        setCurrentData(products.slice(offset, offset + pageLimit));
    }, [offset, products]);

    const getLayout = (layout) => {
        setLayout(layout)
    }

    return (
        <Fragment>
            <MetaTags>
                <title>Trims | Accessories</title>
                <meta name="description" content="accessories page of trim tex bd" />
            </MetaTags>

            <BreadcrumbsItem to={process.env.PUBLIC_URL + '/'}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>Accessories</BreadcrumbsItem>

            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />

                <div className="shop-area pt-95 pb-100">
                    <div className="container">
                        {isLoading &&
                            <div className="flone-preloader">
                                <span></span>
                                <span></span>
                            </div>
                        }
                        {!isLoading && <div className="row">

                            <div className="col-lg-12">
                                {/* shop topbar default */}
                                <ShopTopbar
                                    getLayout={getLayout}
                                    productCount={products.length}
                                    sortedProductCount={currentData.length}
                                />

                                {/* shop page content default */}
                                <ShopProducts layout={layout} products={currentData} />

                                {/* shop product pagination */}
                                <div className="pro-pagination-style text-center mt-30">
                                    <Paginator
                                        totalRecords={products.length}
                                        pageLimit={pageLimit}
                                        pageNeighbours={2}
                                        setOffset={setOffset}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                        pageContainerClass="mb-0 mt-0"
                                        pagePrevText="«"
                                        pageNextText="»"
                                    />
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    )
}

ShopGridStandard.propTypes = {
    location: PropTypes.object,
    products: PropTypes.array
}

export default ShopGridStandard;