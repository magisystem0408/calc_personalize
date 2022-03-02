export type RootStackParamList = {
  SearchPersonalize: undefined;
  SearchResultHome: PersonalDetailsProps;
};

export type PersonalDetailsProps = {
  character: string;
  description: string;
  compatibility: Object;
  heterosexual: {
    love: string;
    merry: string;
  };
  job: any;
  name: string;
  type: string;
};
