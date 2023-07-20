import React, {useEffect} from "react";
import {Container, Divider, Heading} from "@chakra-ui/react";

function Background() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            // 👇️ redirects to an external URL
            window.location.replace('https://drive.google.com/drive/u/2/folders/1xyEBATn0UhhJfXm4DTY4c5K_EwXRBBrn');
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Container>
            <Heading as="h2" variant="page-title">
                Will redirect in 3 seconds...
            </Heading>
            <Divider my={6} />
        </Container>
    );
}

const lectureOutline = () => {
  return (
      <><Background/></>
  )
}

export default lectureOutline