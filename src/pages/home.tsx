import { usePlaces } from '../queries/usePlaces';

import GridContainer from '../components/grid'
import Map from '../components/map';

const Home = () => {
  const data = usePlaces()?.data;

  return (
    <GridContainer>
      <div className="bg-gradient-to-r from-lime-100 to-lime-200 p-8 rounded-lg mb-8">
        <div className='flex flex-col items-center justify-center w-full'>
          <h1 className='text-3xl font-bold text-gray-800 mb-4'>Keşfet, git, yorumla!</h1>
          <p className="text-gray-600 text-center max-w-2xl mb-4">
            Şehrin en güzel mekanlarını keşfedin, deneyimlerinizi paylaşın ve yeni yerler bulun.
          </p>
        </div>
      </div>
      <Map places={data} />
      <section className='flex justify-center items-center gap-4 mt-8'>
        <a href="/new" className='bg-lime-400 px-4 py-2 rounded-lg hover:bg-lime-500 transition-colors flex items-center gap-2'>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Yeni Bölge Ekle
        </a>
        <a href="/places" className='bg-lime-400 px-4 py-2 rounded-lg hover:bg-lime-500 transition-colors flex items-center gap-2'>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          İnceleme Ekle
        </a>
      </section>
    </GridContainer>
  )
};

export default Home;