import React, { useState, useEffect } from 'react';
import HistoryIcon from "../assets/history-icon.svg";
import messageIcon from "../assets/Rectangle 14.png";
import BungaBukuTumu1 from "../assets/bunga-buku-tamu-1.png";
import BungaBukuTumu2 from "../assets/bunga-buku-tamu-2.png";

const BukuTamu = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', message: '' });
    const [guestBookEntries, setGuestBookEntries] = useState([]);

    useEffect(() => {
        const fetchGuestBookEntries = async () => {
            try {
                // Mocked API response
                const mockResponse = [
                    {
                        id: 1,
                        name: 'John Doe',
                        message: 'Congratulations!',
                        timestamp: '1 minggu, 4 hari lalu',
                        status: 'Hadir',
                    },
                    {
                        id: 2,
                        name: 'Jane Smith',
                        message: 'Best wishes!',
                        timestamp: '2 minggu, 3 hari lalu',
                        status: 'Hadir',
                    },
                    {
                        id: 3,
                        name: 'Alice Brown',
                        message: 'Happy wedding!',
                        timestamp: '3 minggu, 2 hari lalu',
                        status: 'Hadir',
                    },
                    {
                        id: 4,
                        name: 'John Doe',
                        message: 'Congratulations!',
                        timestamp: '1 minggu, 4 hari lalu',
                        status: 'Hadir',
                    },
                ];

                setGuestBookEntries(mockResponse);
            } catch (error) {
                console.error('Error fetching guest book entries:', error);
            }
        };

        fetchGuestBookEntries();
    }, []);

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            console.log('Form submitted successfully:', result);
            closeForm();
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <section className='bg-[#C0C6B8] px-2 py-40 relative overflow-hidden'>
            <div className='my-10'>
                <h1 className='text-center text-[#34352F] f-arya-regular text-5xl mb-2'>BUKU TAMU</h1>
                <div className='mx-auto h-[2px] bg-[#34352F] w-40 mb-16'></div>

                <div className='flex flex-col gap-8 h-[400px] pr-3 py-5 overflow-y-auto boxscrollbar'>
                    {guestBookEntries.map(entry => (
                        <div key={entry.id} className='flex items-start gap-3'>
                            <div className='bg-[#626D6B] w-16 h-16 rounded-full'></div>
                            <div className='flex-1'>
                                <div className='flex gap-2 items-center'>
                                    <h2 className='text-[#34352F] f-montserrat-medium text-xl truncate line-clamp-1 text-balance'>{entry.name}</h2>
                                    <div className='bg-[#626D6B] rounded-[3px] px-3 text-center leading-1 h-6 text-white flex items-center justify-center f-montserrat-medium text-xs'>{entry.status}</div>
                                </div>
                                <div className='flex items-center gap-1 mt-1'>
                                    <img src={HistoryIcon} alt="HistoryIcon" />
                                    <p className='text-[#34352F] f-montserrat-medium text-sm'>{entry.timestamp}</p>
                                </div>
                                <div className='bg-[#626D6B] rounded-lg p-4 relative w-full mt-2 text-white f-montserrat-medium text-base'>
                                    {entry.message}
                                    <img src={messageIcon} alt="messageIcon" className='absolute -left-[14px] top-0 h-14' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center w-full mt-10'>
                    <button onClick={openForm} className='w-fit bg-[#626D6B] text-white f-montserrat-medium text-lg rounded-[100px] px-6 py-2'>
                        ISI BUKU TAMU
                    </button>
                </div>

                <img src={BungaBukuTumu1} alt="BungaBukuTumu1" className='absolute top-2 -right-10 h-56' />
                <img src={BungaBukuTumu2} alt="BungaBukuTumu2" className='absolute bottom-2 -left-12 h-56' />

                {isFormOpen && (
                    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center p-3 justify-center z-50'>
                        <div className='bg-white p-8 rounded-lg relative mx-w-[400px] w-full'>
                            <button onClick={closeForm} className='absolute top-2 right-4 font-bold text-black'>✕</button>
                            <h2 className='text-2xl mb-4 f-montserrat-medium'>Isi Buku Tamu</h2>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-4'>
                                    <label className='block text-gray-700 text-sm font-bold mb-2 f-montserrat-medium' htmlFor='name'>
                                        Nama
                                    </label>
                                    <input
                                        className='border rounded-lg w-full p-3 text-gray-700 f-montserrat-medium'
                                        id='name'
                                        type='text'
                                        placeholder='Masukkan nama Anda'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-gray-700 text-sm font-bold mb-2 f-montserrat-medium' htmlFor='message'>
                                        Pesan
                                    </label>
                                    <textarea
                                        className='border rounded-lg w-full p-3 text-gray-700 f-montserrat-medium'
                                        id='message'
                                        placeholder='Masukkan pesan Anda'
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type='submit' className='bg-[#626D6B] text-white px-6 py-2 rounded-[100px] f-montserrat-medium'>
                                    Kirim
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BukuTamu;
