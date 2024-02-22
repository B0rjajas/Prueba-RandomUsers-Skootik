import React, { useState } from 'react';
import Button from './Button';
import axios from 'axios';

function Formulario({ onAddUser }) {
    const [formData, setFormData] = useState({ gender: '', name: '', email: '', photo: '', phone: '', location: '' });
    const [formError, setFormError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!formData.gender || !formData.name || !formData.email || !formData.photo || !formData.phone || !formData.location) {
            setFormError('Todos los campos son obligatorios');
            setTimeout(() => {
                setFormError('');
            }, 3000); // Establecer el temporizador para que el mensaje de error desaparezca después de 3 segundos
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await axios.get('https://randomuser.me/api/');
            console.log('Random user data:', response.data);
    
            const newUser = {
                gender: response.data.results[0].gender,
                name: `${response.data.results[0].name.first} ${response.data.results[0].name.last}`,
                email: response.data.results[0].email,
                photo: formData.photo,
                phone: formData.phone,
                location: formData.location
            };

            // Llama a la función proporcionada por el componente principal para agregar el nuevo usuario a la lista
            onAddUser(newUser);

            // Limpiar el formulario después de agregar el usuario
            setFormData({ gender: '', name: '', email: '', photo: '', phone: '', location: '' });
            setFormError('');
        } catch (error) {
            console.error('Error fetching random user data:', error);
        }
    };

    return (
        <div className='container card p-4 mb-4'>
            <h2 className=''>Formulario: agrega tu perfil</h2>
            <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label htmlFor="gender" className="form-label">Género:</label>
        <input type="text" className="form-control" id="gender" name="gender" value={formData.gender} onChange={handleChange} />
    </div>
    <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre:</label>
        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
    </div>
    <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
    </div>
    <div className="mb-3">
        <label htmlFor="photo" className="form-label">Foto:</label>
        <input type="text" className="form-control" id="photo" name="photo" value={formData.photo} onChange={handleChange} />
    </div>
    <div className="mb-3">
        <label htmlFor="phone" className="form-label">Teléfono:</label>
        <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
    </div>
    <div className="mb-3">
        <label htmlFor="location" className="form-label">Ubicación:</label>
        <input type="text" className="form-control" id="location" name="location" value={formData.location} onChange={handleChange} />
    </div>
    <button type="submit" className="btn btn-primary mx-auto d-block">Submit</button>
    {formError && <p className="text-danger">{formError}</p>}
</form>

        </div>
    );
}

export default Formulario;
