import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '~/app/_components/Bar/NavBar';
import { pageRoutes } from '~/app/_constants/pageRoutes';

// Mock the Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('NavBar', () => {
  it('renders all navigation items', () => {
    render(<NavBar currentTab="Relevant" />);
    
    expect(screen.getByText('Relevant')).toBeInTheDocument();
    expect(screen.getByText('Latest')).toBeInTheDocument();
    expect(screen.getByText('Top')).toBeInTheDocument();
  });



  it('renders correct links for each tab', () => {
    render(<NavBar currentTab="Relevant" />);
    
    expect(screen.getByText('Relevant').closest('a')).toHaveAttribute('href', pageRoutes.HOME);
    expect(screen.getByText('Latest').closest('a')).toHaveAttribute('href', pageRoutes.LATEST);
    expect(screen.getByText('Top').closest('a')).toHaveAttribute('href', pageRoutes.TOP);
  });

  it('applies custom className when provided', () => {
    render(<NavBar currentTab="Relevant" className="custom-class" />);
    
    const navContainer = screen.getByText('Relevant').closest('div');
    expect(navContainer).toHaveClass('custom-class');
  });
});