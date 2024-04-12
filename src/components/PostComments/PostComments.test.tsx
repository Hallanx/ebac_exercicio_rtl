import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment />);

        const commentInput = screen.getByTestId('comment-textarea');
        const commentButton = screen.getByTestId('comment-button');

        fireEvent.change(commentInput, { target: { value: 'Comentário adicionado via testes' } });
        fireEvent.click(commentButton);

        fireEvent.change(commentInput, { target: { value: 'Segundo comentário adicionado via testes' } });
        fireEvent.click(commentButton);

        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    });
});
