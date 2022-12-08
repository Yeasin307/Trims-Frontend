import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import Paginator from 'react-hooks-paginator';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { getSortedProducts } from '../../helpers/product';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import ShopSidebar from '../../wrappers/product/ShopSidebar';
import ShopTopbar from '../../wrappers/product/ShopTopbar';
import ShopProducts from '../../wrappers/product/ShopProducts';
import { useParams } from "react-router-dom";
import { getIndividualCategories } from "../../helpers/product";
import { getProductByCategory } from "../../redux/actions/productActions";

const ShopGridStandard = ({ location }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [layout, setLayout] = useState('grid three-column');
    const [sortType, setSortType] = useState('category');
    // const [sortValue, setSortValue] = useState('');
    const { products } = useSelector((state) => state.productData);
    const uniqueCategories = getIndividualCategories(products);
    const [categorySortValues, setCategorySortValues] = useState([...uniqueCategories]);
    const [tagSortValues, setTagSortValues] = useState([]);
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(true);
        dispatch(getProductByCategory(id))
            .then(() => {
                setIsLoading(false);
            })
    }, [dispatch, id])

    useEffect(() => {
        let sortedProducts = getSortedProducts(products, sortType, categorySortValues, tagSortValues);
        setSortedProducts(sortedProducts);
        setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
    }, [categorySortValues, offset, products, sortType, tagSortValues]);

    const pageLimit = 15;
    const { pathname } = location;

    const getLayout = (layout) => {
        setLayout(layout)
    }

    const getSortParams = (sortType, sortValue, e) => {
        if (sortType === "category") {
            setSortType(sortType);
            setTagSortValues([]);
            if (!categorySortValues.includes(sortValue)) {

                if (sortValue === "") {
                    if (e.currentTarget.classList.contains('active')) {
                        setCategorySortValues([]);
                    }
                    else {
                        setCategorySortValues([...uniqueCategories]);
                    }
                }
                else {
                    setCategorySortValues([...categorySortValues, sortValue]);
                }
            }
            else {
                const index = categorySortValues.indexOf(sortValue);
                if (index !== -1) {
                    categorySortValues.splice(index, 1);
                }
            }
        }
        else if (sortType === "tag") {
            setSortType(sortType);
            setCategorySortValues([]);
            if (!tagSortValues.includes(sortValue)) {
                setTagSortValues([...tagSortValues, sortValue]);
            }
            else {
                const index = tagSortValues.indexOf(sortValue);
                if (index !== -1) {
                    tagSortValues.splice(index, 1);
                }
            }
        }
    }

    return (
        <Fragment>
            <MetaTags>
                <title>Trims | Accessories</title>
                <meta name="description" content="Accessories page of trim tex bd." />
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
                            <div className="col-lg-3 order-2 order-lg-1">
                                {/* shop sidebar */}
                                <ShopSidebar products={products} getSortParams={getSortParams} sideSpaceClass="mr-30" />
                            </div>
                            <div className="col-lg-9 order-1 order-lg-2">
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
                                        totalRecords={sortedProducts.length}
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