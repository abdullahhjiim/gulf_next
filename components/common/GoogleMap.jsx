import React from 'react';

export default function GoogleMap() {
  return (
    <iframe
      className="w-full h-[50vh]"
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
    ></iframe>
  );
}
