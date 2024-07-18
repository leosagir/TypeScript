import React, { useState } from 'react';

const FormGender: React.FC = () => {
  const [name, setName] = useState('');
  const [genderData, setGenderData] = useState<any>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.genderize.io/?name=${name}`);
      const data = await response.json();
      setGenderData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Enter Name:</label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {genderData && (
        <div>
          <h2>Gender Information for "{name}":</h2>
          <p>Gender: {genderData.gender}</p>
          <p>Probability: {genderData.probability}</p>
          <p>Count: {genderData.count}</p>
        </div>
      )}
    </div>
  );
};

export default FormGender;
