export const FormTask = ({
  onChange,
  handleSubmit,
  fields,
  create = false,
  people = [],
}) => {
  const { title, description } = fields;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title*</label>
        <input type="text" name="title" value={title} onChange={onChange} />
      </div>
      <div>
        <label>Description*</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={onChange}
        />
      </div>
      {create && (
        <div>
          <label>Task for*</label>
          <select name="personId" onChange={onChange}>
            <option disabled selected>
              select One person
            </option>
            {people.map(({ id, fullName }) => (
              <option key={id} value={id}>
                {fullName}
              </option>
            ))}
          </select>
        </div>
      )}
    </form>
  );
};
