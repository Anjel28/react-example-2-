import React from 'react';

interface MyComponentProps {
  name: string;
  age?: number; // optional prop
}

const MyComponent: React.FC<MyComponentProps> = ({ name, age = 25 }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
};

export default MyComponent;

  //return (
    //<button>
      //I'm a button
    //</button>
  //);
//}

//export default function MyApp(): React.ReactElement{
  //return (
    //<div>
      //<h1>Welcome to my app</h1>
      //<MyButton />
    //</div>
  //);
//}
//interface User {
 // name: string;
  //imageUrl: string;
  //imageSize: number;
//}
//const user: User = {
  //name: 'Hedy Lamarr',
  //imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  //imageSize: 90,
//};
//export default function Profile() {
  //return (
    //<>
      //<h1>{user.name}</h1>
      //<img
        //className="avatar"
        //src={user.imageUrl}
        //alt={'Photo of ' + user.name}
        //style={{
          //width: user.imageSize,
          //height: user.imageSize
        //}}
      ///>
    //</>
  //)
//

// ADD rendering list
//interface Product{
  //title: string;
  //isFruit: boolean;
  //id: number;
//}

//const products: Product[] = [
  //{ title: 'Cabbage', isFruit: false, id: 1 },
  //{ title: 'Garlic', isFruit: false, id: 2 },
  //{ title: 'Apple', isFruit: true, id: 3 },
//];

//export default function shoppingList(){
  //const listItems = products.map((product: Product) =>
   //<li
     // key={product.id}
      //style={{
        //color: product.isFruit ? 'magenta' : 'darkgreen'
      //}}
    //>
      //{product.title}
    //</li>
  //);
  //return (
    //<ul>{listItems}</ul>
  //);
//}
// {1} Add buttons click

//export default function MyApp(){
 // return(
    //<div>
      //<h1>Counters that update seperately</h1>
      //<MyButton />
      //<MyButton />
    //</div>
  //)
//}
//function MyButton(){
  //const [count,setCount] = useState<number>(0);
  //function handleClick(): void{
    //setCount(count+1);
  //}
  //return(
    //<button onClick={handleClick}>
      //Clicked {count} times
    //</button>
  //)
//}

//{2} usetate hook {props}
//interface MyButtonProps{
  //count:number;
  //onClick: () => void;

//}
//export default function MyApp() {
  //const [count, setCount] = useState<number>(0);

  //function handleClick() {
    //setCount(count + 1);
  //}
   //return (
    //<div>
      //<h1>Counters that update together</h1>
      //<MyButton count={count} onClick={handleClick} />
      //<MyButton count={count} onClick={handleClick} />
    //</div>
  //);
//}
//function MyButton({ count, onClick }: MyButtonProps) {
  //return (
    //<button onClick={onClick}>
      //Clicked {count} times
    //</button>
  //);
//}

