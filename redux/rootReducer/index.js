import { combineReducers} from '@reduxjs/toolkit';

import imagesReducer from '../../components/UIs/swiper/reducer/imagesReducer';

const rootReducer = combineReducers({
    swiperImages: imagesReducer
});

export default rootReducer;