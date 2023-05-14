import './App.scss';
// react router v6
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import {
	Home,
	CategoryProduct,
	ProductSingle,
	Cart,
	Search,
} from './Pages/index';
// Components
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import store from './Store/store';
import { Provider } from 'react-redux';

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Sidebar />

					<Routes>
						{/* home page route */}
						<Route
							path='/'
							element={<Home />}
						/>
						{/* single product route */}
						<Route
							path='/product/:id'
							element={<ProductSingle />}
						/>
						{/* category wise product listing route */}
						<Route
							path='/category/:category'
							element={<CategoryProduct />}
						/>
						{/* cart */}
						<Route
							path='/cart'
							element={<Cart />}
						/>
						{/* searched products */}
						<Route
							path='/search/:searchTerm'
							element={<Search />}
						/>
					</Routes>

					<Footer />
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
