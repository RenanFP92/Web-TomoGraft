const ImagenCarrusel=({estilo,imagen,intervalo,textalt})=>{
    return(
          <div>
            <div className={estilo} data-bs-interval={intervalo}>
              <img src={imagen} className="d-block w-100" alt={textalt} />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
    );    
}
export default ImagenCarrusel;

// const ImagenCarrusel=({estilo, intervalo, imagen, textoalt, titulo, texto}) =>{
//   return (
//       <div>
//           <div className={estilo} data-bs-interval={intervalo}>
//               <img src={imagen} className="d-block w-100" alt={textoalt}/>
//               <div className="carousel-caption d-none d-md-block">
//                   <h5>{titulo}</h5>
//                   <p>{texto}</p>
//               </div>
//           </div>
//       </div>
//   );
// }

// export default ImagenCarrusel;