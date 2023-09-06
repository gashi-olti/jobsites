import { render, screen } from '@testing-library/react';
import Searchbar from '@/components/Common/Searchbar';
import '@testing-library/jest-dom';

describe('Searchbar', () => {
  it('should render a placeholder "Search a driver" in the input', () => {
    render(<Searchbar value="" setValue={() => {}} />);

    const placeHolder = screen.getByPlaceholderText('Search a driver');

    expect(placeHolder).toBeInTheDocument();
  });
});
