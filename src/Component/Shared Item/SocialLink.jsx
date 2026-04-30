import { Button } from '@heroui/react';
import { FaApple, FaGithub } from 'react-icons/fa';
import { createAuthClient } from "better-auth/client";
import { FcGoogle } from 'react-icons/fc';

const authClient = createAuthClient();
const SocialLink = () => {
    
    const signIn = async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
    };
    return (
        <div className="flex gap-3 items-center justify-center mt-5">
                    <Button isIconOnly variant="tertiary" onClick={signIn}>
                      <FcGoogle />
                    </Button>
                    <Button isIconOnly variant="secondary">
                      <FaApple />
                    </Button>
                    <Button isIconOnly variant="danger">
                      <FaGithub></FaGithub>
                    </Button>
                  </div>
    );
};

export default SocialLink;