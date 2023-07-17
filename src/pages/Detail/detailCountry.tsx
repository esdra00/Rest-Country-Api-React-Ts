import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Button, ListItem} from "@mui/material";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useFetchCode} from "../../utils/api";
import style from "./detailCountryStyle.module.scss";

export default function DetailCountry() {
	const {code} = useParams() as {code: string};
	const {data} = useFetchCode(code);

	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/");
	};

	// for (let bo in data?.borders) {
	// 	console.log(data?.borders[bo]);
	// }
	// for (let curr in data?.currencies) {
	// 	console.log(data?.currencies[curr].name);
	// }

	// for (let lang in data?.languages) {
	// 	console.log(data?.languages[lang]);
	// }

	return (
		<div className={style.container}>
			<Button
				variant="text"
				startIcon={<ArrowBackIcon />}
				className={style.button}
				sx={{
					color: "secondary.main",
					borderColor: "secondary.main",
				}}
				onClick={handleClick}
			>
				Back
			</Button>
			<div className={style.content_w}>
				<img src={data?.flags.svg} alt="" className={style.img} />
				<div className={style.info}>
					<div className={style.title}>{data?.name.common}</div>
					<div className={style.detailList}>
						<ul>
							<li>
								<h3>Native Name:</h3> {data?.name.official}
							</li>
							<li>
								<h3>Population:</h3> {data?.population}
							</li>
							<li>
								<h3>Region:</h3> {data?.region}
							</li>
							<li>
								<h3>Sub Region:</h3> {data?.subregion}
							</li>
							<li>
								<h3>Capital:</h3> {data?.capital}
							</li>
						</ul>
						<ul>
							<li>
								<h3>Top Level Domain:</h3> {data?.tld}
							</li>
							<li>
								<h3>Currencies:</h3>
							</li>
							<li>
								<h3>Languages:</h3>
							</li>
						</ul>
					</div>
				</div>
				<div className={style.borders}>
					<h3>Border Countries:</h3>
					<ul>
						{data?.borders?.map((el) => {
							return (
								<ListItem
									sx={{backgroundColor: "background.paper"}}
								>
									<Link
										to={`/Rest-Country-Api-React-Ts/detail/${el}`}
									>
										{el}
									</Link>
								</ListItem>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
