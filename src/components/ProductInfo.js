import React from 'react'
import '../App.css';
import PropTypes from 'prop-types';

const PhotoProduct = () => {
  return (
    <div className="Photo">
      <img src="sneakers.jpg" alt="img"></img>
    </div>
  );
}

const ProductInfo = (props) => {
  const { name, category, isDiscount } = props;
  // array
  const benefits = ["tidak kusut terkena air", "bahan lebih halus", "tidak gerah"];
  const listBenefits = benefits.map((itemBenefits) =>
    <li key={itemBenefits}>{itemBenefits}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 7.000.300</p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
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

const CheckDiscount = (props) => {
  const { isDiscount, discount } = props;
  if (isDiscount === "yes") {
    return (
      <p>Diskon {discount}% off</p>
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


const AddCart = (e) => {
  alert(e + "has been added to cart..")
}

CheckDiscount.propTypes = {
  discount: PropTypes.number
};

export { ProductInfo, PhotoProduct }