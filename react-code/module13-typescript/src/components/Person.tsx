interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  //when defined these elements are mandatory. However, if you put a question mark it will allow not to put it as an prop, you also will be obligated to put the question mark in the variable when you use it
  friends?: string[];
  country: Country;
}
// if you want only to allow these options
export enum Country {
  Brazil = "Brazil",
  France = "France",
  Canada = "Canada",
}
export const Person = (props: Props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h1>This person {props.isMarried ? "is" : "is not"} Married</h1>
      {props.friends?.map((friend: string) => (
        <h1>{friend}</h1>
      ))}
      <h1>Country: {props.country}</h1>
    </div>
  );
};
