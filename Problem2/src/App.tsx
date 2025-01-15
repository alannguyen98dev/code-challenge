import { useState } from 'react';
import { Form, Button, Typography, Alert } from 'antd';
import { currencyData } from './data';
import { CurrencySelect } from './components/CurrencySelect';
import { AmountInput } from './components/AmountInput';
import BG from './assets/bg.jpg';

const { Title, Text } = Typography;

const App: React.FC = () => {
    const [fromCurrency, setFromCurrency] = useState<string>('USD');
    const [toCurrency, setToCurrency] = useState<string>('USD');
    const [amount, setAmount] = useState<string>('');
    const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleCurrencyChange = (value: string, type: 'from' | 'to') => {
        setConvertedAmount(null);
        setError('');
        if (type === 'from') {
            setFromCurrency(value);
        } else {
            setToCurrency(value);
        }
    };

    const handleConvert = (): void => {
        setIsSubmitted(true);
        const parsedAmount = parseFloat(amount);

        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            setError('Please enter a valid amount.');
            return;
        }
        if (fromCurrency === toCurrency) {
            setError('Please select different currencies to swap.');
            return;
        }
        setError('');

        setLoading(true);
        setTimeout(() => {
            const fromRate = currencyData.find((item) => item.currency === fromCurrency)?.price || 1;
            const toRate = currencyData.find((item) => item.currency === toCurrency)?.price || 1;
            const result = (parsedAmount * fromRate) / toRate;
            setConvertedAmount(result);
            setLoading(false);
        }, 3000);
    };

    const isSameCurrency = fromCurrency === toCurrency;
    const showCurrencyError = isSubmitted && isSameCurrency;
    const showAmountError = isSubmitted && !amount;

    return (
        <div
            style={{
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                padding: '16px',
                background: `url(${BG}) center/cover no-repeat`,
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    background: '#fff',
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Title level={3} style={{ textAlign: 'center', marginBottom: '16px' }}>
                    Currency Swap Form
                </Title>
                <Form layout='vertical' onFinish={handleConvert} onFinishFailed={handleConvert}>
                    <CurrencySelect
                        label="From Currency"
                        value={fromCurrency}
                        onChange={(value) => handleCurrencyChange(value, 'from')}
                        isError={showCurrencyError}
                    />
                    <CurrencySelect
                        label="To Currency"
                        value={toCurrency}
                        onChange={(value) => handleCurrencyChange(value, 'to')}
                        isError={showCurrencyError}
                    />
                    <AmountInput
                        value={amount}
                        onChange={setAmount}
                        isError={showAmountError}
                    />
                    
                    {error && (
                        <Alert
                            message={error}
                            type='error'
                            showIcon
                            style={{ marginBottom: '16px' }}
                        />
                    )}
                    
                    <Button
                        type='primary'
                        block
                        htmlType='submit'
                        style={{ marginBottom: '16px' }}
                        loading={loading}
                    >
                        Convert
                    </Button>
                </Form>
                
                {convertedAmount !== null && (
                    <Alert
                        message={
                            <Text>
                                {amount} {fromCurrency} is approximately{' '}
                                <Text strong>{convertedAmount.toFixed(6)}</Text>{' '}
                                {toCurrency}.
                            </Text>
                        }
                        type='success'
                        showIcon
                    />
                )}
            </div>
        </div>
    );
};

export default App;
