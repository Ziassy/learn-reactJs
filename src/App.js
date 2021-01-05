import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <PhotoProduct />
      <ProductInfo isDiscount="yes" name="Pinky Swag" category="SNEAKERS" />
      <ReviewItems />
    </div>
  );
}

function ReviewItems() {
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



function PhotoProduct() {
  return (
    <div className="Photo">
      <img src="sneakers.jpg" alt="img"></img>
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount === "yes") {
    return (
      <p>Diskon 50% off</p>
    );
  }
  else if (isDiscount === "coming") {
    return (
      <p>Akan ada dikson ... </p>
    );
  }
  else {
    return (
      <p>Tidak ada diskon!</p>
    )
  }
}

function ProductInfo(props) {
  const { name, category, isDiscount } = props;
  // array
  const benefits = ["tidak kusut terkena air", "bahan lebih halus", "tidak gerah"];
  const listBenefits = benefits.map((itemBenefits) =>
    <li>{itemBenefits}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 7.000.300</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="Info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi quas necessitatibus omnis error quis exercitationem ipsum deleniti reiciendis illo!
      </p>
        <ul>
          {listBenefits}
        </ul>
        {/* passing arguments to event handlers */}
        <button onClick={(e) => AddCart(name, e)}>Add to cart</button>
      </div>
    </div>
  );
}

function AddCart(e) {
  alert(e + "has been added to cart..")
}

export default App;
