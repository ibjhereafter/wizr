import axios from 'axios';

import { getImages, getImagesError } from '../reducer/imagesReducer';
import sliceData from '../../utilites/dataProcessors/sliceData';

export const startGetImages = () => {
    return async (dispatch) => {
        try {
            const url = `https://jsonplaceholder.typicode.com/photos`;
            const { data } = await axios.get(url);
            const slicedDate = sliceData(data, 6);
            dispatch(getImages(slicedDate));

        } catch (error) {
            if (error.response) {
                dispatch(getImagesError(error.response.data.error));
            }
        }
    }
}