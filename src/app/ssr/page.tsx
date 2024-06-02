async function gettodosData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
}

export default async function ssr() {
  const datas = await gettodosData();
  if (datas == null) {
    return (
      <>
        <h2 className="text-center text-yellow-400">...LOADING</h2>
      </>
    );
  }
  return (
    <>
      <h2 className="text-3xl text-center mt-8 text-orange-400">Todo Data</h2>
      <p className="text-center ">
        <b className="text-red-400">*</b>
        <b className="text-yellow-400">Note</b> : This is a server page
      </p>
      <div className="text-center mt-10">
        <ul className="space-y-10">
          {datas &&
            datas.map((data: any) => (
              <li>
                <h3 className="font-bold">{data.title}</h3>
                <p className="text-sky-400">
                  {data.completed ? "Completed" : "Not Completed"}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
