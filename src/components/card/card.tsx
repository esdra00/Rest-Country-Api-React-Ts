import {Box, List, ListItem, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import style from "./cardStyle.module.scss";

export default function Card({countries, region}: {countries: any; region: string}) {
	// const countries = props.countries;
	// const region = props.region;
	// const setdetail = props.setdetail;

	return (
		<>
			{countries?.map((el: any) => {
				if (el.region == region || region == "All") {
					return (
						<Box
							className={style.card}
							sx={{
								backgroundColor: "background.paper",
								color: "text.primary",
							}}
							key={el.name.common}
						>
							<div className={style.image}>
								<img
									src={el.flags.svg}
									alt=""
									height={160}
									width={264}
								/>
							</div>
							<div className={style.txt}>
								<div className={style.title}>
									{/* <Link to={`/detail/${el.name.common}`}>
										 {el.name.common}
									</Link>  */}
									<Link
										to={`/Rest-Country-Api-React-Ts/detail/${el.cca3}`}
									>
										{el.name.common}
									</Link>
								</div>
								<List>
									<ListItem disablePadding>
										<Typography variant="body1">
											Population:{" "}
											<Typography
												variant="body2"
												component="span"
											>
												{el.population}
											</Typography>
										</Typography>
									</ListItem>
									<ListItem disablePadding>
										<Typography variant="body1">
											Region:{" "}
										</Typography>
										<Typography variant="body2">
											<span>{el.region}</span>
										</Typography>
									</ListItem>
									<ListItem disablePadding>
										<Typography variant="body1">
											Capital:{" "}
										</Typography>
										<Typography variant="body2">
											<span>{el.capital}</span>
										</Typography>
									</ListItem>
								</List>
							</div>
						</Box>
					);
				} else {
					return;
				}
			})}
		</>
	);
}
