import React from 'react';

const ProductCatagory = () => {

    const catagory = [
        {
            id: 1,
            brandName: 'asuss',
            img: 'https://besthqwallpapers.com/Uploads/28-6-2019/97856/thumb2-asus-black-logo-creative-metal-grid-background-asus-logo-brands.jpg'
        },
        {
            id: 2,
            brandName: 'toshiba',
            img: 'https://st.depositphotos.com/1057689/4949/i/450/depositphotos_49494171-stock-photo-toshiba-laptop-logo.jpg'
        },
        {
            id: 3,
            brandName: 'dell',
            img: 'https://cdn.wallpapersafari.com/45/95/skRXLN.jpg'
        }
    ]
    return (
        <div>
            <section className='py-8'>
                <div className="container mx-auto">
                    <h3 className="text-3xl capitalize font-bold text-secondary pb-9 text-center">product Catagory</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 justify-center">
                        {
                            catagory.map(product => (
                                <div key={product.id}
                                    className="card items-end  bg-base-100 shadow-xl image-full max-h-64 w-96 mx-auto sm:w-auto">
                                    <figure><img src={product.img} alt="Shoes" className='w-full max-h-64 ' /></figure>
                                    <div className="card-body items-center">
                                        <h2 className="text-center text-2xl uppercase text-white font-bold">{product.brandName}</h2>
                                        <div className="card-actions justify-center">
                                            <button className="btn btn-primary hover:bg-secondary hover:border-secondary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCatagory;