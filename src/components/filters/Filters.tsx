import style from "/src/styles/style.module.scss";
import SelectRegion from "./select/select";
import Search from "./search/search";

export default function Filters({
	region,
	selectRegion,
	handleKeyDown,
}: {
	region: any;
	selectRegion: any;
	handleKeyDown: any;
}) {
	return (
		<div className={style.filters}>
			<Search handleKeyDown={handleKeyDown} />
			<SelectRegion selectRegion={selectRegion} region={region} />
		</div>
	);
}
