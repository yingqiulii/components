import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table Component', () => {
  test('renders table with children', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Row 1 Data 1</td>
            <td>Row 1 Data 2</td>
          </tr>
        </tbody>
      </Table>
    );

    const rowData1 = screen.getByText(/Row 1 Data 1/i);
    expect(rowData1).toBeInTheDocument();

    const rowData2 = screen.getByText(/Row 1 Data 2/i);
    expect(rowData2).toBeInTheDocument();
  });

  test('renders disabled table', () => {
    render(
      <Table disabled>
        <tbody>
          <tr>
            <td>Row 1 Data 1</td>
            <td>Row 1 Data 2</td>
          </tr>
        </tbody>
      </Table>
    );

    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveStyle({ opacity: '0.5', pointerEvents: 'none' });
  });

  test('renders table with custom style', () => {
    render(
      <Table disabled>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
        </tbody>
      </Table>
    );

    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveStyle({ cursor: 'not-allowed' });
  });
});
