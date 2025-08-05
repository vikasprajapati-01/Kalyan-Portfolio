import { Video } from '@/types';

export const videos: Video[] = [
  {
    id: '1',
    title: 'Innov8 Interview',
    description: 'Interview day with Innov8 team showcasing the company culture and values.',
    videoUrl: 'https://drive.google.com/file/d/12Un13NISmjOpmu6RrowkU4zJDhOaI2qH/view?usp=drive_link',
    category: 'Club',
    duration: '0:17',
  },
  {
    id: '2',
    title: 'Daily Life Montage',
    description: 'Lively montage capturing daily moments with a focus on storytelling and visual aesthetics.',
    videoUrl: 'https://drive.google.com/file/d/1xGFvtEV4PIGa5mCTCoCSPxnPtkKorR38/view?usp=drive_link',
    category: 'Daily life',
    duration: '0:18',
    featured: true,
  },
  {
    id: '3',
    title: 'Echoes',
    description: 'Echoes of the city versus the nature, a visual contrast of urban life.',
    videoUrl: 'https://drive.google.com/file/d/12f7P0M5b4PE1EN1_iBn5fiSXeo_DvnoA/view?usp=drive_link',
    category: 'Nature',
    duration: '0:26',
  },
  {
    id: '4',
    title: 'Day1 Content Creation',
    description: 'First day of content creation showcasing behind-the-scenes processes.',
    videoUrl: 'https://drive.google.com/file/d/1gh-IilLMnIFv4miVBFHE0EFF8OHyCx3a/view?usp=drive_link',
    category: 'Vlog',
    duration: '0:36',
  },
  {
    id: '5',
    title: 'Sem Exams',
    description: 'Student life during semester exams, capturing the essence of academic challenges.',
    videoUrl: 'https://drive.google.com/file/d/1laIvOu6uzbBbuU02jsPBa-Tery_ijY7_/view?usp=drive_link',
    category: 'College',
    duration: '0:15',
  },
  {
    id: '6',
    title: 'Under25 Event',
    description: 'Highlights from the Under25 event showcasing young talent and creativity.',
    videoUrl: 'https://drive.google.com/file/d/1ZQh0BUquoBzQJtUUsZyD0HRhXjyQHvaQ/view?usp=drive_link',
    category: 'Club',
    duration: '1:26',
    featured: true,
  },
];

export const categories = ['All', 'Club', 'Daily life', 'Nature', 'Vlog', 'College'];