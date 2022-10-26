import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Menu = () => {
	return (
		<section className="container-fluid menubar py-3">
			<div className="container">
				<div className="row ">
					<div className="col-md d-flex justify-content-between align-items-center ">
						<ul>
							<li>
								<Link to="/">Logo</Link>
							</li>
						</ul>
						<ul className="menuName d-flex align-items-center mb-0">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="signin">SignIn</Link>
							</li>
							<li className="mx-0 d-flex align-items-center">
								<Link to="cart" className="mx-2">
									<FaShoppingCart className="fs-4 mx-2 text-white" />
									Cart
								</Link>

								<span className="px-2 m-2 bg-warning rounded text-center fs-7 fw-bold">{1}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Menu;
