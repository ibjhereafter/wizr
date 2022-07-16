import { createContext } from 'react';

const SwiperContext = createContext({});

const useGetSwiperContext = () => {
    return SwiperContext;
};

export default useGetSwiperContext;