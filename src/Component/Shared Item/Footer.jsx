import Image from "next/image";
import logoImg from "../../image/logo.png";
import Link from "next/link";
import { Button, InputGroup, Label, TextField } from "@heroui/react";
import { FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-green-950 bg-blend-overlay text-white py-10">
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
            আমরা একটি বিশ্বস্ত অনলাইন প্ল্যাটফর্ম যেখানে আপনি সহজেই আপনার
            পছন্দের কোরবানির পশু খুঁজে পেতে পারেন। আমাদের লক্ষ্য হলো নিরাপদ ও
            সহজ সেবা প্রদান করা।
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
      <hr  className="opacity-60 md:col-span-3 my-8"/>
      </div>
      <p className="mx-auto text-gray-500 text-center text-sm">© 2026 Qurbanirhat. All Rights Reserved. Developed with care for our customers.</p>
    </div>
  );
};

export default Footer;
