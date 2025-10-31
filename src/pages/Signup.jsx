import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      const { data, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            college: formData.college
          }
        }
      });
      if (authError) {
        setError(authError.message);
        return;
      }
      setSuccessMessage('Account created! Check your email for verification link.');
      setFormData({
        name: '',
        email: '',
        college: '',
        password: '',
        confirmPassword: ''
      });
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError(err.message || 'An error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    });
    if (oauthError) alert(oauthError.message);
    // User will be redirected after login success
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-ui-navy mb-2">Join UnboxInSight</h1>
          <p className="text-gray-600">Start your innovation journey today</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>
          )}
          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">{successMessage}</div>
          )}
          {/* Email Signup Form */}
          <form onSubmit={handleEmailSignup} className="space-y-4 mb-6">
            {/* ... your existing form inputs ... */}
            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-ui-orange text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>
          {/* Google Sign-in Button */}
          <button
            type="button"
            onClick={handleGoogleSignup}
            className="w-full border-2 border-ui-gray py-3 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2 mb-6"
          >
            {/* Optional Google SVG icon */}
            Continue with Google
          </button>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-ui-orange font-semibold hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
