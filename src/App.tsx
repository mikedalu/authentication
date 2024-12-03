import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
	return (
		<div>
			<Header />
			<main className="min-h-[600px]">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default App;
