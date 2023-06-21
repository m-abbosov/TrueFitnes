import './style.css'
import img from '../../assets/imgs/CarouselBack.png'


function Loading() {
  return (
    <>
      <div className="nocopy container-loading-page">
        <div className="loading-page-img-wrapper">
          <img className="loading-page-img" src={img} alt="" />
        </div>
        <h3 className="loading-page-text">LOADING...</h3>
      </div>
    </>
  );
}

export default Loading;
