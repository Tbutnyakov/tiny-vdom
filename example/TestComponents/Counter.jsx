import vdom from 'tiny-vdom';

export const Counter = ({ count = 0 }) => {
  const onClick = () => {
    console.log('click');
  };
  return (
    <div>
      Count is: {count}
      <Button onClick={onClick}>Hello</Button>
    </div>
  );
};
