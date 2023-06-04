const TableComponent = ({data}: any) => {
  // Function to generate the image based on the URL
  const generateImage = (url: any) => {
    // Logic to generate the image
    const id = url.split('/').slice(-2, -1)[0];
    return (
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
        alt='Pokemon'
        width='100'
        height='100'
      />
    );
  };

  return (
    <table className='pokemon-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {data.pokemon_species_details.map((item: any, index: any) => (
          <tr key={index}>
            <td>{item.pokemon_species.name}</td>
            <td>
              {item.urlToImage !== null &&
                generateImage(item.pokemon_species.url)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
