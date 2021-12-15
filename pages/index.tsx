import type { NextPage } from "next";

import FilterForm from "../components/forms/FilterForm/FilterForm";
import Bridges from "../components/elements/Bridges/Bridges";

const Home: NextPage = () => {
	return (
		<div>
			<FilterForm />
			<Bridges />
		</div>
	);
};

export default Home;
