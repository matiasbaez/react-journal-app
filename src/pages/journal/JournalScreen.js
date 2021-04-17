import React from 'react'

import { Sidebar } from './Sidebar'
// import { NothingSelected } from './NothingSelected'
import { Notes } from '../../components/notes/Notes'

export const JournalScreen = () => {
    return (
        <div className="journal__main-container">
            
            <Sidebar />

            <main>
                <Notes />
                {/* <NothingSelected /> */}
            </main>

        </div>
    )
}
