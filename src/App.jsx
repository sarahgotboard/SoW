import React, { useState, useEffect } from 'react'
import InteractiveIalP1Schema from './components/InteractiveIalP1Schema'
import UserProfileSetup from './components/UserProfileSetup'
import { Toaster } from "@/components/ui/sonner"
import { userProfileManager } from './utils/dataManager'
import './App.css'

function App() {
  const [userProfile, setUserProfile] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user profile exists
    const profile = userProfileManager.getProfile()
    setUserProfile(profile)
    setIsLoading(false)
  }, [])

  const handleProfileCreated = (profile) => {
    setUserProfile(profile)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">📚</div>
          <div className="text-lg font-medium">Loading IAL P1 Schema...</div>
        </div>
      </div>
    )
  }

  if (!userProfile) {
    return (
      <>
        <UserProfileSetup onProfileCreated={handleProfileCreated} />
        <Toaster />
      </>
    )
  }

  return (
    <>
      <InteractiveIalP1Schema />
      <Toaster />
    </>
  )
}

export default App
