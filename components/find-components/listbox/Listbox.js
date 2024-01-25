import React from "react";
import Image from "next/image";
import styles from "./Listbox.module.css";

// const Listbox = props => {

//     const clicked = e => {
//         e.preventDefault();
//         props.clicked(e.target.id);
//     }

//     return (
//         <div className="col-sm-6 px-0">
//             <div className="list-group">
//                 {
//                     props.items.map((item, idx) =>
//                     <button key={idx}
//                         onClick={clicked}
//                         className="list-group-item list-group-item-action list-group-item-light"
//                         id={item.track.id}>

//                             {item.track.name}
//                     </button>)
//                 }
//             </div>
//         </div>

//     );
// }

// export default Listbox;

const Listbox = ({ items, clicked, handleTrackHover }) => {
  return (
    <div className={styles.listBox}>
      {items.map((item) => (
        <div
          key={item.track.id}
          className={styles.listItem}
          onClick={() => clicked(item.track.id)}
          onMouseEnter={() => handleTrackHover(item.track.id)}
          onMouseLeave={() => handleTrackHover(null)}
        >
          <Image
            src={
              item.track.album.images.length > 0
                ? item.track.album.images[0].url
                : "placeholder_image_url"
            }
            alt={item.track.name}
            width={125}
            height={125}
          />
          <p className={styles.trackName}>{item.track.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Listbox;
