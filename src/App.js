import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <PhotoProduct />
      <ProductInfo name="Pinky Swag" category="SNEAKERS" />
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

function ProductInfo(props) {
  const { name, category } = props;
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 7.000.300</p>
        <p className="Info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi quas necessitatibus omnis error quis exercitationem ipsum deleniti reiciendis illo!
      </p>
        <a onClick={(e) => AddCart(name, e)} hre="#">Add to cart</a>
      </div>
    </div>
  );
}

function AddCart(e) {
  console.log(e + "has been added to cart..")
}

export default App;
