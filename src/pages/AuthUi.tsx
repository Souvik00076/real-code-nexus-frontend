import React, { useEffect, useState } from 'react';
import { Code2, Sparkles, Zap, Users, ChromeIcon, GithubIcon } from 'lucide-react';
import { signInWithGitHub, signInWithGoogle } from '../services/authentication';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


export const AuthUI = () => {
  const [isHovered, setIsHovered] = useState('');
  const authContext = useAuth();
  const navigate = useNavigate();
  const features = [
    { icon: Code2, text: "Real-time collaboration" },
    { icon: Zap, text: "Lightning fast performance" },
    { icon: Users, text: "Team workspace" }
  ];

  useEffect(() => {
    if (authContext.auth) {
      navigate('/')
    }
  }, [authContext])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center transform rotate-12">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Real Code Nexus
              </h1>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Code Together,
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Create Magic
              </span>
            </h2>

            <p className="text-lg text-slate-300 max-w-md mx-auto lg:mx-0">
              Experience the future of collaborative coding with real-time editing,
              instant synchronization, and seamless team integration.
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center lg:justify-start gap-3 text-slate-300 group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <feature.icon className="w-4 h-4 text-indigo-400" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm text-slate-400">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-sm text-slate-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-sm text-slate-400">Uptime</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      Welcome Back
                    </h3>
                    <p className="text-slate-300">
                      Sign in to start coding collaboratively
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button
                      onMouseEnter={() => setIsHovered('github')}
                      onMouseLeave={() => setIsHovered('')}
                      onClick={async () => {
                        const user = await signInWithGitHub();
                        if (!user) return;
                        authContext.setAuth({
                          user
                        });
                      }}
                      className="w-full group relative overflow-hidden bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 rounded-xl py-3 px-4 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <GithubIcon className="w-5 h-5 text-white" />
                        <span className="font-medium text-white">
                          Continue with GitHub
                        </span>
                      </div>
                      {isHovered === 'github' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl"></div>
                      )}
                    </button>
                    <button
                      onMouseEnter={() => setIsHovered('google')}
                      onMouseLeave={() => setIsHovered('')}
                      onClick={async () => {
                        const user = await signInWithGoogle();
                        if (!user) return;
                        authContext.setAuth({
                          user
                        });
                      }}
                      className="w-full group relative overflow-hidden bg-white hover:bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <ChromeIcon className="w-5 h-5 text-gray-700" />
                        <span className="font-medium text-gray-900">
                          Continue with Google
                        </span>
                      </div>
                      {isHovered === 'google' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl"></div>
                      )}
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-slate-900/80 text-slate-400">
                        Secure authentication powered by Firebase
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>SSL Secured</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>OAuth 2.0</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    By signing in, you agree to our{' '}
                    <a href="#" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 text-sm text-slate-300">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
 





 





 





 





 





 





 





 





 





 





