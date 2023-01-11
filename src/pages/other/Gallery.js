import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import React, { Fragment, useEffect } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { useDispatch, useSelector } from "react-redux";
import { getGallery } from "../../redux/actions/componentActions";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ListImageItem from "../../components/gallery/ListImageItem";

const Gallery = ({ location }) => {
    const { gallery } = useSelector((state) => state.componentData);
    const { pathname } = location;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGallery());
    }, [dispatch])

    return (
        <Fragment>
            <MetaTags>
                <title>Trim | Gallery</title>
                <meta
                    name="description"
                    content="gallery page of trim tex bd"
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
