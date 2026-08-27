const API_URL = 'http://localhost:8000';

export const authService = {
    login: async (email, password) => {
        const formData = new URLSearchParams();
        formData.append('username', email);
        formData.append('password', password);

        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Credenciales incorrectas');
        }

        const data = await response.json();
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('usuario_id', data.usuario_id);
        return data;
    },

    register: async (nombre, email, password) => {
        const response = await fetch(`${API_URL}/usuario/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, email, contraseña: password })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Error al registrar usuario');
        }
        return await response.json();
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario_id');
    },

    isAuthenticated: () => !!localStorage.getItem('token'),
    
    getToken: () => localStorage.getItem('token')
};