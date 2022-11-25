import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LastScreen from "./components/LastScreen";
import ScreenFirst from "./components/ScreenFirst";
import ScreenThree from "./components/ScreenThree";
import ScreenTwo from "./components/ScreenTwo";

const arr = [
	{
		id: 1,
		img: 'coffee.png',
		title: 'Solimo Coffee Beans 2 kg',
		price: 10.73,
		country: "Columbia",
		qt: 0
	},
	{
		id: 2,
		img: 'info.png',
		title: 'Solimo Coffee Beans 2 kg',
		price: 10.73,
		country: "kenya",
		qt: 10
	},
	{
		id: 3,
		img: 'types.png',
		title: 'Solimo Coffee Beans 2 kg',
		price: 10.73,
		country: "Brazil",
		qt: 0
	},
]

function App() {



	return (
		<div className="App">
			<Header/>
			<ScreenFirst/>
			<ScreenTwo/>
			<ScreenThree data={arr} />
			<LastScreen/>
			<Footer/>
		</div>
	)
}

export default App;