export type RootStackParamList = {
  SearchPersonalize: undefined;
  SearchResultHome: PersonalDetailsProps;
};

export type PersonalDetailsProps = {
  character: string;
  description: string;
  compatibility: {
    best: string;
    terrible: string;
    good: Array<string>;
    normal: Array<string>;
    special: Array<string>;
    bad: string;
  };
  heterosexual: {
    love: string;
    merry: string;
  };
  job: {
    environment: Array<string>;
    jobList: JobList[];
  };
  name: string;
  type: string;
};

interface JobList {
  title: string;
  description: string;
  example: string;
}
