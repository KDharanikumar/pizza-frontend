// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { Cart } from "../ProductContext";

const Productcard = ({ product }) => {
	// const { cart, setCart } = useContext(Cart);

	return (
		<section>
			<div className="card productCard my-3 border ">
				<div className="card-body">
					<img src={product.image} alt="Farmhouse" className="productCardImg"></img>
					<h5 className="card-title py-3">{product.name}</h5>
					<h5 className="card-title">
						<span>₹</span> {product.price}
					</h5>
					<p className="card-text">{product.desc}</p>
				</div>
				<div className="d-flex justify-content-around align-items-center m-2">
					<button href="#" className="btn btn-danger text-center d-inline mx-auto">
						Add to cart
					</button>
					{/* <button href="#" className="btn btn-danger text-center mx-auto">
						<Link to={`/singleproduct/${product._id}`}>View Product</Link>
					</button> */}
				</div>
			</div>
		</section>
	);
};
export default Productcard;
