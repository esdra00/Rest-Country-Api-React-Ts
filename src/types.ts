export interface Main {
	flags: Flags;
	name: Name;
	tld: string[];
	cca3: string;
	currencies: Currencies;
	capital: string[];
	region: string;
	subregion: string;
	languages: Languages;
	borders: string[];
	population: number;
}

export interface Currencies {
	EUR: Eur;
}

export interface Eur {
	name: string;
	symbol: string;
}

export interface Flags {
	png: string;
	svg: string;
	alt: string;
}

export interface Languages {
	ita: string;
}

export interface Name {
	common: string;
	official: string;
	nativeName: NativeName;
}

export interface NativeName {
	ita: Ita;
}

export interface Ita {
	official: string;
	common: string;
}
