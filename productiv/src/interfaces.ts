export interface TodoInterface {
  id: string;
  title: string;
  description: string;
  completed?: boolean;
  priority: number;
}

export interface TodoFormData {
  title: string;
  summary: string;
  priority: number;
}

export interface QuoteInterface {
  text: string;
  author: string;
}