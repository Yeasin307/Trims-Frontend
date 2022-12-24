import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Image } from 'antd';
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useEffect } from "react";
import { getComponent } from "../../redux/actions/componentActions";
import { useDispatch, useSelector } from "react-redux";

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
                        {gallery.map((item) => (
                            <ImageListItem key={item.id}>
                                <Image
                                    src={`https://server.asdfashionbd.com/static/components/${item.image}`}
                                    alt={<div dangerouslySetInnerHTML={{ __html: item.title }} />}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={<div dangerouslySetInnerHTML={{ __html: item.title }} />}
                                    sx={{ backgroundColor: 'blueviolet' }}
                                />
                            </ImageListItem>
                        ))}
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
