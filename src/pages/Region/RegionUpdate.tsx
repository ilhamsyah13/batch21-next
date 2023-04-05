import React, { useEffect, useState } from "react";
import Region from "../../api/Region";

export default function RegionUpdate(props: any) {
  const [region, setRegion] = useState<any>({});
  const [value, setValue] = useState<any>({
    id: undefined,
    name: undefined,
  });
  useEffect(() => {
    Region.findData(props.id).then((data) => {
      setRegion(data);
    });
  }, [props.id]);

  const handleChange = (name: any) => (event: any) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const onEdit = async () => {
    const payload = {
      id: props.id,
      name: value.name,
    };
    await Region.update(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfull Insert");
    });
  };
  return (
    <div>
      <h2>Edit Region</h2>
      <form onSubmit={onEdit}>
        <label>Region Id :</label>
        <input type="text" defaultValue={region.regionId} disabled />
        <label>Region Name :</label>
        <input
          type="text"
          placeholder="region name"
          onChange={handleChange("name")}
          defaultValue={region.regionName}
        />
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
