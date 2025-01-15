import { Form, Input } from 'antd';

interface AmountInputProps {
    value: string;
    onChange: (value: string) => void;
    isError: boolean;
}

export const AmountInput = ({ value, onChange, isError }: AmountInputProps) => (
    <Form.Item
        label='Amount'
        required
        validateStatus={isError ? 'error' : 'success'}
    >
        <Input
            size='large'
            type='number'
            placeholder='Enter amount'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            status={isError ? 'error' : ''}
        />
    </Form.Item>
); 