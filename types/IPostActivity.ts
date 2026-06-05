export interface IPostMetric {
  icon: string;
  value: number;
  label: string;
}

export interface IPostActivity {
  id: string;
  figmaNodeId: string;
  image: string;
  title: string;
  date: string;
  uploadLabel: string;
  uploadDate: string;
  metrics: IPostMetric[];
}
