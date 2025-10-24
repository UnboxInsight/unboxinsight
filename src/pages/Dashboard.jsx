import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebaseConfig'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser)

        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid))
          if (userDoc.exists()) {
            setUserData(userDoc.data())
          }
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      } else {
        navigate('/login')
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [navigate])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-ui-navy">Loading...</div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-ui-navy">
            Welcome, {userData?.name || user?.displayName || 'Student'}!
          </h1>
          <p className="text-gray-600 mt-2">
            {userData?.college || 'Add your college in profile settings'}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-ui-navy text-white rounded-lg hover:bg-opacity-90 transition"
        >
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-ui-gray">
          <div className="text-4xl mb-3">🏆</div>
          <h3 className="text-2xl font-bold text-ui-navy mb-2">0</h3>
          <p className="text-gray-600">Competitions Joined</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-ui-gray">
          <div className="text-4xl mb-3">📝</div>
          <h3 className="text-2xl font-bold text-ui-navy mb-2">0</h3>
          <p className="text-gray-600">Blogs Published</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-ui-gray">
          <div className="text-4xl mb-3">⭐</div>
          <h3 className="text-2xl font-bold text-ui-navy mb-2">0</h3>
          <p className="text-gray-600">Points Earned</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-ui-gray mb-8">
        <h2 className="text-2xl font-bold text-ui-navy mb-6">Your Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
            <p className="text-lg text-gray-800">{userData?.name || user?.displayName || 'N/A'}</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <p className="text-lg text-gray-800">{user?.email}</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">College</label>
            <p className="text-lg text-gray-800">{userData?.college || 'Not set'}</p>
          </div>
        </div>
        <button className="mt-6 px-6 py-2 bg-ui-orange text-white rounded-lg hover:bg-opacity-90 transition">
          Edit Profile
        </button>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-ui-gray">
        <h2 className="text-2xl font-bold text-ui-navy mb-6">Recent Activity</h2>
        <div className="text-center py-12 text-gray-500">
          <p>No activity yet. Start by joining a competition!</p>
          <button 
            onClick={() => navigate('/competitions')}
            className="mt-4 px-6 py-2 bg-ui-orange text-white rounded-lg hover:bg-opacity-90 transition"
          >
            Browse Competitions
          </button>
        </div>
      </div>
    </div>
  )
}