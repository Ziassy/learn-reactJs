import './App.css';

function App() {
  return (
    <div className="Parentbox">
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

function ProductInfo() {
  const category = "SNEAKERS"
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">Pinky Swag</h1>
        <p className="Price">IDR 7.000.300</p>
        <p className="Info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi quas necessitatibus omnis error quis exercitationem ipsum deleniti reiciendis illo!
      </p>
      </div>
    </div>
  );
}

export default App;
