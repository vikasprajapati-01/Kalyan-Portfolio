import { Video } from '@/types';

export const videos: Video[] = [
  {
    id: '1',
    title: 'Innov8 Interview',
    description: 'Interview day with Innov8 team showcasing the company culture and values.',
    videoUrl: '/AQMbnuF9Ljp7ODFV-GS-JCi1NPCbXUVXICKYs9rPengtABDXKEgLzrmzPO68f4bR71iAhCk-v-la_JOpm6R2SFdesvLpsXX7O0UOL_M.mp4',
    category: 'Club',
    duration: '0:17',
    featured: true,
  },
  {
    id: '2',
    title: 'Daily Life Montage',
    description: 'Lively montage capturing daily moments with a focus on storytelling and visual aesthetics.',
    videoUrl: '/AQN-kzyapmXRBP2yk08JLGfh-nb3u0rsxxTP4CWvVjz3tJOV4ttq3nRyduktAg-7NdstSvWiE8iIotoQTKin-1yxgDotwxlpxE5mjEQ.mp4',
    category: 'Daily life',
    duration: '0:18',
    featured: true,
  },
  {
    id: '3',
    title: 'Echoes',
    description: 'Echoes of the city versus the nature, a visual contrast of urban life.',
    videoUrl: '/AQPFZa0ni1I0-GuFuiEoZtCLTv72P00Wm5jklDtlKR1hqIeMpBLMMKo83irdYdCqzMdJje7P05IFKlNmqni5XK-Y7vdrT8ZutAjREf4.mp4',
    category: 'Nature',
    duration: '0:26',
  },
  {
    id: '4',
    title: 'Day1 Content Creation',
    description: 'First day of content creation showcasing behind-the-scenes processes.',
    videoUrl: '/DAY01.mp4',
    category: 'Vlog',
    duration: '0:36',
  },
  {
    id: '5',
    title: 'Social Media Campaign',
    description: 'Series of short-form content optimized for various social media platforms.',
    videoUrl: '/HOLA_AMIgo.mp4',
    category: 'College',
    duration: '0:15',
  },
];

export const categories = ['All', 'Club', 'Daily life', 'Nature', 'Vlog', 'College'];