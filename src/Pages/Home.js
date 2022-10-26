import { useEffect, useState } from "react";
import axios from "axios";
import Productcard from "../Components/Productcard";
import BannerImage from "../Images/Bannerpizza.png";

const Home = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProduct = async () => {
			const response = await axios.get("https://pizzaa-server.herokuapp.com/products/get");
			const dharans = response.data;
			console.log(dharans);
			setProducts(dharans);
		};
		getProduct();
	}, []);

	/////
	return (
		<section>
			<div className="container-fluid bg-danger px-3 py-5">
				<div className="container">
					<div className="row text-start d-flex align-items-center">
						<div className="col-md-6 px-3 ">
							<div className="text-white">
								<h4>Best Choice</h4>
								<h1 style={{ fontWeight: "700" }}>CHICAGO FIRE</h1>
								<p className="fs-6">Tomato, bbq sauce, sausage, cheese, red onion, house-made sausage, mozzarella & basil. 12″ / 420 g / No Spicy</p>
							</div>
						</div>
						<div className="col-md-6 text-end px-5">
							<img src={BannerImage} alt="PizzaImg" className="BannerImage"></img>
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto text-center py-5">
				<div className="row my-5">
					<div className="col-md-12">
						<h1 className="font-weight-bold" style={{ fontWeight: "700" }}>
							SPECIAL FOR YOU
						</h1>
						<h3>Veg Pizza</h3>
						<div className="d-flex justify-content-center flex-wrap">
							{products.map((product) => (
								<Productcard key={product._id} product={product} />
							))}
						</div>
					</div>
				</div>

				<div className="row my-5">
					<div className="col-md-12">
						<h3>Non-Veg Pizza</h3>
						<div className="d-flex justify-content-center flex-wrap">
							{products.map((product) => (
								<Productcard key={product._id} product={product} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
