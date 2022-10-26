import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

const SignIn = () => {
	return (
		<section>
			<div className="container py-5">
				<div className="row">
					<div className="col-md">
						<div className="card signin-card text-center w-25 mx-auto">
							<div className="card-body">
								<div className="user-pic mx-auto my-3 d-flex justify-content-center align-items-center text-white fs-1">
									<BiUserCircle />
								</div>
								<h2>Sign In</h2>
								<div className="my-4">
									<TextField className="my-3 w-100 " id="standard-basic" label="E-Mail" variant="standard" />
									<TextField className="my-3 w-100" id="standard-basic" label="Password" variant="standard" />
								</div>
								<div class="d-grid gap-4 mb-3">
									<button class="btn btn-primary" type="button">
										Signin
									</button>
									<button class="btn btn-primary" type="button">
										<Link to="/forgetpassword">Forgot Password?</Link>
									</button>
								</div>
								<div>
									Don’t have an account?
									<span className="text-primary fs-6 mx-2 ">
										<Link to="/signup" className="text-primary">
											Sign up
										</Link>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignIn;
