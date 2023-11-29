import React from 'react'
import CustomSlider from './custom-slider/CustomSlider';
  
export default function Banner() {

  const images = [
    {
      imgURL: "https://www.kosmetik4less.de/media/image/20/72/6c/800-300-lashes_800x800.jpg",
      imgAlt: "img-1",
    },
    {
      imgURL: "https://www.specialmomsnetwork.com/wp-content/uploads/2023/05/sell-makeup-online.jpg",
      imgAlt: "img-2",
    },
    {
      imgURL: "https://www.sallybeauty.com/on/demandware.static/-/Library-Sites-SallySharedLibrary/default/dw95941538/web-assets/2023/10/promotions/bogo50_hair-care/m_cat-banner_texture.jpg",
      imgAlt: "img-3",
    },
  ];

  return (
    <CustomSlider>
      {images.map((image, index) => {
        return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
      })}
    </CustomSlider>
  )
}
