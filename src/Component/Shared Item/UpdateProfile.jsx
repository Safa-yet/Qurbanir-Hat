// "use client"
import { authClient } from "@/lib/auth-client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

const UpdateProfile = () => {

    const updateProfile = async(e)=>{
  e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log(userData);
    
await authClient.updateUser({
    image: userData.image,
    name: userData.name,
})
    
    }
    return (
       <Modal>
      <Button variant="primary" className='w-full my-4 rounded-lg bg-amber-500' size="xl">Update Your Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4" onSubmit={updateProfile}>
                  <TextField className="w-full" name="name" type="text" isRequired>
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type='url' isRequired>
                    <Label>Profile Image</Label>
                    <Input placeholder="Enter your Profile URL" />
                  </TextField>
              <Button type='submit'slot='close'>Update</Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default UpdateProfile;