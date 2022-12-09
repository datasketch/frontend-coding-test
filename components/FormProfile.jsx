export const FormProfile = ({ onChange, handleSubmit, fields }) => {
  const {
    fullName,
    occupation,
    email,
    phone,
    city,
    picture,
    age,
    gender,
    description,
  } = fields;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full name*</label>
        <input
          type="text"
          value={fullName}
          name="fullName"
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>Occupation*</label>
        <input
          type="text"
          value={occupation}
          name="occupation"
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>Email*</label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>Phone*</label>
        <input
          type="text"
          value={phone}
          name="phone"
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>City*</label>
        <input
          type="text"
          value={city}
          name="city"
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>Url image*</label>
        <input
          type="text"
          value={picture}
          name="picture"
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>Age*</label>
        <input
          type="text"
          value={age}
          name="age"
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>Gender*</label>
        <input
          type="text"
          value={gender}
          name="gender"
          onChange={onChange}
          required
        />
      </div>

      <div className="textarea">
        <label>Description*</label>
        <textarea
          value={description}
          name="description"
          onChange={onChange}
          required
        />
      </div>
    </form>
  );
};
