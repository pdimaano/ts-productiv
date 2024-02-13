export interface TodoInterface {
  id: string;
  title: string;
  description: string;
  completed?: boolean;
  priority: number;
}

export interface TodoFormData {
  title: string;
  description: string;
  priority: number;
}