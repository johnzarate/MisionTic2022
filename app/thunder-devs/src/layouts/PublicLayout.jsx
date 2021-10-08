import HomeFooter from 'components/HomeFooter'
import HomeNav from 'components/HomeNav'
import React from 'react'
import 'styles/homeStyles.css'

const PublicLayout = ({ children }) => {
    return (
        <div className="h-screen w-screen flex flex-col">
            <HomeNav/>
            <main className="flex h-full bgMain items-center">
                {children}
            </main>
            <HomeFooter/>
        </div>
    )
}

export default PublicLayout
