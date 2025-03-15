import {  Mail, MapPin, PhoneCall } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className='mt-8 border relative z-[9999] bg-primary text-white'>
        <div className='container p-8 flex justify-between'>
            
            <div className='space-y-4 '>
            <h2 className='font-bold'>Contact</h2>
            <div className='flex items-center gap-2'>
            
            <Mail size={20}/>
            <p>ingalesandesh7@gmail.com </p>
            </div>
            
            <div className='flex items-center gap-2'>
            <PhoneCall/>
            <p>+91-7066681358 </p>
            </div>
            
            <div className='flex items-center gap-2'>
            <MapPin/>
            <p>Pune</p>
            </div>
            
            </div>
            

            
        <p>
        ©2025-All Rights Reserved.
        </p>
        </div>

    </footer>
  )
}
