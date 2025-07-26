import { Container, Header, Footer, ScrollToTop } from "./components/index.js";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<ScrollToTop />
			<Header />
			<Container>
				<Outlet />
			</Container>
			<Footer />
		</>
	);
}

export default App;
