import React from "react";

function Features() {
  return (
    <div style={{ background: "#000", color: "#fff" }}>
      <div className="row">
        <div className="col mt-3 ml-4 container text-center">
          <div className="container">
            <h3>Fast Shipping</h3>
            <p>
              Once your order is received our team is on it! All products are
              shipped from Hyderabad.
            </p>
          </div>
        </div>
        <div className="col mt-3 container text-center">
          <div className="container">
            <h3>Curated Quality</h3>
            <p>
              Every brand we carry has been handpicked for quality, style &
              function. We spend the time so you don't have to.
            </p>
          </div>
        </div>
        <div className="col mt-3 mr-4 container text-center">
          <div className="container">
            <h3>Easy Hassle Free Returns</h3>
            <p>
              Change your mind? We understand! We make returns easy and
              hassle-free so go ahead, try it out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

<style>
  {`
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container > div {
      width: 100%;
    }

    
  `}
</style>;
