import React from 'react';
import renderer from 'react-test-renderer';
import SyntaxHighlighter from "../src";

const code = `const woah = fun => fun + 1;
const dude = woah(2) + 3;
function thisIsAFunction() {
  return [1,2,3].map(n => n + 1).filter(n !== 3);
}
console.log('making up fake code is really hard');

function itIs() {
  return 'no seriously really it is';
}
`;

test('SyntaxHighlighter component renders correctly', () => {
  const tree = renderer.create(
    <SyntaxHighlighter language='javascript' showLineNumbers={true}>{code}</SyntaxHighlighter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SyntaxHighlighter allows lineNumberStyle as object', () => {
  const tree = renderer.create(
    <SyntaxHighlighter language='javascript' showLineNumbers={true} lineNumberStyle={{color: "red"}}>{code}</SyntaxHighlighter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SyntaxHighlighter allows lineNumberStyle as function', () => {
  const tree = renderer.create(
    <SyntaxHighlighter language='javascript' showLineNumbers={true} lineNumberStyle={() => ({color: "red"})}>{code}</SyntaxHighlighter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
