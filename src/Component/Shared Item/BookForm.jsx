"use client"
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { BiEnvelope } from 'react-icons/bi';
import { toast } from "react-toastify";
const BookForm = () => {
      const clickBook = ()=>{
toast.success(" ✔ Booking submitted successfully!")
  }
    return (
          <Modal>
              <Button className='bg-green-600 rounded-lg' >Book Now</Button>
              <Modal.Backdrop>
                <Modal.Container placement="auto">
                  <Modal.Dialog className="sm:max-w-md">
                    <Modal.CloseTrigger />
                    <Modal.Header>
                      <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                        <BiEnvelope className="size-5" />
                      </Modal.Icon>
                      <Modal.Heading>Book Your Animal</Modal.Heading>
                      <p className="mt-1.5 text-sm leading-5 text-muted">
                        Fill out the form below to book your selected animal. 
        Please provide accurate information so we can contact you and confirm your booking.
                      </p>
                    </Modal.Header>
                    <Modal.Body className="p-6">
                      <Surface variant="default">
                        <form className="flex flex-col gap-4" onSubmit={clickBook}>
                          <TextField className="w-full" name="name" type="text" isRequired>
                            <Label>Name</Label>
                            <Input placeholder="Enter your name" />
                          </TextField>
                          <TextField className="w-full" name="email" type="email" isRequired>
                            <Label>Email</Label>
                            <Input placeholder="Enter your email" />
                          </TextField>
                          <TextField className="w-full" name="phone" type="tel">
                            <Label>Phone</Label>
                            <Input placeholder="Enter your phone number" />
                          </TextField>
                          <TextField className="w-full" name="company">
                            <Label>Delivery Address</Label>
                            <Input placeholder="Enter your company name" />
                          </TextField>
                          <TextField className="w-full" name="message">
                            <Label>Message <span className='text-sm text-gray-500'>(optional)</span></Label>
                            <Input placeholder="Enter your message" />
                          </TextField>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit">Confirm Booking Request</Button>
                    </Modal.Footer>
                        </form>
                      </Surface>
                    </Modal.Body>
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>
    );
};

export default BookForm;