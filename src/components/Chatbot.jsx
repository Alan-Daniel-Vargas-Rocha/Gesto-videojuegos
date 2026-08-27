import { useState, useRef, useEffect } from 'react'
import { FaRobot, FaTimes, FaPaperPlane, FaSpinner } from 'react-icons/fa'
import './Chatbot.css'

function Chatbot({ isOpen, onClose, userId }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "🎮 ¡Hola! Soy GameMaster, tu asistente de videojuegos. ¿Qué quieres jugar hoy?", sender: "bot" }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    if (input.trim() === '') return

    const userMessage = { id: Date.now(), text: input, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('https://api-chatbot-6p1r.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          user_id: userId || 'anonimo'
        })
      })

      const data = await response.json()
      const botMessage = {
        id: Date.now() + 1,
        text: data.response || 'Error al obtener respuesta',
        sender: 'bot'
      }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage = {
        id: Date.now() + 1,
        text: '⚠️ Error al conectar con el asistente.',
        sender: 'bot'
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  if (!isOpen) return null

  return (
    <div className="chatbot-overlay" onClick={onClose}>
      <div className="chatbot-container" onClick={e => e.stopPropagation()}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <FaRobot className="chatbot-icon" />
            <div>
              <h3>GameMaster IA</h3>
              <p>Asistente de videojuegos 🎮</p>
            </div>
          </div>
          <button className="chatbot-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              <div className="message-bubble">{msg.text}</div>
            </div>
          ))}
          {isLoading && (
            <div className="message bot">
              <div className="message-bubble typing">
                <FaSpinner className="spinner" />
                <span>GameMaster está pensando...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input-container">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Pregúntale a GameMaster..."
            className="chatbot-input"
          />
          <button onClick={handleSend} className="chatbot-send">
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chatbot