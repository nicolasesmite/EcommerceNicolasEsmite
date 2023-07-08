import React from "react";
import Swal from "sweetalert2";

const NotFound = () => {
  return (
    <div>
      {Swal.fire({
        showConfirmButton: false,
        icon: "warning",
        imageUrl: "https://media.tenor.com/-a1sBSHRfWUAAAAC/mono-platillos.gif",
        imageWidth: 400,
        title: "404 Not Found",
        text: "Parece que esta pagina aun no existe..",
        footer: '<a href="/">Continuar comprando</a>',
      })}
    </div>
  );
};

export default NotFound;
