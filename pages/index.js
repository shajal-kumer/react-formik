import Image from "next/image";
import SignUp from "../components/cand-dev/Signup";
import rocketImg from "../public/rocket.png";

export default function Home() {
	return (
		<div className="container mt-3">
			<div className="row">
				<div className="col-md-5">
					<SignUp />
				</div>
				<div className="col-sm-7 my-auto">
					<Image src={rocketImg} alt="Rocket Image" />
				</div>
			</div>
		</div>
	);
}
