import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-orange-50">
      <img src={image.largeImageURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-600 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong> {image.views}
          </li>
          <li>
            <strong>Downloads: </strong> {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong> {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4 text-xs font-semibold text-gray-700">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="inline-block bg-orange-200 rounded-full px-3 py-1 mr-2 mt-2"
          >
            # {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
