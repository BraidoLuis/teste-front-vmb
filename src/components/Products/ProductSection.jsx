import ProductCard from './ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductSection({ title, products, isCarousel = false }) {

  if (isCarousel) {
    return (
      <section className="mb-16">
        <h2 className="font-hedvig text-3xl text-[#498DAE] mb-8 ml-4">
          {title}
        </h2>
        <div className='overflow-hidden'>
          <Swiper
            modules={[Navigation, Pagination]} 
            spaceBetween={30} 
            slidesPerView={1} 
            navigation 
            pagination={{ clickable: true }}
            loop={true}  
            breakpoints={{
              640: { slidesPerView: 2 },

              1024: { slidesPerView: 4 },
            }}
            >
            {products.map(product => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </section>
    );
  }

  return (
    <section className="mb-16">
      <h2 className="font-hedvig text-3xl text-[#498DAE] mb-8 ml-4">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}