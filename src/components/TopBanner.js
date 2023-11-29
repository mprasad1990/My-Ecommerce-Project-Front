import React from 'react'

export default function TopBanner(props) {

  let topBannerText = "";
  let topBannerCaption = "";
  if(props.location === '/about'){
    topBannerText = "About Us";
    topBannerCaption = "&nbsp;";
  }
  else if(props.location === '/shopall'){
    topBannerText = "Shop All";
    topBannerCaption = "&nbsp;";
  }
  else if(props.location === '/makeup'){
    topBannerText = "Make Up";
    topBannerCaption = "&nbsp;";
  }
  else if(props.location === '/skincare'){
    topBannerText = "Skin Care";
    topBannerCaption = "&nbsp;";
  }
  else if(props.location === '/haircare'){
    topBannerText = "Hair Care";
    topBannerCaption = "&nbsp;";
  }
  else if(props.location === '/contact'){
    topBannerText = "Contact Us";
    topBannerCaption = "Please do not hesitate to contact us directly.";
  }

  return (
    <header className="top-banner bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-dark">
              <h1 className="display-4 fw-bolder">{topBannerText}</h1>
              <p className="lead fw-normal text-dark mb-0" dangerouslySetInnerHTML={{__html: topBannerCaption}}></p>
            </div>
        </div>
    </header>
  )
}
