import { useState } from 'react';
import { Heart, Copy, Check, CreditCard, Banknote } from 'lucide-react';

type Currency = 'USD' | 'NGN';

type BankAccount = {
  bank: string;
  name: string;
  account: string;
  currency: string;
};

const DonatePage = () => {
  const [copiedAccount, setCopiedAccount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('USD');

  const bankAccounts: Record<Currency, BankAccount> = {
    USD: {
      bank: "United Bank of Africa",
      name: "THE RAYMOND OFODU FOUNDATION",
      account: "3004696679",
      currency: "US Dollar ($)"
    },
    NGN: {
      bank: "United Bank of Africa", 
      name: "THE RAYMOND OFODU FOUNDATION",
      account: "1027856616",
      currency: "Nigerian Naira (₦)"
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedAccount(type);
      setTimeout(() => setCopiedAccount(''), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4 mt-32">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Our <span className="text-red-600">Mission</span>
          </h1>
          <p className="text-lg text-gray-600">
            Your donation helps us protect children, empower women, and build stronger communities across Africa.
          </p>
        </div>

        {/* Currency Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Choose Currency</h3>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {Object.entries(bankAccounts).map(([currency, details]) => (
              <button
                key={currency}
                onClick={() => setSelectedCurrency(currency as Currency)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedCurrency === currency
                    ? 'border-red-600 bg-red-50 text-red-600'
                    : 'border-gray-200 hover:border-red-300 text-gray-700'
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  {currency === 'USD' ? (
                    <CreditCard className="w-5 h-5 mr-2" />
                  ) : (
                    <Banknote className="w-5 h-5 mr-2" />
                  )}
                </div>
                <div className="text-sm font-medium">{details.currency}</div>
              </button>
            ))}
          </div>

          {/* Bank Details */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <label className="text-sm font-medium text-gray-600">Bank</label>
              <div className="text-lg font-semibold text-gray-900">
                {bankAccounts[selectedCurrency].bank}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <label className="text-sm font-medium text-gray-600">Account Name</label>
                  <div className="text-lg font-semibold text-gray-900">
                    {bankAccounts[selectedCurrency].name}
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(bankAccounts[selectedCurrency].name, 'name')}
                  className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                >
                  {copiedAccount === 'name' ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <label className="text-sm font-medium text-gray-600">Account Number</label>
                  <div className="text-2xl font-bold text-gray-900 font-mono">
                    {bankAccounts[selectedCurrency].account}
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(bankAccounts[selectedCurrency].account, 'number')}
                  className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                >
                  {copiedAccount === 'number' ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You */}
        <div className="text-center">
          <p className="text-gray-600">
            Thank you for supporting TROF Foundation. Every contribution makes a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
