import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';
import App from './App';

describe('test', () => {
  it('english to korean', async () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('한국어'));

    await wait(() => expect(getByText('한국어')).toHaveClass('disabled'));

    fireEvent.click(getByText('한국어'));
    expect(getByText('한국어')).toHaveClass('disabled');
  });

  it('korean to japanese', async () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('日本語'));

    await wait(() => expect(getByText('日本語')).toHaveClass('disabled'));

    fireEvent.click(getByText('日本語'));
    expect(getByText('日本語')).toHaveClass('disabled');
  });

  it('japanese to english', async () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('English'));

    await wait(() => expect(getByText('English')).toHaveClass('disabled'));

    fireEvent.click(getByText('English'));
    expect(getByText('English')).toHaveClass('disabled');
  })

  it('input text', () => {
    const { getByText, container } = render(<App />);
    fireEvent.change(container.querySelector('input[name="text"]')!, { target: { value: 'Test User' } });

    expect(getByText('Good morning, Test User')).toBeInTheDocument();
  });

  it('click generate button will show random? text', () => {
    const { getByText } = render(<App />);
    global.Math = Object.create(global.Math);
    global.Math.random = () => 0.5;

    fireEvent.click(getByText('Generate'));
    expect(getByText('not')).toBeInTheDocument();

    global.Math.random = () => 0.8;
    fireEvent.click(getByText('Generate'));
    expect(getByText('random.')).toBeInTheDocument();

    global.Math.random = () => 0;
    fireEvent.click(getByText('Generate'));
    expect(getByText("it's")).toBeInTheDocument();
  });

  it('plural test', () => {
    const { getByText } = render(<App />);
    expect(getByText('Nobody arrived')).toBeInTheDocument();

    fireEvent.click(getByText('+'));
    expect(getByText('only one guest arrived')).toBeInTheDocument();

    fireEvent.click(getByText('+'));
    expect(getByText('2 guests arrived')).toBeInTheDocument();

    fireEvent.click(getByText('+'));
    expect(getByText('3 guests arrived')).toBeInTheDocument();

    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('-'));
    expect(getByText('Nobody arrived')).toBeInTheDocument();

    fireEvent.click(getByText('-'));
    expect(getByText('Nobody arrived')).toBeInTheDocument();
  });
});
