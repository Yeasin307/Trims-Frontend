import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import Paginator from 'react-hooks-paginator';
// import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../layout/Layout';
// import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import ShopTopbar from '../../wrappers/product/ShopTopbar';
import ShopProduct from '../../wrappers/product/ShopProduct';
import { getProductsByCategory } from "../../redux/actions/productsActions";

const ShopGrid = ({ location }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [layout, setLayout] = useState('grid three-column');
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const { products } = useSelector((state) => state.productsData);
    const { slug } = useParams();
    const dispatch = useDispatch();
    // const { pathname } = location;
    const pageLimit = 6;

    useEffect(() => {
        setIsLoading(true);
        dispatch(getProductsByCategory(slug))
            .then(() => {
                setIsLoading(false);
            })
    }, [dispatch, slug])

    useEffect(() => {
        setCurrentData(products.slice(offset, offset + pageLimit));
    }, [offset, products]);

    const getLayout = (layout) => {
        setLayout(layout)
    }

    return (
        <Fragment>
            <MetaTags>
                <title>Trim | Accessories</title>
                <meta
                    name="description"
                    content="accessories page of trim tex bd"
                />
            </MetaTags>

            {/* <BreadcrumbsItem to={process.env.PUBLIC_URL + '/'}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>Accessories</BreadcrumbsItem> */}

            <Layout headerTop="visible">
                {/* breadcrumb */}
                {/* <Breadcrumb /> */}

                <div className="shop-area pt-95 pb-100">
                    <div className="container">
                        {isLoading &&
                            <div className="flone-preloader">
                                <span></span>
                                <span></span>
                            </div>
                        }
                        {!isLoading &&
                            <div className="row">

                                <div className="col-lg-12">
                                    {/* shop topbar default */}
                                    <ShopTopbar
                                        getLayout={getLayout}
                                        productCount={products.length}
                                        sortedProductCount={currentData.length}
                                    />

                                    {/* shop page content default */}
                                    <ShopProduct layout={layout} products={currentData} />

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
            </Layout>
        </Fragment>
    )
}

ShopGrid.propTypes = {
    location: PropTypes.object
}

export default ShopGrid;