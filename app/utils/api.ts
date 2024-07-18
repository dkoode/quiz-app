import { Question } from '../types';

export const fetchQuestions = async (): Promise<Question[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  
  return data.slice(0, 10).map((post: any) => ({
    question: post.title,
    options: [
      post.body.split(' ').slice(0, 3).join(' '),
      post.body.split(' ').slice(3, 6).join(' '),
      post.body.split(' ').slice(6, 9).join(' '),
      post.body.split(' ').slice(9, 12).join(' ')
    ]
  }));
};