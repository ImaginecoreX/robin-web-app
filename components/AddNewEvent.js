'use client'
import React, { useState } from 'react';
import Modal from './Model';


const AddNewEvent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='flex items-center justify-center w-full h-auto mt-10 mb-10'>
            
            
        </div>
    );
};

export default AddNewEvent;
