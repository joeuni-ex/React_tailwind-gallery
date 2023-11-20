import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("flowers"); //검색어

  //사진 가져옴
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.hits);
        setImages(data.hits);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto my-7">
      <ImageSearch setTerm={setTerm} />
      {images.length === 0 && (
        <h5 className="text-5xl text-center mt-32">이미지 결과가 없습니다.</h5>
      )}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
