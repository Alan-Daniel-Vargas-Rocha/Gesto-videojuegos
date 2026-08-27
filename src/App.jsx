import { useState } from 'react'
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'

const juegos = [
  { id: 1, nombre: 'Ninja Gaiden', imagen: 'https://via.placeholder.com/300x400?text=Ninja_Gaiden', desc: 'Aventura épica' },
  { id: 2, nombre: 'Zelda', imagen: 'https://via.placeholder.com/300x400?text=Zelda', desc: 'Exploración' },
  { id: 3, nombre: 'Mario', imagen: 'https://via.placeholder.com/300x400?text=Mario_Odyssey', desc: 'Plataformas' },
]

export default function App(){
  const [user] = useState(null)
  return (
    <div style={{background:'#111', color:'white', minHeight:'100vh', padding:'20px'}}>
      <h1>Catálogo</h1>
      <div style={{display:'flex', gap:'20px', overflowX:'auto'}}>
        {juegos.map(j => (
          <div key={j.id} style={{minWidth:'260px', background:'#222', padding:'10px', borderRadius:'10px'}}>
            <img src={j.imagen} style={{width:'100%'}} loading="lazy" />
            <h3>{j.nombre}</h3>
            <p>{j.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}