import { Message } from "semantic-ui-react";

interface Props {
    errors: string[] | null;
}

export default function ValidationErrors({errors}: Props) {
    return (
        <Message negative>
            {errors && (
                <Message.List>
                    {errors.map((err: string, i) => (
                        <Message.Item key={i}>{err}</Message.Item>
                    ))}
                </Message.List>
            )}
        </Message>
    )
}