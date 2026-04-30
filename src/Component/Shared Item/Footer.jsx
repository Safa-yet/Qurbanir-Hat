import Image from "next/image";
import logoImg from "../../image/logo.png";
import Link from "next/link";
import { Button, InputGroup, Label, Separator, TextField } from "@heroui/react";
import { FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-green-950 bg-blend-overlay text-white py-14">
      <div className="container mx-auto grid md:grid-cols-3 lg:gap-20 gap-8">
        <div>
          <div className="w-40 mb-5">
            <Image
              src={logoImg}
              alt="logo"
              sizes="lg"
              width={300}
              height={100}
            ></Image>
          </div>
          <p className="text-sm text-gray-400 leading-6 text-justify ">
            We are a trusted online platform where you can easily find your preferred Qurbani animal. Our goal is to provide a safe and simple service.
          </p>
        </div>
        <div>
          <h1 className="mb-5 text-lg">Links</h1>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/animal">All Animal</Link>
            <Link href="/contact">Dashboard</Link>
            <Link href="/contact">Profile</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </div>
        <div>
          <h1 className="mb-5 text-lg">Contact</h1>
          <TextField className="w-full max-w-[280px] mb-5" name="email">
            <Label className="text-white">Email address</Label>
            <InputGroup>
              <InputGroup.Prefix>
                <FaEnvelope />
              </InputGroup.Prefix>
              <InputGroup.Input
                className="w-full max-w-[280px]"
                placeholder="name@email.com"
              />
            </InputGroup>
          </TextField>
          <div className="space-x-2">
            <Button isIconOnly variant="secondary">
              <FaFacebook />
            </Button>
            <Button isIconOnly variant="secondary">
              <FaYoutube />{" "}
            </Button>
          <Button isIconOnly variant="secondary">
            <FaInstagram />{" "}
          </Button>
          </div>
        </div>
      </div>
 <Separator className="my-8 opacity-10 container mx-auto" />
      <p className="mx-auto text-gray-500 text-center text-sm">© 2026 Qurbanirhat. All Rights Reserved. Developed with care for our customers.</p>
    </div>
  );
};

export default Footer;
