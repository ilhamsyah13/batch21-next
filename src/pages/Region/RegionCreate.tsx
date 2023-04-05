import React, { useState } from "react";
import Region from "../../api/Region";

export default function RegionCreate(props: any) {
  const [value, setValue] = useState<any>({
    name: undefined,
  });
  const handleChange = (name: any) => (event: any) => {
    setValue({ ...value, [name]: event.target.value });
  };
  const onSubmit = async () => {
    const payload = {
      name: value.name,
    };
    await Region.create(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfull Insert");
    });
  };
  return (
    <div>
      <h2>Add Region</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Region Name:</label>
          <input
            type="text"
            placeholder="region name"
            onChange={handleChange("name")}
          />
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
