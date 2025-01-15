import { Select, Form, Flex } from 'antd';
import { currencyData } from '../data';
const { Option } = Select;

interface CurrencySelectProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    isError: boolean;
}

export const CurrencySelect = ({ label, value, onChange, isError }: CurrencySelectProps) => (
    <Form.Item 
        label={label}
        validateStatus={isError ? 'error' : 'success'}
    >
        <Select
            size='large'
            value={value}
            onChange={onChange}
            status={isError ? 'error' : ''}
        >
            {currencyData.map((item) => (
                <Option key={item.currency} value={item.currency}>
                    <Flex gap={5}>
                        <img src={item.icon} alt='' width={24} />
                        {item.currency}
                    </Flex>
                </Option>
            ))}
        </Select>
    </Form.Item>
); 