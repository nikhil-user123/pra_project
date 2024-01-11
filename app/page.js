'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';

const Upload = () => {
  const [movieData, setMovieData] = useState({
    movieName: '',
    movieDescription: '',
    rating: '',
    genre: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovieData({
      ...movieData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setMovieData({
      ...movieData,
      image: imageFile,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('movieName', movieData.movieName);
    formData.append('movieDescription', movieData.movieDescription);
    formData.append('rating', movieData.rating);
    formData.append('genre', movieData.genre);
    formData.append('image', movieData.image);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // Log FormData as a JSON object
    console.log('Form data in JSON:', JSON.stringify(formDataObject));


    // Here, you can send formData to your backend endpoint using Axios or fetch.
    // Example: 
    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Error uploading:', error);
    }
    console.log('Form data:', formData); // For demo - to be replaced with actual API call
  };


  return (
    <div className="uploading_box">
      <h1>Upload Movies</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="movieName">Movie Name:</label>
          <input
            type="text"
            id="movieName"
            name="movieName"
            value={movieData.movieName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="movieDescription">Movie Description:</label>
          <textarea
            id="movieDescription"
            name="movieDescription"
            value={movieData.movieDescription}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={movieData.rating}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={movieData.genre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button className="upload_button" type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;