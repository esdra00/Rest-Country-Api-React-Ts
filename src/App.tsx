import {RouterProvider, createBrowserRouter} from "react-router-dom";
import DetailCountry from "./pages/Detail/detailCountry";
import Layout from "./pages/layout";
import MainPage from "./pages/mainPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{path: "/", element: <MainPage />},
			{path: "detail/:code", element: <DetailCountry />},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}