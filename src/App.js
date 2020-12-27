import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <PhotoProduct />
      <ProductInfo isDiscount="yes" name="Pinky Swag" category="SNEAKERS" />
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
        <a onClick={(e) => AddCart(name, e)} hre="#">Add to cart</a>
      </div>
    </div>
  );
}

function AddCart(e) {
  alert(e + "has been added to cart..")
}

export default App;
