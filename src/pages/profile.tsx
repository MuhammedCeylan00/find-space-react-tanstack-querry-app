import GridContainer from '../components/grid'

const Profile = () => {
  return (
    <GridContainer>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <img 
            src="src/assets/images/minion.png" 
            alt="Profil Yok ki :))" 
            className="w-64 h-64 mx-auto mb-6 rounded-full border-8 border-yellow-400 animate-bounce"
          />
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Ups! 🙈
          </h1>
          
          <p className="text-gray-600 mb-6">
            Görünüşe göre profiliniz henüz kahve molasından dönmedi. 
            Minion'larımız onu aramaya gitti! ☕️
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-100"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-200"></span>
            </div>
            
            <a 
              href="/" 
              className="inline-block bg-yellow-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
            >
              Ana Sayfaya Dön 🏠
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500 italic">
            "Bana-na!" - Minion Bob
          </p>
        </div>
      </div>
    </GridContainer>
  )
};

export default Profile;
