import PropTypes from "prop-types";
import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Image } from 'antd';
import useProgressiveImage from '../../hooks/useProgressiveImage';
import loader from '../../data/loader-2.gif';

const ListImageItem = ({ item }) => {
    const loaded = useProgressiveImage(process.env.REACT_APP_SERVER_API + "/static/components/" + item.image);

    return (
        <ImageListItem>
            <Image
                src={loaded || loader}
                alt={<div dangerouslySetInnerHTML={{ __html: item.title }} />}
            />
            <ImageListItemBar
                title={<div dangerouslySetInnerHTML={{ __html: item.title }} />}
                sx={{ backgroundColor: 'blueviolet' }}
            />
        </ImageListItem>
    );
};

ListImageItem.propTypes = {
    item: PropTypes.object
};

export default ListImageItem;