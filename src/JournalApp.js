import React from 'react'

import { AuthContext } from './auth/AuthContext'
import { AppRouter } from './routers/AppRouter'

export const JournalApp = () => {
    return (
        <AuthContext.Provider value={{}}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
