import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdb-react-ui-kit";

const Review = () => {
  return(
    <MDBContainer className="my-3">
      <MDBCarousel showControls dark>

        <MDBCarouselItem className="active text-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" className="rounded-circle shadow-1-strong mb-4" style={{ width: "150px" }} />
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className="mb-3">Maria Kate</h5>
              <p>Photographer</p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
        <MDBCarouselItem className="text-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" className="rounded-circle shadow-1-strong mb-4" style={{ width: "150px" }} />
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className="mb-3">John Doe</h5>
              <p>Web Developer</p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
        <MDBCarouselItem className="text-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" className="rounded-circle shadow-1-strong mb-4" style={{ width: "150px" }} />
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className="mb-3">Anna Deynah</h5>
              <p>Web Developer</p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>

      </MDBCarousel>
    </MDBContainer>
  );
};

export default Review;
