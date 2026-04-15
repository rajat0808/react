import { useState } from 'react';
import { useFigmaUser } from '../hooks/useFigma';

export default function FigmaDemo({ token }) {
  const [fileKey, setFileKey] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(!token);
  const [localToken, setLocalToken] = useState(token || '');
  const [activeTab, setActiveTab] = useState('file');
  const { data: user, loading: userLoading, error: userError } = useFigmaUser(localToken);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTokenInput(false);
  };

  if (showTokenInput) {
    return (
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Figma API Demo</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Personal Access Token</label>
            <input
              type="password"
              value={localToken}
              onChange={(e) => setLocalToken(e.target.value)}
              placeholder="figd_xxxxxxxxxxxxx"
              className="w-full p-2 border rounded"
            />
            <p className="text-xs text-gray-500 mt-1">
              Get token from figma.com/account → Personal Access Tokens
            </p>
          </div>
          <button type="submit" className="w-full bg-black text-white p-2 rounded">
            Connect
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Figma API Demo</h2>
        <button
          onClick={() => setShowTokenInput(true)}
          className="text-sm text-gray-500 hover:text-black"
        >
          Change Token
        </button>
      </div>

      {user && (
        <div className="mb-6 p-4 bg-green-50 rounded flex items-center gap-3">
          <img src={user.img_url} alt={user.handle} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-medium">{user.handle}</p>
            <p className="text-sm text-gray-500">Connected to Figma</p>
          </div>
        </div>
      )}

      {userError && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded">
          Error: {userError}
        </div>
      )}

      <div className="flex gap-2 mb-6">
        {['file', 'styles', 'components'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded capitalize ${
              activeTab === tab ? 'bg-black text-white' : 'bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'file' && (
        <div className="space-y-4">
          <form className="flex gap-2">
            <input
              type="text"
              value={fileKey}
              onChange={(e) => setFileKey(e.target.value)}
              placeholder="Enter Figma file key (from URL)"
              className="flex-1 p-2 border rounded"
            />
            <button type="button" className="px-4 py-2 bg-black text-white rounded">
              Fetch File
            </button>
          </form>
          <div className="text-sm text-gray-500">
            File key is the alphanumeric code in your Figma URL:
            <br />
            <code className="bg-gray-100 px-1">figma.com/file/<span className="bg-yellow-100">FILE_KEY</span>/...</code>
          </div>
        </div>
      )}

      {activeTab === 'styles' && (
        <div className="p-8 bg-gray-50 rounded text-center text-gray-500">
          Enter a team ID to fetch styles, or update your token with team access
        </div>
      )}

      {activeTab === 'components' && (
        <div className="p-8 bg-gray-50 rounded text-center text-gray-500">
          Enter a team ID to fetch components, or update your token with team access
        </div>
      )}
    </div>
  );
}