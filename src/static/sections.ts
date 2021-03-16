type Section = {
  title: string;
  url: string;
};
export type Sections = Section[];

const sections: Sections = [
  { title: 'Develop', url: '/develop' },
  { title: 'Favorite', url: '/favorite' },
  { title: 'Info', url: '/info' },
];
export default sections;
