import { useState, useEffect, useRef } from 'react'
import { FaBars, FaSearch, FaUser, FaHome, FaCompass, FaCalendar, FaUserCircle, FaEllipsisH, FaGamepad, FaRobot } from 'react-icons/fa'

// Importamos Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'

// Estilos de Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

// Importamos componentes
import LoginModal from './components/LoginModal'
import Chatbot from './components/Chatbot'

// Importamos imágenes
import zeldaImg from "./assets/Zelda.jpg"
import marioImg from "./assets/Mario_Odyssey.jpg"
import ninjaImg from "./assets/Ninja_Gaiden.jpg"
import holeImg from "./assets/Hole.jpg"
import slitherImg from "./assets/slither.jpg"
import agarioImg from "./assets/agario.jpg"

import './App.css'

const juegos = [
  // { id: 1, nombre: "The Legend of Zelda", genero: "Exploración", imagen: zeldaImg, desc: "Aventura épica en un mundo abierto" },
  // { id: 2, nombre: "Super Mario Odyssey", genero: "Plataformas", imagen: marioImg, desc: "Plataformas 3D llenas de diversión" },
  // { id: 3, nombre: "Ninja Gaiden", genero: "Acción", imagen: ninjaImg, desc: "Combate ninja intenso" },
  { id: 4, nombre: "Slither.io", imagen: slitherImg, desc: "¡Come y crece!", url: "https://slither.io/" },
  { id: 5, nombre: "Agar.io", imagen: agarioImg, desc: "¡Devora a los demás!", url: "https://agar.io/" },
  { id: 6, nombre: "Hole.io", imagen: holeImg, desc: "¡Trágate la ciudad!", url: "https://www.crazygames.com/game/hole-io" },
]

export default function App() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const tarjetaRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            setTimeout(() => {
              entry.target.classList.remove('visible')
            }, 500)
          }
        })
      },
      { threshold: 0.5 }
    )

    tarjetaRef.current.forEach((tarjeta) => {
      if (tarjeta) observer.observe(tarjeta)
    })

    return () => observer.disconnect()
  }, [])

  const logout = () => {
    setUser(null)
  }

  return (
    <div className="app">
      {/* Barra de navegación */}
      <header className="header">
        <button className='menu-btn' onClick={() => setMenuAbierto(!menuAbierto)}>
          <FaBars />
        </button>
        <div className='search-container'>
          <FaSearch className='search-icon' />
          <input type="text" placeholder='Buscar juegos...' className='search-input' />
        </div>

        {user ? (
          <div className='user-menu'>
            <span className='user-name'>{user.nombre}</span>
            <button className='logout-btn' onClick={logout}>
              <FaUser />
              <span>Salir</span>
            </button>
          </div>
        ) : (
          <button className='login-btn' onClick={() => setIsLoginModalOpen(true)}>
            <FaUser />
            <span>Login</span>
          </button>
        )}
      </header>

      {/* Contenido principal Deslizable */}
      <main className="catalogo">
        <h2 className='section-title'>🎮 Juegos Destacados</h2>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
          }}
          className="juegos-swiper"
        >
          {juegos.map((juego, index) => (
            <SwiperSlide key={juego.id}>
              <div
                className='tarjeta-juego'
                ref={el => (tarjetaRef.current[index] = el)}
              >
                <div className='tarjeta-imagen'>
                  <img src={juego.imagen} alt={juego.nombre} />
                </div>
                <div className='tarjeta-info'>
                  <h3>{juego.nombre}</h3>
                  <p>{juego.desc}</p>

                  {/* 🔥 BOTÓN JUGAR */}
                  {juego.url && (
                    <a
                      href={juego.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-jugar"
                      onClick={(e) => e.stopPropagation()}
                    >
                      🎮 Jugar
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>

      {/* Menú inferior */}
      <nav className='bottom-nav'>
        <button className='nav-item'>
          <FaHome />
          <span>Home</span>
        </button>
        <button className='nav-item'>
          <FaCompass />
          <span>Search</span>
        </button>
        <button className='nav-item'>
          <FaCalendar />
          <span>Journey</span>
        </button>
        <button className='nav-item'>
          <FaUserCircle />
          <span>Profile</span>
        </button>
        <button className='nav-item' onClick={() => setIsChatbotOpen(true)}>
          <FaRobot />
          <span>IA</span>
        </button>
      </nav>

      {/* Modal de Login */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={(userData) => {
          console.log('Usuario logueado:', userData)
          setUser(userData)
        }}
      />

      {/* Chatbot */}
      <Chatbot
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        userId={user?.id || 'anonimo'}
      />
    </div>
  )
}