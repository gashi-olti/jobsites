import { render, screen, fireEvent } from '@testing-library/react';
import CustomDialogTitle from '@/components/Common/CustomDialogTitle';
import '@testing-library/jest-dom';

describe('CustomDialogTitle', () => {
  it('should render the title and close button when onClose is provided', () => {
    const onClose = jest.fn();

    render(<CustomDialogTitle id="dialog-title" title="Test Title" onClose={onClose} />);

    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: 'close' });
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();
  });
});
