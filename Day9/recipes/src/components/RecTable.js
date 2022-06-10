export default function RecTable(props) {
  return (
    <div>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.recipes.map((recipe) =>
            <tr key={recipe.id}>
              <td>{recipe.name}</td>
              <td>{recipe.time}</td>
              <td>{recipe.description}</td>
              <td> 
                <div onClick={(e) => props.onRecipeRemove(recipe.id)}>
                  <i className="bi bi-trash"></i>  
                </div>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}
