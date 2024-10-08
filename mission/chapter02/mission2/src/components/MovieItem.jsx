import { useState } from 'react'

const MovieItem = ({ movie }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'relative',
          listStyle: 'none',
          borderRadius: '10px',
          overflow: 'hidden',
          width: '120px',
          height: '180px',
          cursor: 'pointer',
          transition: 'transform 0.3s',
        }}  
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            objectFit: 'cover', // 부모 요소에 이미지가 맞춰지도록
            
          }}    
        />
        {/* 검정 배경을 마우스 올렸을 때 보여주기 */}
        {isHovered && (
          <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            // 검정색 + 50% 불투명
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}
          >
          </div>
        )}
      </li>
    )
  
  };

  export default MovieItem;