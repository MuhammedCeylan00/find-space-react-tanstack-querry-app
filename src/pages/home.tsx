import { Link } from 'react-router-dom';

import { usePlaces } from '../queries/usePlaces';

import Map from '../components/map';
import WelcomeCard from '../components/welcomeCard';

const Home = () => {
  const data = usePlaces()?.data;
  return (
    <div>
      <WelcomeCard
        title="Keşfet, git, yorumla!"
        description="Şehrin en güzel mekanlarını keşfedin, deneyimlerinizi paylaşın ve yeni yerler bulun."
      />
      <Map places={data} />
      <section className='flex justify-center items-center gap-4 mt-8'>
        <Link to="/new" className='bg-lime-400 px-4 py-2 rounded-lg hover:bg-lime-500 transition-colors flex items-center gap-2'>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Yeni Bölge Ekle
        </Link>
        <Link to="/places/review" className='bg-lime-400 px-4 py-2 rounded-lg hover:bg-lime-500 transition-colors flex items-center gap-2'>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          İnceleme Ekle
        </Link>
      </section>
    </div>
  )
};

export default Home;