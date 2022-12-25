import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useEffect } from "react";
import { getComponent } from "../../redux/actions/componentActions";
import { useDispatch, useSelector } from "react-redux";
import ListImageItem from "../../components/gallery/ListImageItem";

const Gallery = ({ location }) => {
    const { gallery } = useSelector((state) => state.componentData);
    const { pathname } = location;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComponent());
    }, [dispatch])

    return (
        <Fragment>
            <MetaTags>
                <title>Trims | Gallery</title>
                <meta
                    name="description"
                    content="Gallery page of trim tex bd."
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                Gallery
            </BreadcrumbsItem>
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />

                <Box
                    className="container pt-50 pb-50"
                    sx={{ minWidth: 400, overflowClipBox: 'scroll' }}
                >
                    <ImageList cols={3} gap={36} sx={{ py: 5 }}>
                        {gallery && gallery.map((item) => {
                            return (
                                <ListImageItem
                                    item={item}
                                    key={item.id}
                                />
                            );
                        })}
                    </ImageList>
                </Box>

            </LayoutOne>
        </Fragment>
    );
};

Gallery.propTypes = {
    location: PropTypes.object
};

export default Gallery;
