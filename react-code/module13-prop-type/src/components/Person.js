import Proptypes from "prop-types";

export const Person = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h1>This person {props.isMarried ? "is" : "is not"} married</h1>
      {props.friends.map((friend) => (
        <h1>{friend}</h1>
      ))}
    </div>
  );
};
// with this feature there will be a warning in the console once some input is not the requested one
// propTypes is used to avoid using typescript, but it's better to use typeScript
Person.propTypes = {
  name: Proptypes.string,
  email: Proptypes.string,
  age: Proptypes.number,
  isMarried: Proptypes.bool,
  friends: Proptypes.arrayOf(Proptypes.string),
};
