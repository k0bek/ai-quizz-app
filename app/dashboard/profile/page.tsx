"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProfileSettings = () => {
    const [name, setName] = useState('Default User');
    const router = useRouter();

    const handleUpdate = () => {
        // profile update
        console.log('Update profile with name:', name);
    };

    const handleDelete = () => {
        // remove account logic
        if (window.confirm('Are you sure you want to delete your account?')) {
            console.log('Delete account');
          
            router.push('/login');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Profile</h1>
            <p className="mb-4">Manage your profile settings here.</p>
            <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                    className="border rounded w-full py-2 px-3 text-gray-700"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p className="text-gray-600 text-sm mt-2">This is your public display name.</p>
            </div>
            <button
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleUpdate}
            >
                Update
            </button>
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Delete Account</h2>
                <p className="mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handleDelete}
                >
                    Delete Account
                </button>
            </div>
        </div>
    );
}

export default ProfileSettings;
