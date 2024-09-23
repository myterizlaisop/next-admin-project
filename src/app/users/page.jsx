"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/components/typography/h3";
import { UsersTable } from "./table";
import { UserCreateDialog } from "./user-create-dialog";
import { useEffect, useState } from "react";
import { Edit } from "lucide-react";

const Users = () => {
  const [data, setData] = useState([]);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleonDelete = (id) => {
if(confirm("ustgalashu")){
      fetch("api/users/" + id, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then(()=> {
      setData([...data].filter((item)=>item.id !== id));
    })
}
  };
  const handleonCreate = (values) => {
    fetch("api/users", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((newData) => {
  setData([...data, newData.data]);
  setCreateModalOpen(false)
      });
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <TypographyH3>Хэрэглэгчид</TypographyH3>
            <Button variant="outline" onClick={() => setCreateModalOpen(true)}>
              Шинээр нэмэх
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <UsersTable onDelete={handleonDelete} data={data} limit={limit} />
        </CardContent>
        {limit <= data.length && (
          <div className="flex justify-center p-8">
            <Button variant="outline" onClick={() => setLimit(limit + 10)}>
              Load more...
            </Button>
          </div>
        )}
      </Card>

      <UserCreateDialog
        onCreate={handleonCreate}
        open={createModalOpen}
        onClose={setCreateModalOpen}
      />
    </div>
  );
};

export default Users;
