const Vec_1 = () => {
    const reactItems = [
      "mesa", "cama", "silla", "sofa", "lampara", "television",
    ];

    const arryObj = [
        {
            id: 1,
            firstName: "Lola",
            lastName: "Lopez",
            Sex: "M",
        },
        {
            id: 2,
            firstName: "Lula",
            lastName: "Lupe",
            Sex: "M",
        },
        {
            id: 3,
            firstName: "Lolo",
            lastName: "Lolez",
            Sex: "H",
        },
        {
            id: 4,
            firstName: "Lulu",
            lastName: "Lopto",
            Sex: "M",
        },
        {
            id: 5,
            firstName: "Pepe",
            lastName: "Trueno",
            Sex: "V",
        },
    ]
         
     
    return (
      <ul className="vec">
        {reactItems.map((item) => (
          <li key={item}>
            <h2>{item}</h2>
          </li>
        ))}

        {arryObj.map((obj) => (
          <li key={obj.id}>
          <p>elemento número {obj.id}</p>
          <p>Nombre {obj.firstName}</p>
          <p>Apellido {obj.lastName}</p>
          <p>Sexo {obj.Sex}</p>
       </li>
    ))}

      </ul>

    

    );
  };
  
  export default Vec_1;
  