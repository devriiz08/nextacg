interface Props {
    title: string,
    desciption: string
}

const ListWcu = (props: Props) => {
  return (
      <li className="my-1">
        <h1 className="font-semibold">{props.title}</h1>
        <p className="text-sm font-normal text-muted-foreground">
         {props.desciption}
        </p>
      </li>
  );
};

export default ListWcu;
