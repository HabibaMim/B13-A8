"use client";

import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";
import { FaUserCog } from "react-icons/fa";

export function UpdateUserModal() {

const onSubmit = async(e) => {
    
    e.preventDefault();

   
    const name= e.target.name.value;
    const image= e.target.image.value;



    await authClient.updateUser({
        
        name,
        image
    })};

  return (
    <Modal>
      <Button className="btn bg-pink-600 text-white"><BiEdit/>Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaUserCog className="size-5 text-pink-700" />
              </Modal.Icon>
              <Modal.Heading className="text-pink-700">Update Your Profile</Modal.Heading>
             
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url" variant="secondary">
                    <Label>Photo URL</Label>
                    <Input placeholder="https://example.com/photo.jpg" />
                  </TextField>
              
<Modal.Footer>
              <Button className="text-pink-600" slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" className="bg-pink-600" slot="close">Update Information</Button>
            </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}