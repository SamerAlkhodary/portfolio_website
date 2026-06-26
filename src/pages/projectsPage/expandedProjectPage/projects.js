const projects =[
	{   id:'1',
		name: 'midoName',
		description: 'midoDescription',
		category: 'commercial',
		featured: true,
		year: '2024',
		startDate: '2024',
		location: 'Budapest',
		type: 'midoType',
		beforeImageCount:4,
		afterImageCount: 5,
		progressImages: 0,
	},
	{   id:'2',
		name: 'barbershopName',
		description: 'barbershopDescription',
		category: 'renovation',
		featured: true,
		year: '2024',
		startDate: '2024',
		location: 'Budapest',
		type: 'barbershopType',
		beforeImageCount:0,
		afterImageCount: 0,
		progressImages: 5,
	}

];

// Maps a project category to its i18n key (resolved via translate()).
export const CATEGORY_LABEL = {
	all: 'catAll',
	residential: 'catResidential',
	commercial: 'catCommercial',
	renovation: 'catRenovation',
};

export default projects;
