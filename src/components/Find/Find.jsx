import React from 'react';
import styles from './Find.module.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';

const Find = () => {
  return (
    <div className={styles.find}>
        <div className={styles.heading}>
            <h1>Find your drive</h1>
            <div className={styles.text_bg}>
                <p>
                    <span>Explore the worlds largest car sharing marketplace</span>
                </p>
            </div>
        </div>
        <div className={styles.slider_container}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                breakpoints={{
                    340: {
                        width: 185,
                        slidesPerView: 1,
                        spaceBetween: 8,
                    },
                    410: {
                        width: 200,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 4,
                    },
                    1040: {
                        width: 1040,
                        slidesPerView: 5,
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1601465621041-643db9cc051d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' make='porsche 911'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1597858520171-563a8e8b9925?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80' make='porsche 911'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1597090442229-c506cfdafb69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='porsche 911'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1620994446450-78ebbae401ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80' make='porsche 911'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1609007689962-5e476eeabd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' make='porsche 911'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1604559258419-124e23c102e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='porsche 911'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1604559258459-5b497e4720f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='porsche 911'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1604559258700-04d0ef9041db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='porsche 911'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1612103625782-9e3620965384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' make='porsche 911'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1604559258565-5d063c356507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80' make='porsche 911'/>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Find