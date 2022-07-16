import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetSwiperImages = (httpRequest) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(httpRequest());

    }, [ dispatch, httpRequest ])
};

export default useGetSwiperImages;