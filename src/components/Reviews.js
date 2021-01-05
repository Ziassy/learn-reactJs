import React from 'react'
import '../App.css';

const ReviewItems = () => {
  // mempersiapkan data dummy JSON
  const users = [
    {
      "id": 1,
      "name": "Pauziah",
      "review": "Mantul, bagus banget!",
      "image": "https://images.pexels.com/photos/977933/pexels-photo-977933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 2,
      "name": "Ziah",
      "review": "Mantul, bagus banget!",
      "image": "https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 3,
      "name": "Ziassy",
      "review": "Mantul, bagus banget!",
      "image": "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ];

  const listReview = users.map((itemReview) =>
    <div className="Items">
      <img src={itemReview.image} alt="user" ></img>
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div >
  );
  // kita return
  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

export default ReviewItems;