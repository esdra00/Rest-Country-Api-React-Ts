import {RouterProvider, createBrowserRouter} from "react-router-dom";
import DetailCountry from "./pages/Detail/detailCountry";
import Layout from "./pages/layout";
import MainPage from "./pages/mainPage";

const router = createBrowserRouter([
	{
		path: "/Rest-Country-Api-React-Ts/",
		element: <Layout />,
		children: [
			{path: "/Rest-Country-Api-React-Ts/", element: <MainPage />},
			{
				path: "/Rest-Country-Api-React-Ts/detail/:code",
				element: <DetailCountry />,
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}