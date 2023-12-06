import React from "react";
import Image from "next/image";

const Detail = ({ album, artists, name }) => {
  return (
    <div className="offset-md-1 col-sm-4">
      <div className="row col-sm-12 px-0">
        <Image src={album.images[0].url} alt={name} />
      </div>
      <div className="row col-sm-12 px-0">
        <label htmlFor={name} className="form-label col-sm-12">
          {name}
        </label>
      </div>
      <div className="row col-sm-12 px-0">
        <label htmlFor={artists[0].name} className="form-label col-sm-12">
          {artists[0].name}
        </label>
      </div>
    </div>
  );
};

export default Detail;
