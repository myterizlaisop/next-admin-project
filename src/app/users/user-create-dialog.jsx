import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const UserCreateDialog = ({ open, onClose, onCreate }) => {

  const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
      const [email, setemail] = useState("");
        const [imageUrl, setimageUrl] = useState("");


  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create user</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Овог</Label>
            <Input
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Нэр</Label>
            <Input
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">И-Мэйл</Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">имэйж</Label>
            <Input
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setimageUrl(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => onClose(false)}
            variant="outline"
            type="button"
          >
            Cancel
          </Button>
          <Button type="submit" onClick={()=> 
            onCreate({
              firstname,
              lastname,
              email,
              imageUrl,
            })
          }>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
