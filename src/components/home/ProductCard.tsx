import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const ProductCarousel: React.FC = () => {
    const categories = [
        {
            name: "Face Mask",
            products: [
                {
                    id: 1,
                    name: "Biotique face mask", 
                    price: 240,
                    rating: 4.6,
                    image:
                      "https://www.biotique.com/cdn/shop/products/8904352001932-min.jpg?v=1701854882",
                    brand: "Biotique",
                    date: "2024-02-28",
                  },
                  {
                    id: 2,
                    name: "Besly Green Tea Mask",
                    price: 400,
                    rating: 4.9,
                    image:
                      "https://images-cdn.ubuy.co.in/633aa4bfdf07dc63497f7ad0-bullpiano-green-tea-face-mask-clay.jpg",
                    brand: "Besly",
                    date: "2024-01-25",
                  },
                  {
                    id: 3,
                    name: "Amazer Care",
                    price: 500,
                    rating: 4.8,
                    image:
                      "https://rukminim2.flixcart.com/image/850/1000/xif0q/face-pack/r/o/w/200-french-green-clay-powder-natural-face-mask-skin-care-powder-original-imagwsrx9xyvjszs.jpeg?q=20&crop=false",
                    brand: "Amazer Care",
                    date: "2024-02-20",
                  },
                  {
                    id: 4,
                    name: "Real Nature Mung Bean Face Mask",
                    price: 430,
                    rating: 4.8,
                    image:
                      "https://asianbeautyessentials.com/cdn/shop/files/1.01_-_Real_Nature_Mung_Bean_Face_Mask.png?v=1666400219&width=700",
                    category: "Face Mask",
                    brand: "Real Nature",
                    date: "2024-01-30",
                  },
                
                  {
                    id: 5,
                    name: "Face Mask",
                    price: 120,
                    rating: 4.8,
                    image:
                      "https://images-static.nykaa.com/media/catalog/product/1/b/1be527cSOTRU00000004_a4.jpg?tr=w-500",
                    category: "Face Mask",
                    brand: "mamaearth",
                    date: "2024-03-01",
                  },
            ]
        },
        {
            name: "Hair oil",
            products: [
                {
                    id: 30,
                    name: "Organic Neem & Basil Hair Oil",
                    price: 699,
                    rating: 4.7,
                    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJDkIZ--iabfXUCcRuwH2GdyBHFQ3Z5w8zvT6fi-oII6USjAKKH9Xy_vNCl_TI9XVmHybM8b2mAtc-M5vKPCzxcdbTcoqfoCwuJFc9kRb_nWAAaFdePdQrow&usqp=CAE",
                    brand: "Khadi Natural",
                    date: "2024-03-12",
                  },
                  {
                    id: 31,
                    name: "Amla & Brahmi Herbal Hair Oil",
                    price: 599,
                    rating: 4.6,
                    image: "https://images-static.nykaa.com/media/catalog/product/9/c/9c4bc968906014450720a_4.jpg?tr=w-500",
                    brand: "Forest Essentials",
                    date: "2024-03-13",
                  },
                  {
                    "id": 32,
                    "name": "Coconut & Curry Leaf Ayurvedic Hair Oil",
                    "price": 499,
                    "rating": 4.8,
                    "image": "https://images-static.nykaa.com/media/catalog/product/4/3/431f677COCOS00000049_008.jpg?tr=w-500",
                    "category": "Hair Oil",
                    "brand": "Kama Ayurveda",
                    "date": "2024-03-14"
                  },
                  {
                    "id": 33,
                    "name": "Bhringraj & Hibiscus Hair Growth Oil",
                    "price": 799,
                    "rating": 4.9,
                    "image": "https://www.jiomart.com/images/product/original/rv1bh9nuiz/koffeco-maha-bhringraj-onion-hibiscus-argan-hair-oil-pack-of-1-hair-oil-200-ml-product-images-orv1bh9nuiz-p604509041-1-202309090200.jpg?im=Resize=(1000,1000)",
                    "category": "Hair Oil",
                    "brand": "Earth Rhythm",
                    "date": "2024-03-15"
                  },
                  {
                    "id": 34,
                    "name": "Aloe Vera & Tea Tree Hair Oil",
                    "price": 650,
                    "rating": 4.7,
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxvYFhSMdFZ8FrYlDG_eaJzgUWJnlaFdGP_g&s",
                    "category": "Hair Oil",
                    "brand": "SoulTree",
                    "date": "2024-03-16"
                  },
            ]
        },
        {
            name: "Soap",
            products: [
                {
                    id: 6,
                    name: "Green Tea Soap Bar",
                    price: 499,
                    rating: 4.6,
                    image: "https://m.media-amazon.com/images/I/71rYBZZO1FL._SX522_.jpg",
                    brand: "The Body Shop",
                    date: "2024-02-10",
                  },
                  {
                    id: 7,
                    name: "Aloe Vera Soap",
                    price: 350,
                    rating: 4.5,
                    image:
                      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ34zSExDIQ_AYBJjizxK3ZR8SchlsRKlMhGwvS3voNWE__QkMOq5Zep7SR-8U96kwGHF-NDP7zoXFHqVUWAFnrcvO1I6WMkuvp2KE_QpHuYrmY0g-6d-k0p-jl4FXz&usqp=CAc",
                    brand: "Wow Skin Science",
                    date: "2024-01-20",
                  },
                  {
                    "id": 8,
                    "name": "Neem and Turmeric Soap",
                    "price": 200,
                    "rating": 4.7,
                    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRb3QO1mqSXCTWT9W401gRlUYL15AVDj0CXzxy8WJpkqHW-fTAYTIkniQudYhRTvMvvuANQKgtBa76Re28s3-CoA71INHW9GkUKxC06DXdxTJxW3jmJlxufyhwCXpDzyIQdtTZ8uuQgtQ&usqp=CAc",
                    "category": "Soap",
                    "brand": "Khadi Natural",
                    "date": "2024-01-15"
                  },
                  {
                    "id": 9,
                    "name": "Organic Charcoal Soap",
                    "price": 450,
                    "rating": 4.8,
                    "image": "https://m.media-amazon.com/images/I/515TwGwmGPL._AC_UL480_FMwebp_QL65_.jpg",
                    "category": "Soap",
                    "brand": "Soulflower",
                    "date": "2024-02-05"
                  },
                 {
                    "id": 10,
                    "name": "Luxury sugar soap",
                    "price": 299,
                    "rating": 4.6,
                    "image": "https://m.media-amazon.com/images/I/61+jy9QyH1L._AC_UL480_FMwebp_QL65_.jpg",
                    "category": "Soap",
                    "brand": "Forest Essentials",
                    "date": "2024-02-12"
                  },
                   {
                    "id": 11,
                    "name": "Coconut Milk Soap",
                    "price": 350,
                    "rating": 4.7,
                    "image": "https://m.media-amazon.com/images/I/51-u5GiUhHL._AC_UL480_FMwebp_QL65_.jpg",
                    "category": "Soap",
                    "brand": "Kaprica",
                    "date": "2024-02-02"
                  },
            ]
        },
        {
            name: "Gel",
            products: [
                {
                    id: 15,
                    name: "Aloe Vera & Neem Hydrating Gel",
                    price: 499,
                    rating: 4.8,
                    image: "https://m.media-amazon.com/images/I/51u8UEXgNwL.jpg",
                    brand: "Khadi Natural",
                    date: "2024-03-12",
                  },
                  {
                    id: 16,
                    name: "Cucumber & Green Tea Cooling Gel",
                    price: 549,
                    rating: 4.7,
                    image: "https://m.media-amazon.com/images/I/71rGzdGZMmL._AC_UF894,1000_QL80_.jpg",
                    brand: "Forest Essentials",
                    date: "2024-03-13",
                  },
                  {
                    "id": 17,
                    "name": "Hibiscus & Coconut Hydrating Hair Gel",
                    "price": 599,
                    "rating": 4.6,
                    "image": "https://m.media-amazon.com/images/I/81e-H8HBxCL.jpg",
                    "category": "Gel",
                    "brand": "Kama Ayurveda",
                    "date": "2024-03-14"
                  },
                  {
                    "id": 18,
                    "name": "Rose & Aloe Soothing Face Gel",
                    "price": 450,
                    "rating": 4.7,
                    "image": "https://banjaras.co.in/cdn/shop/files/aloe-vera-rose-gel-1.png?v=1711625117&width=1445",
                    "category": "Gel",
                    "brand": "Earth Rhythm",
                    "date": "2024-03-15"
                  },
                  {
                    "id": 19,
                    "name": "Tea Tree & Charcoal Anti-Acne Gel",
                    "price": 499,
                    "rating": 4.9,
                    "image": "https://5.imimg.com/data5/SELLER/Default/2020/8/DV/YV/OP/56188827/anti-pimple-face-wash-500x500.jpg",
                    "category": "Gel",
                    "brand": "SoulTree",
                    "date": "2024-03-16"
                  },
            ]
        }
    ];

    return (
        <div className="container ml-10">
            {categories.map((category, catIndex) => (
                <div key={catIndex} className="mb-8">
                    <div className="border-b pb-3 flex justify-between items-start gap-3 mb-4">
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                        <Link to={`/category/${category.name.toLowerCase()}`} className="text-blue-600 hover:underline flex items-center">
                            View all
                            <i className="bi bi-chevron-right ml-1"></i>
                        </Link>
                    </div>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        loop={true}
                        slidesPerView={3}
                        spaceBetween={20}
                        autoplay={{ delay: 4000 }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 10 },
                            768: { slidesPerView: 3, spaceBetween: 15 },
                            1024: { slidesPerView: 4, spaceBetween: 20 }
                        }}
                        className="relative"
                    >
                        {category.products.map((product) => (
                            <SwiperSlide key={product.id} className="text-center p-2">
                                <Link to={`/product/${product.id}`} className="flex flex-col items-center">
                              
                                    <div className="border rounded overflow-hidden w-40 h-40 flex justify-center items-center">
                                        <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2 truncate w-36">{product.name}</p>
                                    <div className="text-red-500 font-semibold">{product.price}</div>
                                    </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </div>
    );
};

export default ProductCarousel;
