import { useState } from "react";
import { FaTimes, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import './LoginModal.css'

function LoginModal({ isOpen, onClose, onLogin }) {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        confirmPassword: ''
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ 
            ...formData,
            [e.target.name]: e.target.value
        })
        setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        if(!formData.email || !formData.password || (!isLogin && !formData.name) || (!isLogin && !formData.confirmPassword)) {
            setError('Please fill in all fields')
            setLoading(false)
            return
        }

        if(!isLogin && formData.password !== formData.confirmPassword) {
            setError('Passwords do not match')
            setLoading(false)
            return
        }

        setTimeout(() => {
            if(isLogin) {
                if(formData.email === 'user@example.com' && formData.password === 'password') {
                    onLogin({
                        email: formData.email,
                        nombre: 'User'
                    })
                    onClose()
                } else {
                    setError('Invalid email or password')
                }
            } else {
                onLogin({
                    email: formData.email,
                    nombre: formData.name || formData.email.split('@')[0]
                })
                onClose()
            }       
            setLoading(false)
        }, 1000)
    }

    if (!isOpen) return null

    return (      
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <FaTimes />
                </button>
                
                <div className="modal-header">
                    <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                    <p className="modal-subtitle">
                        {isLogin ? 'Welcome back! Please login to your account.' : 'Create a new account. It’s free and only takes a minute.'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                    {!isLogin && (
                        <div className="input-group">
                            <FaUser className="input-icon" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                    )}

                    <div className="input-group">
                        <FaEnvelope className="input-icon" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>

                    <div className="input-group">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>

                    {!isLogin && (
                        <div className="input-group">
                            <FaLock className="input-icon" />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="modal-input"
                            />
                        </div>
                    )}
                    
                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Loading...' : (isLogin ? 'Login' : 'Sign Up')}
                    </button>
                </form>

                <div className="modal-footer">
                    <button
                        className="switch-mode-btn"
                        onClick={() => {
                            setIsLogin(!isLogin)
                            setError('')
                            setFormData({
                                email: '',
                                password: '',
                                name: '',
                                confirmPassword: ''
                            })
                        }}
                    >
                        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginModal